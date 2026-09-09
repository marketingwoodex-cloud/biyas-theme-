# Woodex Interior — Master Plan

**Status:** Phase 1 delivered (this branch). Phases 2–4 scoped below.
**Decisions locked (with the client, Sept 2026):** Eleventy + Nunjucks · GitHub Actions → Hostinger FTP ·
content edited as files by the owner + AI agents (no admin panel yet) · full detail pages for
services / projects / posts.

## 1. Goal

One master theme for interior-design websites that is:

* **Section-based** — every page is an ordered list of reusable sections; new pages take minutes.
* **Content-driven** — brand, menus, copy, images and ordering live in `content/` (JSON + Markdown),
  never in markup. Rebrand for a new client = edit `site.json` + swap media.
* **Agent-manageable** — Claude Code, Codex, Cursor and VS Code get identical rules (`AGENTS.md`,
  `CLAUDE.md`, `.cursor/rules`), scaffold commands and a validator that must pass.
* **Portable** — plain HTML output today; the same section/content model maps 1:1 onto WordPress
  (Timber/Twig ≈ Nunjucks) or a headless CMS if that decision is made later. Nothing is converted now.
* **Deployable** — `git push` → build → checks → Hostinger, in under a minute.

## 2. Architecture (delivered)

```
biyas-theme-/
├─ woodex-theme/                ← THE THEME (v2)
│  ├─ content/                  site.json · pages/*.json · services|projects|posts|team/*.md · presets/ · media/
│  ├─ theme/                    layouts · partials (header/mega menu/footer/icons/macros) · sections (33) · assets (css/js/fonts/root)
│  ├─ scripts/                  new-page · new-section · new-entry · import-preset · list-sections · check · smoke
│  ├─ docs/                     THEME-GUIDE · SECTIONS · CONTENT · DEPLOY · schemas/
│  ├─ AGENTS.md · CLAUDE.md · .cursor/rules · .vscode/
│  └─ eleventy.config.js · package.json
├─ woodex-interior/             ← v1 static reference (6 hand-built pages); kept until v2 is signed off, then delete
├─ woodex-theme/deploy/         github-workflows/deploy.yml + check.yml → copy to .github/workflows/ once (GitHub blocks bots from doing it)
└─ MASTER-PLAN.md               this file
```

**Frontend:** Eleventy 3 (static generator) + Nunjucks; one CSS file (tokens → components → sections),
one attribute-driven JS file. No framework, no runtime dependencies.
**Backend:** none required. Forms via pluggable provider (Web3Forms / Formspree / included PHP mailer /
custom). Optional later: Decap CMS admin (Git-based, still static).
**Hosting:** Hostinger shared hosting, `public_html`, `.htaccess` for HTTPS/404/caching.

## 3. Section library (33)

| Group | Sections |
|---|---|
| Heroes | `hero-slider` (video/3-slide + curtain intro) · `hero-image` (full/large/medium, stats) · `hero-split` (editorial) · `page-hero` (inner pages, breadcrumbs) |
| Trust | `logos` (marquee) · `stats` (counters) · `testimonials` · `awards` |
| Story | `intro-split` · `feature-rows` · `values` · `process` · `big-statement` (masked video) · `marquee` · `image-strip` (parallax) · `video` (showcase) · `overview` (pinned image swap) · `rich-text` |
| Collections (auto) | `services-cards` (sticky stack/grid) · `services-list` · `portfolio-grid` (filters) · `case-study` · `blog-grid` (filters, featured) · `team` · `gallery` (lightbox) |
| Conversion | `pricing` · `faq` · `cta` · `newsletter` · `contact-form` · `map` |
| Utility | `custom-html` · `spacer` |

Global: header (standard/centered, sticky, transparent-over-hero, announcement bar, mega menu with
promo card, mobile menu with accordions), footer (columns + newsletter + big word), 404, sitemap, robots.

## 4. Page presets (import system)

`npm run import:preset <name> [--into=<page>]`

* `home-1` — video slider hero, brands, masked-video statement, sticky service cards, pinned overview, projects, showcase, testimonials, journal, CTA *(default)*
* `home-2` — full-screen image hero with stats, featured projects first, editorial intro, service grid, dark stats, testimonials, journal, CTA
* `home-3` — minimal editorial: split hero on light, marquee, services list, big statement, projects, image strip, FAQ, CTA
* `landing` — offer page: image hero, benefits, process, testimonials, pricing, FAQ, contact form
* `basic` — page hero + rich text + CTA
* `--section=<type>` — append any single section with demo data

## 5. Quality gates

* `npm run check` — JSON validity, known section types, every link/anchor/image/icon/asset resolves,
  unresolved template syntax, HTML tag balance, titles/descriptions/alt text. Fails CI on any problem.
* `npm run smoke` — executes `app.js` against every built page in a simulated DOM (nav, mobile menu,
  dropdowns, filters, forms, gallery, slider) and fails on runtime errors.
* Both run in GitHub Actions before any upload.

## 6. Phases

| Phase | Scope | Status |
|---|---|---|
| **1. Foundation** | Eleventy scaffold; tokens + brand overrides; `site.json`-driven header/mega menu/footer; 33-section library; 9 pages + 21 detail pages from content; 3 home presets + landing/basic; scaffold + import scripts; check/smoke validators; docs + agent rules; deploy workflows | ✅ delivered |
| **2. Content & media polish** | Replace placeholder photography; licence/self-host heading font (or switch to open font); responsive images (`@11ty/eleventy-img`, WebP/AVIF, `srcset`) via the single `ui.image` macro; real logos in `logos`; copy review; OG image per page; Lighthouse ≥ 95 pass | ⏳ next |
| **3. Go-live** | Add Hostinger FTP secrets; first `workflow_dispatch` deploy; domain + SSL; choose form provider; Google Search Console (sitemap); analytics snippet via `headExtra` if wanted; staging subdomain | ⏳ |
| **4. Optional extensions** | Decap CMS admin at `/admin` for non-technical editors; multilingual (Urdu) via Eleventy i18n; project pagination; search (Pagefind); WordPress/headless migration guide if that decision is taken | ◻ on request |

## 7. Working agreement for agents & developers

1. Read `woodex-theme/AGENTS.md` first.
2. Content changes → `content/`. Theme changes → `theme/`. Never touch `dist/`.
3. Use the scaffold commands instead of copying files by hand.
4. Finish every task with `npm run build && npm run check` (+ `npm run smoke` for JS). Green or not done.
5. Small commits on feature branches; PRs run the *Check* workflow; merging to `main` deploys.

## 8. Rebranding checklist (new client from this master)

1. `content/site.json` — brand, colours, fonts, contact, socials, menu, footer, SEO, forms.
2. Replace `content/media/*` with the client's imagery (same ratios).
3. Rewrite `content/pages/*.json` copy, or import a different home preset.
4. Replace services / projects / posts / team Markdown.
5. `npm run ci` → push → deploy.
