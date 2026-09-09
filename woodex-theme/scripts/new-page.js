#!/usr/bin/env node
/** npm run new:page <slug> [--title="Page title"] [--preset=landing] [--nav=slug]
 *  Creates content/pages/<slug>.json from a preset (default: "basic"). */
import fs from "node:fs"; import path from "node:path";
import { ROOT, slugify, titleCase, writeIfMissing, args } from "./_util.js";
const { pos, flags } = args();
if (!pos[0]) { console.log("Usage: npm run new:page <slug> [--title=...] [--preset=basic|landing|home-2|home-3] [--force]"); process.exit(1); }
const slug = slugify(pos[0]); const title = flags.title || titleCase(slug);
const presetName = flags.preset || "basic";
const presetFile = path.join(ROOT, "content/presets", `${presetName}.json`);
if (!fs.existsSync(presetFile)) { console.error(`✖ preset "${presetName}" not found in content/presets/`); process.exit(1); }
const preset = JSON.parse(fs.readFileSync(presetFile, "utf8"));
const page = { $schema: "../../docs/schemas/page.schema.json", layout: "page.njk", permalink: `/${slug}/`, nav: flags.nav || slug, headerStyle: preset.headerStyle || "light", title, seo: { description: preset.seo?.description || "" }, sections: preset.sections };
// personalise hero title if present
const hero = page.sections.find((s) => s.type.startsWith("hero") || s.type === "page-hero");
if (hero && !flags.keepTitle) hero.data.title = title;
writeIfMissing(path.join(ROOT, "content/pages", `${slug}.json`), JSON.stringify(page, null, 2) + "\n", !!flags.force);
console.log(`→ Open content/pages/${slug}.json, edit sections, then add a menu link in content/site.json (header.menu).`);
