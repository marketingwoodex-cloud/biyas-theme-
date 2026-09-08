# Woodex Interior — Multi-page Interior Design Theme

A complete, ready-to-use static website theme for an interior design studio.
Design language (type scale, colour tokens, spacing, motion) is modelled on the
Linoxa "Home Two" layout and fully rebranded for interiors.

No framework, no build dependency at runtime — every page is plain HTML + CSS +
vanilla JS and opens directly from the theme root.

## Pages

| File             | Content                                                                                        |
|------------------|------------------------------------------------------------------------------------------------|
| `index.html`     | Home — 3-slide hero with curtain intro, brands band, masked video, stacked service cards, split feature, scroll-pinned "design documentation" overview, showcase video + marquee, latest journal |
| `about.html`     | Studio story with animated counters, image strip, values, team, testimonials, CTA              |
| `services.html`  | 6 service detail rows (`#residential #commercial #joinery #renovation #lighting #visualisation`), process (`#process`), pricing, FAQ (`#faq`), CTA |
| `portfolio.html` | Filterable project grid (residential / hospitality / workplace / retail), featured case study    |
| `blog.html`      | Featured post, filterable journal grid, pagination, newsletter form                            |
| `contact.html`   | Studio details, validated enquiry form, map, FAQ teaser                                        |

All pages share one header (desktop nav with Services dropdown + mobile menu),
one footer, one SVG icon sprite, `css/style.css` and `js/app.js`.

## Folder structure

```
woodex-interior/
├── index.html … contact.html   ← generated pages (deploy these + css/js/images/fonts)
├── css/style.css               ← design tokens, components, page sections, responsive
├── js/app.js                   ← all behaviour (see "JavaScript" below)
├── images/                     ← page imagery (jpg)
├── fonts/                      ← optional: drop Nohemi-Regular/Medium/SemiBold.woff2 here
└── _src/                       ← source used to generate the pages (not needed in production)
    ├── build.js                ← tiny Node build script (no npm packages)
    ├── partials/head.html      ← <head>, icon sprite, cursor
    ├── partials/header.html    ← navigation + mobile menu
    ├── partials/footer.html    ← footer + script tag
    └── pages/*.html            ← per-page <main> content with front-matter comments
```

## Editing the theme

Edit the shared chrome once in `_src/partials/` and page content in
`_src/pages/`, then regenerate:

```bash
node _src/build.js          # build all pages into the theme root
node _src/build.js --watch  # rebuild on every change
```

Each page source starts with a comment front matter that fills the partials:

```html
<!-- title: About — Woodex Interior -->
<!-- description: ... -->
<!-- bodyClass: page-about -->
<!-- navClass: rt-nav-light -->
```

Prefer not to edit the generated root `*.html` files directly — they are
overwritten on the next build. (If you never intend to rebuild, you can delete
`_src/` and edit the root files.)

### Adding a page

1. Copy `_src/pages/about.html` to `_src/pages/new-page.html`, change the front matter.
2. Add a link in `_src/partials/header.html` (desktop nav + `#mobileMenu`) with
   `data-nav="new-page"` on the `.rt-nav-toggle` so the active state works.
3. Run `node _src/build.js`.

### Colours, type, spacing

All tokens live at the top of `css/style.css` in `:root` (`--c-navy`,
`--c-light-beige`, `--section-small`, `--radius-large`, …). Headings use
Nohemi with a hosted fallback and finally Inter; body text uses Inter from
Google Fonts. For fully self-hosted fonts, place the Nohemi `.woff2` files in
`fonts/` — the `@font-face` rules already look there first.

## JavaScript (`js/app.js`)

Everything is attribute-driven, so new content picks up behaviour automatically:

| Hook                                      | Behaviour                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------|
| `data-reveal` (+ `style="--d:.2s"`)       | Fade/blur-up reveal on scroll, optional delay                             |
| `data-split`                              | Word-split heading reveal                                                 |
| `data-card-reveal`, `data-line`           | Card stagger / line-draw reveals                                          |
| `data-marquee-y`                          | Infinite marquee (content is cloned automatically)                        |
| `data-counter="120"`                      | Count-up number when 50 % visible                                         |
| `data-filter="cat"` / `data-category`     | Filter grids (portfolio, blog); updates `[data-count]` + empty state      |
| `form[data-form]`                         | Client-side validation + success/error message                            |
| `<details>` inside `.rt-faq`              | One-open accordion                                                        |
| `data-nav="…"` on nav links               | Highlights the current page                                               |
| `data-fallback` on `<video>`              | Swaps to fallback source if the primary fails                             |

The home hero curtain intro plays once per browser session (flag stored in
`sessionStorage` under `wx-intro`); clear it to see the intro again.

### Wiring the forms

Forms currently resolve a demo promise. Open `js/app.js`, find the
`const submit = async (data) => { … }` inside the `forms()` module and return
a real request instead (anything with an `ok` property works), e.g. Formspree:

```js
const submit = async (data) =>
  fetch('https://formspree.io/f/your-id', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: data,            // FormData from the submitted form
  });
```

## Media notes

* Background videos are hot-linked from Pexels (free licence). Replace the
  `<source src>` / `poster` values in `_src/pages/index.html` with your own
  files for production.
* The map on `contact.html` is an OpenStreetMap embed — swap the `iframe`
  `src` with your studio coordinates.
* Images in `images/` are placeholders sized for their slots
  (heroes 16:9, portfolio / team 4:5). Replace with your project photography
  using the same filenames, or update the references in `_src/pages/`.

## Deploying

Upload everything except `_src/` (and this README) to any static host —
Netlify, Vercel, GitHub Pages, cPanel — no server-side code required.

To preview locally:

```bash
python3 -m http.server 8080    # then open http://localhost:8080
```
