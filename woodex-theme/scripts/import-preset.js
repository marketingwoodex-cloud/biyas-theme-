#!/usr/bin/env node
/** npm run import:preset <preset> [--into=home] [--append] [--section=<type>]
 *  Replace a page's sections with a preset (default target: the page with the same name),
 *  or append a single section from the library with sensible demo data. */
import fs from "node:fs"; import path from "node:path";
import { ROOT, args } from "./_util.js";
const { pos, flags } = args();
const presetsDir = path.join(ROOT, "content/presets"); const pagesDir = path.join(ROOT, "content/pages");
const list = () => { console.log("Available presets:"); fs.readdirSync(presetsDir).filter((f) => f.endsWith(".json") && !f.startsWith("_")).forEach((f) => { const p = JSON.parse(fs.readFileSync(path.join(presetsDir, f), "utf8")); console.log(`  ${f.replace(".json", "").padEnd(14)} ${p.description || ""}`); }); };
if (!pos[0] && !flags.section) { list(); console.log("\nUsage: npm run import:preset <preset> [--into=<page>] [--append]\n       npm run import:preset --section=<type> --into=<page>"); process.exit(0); }
const target = flags.into || (pos[0] || "").replace(/-\d+$/, "");
const pageFile = path.join(pagesDir, `${target}.json`);
if (!fs.existsSync(pageFile)) { console.error(`✖ page "${target}" not found (content/pages/${target}.json). Use --into=<page>`); process.exit(1); }
const page = JSON.parse(fs.readFileSync(pageFile, "utf8"));
// backup
const bak = path.join(pagesDir, `_${target}.backup.json`); fs.writeFileSync(bak, JSON.stringify(page, null, 2));
if (flags.section) {
  const type = flags.section; const demo = path.join(ROOT, "content/presets/_sections.json");
  const lib = fs.existsSync(demo) ? JSON.parse(fs.readFileSync(demo, "utf8")) : {};
  if (!fs.existsSync(path.join(ROOT, "theme/sections", `${type}.njk`))) { console.error(`✖ unknown section type "${type}"`); process.exit(1); }
  page.sections.push(lib[type] || { type, data: {} });
  console.log(`✔ appended section "${type}" to ${target}`);
} else {
  const presetFile = path.join(presetsDir, `${pos[0]}.json`);
  if (!fs.existsSync(presetFile)) { console.error(`✖ preset "${pos[0]}" not found`); list(); process.exit(1); }
  const preset = JSON.parse(fs.readFileSync(presetFile, "utf8"));
  if (flags.append) page.sections.push(...preset.sections); else { page.sections = preset.sections; if (preset.headerStyle) page.headerStyle = preset.headerStyle; }
  console.log(`✔ ${flags.append ? "appended" : "replaced"} sections of "${target}" with preset "${pos[0]}" (${preset.sections.length} sections)`);
}
fs.writeFileSync(pageFile, JSON.stringify(page, null, 2) + "\n");
console.log(`  backup saved to content/pages/_${target}.backup.json (delete when happy)`);
