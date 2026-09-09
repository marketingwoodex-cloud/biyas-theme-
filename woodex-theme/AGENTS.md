# AGENTS.md — rules for AI coding agents working on this theme

This file is read by Codex, Claude Code (via CLAUDE.md), Cursor (via .cursor/rules) and
humans. Follow it exactly; it encodes how the theme is meant to be changed.

## What this project is

A section-based static website theme for an interior design studio.
Eleventy (v3) + Nunjucks templates → plain HTML in `dist/`, deployed to Hostinger by GitHub Actions.
No frontend framework, no database, no runtime dependencies.

```
content/            ← ALL editable content (JSON + Markdown). Change content here, never in dist/.
  site.json           brand, colours, fonts, header + mega menu, footer, SEO, forms, contact
  pages/*.json        one file per page = ordered list of sections
  services|projects|posts|team/*.md   collection entries (front matter + Markdown body)
  presets/*.json      importable page templates (home-1/2/3, landing, basic) + _sections.json demo data
  media/              images (referenced by filename only, e.g. "hero-1.jpg")
theme/              ← HOW content is rendered
  layouts/            base.njk (html shell) · page.njk (section list) · service/project/post.njk (detail pages)
  partials/           head, header (nav + mega menu + mobile), footer, icons (SVG sprite), macros, section renderer
  sections/*.njk      THE SECTION LIBRARY — one file per section type (33). Filename = "type" used in pages
  assets/css/theme.css  tokens → base → utilities → header/footer → motion → sections → detail layouts → responsive
  assets/js/app.js    attribute-driven behaviour (data-reveal, data-marquee-y, data-filter, data-form, …)
  data/               Eleventy global data (site.js loads content/site.json)
scripts/            ← scaffolding + QA (see Commands)
docs/               ← THEME-GUIDE, SECTIONS (reference for every section's data), CONTENT, DEPLOY
```

## Commands (always run from `woodex-theme/`)

| Command | Purpose |
|---|---|
| `npm install` | once |
| `npm run dev` | dev server with live reload at http://localhost:8080 |
| `npm run build` | build to `dist/` |
| `npm run check` | validate links, assets, icons, sections, JSON, HTML balance — **must pass before finishing any task** |
| `npm run smoke` | run app.js against every page in a simulated DOM — catches JS errors |
| `npm run ci` | build + check + smoke (what GitHub Actions runs) |
| `npm run new:page <slug> [--preset=basic\|landing\|home-2] [--title="…"]` | scaffold a page |
| `npm run new:section <name>` | scaffold a section template + CSS block + docs stub |
| `npm run new:project\|new:post\|new:service -- "Title"` | scaffold a collection entry |
| `npm run import:preset <preset> [--into=<page>] [--append]` | replace/append a page's sections with a preset (backs up first) |
| `npm run import:preset --section=<type> --into=<page>` | append one section with demo data |
| `npm run list:sections` | print every section type with its documented data shape |

## Rules

1. **Content vs. theme.** Copy, images, links, ordering, on/off → `content/`. Markup, styling, behaviour → `theme/`. Never mix.
2. **Never edit `dist/`.** It is generated and git-ignored.
3. **Pages are section lists.** To change a page, edit its `content/pages/<name>.json`:
   - reorder by moving objects in `sections[]`
   - disable with `"enabled": false` (don't delete unless asked)
   - each section supports wrapper keys `id`, `theme` (`light|gray|beige|dark`), `spacing` (`default|tight|none|top|bottom`), `class`
   - section-specific fields live under `data` — see `docs/SECTIONS.md` or the doc comment at the top of `theme/sections/<type>.njk`
4. **Adding a section type:** `npm run new:section <name>`, then edit the `.njk`, its CSS block (keep the `/* name */` banner), and its entry in `docs/SECTIONS.md` + `content/presets/_sections.json`. Every section MUST:
   - start with a `{# SECTION: name — description / data: {...} #}` doc comment
   - use `ui.wrapperClass(section)` (or the explicit `rt-section rt-theme-* rt-space-*` classes) and `id="{{ _id }}"`
   - use `ui.sectionHead(s, align, isDark)` for eyebrow/title/text where applicable
   - pass images through the `media` filter (`{{ src | media }}`) so bare filenames resolve to `/media/`
   - use existing motion hooks (`data-reveal`, `data-split`, `data-card-reveal`, `data-line`) rather than new JS
   - be responsive at 1279 / 991 / 767 breakpoints
5. **Global chrome** (logo, menu, mega menu, CTA, footer columns, socials, contact details, colours, fonts) is configured in `content/site.json` — do not hard-code these anywhere in templates.
6. **Design language.** Keep the existing tokens (`--c-navy`, `--c-light-beige`, `--radius-large`, type scale). Headings use `--font-heading`, body `--font-body`. Buttons: `ui.button({label,url,style})` with styles `solid | outline | text | white`. Don't introduce new colour hexes; add a token if truly needed.
7. **JavaScript** is attribute-driven and lives only in `theme/assets/js/app.js`. Add a new module function + call it in `boot()`; guard with `if (!els.length) return;`. No inline scripts in sections (except JSON-LD).
8. **Accessibility:** every `<img>` has `alt`; interactive elements are `<a>`/`<button>` with labels; keep the skip link, focus styles and `aria-expanded` patterns.
9. **Forms** post via the provider in `site.json → forms` (`demo | web3forms | formspree | php | custom`). Keep the honeypot `_honey` field.
10. **Before finishing any task:** `npm run build && npm run check` (and `npm run smoke` if JS changed). Fix everything it reports.
11. **Commits:** small, descriptive, one concern each. Don't commit `dist/` or `node_modules/`.

## Common tasks — exact recipes

- **Change site name / email / phone / address:** `content/site.json` → `brand`, `contact`.
- **Change colours or fonts:** `content/site.json` → `theme.colors`, `theme.fonts` (Google Fonts string). For self-hosted heading font, add woff2 files to `theme/assets/fonts/` and adjust `@font-face` at the top of `theme.css`.
- **Add a menu item / mega-menu child:** `content/site.json` → `header.menu[]` (`children[]` makes a dropdown; `"mega": true` + `promo` makes the wide panel).
- **Swap the home page design:** `npm run import:preset home-2` (or `home-3`, or `home-1` to restore). Then tweak `content/pages/home.json`.
- **New service:** `npm run new:service -- "Name"` → edit the `.md` → add a `children[]` entry under Services in `site.json`.
- **New project / blog post:** `npm run new:project -- "Title"` / `npm run new:post -- "Title"` → fill front matter + body. Listing pages, filters, related items and sitemap update automatically.
- **Replace images:** drop files into `content/media/` and reference by filename. Hero 16:9 (≥1920px), portfolio/team 4:5 (≥1200px), blog 4:3.
- **Go live with forms:** set `forms.provider` to `web3forms` + `accessKey`, or `php` (uses `/mail.php`, edit `$to` in `theme/assets/root/mail.php`).
- **Deploy:** push to `main`. GitHub Actions builds, checks and FTPs `dist/` to Hostinger (`docs/DEPLOY.md`).
