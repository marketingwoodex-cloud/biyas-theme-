#!/usr/bin/env node
/** npm run new:section <name> — scaffolds theme/sections/<name>.njk + docs stub + CSS block. */
import fs from "node:fs"; import path from "node:path";
import { ROOT, slugify, titleCase, writeIfMissing, args } from "./_util.js";
const { pos, flags } = args();
if (!pos[0]) { console.log("Usage: npm run new:section <name>"); process.exit(1); }
const name = slugify(pos[0]);
const njk = `{#
  SECTION: ${name} — ${flags.desc || "describe what this section does"}
  data: { eyebrow, title, text, items:[{ title, text }] }
#}
{% import "partials/macros.njk" as ui %}
<section class="{{ ui.wrapperClass(section) }} rt-${name}" id="{{ _id }}">
  <div class="rt-container">
    {{ ui.sectionHead(s, s.align or "left", section.theme == "dark") }}
    <div class="rt-${name}-grid">
      {% for it in s.items %}
        <div class="rt-${name}-item" data-card-reveal style="--d:{{ loop.index0 * 0.08 }}s">
          <h4>{{ it.title }}</h4>
          <p>{{ it.text }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
`;
writeIfMissing(path.join(ROOT, "theme/sections", `${name}.njk`), njk, !!flags.force);
const css = `\n/* ${name} */\n.rt-${name}-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }\n.rt-${name}-item { padding: 2rem; border-radius: var(--radius-large); background: var(--c-ghost); }\n@media (max-width: 767px) { .rt-${name}-grid { grid-template-columns: 1fr; } }\n`;
fs.appendFileSync(path.join(ROOT, "theme/assets/css/theme.css"), css);
console.log(`✔ appended CSS block to theme/assets/css/theme.css`);
const docs = path.join(ROOT, "docs/SECTIONS.md");
if (fs.existsSync(docs)) fs.appendFileSync(docs, `\n### \`${name}\`\n${flags.desc || "Describe the section."}\n\n\`\`\`json\n{ "type": "${name}", "data": { "eyebrow": "", "title": "${titleCase(name)}", "items": [{ "title": "", "text": "" }] } }\n\`\`\`\n`);
console.log(`→ Use it: { "type": "${name}", "data": { ... } } in any page's sections[]`);
