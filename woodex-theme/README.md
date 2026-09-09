# Woodex Theme v2 — section-based interior design website

A complete, production-ready static website theme for interior design studios.
Every page is an ordered list of reusable **sections**, driven by plain **content files**
(JSON + Markdown), built by **Eleventy** into plain HTML and deployed to **Hostinger** by
**GitHub Actions**. Designed to be managed by humans *and* AI coding agents
(Claude Code, Codex, Cursor) — see `AGENTS.md`.

```
┌──────────────┐    npm run build    ┌──────────┐   GitHub Actions (FTP)   ┌───────────┐
│  content/    │ ──────────────────▶ │  dist/   │ ───────────────────────▶ │ Hostinger │
│  site.json   │   theme/sections    │  *.html  │                          │ public_html│
│  pages/*.json│   theme/assets      │  assets/ │                          └───────────┘
│  *.md        │                     └──────────┘
└──────────────┘
```

## Quick start

```bash
cd woodex-theme
npm install
npm run dev          # http://localhost:8080 — live reload on every content/theme change
npm run build        # → dist/
npm run check        # validate links, images, icons, sections, JSON, HTML
```

## What's included

| Area | Details |
|---|---|
| **Pages** | Home (3 swappable presets), About, Services, Portfolio, Blog, Contact, Privacy, Terms, 404 |
| **Detail pages** | 6 services, 6 projects (case studies with gallery + next project), 6 journal posts, 3 team members — all from Markdown |
| **Section library** | 33 sections: 4 heroes, logos, stats, testimonials, awards, intro split, feature rows, values, process, big statement, marquee, image strip, video showcase, pinned overview, services (cards/list), portfolio grid + filters, case study, blog grid, team, gallery + lightbox, pricing, FAQ, CTA, newsletter, contact form, map, rich text, custom HTML, spacer |
| **Global chrome** | Header (standard/centered, sticky, transparent-over-hero, announcement bar), mega menu with promo card, mobile menu, footer (columns) with newsletter — all from `site.json` |
| **Design system** | Nohemi/Inter type scale, navy/beige/ghost palette, radii, shadows, motion (reveal, word-split, curtain intro, marquees, parallax, sticky stacks) — brand colours/fonts overridable from `site.json` |
| **SEO** | Titles/descriptions per page, Open Graph, canonical, JSON-LD LocalBusiness, sitemap.xml, robots.txt, 404 |
| **Forms** | Validated contact + newsletter forms with pluggable provider: demo, Web3Forms, Formspree, PHP mailer (included), custom endpoint; honeypot spam guard |
| **Accessibility** | Skip link, focus states, ARIA on menus/accordions/lightbox, reduced-motion support, alt-text checks |
| **Tooling** | `new:page`, `new:section`, `new:project/post/service`, `import:preset`, `list:sections`, `check`, `smoke`; JSON schemas for editor autocomplete; VS Code settings |
| **Deploy** | `deploy/github-workflows/deploy.yml` (build → check → FTP to Hostinger) and `check.yml` for PRs — copy to `.github/workflows/` once (`deploy/README.md`) |

## Documentation

- `AGENTS.md` — rules + recipes for AI agents and developers (start here)
- `docs/THEME-GUIDE.md` — architecture, customising header/footer/hero, design tokens, adding sections
- `docs/SECTIONS.md` — reference for all 33 sections with JSON examples
- `docs/CONTENT.md` — editing pages, services, projects, posts, team, media
- `docs/DEPLOY.md` — GitHub → Hostinger setup, forms, domains, troubleshooting

## Swap the home page design

```bash
npm run import:preset home-2   # full-screen image hero + featured projects
npm run import:preset home-3   # minimal editorial split hero
npm run import:preset home-1   # restore the video-slider original
```

Each preset is just a `sections[]` list in `content/presets/` — edit or create your own.

## Licence notes

Photography in `content/media/` is AI-generated placeholder imagery — replace with your own.
Background videos are hot-linked from Pexels (free licence). The Nohemi heading font falls back to
a hosted copy; for production either purchase/self-host Nohemi in `theme/assets/fonts/` or switch
`theme.fonts.heading` in `site.json` to an open font (e.g. "Manrope", added to `googleFonts`).
