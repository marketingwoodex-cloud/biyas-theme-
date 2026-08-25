# Biya's Art Gallery — WordPress Theme Packages

This repository collects the theme iterations for **Biya's Art Gallery** (Art · Poetry · Culture · Lahore).

## `theme-v4/` — ⭐ Current build (Phase 1: static redesign)
A complete redesign of the website as pure **HTML + Tailwind CSS + vanilla JS**, structured for later
conversion into **native (free) Elementor JSON templates**.

- `THEME_V4_MASTER_PLAN.md` — the master document: 38-file manifest, design system, page-by-page
  blueprints, Elementor conversion rules & workflow (Phase 2 starts only after design approval).
- **37 HTML pages** (home, artworks + catalogue, collections, The Third Art, archive, artists,
  Biya Jee pillar, Punjabi Verha pillar, exhibitions, projects, commissions, trade, press, visit,
  FAQ, legal, sitemap, 404, design-system page).
- `assets/` — `css/theme.css` (Atelier design system), `js/app.js` (nav, reveals, filters, lightbox,
  counters, tabs, static-form theatre), `img/` (36 studio photographs, renamed).
- `src/pages/` + `tools/build.py` — page fragments and the builder that stitches shared
  header/footer into the final pages (`python3 tools/build.py`).

Elementor rules (Phase 2): free/native widgets only, **never the HTML widget** — with one exception:
contact/dummy forms ship as plain static HTML inside a Text Editor widget.

Preview locally: `cd theme-v4 && python3 -m http.server 8080` → http://localhost:8080

## Legacy packages (reference only)
- `theme-v4.zip` — previous V4 iteration (custom CSS).
- `html-v2-converted.zip`, `Biyas-WP-V3-Complete*.zip`, `portfolio.zip`,
  `10-original-html-non-conversion.zip` — earlier phases, content docs and the photo archive.
