import fs from "node:fs";
import path from "node:path";
export const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
export const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const titleCase = (s) => String(s).replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
export const writeIfMissing = (file, content, force = false) => {
  if (fs.existsSync(file) && !force) { console.error(`✖ ${path.relative(ROOT, file)} already exists (use --force to overwrite)`); process.exit(1); }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
  console.log(`✔ created ${path.relative(ROOT, file)}`);
};
export const args = () => {
  const a = process.argv.slice(2); const flags = {}; const pos = [];
  a.forEach((x) => { if (x.startsWith("--")) { const [k, v] = x.slice(2).split("="); flags[k] = v ?? true; } else pos.push(x); });
  return { pos, flags };
};
