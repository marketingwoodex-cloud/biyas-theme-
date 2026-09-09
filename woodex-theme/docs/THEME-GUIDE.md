# Theme guide

How the theme is put together and how to customise every part of it.

## 1. Mental model

```
site.json  ─┐
pages/*.json ├─▶  layouts/page.njk  ─▶  partials/section.njk  ─▶  sections/<type>.njk  ─▶  HTML
*.md ───────┘        (base.njk: head + header + footer)
```

* **A page** = front matter (permalink, nav key, header style, SEO) + `sections[]`.
* **A section** = one Nunjucks file that receives `s` (its `data`), `section` (wrapper options),
  `site` (global settings), `collections` (services/projects/posts/team) and `_id`.
* **Global chrome** (header, footer, icons, head tags) is rendered once in `layouts/base.njk`
  from `site.json`.

## 2. Customising the header

`content/site.json → header`

| Key | Effect |
|---|---|
| `variant` | `standard` (logo left, menu centre, CTA right) or `centered` |
| `sticky` | fixed header that hides on scroll-down, shows on scroll-up |
| `transparentOnHero` | when a page has `"headerStyle": "light"`, the nav starts transparent/white over the hero and turns solid after 40px |
| `announcement` | optional top bar with link |
| `menu[]` | items: `{ label, url, nav }`; add `children[]` for a dropdown; add `"mega": true` and `promo` for the wide mega menu with image card |
| `cta` | right-hand button |

Icons for dropdown children come from the SVG sprite (`theme/partials/icons.njk`):
`interior consult cube joinery lighting plan` plus generic `arrow chevron plus check quote pin mail phone clock`.

Logo: `brand.logo.type` = `text` (mark + wordmark, colour-aware) or `image` (`image` + optional `imageLight` for transparent headers).

## 3. Customising the footer

`content/site.json → footer`: `intro`, `columns[]` (title + links), `newsletter`, `bigText`
(oversized gradient word), `legal[]`, `copyright` (`{year}` token), `credit`.
Set `variant` to `minimal` to hide columns (brand + bottom bar only).

## 4. Heroes

Four hero sections; pick per page as the first entry in `sections[]`:

| Type | Use |
|---|---|
| `hero-slider` | home — full-screen, 3 slides, curtain intro (once per session), progress dots |
| `hero-image` | landing/home-2 — one image or video, left/centre copy, optional stats row, `height: full|large|medium` |
| `hero-split` | home-3/about alt — copy left, image right on light background (use `"headerStyle": "dark"`) |
| `page-hero` | inner pages — centred title over image, `size: short` for listings, breadcrumbs |

Pages with dark image heroes should set `"headerStyle": "light"` so the nav is white and transparent.

## 5. Design tokens

Runtime overrides (no rebuild of CSS needed) come from `site.json → theme`:

```json
"colors": { "navy": "#0f1e36", "beige": "#fcf2e8", "accent": "#0f1e36", ... },
"fonts":  { "heading": "Nohemi", "body": "Inter", "googleFonts": "Inter:wght@300;400;500;600;700" },
"radius": "1.25rem", "cursor": true, "introCurtain": true
```

Everything else lives at the top of `theme/assets/css/theme.css` (`:root`): type scale
(`--fs-h1 … --fs-h6`, `--fs-big1/3/4`), spacing (`--section-small`, `--gutter`), radii, shadows,
easing. Responsive overrides at 1280px up and 767px down.

Section wrapper classes: `.rt-theme-light|gray|beige|dark` × `.rt-space-default|tight|none|top|bottom`.
Consecutive light sections collapse their top padding automatically.

## 6. Motion system

Add attributes — no JS changes required:

| Attribute | Effect |
|---|---|
| `data-reveal` (+ `style="--d:.2s"`) | fade/blur up on scroll |
| `data-split` | word-by-word heading reveal |
| `data-card-reveal` | card stagger |
| `data-line` | underline draw |
| `data-marquee-y` (+ `data-speed`) | infinite horizontal marquee (content auto-duplicated) |
| `data-counter="120"` | count-up |
| `data-parallax=".1"` | subtle vertical parallax |
| `data-pin` + `data-overview-item/img` | image swaps as list items scroll into view |
| `data-lightbox` on a gallery grid | lightbox with keyboard nav |
| `data-accordion` | one-open `<details>` group |

Users with `prefers-reduced-motion` get everything instantly, no animations.

## 7. Adding a section type

```bash
npm run new:section stat-strip --desc="Compact one-line statistics"
```

Creates `theme/sections/stat-strip.njk` (with doc comment + standard wrapper), appends a CSS block
to `theme.css` and a stub to `docs/SECTIONS.md`. Then:

1. Edit the template — use `ui.sectionHead`, `ui.button`, `ui.image`, the `media` filter.
2. Style it inside its `/* stat-strip */` CSS block; add responsive rules in the media queries at the bottom.
3. Add demo data to `content/presets/_sections.json` so `import:preset --section=stat-strip` works.
4. Use it: `{ "type": "stat-strip", "data": { ... } }`.

## 8. Collections

| Folder | Layout | URL | Auto-appears in |
|---|---|---|---|
| `content/services/*.md` | `service.njk` | `/services/<slug>/` | services-cards, services-list, mega menu (manual link), project facts |
| `content/projects/*.md` | `project.njk` | `/portfolio/<slug>/` | portfolio-grid (+filters by `category`), case-study, related work on service pages |
| `content/posts/*.md` | `post.njk` | `/blog/<slug>/` | blog-grid (+filters by `category`), related posts |
| `content/team/*.md` | — (no page) | — | team section |

Front matter fields are documented in `docs/CONTENT.md`. Ordering: `order` (services, projects,
team) or `date` (posts).

## 9. Icons

All icons are `<symbol>`s in `theme/partials/icons.njk`, used as `<svg><use href="#i-name"/></svg>`.
Add new ones there (24×24 viewBox, `currentColor`).

## 10. Performance notes

* Images: keep hero ≤ 400 KB (1920px JPEG q75), cards ≤ 200 KB. For automatic WebP/AVIF + `srcset`, add `@11ty/eleventy-img` later — the `ui.image` macro is the single place to change.
* CSS is one file (~60 KB) and JS one file (~18 KB), both cacheable for a month via `.htaccess`.
* Fonts: Inter from Google Fonts with `display=swap`; heading font falls back gracefully.
