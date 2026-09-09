#!/usr/bin/env node
/**
 * npm run check — validates the built site in dist/:
 *   • every internal link / image / icon reference resolves
 *   • no unknown section types rendered
 *   • no unresolved template syntax
 *   • balanced HTML tags (basic)
 *   • content JSON validity + required fields
 * Exit code 1 on any failure (used by CI before deploy).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const DIST = path.join(ROOT, "dist");
const problems = [];
const warn = [];

/* ---------- 1. content files ---------- */
const site = JSON.parse(fs.readFileSync(path.join(ROOT, "content/site.json"), "utf8"));
const sectionDir = path.join(ROOT, "theme/sections");
const known = new Set(fs.readdirSync(sectionDir).filter((f) => f.endsWith(".njk")).map((f) => f.replace(".njk", "")));
const pagesDir = path.join(ROOT, "content/pages");
for (const f of fs.readdirSync(pagesDir).filter((f) => f.endsWith(".json"))) {
  let pg;
  try { pg = JSON.parse(fs.readFileSync(path.join(pagesDir, f), "utf8")); } catch (e) { problems.push(`${f}: invalid JSON — ${e.message}`); continue; }
  if (!pg.permalink) problems.push(`${f}: missing "permalink"`);
  if (!Array.isArray(pg.sections)) problems.push(`${f}: "sections" must be an array`);
  (pg.sections || []).forEach((s, i) => {
    if (!s.type) problems.push(`${f}: section #${i + 1} has no "type"`);
    else if (!known.has(s.type)) problems.push(`${f}: section #${i + 1} unknown type "${s.type}"`);
  });
}
for (const dir of ["services", "projects", "posts", "team"]) {
  for (const f of fs.readdirSync(path.join(ROOT, "content", dir)).filter((f) => f.endsWith(".md"))) {
    const src = fs.readFileSync(path.join(ROOT, "content", dir, f), "utf8");
    if (!/^---\r?\n(?:[\s\S]*?\n)?title:/.test(src)) problems.push(`content/${dir}/${f}: front matter missing "title"`);
    if (dir === "posts" && !/\ndate:/.test(src)) problems.push(`content/${dir}/${f}: post missing "date"`);
  }
}

/* ---------- 2. built html ---------- */
if (!fs.existsSync(DIST)) { console.error("dist/ not found — run `npm run build` first"); process.exit(1); }
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const htmlFiles = walk(DIST).filter((f) => f.endsWith(".html"));
const exists = (url) => {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean) return true;
  const p = path.join(DIST, clean);
  return fs.existsSync(p) || fs.existsSync(path.join(p, "index.html"));
};
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr", "path", "circle", "rect", "use"]);

for (const file of htmlFiles) {
  const rel = path.relative(DIST, file);
  const html = fs.readFileSync(file, "utf8");
  if (/\{\{|\{%/.test(html)) problems.push(`${rel}: unresolved template syntax`);
  if (html.includes("rt-section-unknown")) problems.push(`${rel}: renders an unknown section`);
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${rel}: empty <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) warn.push(`${rel}: empty meta description`);
  if (!/<h1[\s>]/.test(html)) warn.push(`${rel}: no <h1>`);

  // ids for anchors
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  // links
  for (const m of html.matchAll(/<a\s[^>]*href="([^"]*)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|javascript:)/.test(href)) continue;
    if (href === "#" || href === "") continue;
    if (href.startsWith("#")) { if (!ids.has(href.slice(1))) problems.push(`${rel}: anchor ${href} not found`); continue; }
    const [p, frag] = href.split("#");
    if (!exists(p)) { problems.push(`${rel}: broken link ${href}`); continue; }
    if (frag) {
      const target = fs.existsSync(path.join(DIST, p, "index.html")) ? path.join(DIST, p, "index.html") : path.join(DIST, p);
      if (fs.existsSync(target) && !new RegExp(`\\sid="${frag}"`).test(fs.readFileSync(target, "utf8"))) problems.push(`${rel}: link ${href} — anchor #${frag} missing on target`);
    }
  }
  // images, css, js, iframes, background images
  for (const m of html.matchAll(/(?:src|href)="(\/[^"]+\.(?:jpg|jpeg|png|webp|svg|css|js|mp4|woff2))"/g)) if (!exists(m[1])) problems.push(`${rel}: missing asset ${m[1]}`);
  for (const m of html.matchAll(/url\('(\/media\/[^']+)'\)/g)) if (!exists(m[1])) problems.push(`${rel}: missing background image ${m[1]}`);
  // icon refs
  const symbols = new Set([...html.matchAll(/<symbol id="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/<use href="#([^"]+)"/g)) if (!symbols.has(m[1])) problems.push(`${rel}: icon #${m[1]} not in sprite`);
  // images without alt
  for (const m of html.matchAll(/<img\s[^>]*>/g)) if (!/\salt=/.test(m[0])) warn.push(`${rel}: <img> without alt: ${m[0].slice(0, 60)}…`);
  // tag balance (rough)
  const stack = [];
  const tagRe = /<\/?([a-zA-Z][a-zA-Z0-9-]*)[^>]*?(\/?)>/g;
  let t; const body = html.replace(/<!--[\s\S]*?-->/g, "").replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
  while ((t = tagRe.exec(body))) {
    const [full, name, selfClose] = t; const tag = name.toLowerCase();
    if (full.startsWith("</")) { const open = stack.pop(); if (open !== tag) { problems.push(`${rel}: tag mismatch — expected </${open}> got </${tag}> near "${body.slice(Math.max(0, t.index - 60), t.index).replace(/\s+/g, " ")}"`); break; } }
    else if (!VOID.has(tag) && !selfClose && !full.endsWith("/>")) stack.push(tag);
  }
  if (stack.length && !problems.some((p) => p.startsWith(rel + ": tag mismatch"))) problems.push(`${rel}: unclosed tags ${stack.slice(-3).join(", ")}`);
}

/* ---------- 3. report ---------- */
console.log(`Checked ${htmlFiles.length} pages, ${known.size} section types, site: ${site.brand.name}`);
warn.slice(0, 15).forEach((w) => console.log("  ⚠ " + w));
if (warn.length > 15) console.log(`  … ${warn.length - 15} more warnings`);
if (problems.length) { console.log(`\n✖ ${problems.length} problem(s):`); problems.forEach((p) => console.log("  ✖ " + p)); process.exit(1); }
console.log("✔ No problems found.");
