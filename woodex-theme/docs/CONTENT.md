# Content guide

All content lives in `content/`. Nothing else needs to change for day-to-day edits.

## Global settings — `content/site.json`

| Section | What it controls |
|---|---|
| `brand` | site name, short name, tagline, logo (text or image) |
| `theme` | colours, fonts, corner radius, custom cursor, home intro curtain |
| `contact` | email, phone, address lines, opening hours, map embed + link |
| `social[]` | social links (icons: instagram, facebook, linkedin, x, pinterest) |
| `header` | menu, mega menu, CTA button, sticky/transparent behaviour, announcement bar |
| `footer` | intro text, link columns, newsletter, big word, legal links, copyright |
| `seo` | site URL, title template, default description/OG image, business schema |
| `forms` | provider + endpoint/access key + success messages |
| `media` | hero/showcase video URLs used by the home presets |

## Pages — `content/pages/<name>.json`

```json
{
  "layout": "page.njk",
  "permalink": "/about/",
  "nav": "about",                 // highlights this key in the menu
  "headerStyle": "light",         // light = white nav over dark hero, dark = solid nav
  "title": "About the studio",    // browser tab + OG (template: "%s — Woodex Interior")
  "seo": { "description": "…" },
  "sections": [ … ]               // ordered list — see docs/SECTIONS.md
}
```

* **Reorder** sections by moving them. **Hide** one with `"enabled": false`.
* **Anchor links**: give a section `"id": "process"` → link to `/services/#process`.
* **New page**: `npm run new:page careers --preset=basic --title="Careers"` then add a menu link in `site.json`.
* **Replace the home layout**: `npm run import:preset home-2` (a backup `_home.backup.json` is written).

## Services — `content/services/<slug>.md`

```yaml
---
title: "Bespoke joinery"
order: 3                       # position in lists
icon: joinery                  # sprite icon for cards + mega menu
image: service-3.jpg           # card + hero image
labels: ["Kitchens", "Wardrobes"]
excerpt: "One sentence for cards and menus."
deliverables: ["Shop drawings", "Installation"]
process: [{ title: "Discovery", text: "…" }]
faq: [{ q: "…", a: "…" }]
---
## Markdown body → main column of the service page
```

After adding a service, link it in the mega menu: `site.json → header.menu → Services → children[]`.

## Projects — `content/projects/<slug>.md`

```yaml
---
title: "Canal-side residence"
order: 1
category: Residential          # drives portfolio filters (Residential / Hospitality / Workplace / Retail — free text)
location: "Lahore"
year: 2025
scope: "Full interior, joinery, lighting"
size: "620 m²"
image: portfolio-1.jpg         # 4:5 card image
imageWide: hero-1.jpg          # 16:9 hero on the case-study page
featured: true                 # shown in home "featuredOnly" grids
excerpt: "One sentence."
gallery: [{ src: room-1.jpg, alt: "Detail" }]
client: "Private client"
services: ["Residential interiors", "Bespoke joinery"]   # must match service titles → links + related work
duration: "6 months"           # optional facts — rendered in the sticky facts card when present
team: "Amina Raza, Tariq Malik"
materials: "Fumed oak, Indus limestone, brushed brass"
testimonial:                   # optional — rendered as a pull-quote after the body
  quote: "They listened more than they talked."
  author: "Sara & Omar H."
  role: "Homeowners"
---
## Brief / Approach / Result / Materials & makers / Timeline …
```

Every project page ends with a "Planning something similar?" CTA band and a link to the next project — both come from `theme/layouts/project.njk`, so there is nothing to add per project.

## Journal posts — `content/posts/<slug>.md`

```yaml
---
title: "Choosing timber for humid climates"
date: 2026-08-18
category: Materials            # drives blog filters
image: room-1.jpg
author: "Tariq Malik"
excerpt: "One sentence."
---
Article body in Markdown (reading time is calculated automatically).
```

## Team — `content/team/<slug>.md`

```yaml
---
title: "Amina Raza"
role: "Founder & Creative Director"
order: 1
image: team-1.jpg              # 4:5
excerpt: "Short bio."
social: [{ name: "LinkedIn", icon: "linkedin", url: "https://…" }]
---
```

## Media — `content/media/`

Reference images by filename anywhere (`"image": "hero-1.jpg"`). Recommended sizes:

| Use | Ratio | Min width |
|---|---|---|
| Hero / page hero / project wide | 16:9 | 1920px |
| Portfolio card, team, hero-split | 4:5 | 1200px |
| Service / blog card, feature rows | 4:3 | 1200px |
| Logos | any | SVG or PNG on transparent |

Compress before adding (JPEG quality ~75, or WebP). Keep filenames lowercase-with-dashes.

## Presets — `content/presets/`

`home-1.json`, `home-2.json`, `home-3.json`, `landing.json`, `basic.json` are complete `sections[]`
lists. `_sections.json` holds demo data for every section type (used by
`npm run import:preset --section=<type> --into=<page>`). Add your own presets by saving any page's
`sections` array under a new name with a `description`.
