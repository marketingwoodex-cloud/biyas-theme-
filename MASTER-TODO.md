# Woodex Interior — Go-live Master TODO

Audit date: 2026-09-12 · Theme: `woodex-theme/` (Eleventy v2 master theme) · Branch: `arena/01a08114-biyas-theme`

**How the audit was done.** Every one of the 28 built pages was rendered in headless Chromium at
1440 px and 390 px (full-page screenshots, scroll-through so reveal animations fire), plus interaction
probes (mega menu, mobile menu, hero slider, FAQ, portfolio filters, lightbox, contact form, keyboard
focus). Rendered HTML was also analysed for heading structure, duplicate CTAs, SEO tags, JSON-LD,
alt text, tap-target size and horizontal overflow. `npm run ci` (build + check + smoke) is the gate.

Legend: **[x]** done in this pass · **[ ]** open · **[user]** needs a decision/asset from you.

---

## 0. Baseline (what was already healthy)

- 28 pages build in ~0.4 s, zero JS console errors, zero horizontal overflow at 390/1440.
- Titles, meta description, canonical, OG/Twitter, JSON-LD (valid), sitemap, robots, 404 + `.htaccess` present.
- Skip link + visible focus ring, labelled form fields, honeypot, `aria-live` status, `aria-expanded` on toggles.
- Mega menu, mobile menu, portfolio filters, FAQ (native `<details>`), lightbox, counters all work.

---

## 1. Bugs (blocking / visible defects)

| # | Page / section | Problem (evidence) | Fix | Status |
|---|---|---|---|---|
| B1 | Home › hero-slider | **Black hero after intro.** `.rt-curtains` strips stayed at `translateX(-102%)`… but 10 strips × `flex:1` inside `overflow:hidden` hero still painted black bars over ~90 % of the hero on every load (screenshot: only the right-most ~10 % of the photo visible). Root cause: strips are siblings in one flex row, so each strip only slides one strip-width left and still covers the strip to its left. | Wrap each strip in its own `overflow:hidden` cell (v1 markup) and hide the whole overlay (`display:none`) once reset. | [x] |
| B2 | Home › big-statement | **Text clipped.** Statement is rendered inside a 7–19 rem-high video frame; the 6.25 rem uppercase h2 wraps to 4 lines and the first/last lines are cut off (screenshot: "WE DESIGN ROOMS" and "THAT OUTLIVES TRENDS" cropped). | Frame height now follows the text (`min-height` + padding) and text size is clamped per breakpoint; word-mask animation kept. | [x] |
| B3 | Home › services-cards (sticky stack) | Cards stack under each other with `position:sticky`, but the section has no bottom breathing room, so the last card + "All services" button get covered/cramped; screenshot shows the section foot floating in 300 px of white. | Sticky stack limited to ≥ 992 px, `--i` offsets tightened, section foot spacing fixed. | [x] |
| B4 | Home | **3 × `<h1>`** — one per hero slide. | Only the first slide is an `<h1>`; the others are `<h2 class="rt-hero-title">` (same look). | [x] |
| B5 | Home › services / portfolio / journal / overview | **Duplicate CTAs**: "All services", "View all projects", "Read the journal", "Our process" each rendered twice (section head + section foot). | Head CTA is now the single source; the foot button is only rendered when the section has no head CTA (`s.footButton`) — see `macros.njk`/section templates. | [x] |
| B6 | Header (≤ 991 px) | **Mobile menu cannot be closed by the hamburger** — the open panel (`z-index:998`, `inset:0`) covers the header's toggle button (hit-test returned `.rt-mobile-menu`). Users had to press Esc or reload. | The panel lives inside the header's own stacking context, so its `z-index` is now `1` and `.rt-nav-inner` sits above it at `2` (a bare z-index bump on the inner bar was not enough — verified with a tap probe: open → close now works). | [x] |
| B7 | Mobile menu › Services sub-list | Grid-row collapse trick applied on `<ul>` but the children are 6 `<li>` → sub-links were **always visible** even when collapsed (screenshot: sub-items visible with "+" still showing). | Wrapped the list in a single collapsible `<div>` so `grid-template-rows: 0fr → 1fr` works. | [x] |
| B8 | Blog post › aside card | "Book a consultation" outline button is **invisible** on the navy card (navy border + navy text on navy). | Outline button inverts to white inside `.rt-aside-card`. | [x] |
| B9 | Fonts | `Nohemi-*.woff2` requested from `/assets/fonts/` → **3 × 404 on every page** (folder empty) and the third-party fallback host is unreliable. | `@font-face` local URLs removed until files exist; heading font falls back cleanly to Inter (see [user] U2). `theme/assets/fonts/README.md` explains how to drop the licensed files in. | [x] |
| B10 | Contact › map | OpenStreetMap iframe is fine in browsers but the card overlaps the map on mobile with `margin-top:-3rem` and no background gap. | Card given `position:relative; z-index:1` and the map a min-height at 767 px. | [x] |
| B11 | Footer | `role="menu"` on the desktop dropdown is semantically wrong for links (screen readers announce a menu widget with no keyboard model). | Removed `role="menu"/"menuitem"`; `aria-haspopup` kept on the toggle. | [x] |
| B12 | Service pages | `3D visualisation` has **no related projects** section; `Renovation & fit-out` only 1 — because project `services` arrays don't reference them. | Added service references to project front matter (Meridian workplace, Hillside retreat, Atelier boutique). | [x] |
| B13 | Home › hero (found in re-audit) | Secondary hero button (`style: "text"`) inherited **jet text on the dark photo** — "Book a consultation" was nearly invisible. | Text-style buttons inside heroes/CTA bands render white. | [x] |
| B14 | Blog post › aside card (found in re-audit) | On article pages the aside card is light grey, so the B8 white-outline button became invisible *there*. | Article aside card gets a jet outline / navy hover variant. | [x] |
| B15 | Contact › map | If the OpenStreetMap embed is blocked or slow the frame is plain white. | Grid placeholder background behind the iframe; iframe `display:block; border:0`. | [x] |

## 2. Design improvements

| # | Where | Issue | Fix | Status |
|---|---|---|---|---|
| D1 | Page-hero (about/services/portfolio/blog/contact) | Hero copy sits high with a big empty band below on desktop (padding 17 rem top / 14 rem bottom). | Padding rebalanced (`14rem 0 9rem`), text width tuned; short variant unchanged. | [x] |
| D2 | Home › showcase (video) | Marquee headline + title/button feel disconnected; button sits far right on its own row. | Foot laid out as a 2-column grid with a vertical rhythm, marquee separators aligned. | [x] |
| D3 | About › end of page | Testimonials → awards → CTA are three consecutive white sections. | Awards section switched to `gray` theme for rhythm. | [x] |
| D4 | Project page | No CTA before the footer; ends on "next project" only. | Added a compact CTA band (`Start a similar project`) before next-project. | [x] |
| D5 | Blog post | Article footer has no author/date recap and no CTA; related grid duplicates "All articles" twice. | Added author card + share row; related grid uses single head CTA. | [x] |
| D6 | 404 | Bare hero + CTA band. | Added a "Try one of these" list (home, services, portfolio, journal, contact) using the `services-list` section, plus an email CTA and a page-specific meta description. | [x] |
| D7 | Privacy / Terms | Hero has no image and the body is very short — page feels unfinished. | Short navy hero now carries an intro line + breadcrumbs, full legal copy (see C3) and a closing CTA band that cross-links the two pages. | [x] |
| D8 | Services index list (≤ 767 px) | Row grid `3rem 1fr 3rem` squeezes the title next to the arrow. | Mobile rows now stack: number+arrow on one line, title/text full width. | [x] |
| D9 | Header CTA on light (transparent) header | White pill button on light photos loses contrast. | Added a soft shadow on the transparent state. | [x] |
| D10 | Testimonials | 3 equal cards, no highlight. | Kept layout, added subtle quote-mark colour + hover lift for consistency with other cards. | [x] |

## 3. Section / content improvements

| # | Where | Issue | Fix | Status |
|---|---|---|---|---|
| C1 | Service pages › FAQ | The same 2 generic FAQs on all 6 services. | Each service now has 3–4 service-specific FAQs. | [x] |
| C2 | Service pages › body | Bodies are 3 short paragraphs. | Expanded each service with "Who it's for", "What you receive", "How we price it" sections (concise, factual tone matching the existing copy). | [x] |
| C3 | Privacy / Terms | 4 headings, ~500 characters. Not launch-ready for a business collecting enquiries. | Full policy: data collected, purpose, legal basis, retention, cookies/analytics, third parties, your rights, contact; Terms: use of site, IP, quotes & pricing disclaimers, liability, governing law (Pakistan). | [x] |
| C4 | Project pages | Body is Brief/Approach/Result only. | Added "Materials & makers" + "Timeline" facts and a pull-quote where a testimonial exists. | [x] |
| C5 | Blog posts | 3 of 6 posts are ~120 words (1-min read). | Extended each post to a useful 350–500 words with practical sub-sections. | [x] |
| C6 | Home › intro-split | Features list fine, but no proof point. | New optional `stats:[{value,label}]` on `intro-split`; home shows `120+ Projects · 12 Years · 96 % Return or refer` (same figures as the About counters). | [x] |
| C7 | Global | Placeholder social URLs (`https://instagram.com/`). | Left as-is but flagged: **[user]** replace in `content/site.json › social`. | [user] |
| C8 | Contact | Hours/address shown 3× (intro, map card, footer) — fine, but map card lacked phone. | Added phone + email to the map card. | [x] |

## 4. Spacing & rhythm

| # | Where | Issue | Fix | Status |
|---|---|---|---|---|
| S1 | Global section rhythm | `--section-small: 8.3rem` desktop / `5.5rem` mobile makes single-column mobile pages very long (home = 14 200 px at 390 px). | Mobile section padding reduced to `4.5rem`, tight to `3rem`; desktop unchanged. | [x] |
| S2 | Consecutive light sections | Rule `.rt-section + .rt-section.rt-theme-light` removes top padding, but only when both are `space-default` → mixed cases (tight/none) leave double gaps (seen: home *work* → *showcase*, about *stats* → *image-strip*). | Rule generalised to any spacing variant and documented. | [x] |
| S3 | Section head → grid | `margin-bottom: 3rem` on desktop, `2rem` mobile; card grids then add their own top gap. | Normalised to `2.5rem` / `1.75rem`; removed double gaps in blog/portfolio grids. | [x] |
| S4 | Footer | Big "WOODEX" word-mark block adds ~300 px; bottom bar cramped. | Word-mark scaled with `clamp()`, bottom bar padding evened. | [x] |
| S5 | Hero-v4 content | Copy sits 4 rem from the bottom; on 390 px the dots overlap the scroll hint. | Bottom padding `5.5rem` mobile; scroll hint hidden < 768 px. | [x] |
| S6 | Pricing cards | Feature list spacing uneven vs. price line. | Consistent `.75rem` list gap and aligned CTA at the bottom. | [x] |

## 5. SEO · accessibility · performance

| # | Item | Fix | Status |
|---|---|---|---|
| A1 | Tap targets < 24 px (footer Privacy/Terms links, email/phone links, hero dots). | Added padding/min-height so all interactive elements are ≥ 24 px. | [x] |
| A2 | `<h3>` inside `<a>` inside `<article>` in portfolio cards — fine; blog grid uses h3 (featured) then h4 (cards). | Cards now use h3 consistently. | [x] |
| A3 | Images: no `width/height` → CLS on slow networks. | `ui.image` now derives `width`/`height` from the ratio it is given (e.g. `4/5` → 1200 × 1500), adds `decoding="async"` and `fetchpriority="high"` for eager images; meaningful intro images got real `alt` text. | [x] |
| A4 | Hero background images are CSS backgrounds (not preloaded). | `<link rel="preload" as="image" fetchpriority="high">` for the first hero image on every page that opens with a hero (home slider, page heroes, service and project pages). | [x] |
| A5 | Google Fonts blocking CSS request. | Preconnect kept; stylesheet loaded with `media="print" onload` swap + noscript fallback. | [x] |
| A6 | Privacy/Terms/404 use the generic site description. | Page-specific descriptions added. | [x] |
| A7 | JSON-LD: `sameAs` includes placeholder social URLs. | Only URLs with a profile path (e.g. `instagram.com/woodex`) are emitted; the current bare placeholders produce `"sameAs": []` until U6 is done. | [x] |
| A8 | `og:image` for pages without an image falls back to hero-1 — fine. Blog `og:type=article` present. | — | [x] |

## 6. Needs YOU (cannot be done from code)

| # | Item | Why |
|---|---|---|
| U1 | **Real photography** — 20 placeholder JPEGs in `content/media/`. | Replace with your own shots (same file names = zero code change). |
| U2 | **Heading font licence** — Nohemi is a commercial font. Either drop `Nohemi-Regular/Medium/SemiBold.woff2` into `woodex-theme/theme/assets/fonts/` (then uncomment the `@font-face` block in `theme.css`) or keep the Inter fallback / pick a Google font in `site.json › theme.fonts.heading`. | Licence + files. |
| U3 | **Form provider** — `forms.provider` is `demo`. Choose `php` (Hostinger `mail.php`, set `$to`), `web3forms` (free key) or `formspree`. | Account/key. |
| U4 | **Deploy** — copy `woodex-theme/deploy/github-workflows/*.yml` to `.github/workflows/`, add secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (optional var `FTP_DIR`). | GitHub App cannot write workflows. |
| U5 | **Live domain** — set `seo.siteUrl` in `content/site.json` (currently `https://www.woodexinterior.com`). | Domain decision. |
| U6 | **Social links, phone, address, map coordinates** in `content/site.json`. | Business data. |
| U7 | **Legal review** of the new Privacy/Terms text by a local advisor. | Legal. |

---

## Verification log (after fixes)

- `npm run ci` → Eleventy wrote 28 files, `check` "No problems found" (27 pages, 33 section types), `smoke` "27 pages, no runtime errors".
- Headless Chromium re-audit of `/`, `/about/`, `/services/`, `/services/bespoke-joinery/`, `/portfolio/canal-side-residence/`, `/blog/`, `/blog/how-we-price-interior-projects/`, `/contact/`, `/privacy/`, `/404.html` at 1440 px and 390 px: 0 console errors, 0 horizontal overflow (only the intentional marquee/hero-image bleed and the off-screen honeypot are reported), 0 failed local requests (no more font 404s).
- First-visit probe: curtain intro plays, then `.rt-curtains` → `display:none`; the `<h1>` is the top-most element at its own position. Repeat-visit probe: intro skipped, hero visible immediately.
- Mobile-menu probe (390 px, touch): open tap → `is-open`, close tap → closed; sub-menu collapses; Portfolio link is the hit-tested element.
- Single `<h1>` per page (home, about, project pages checked); blog cards use `<h3>`; project facts render Duration / Materials / Team; testimonial pull-quote and CTA band present; post pages show the author card and one "All articles" button.
- Page heights at 390 px: home 14 207 → 14 212 (statement/stat strip added, section padding reduced), about 12 287 → 12 290, services 8 625 → 8 154, contact 4 403 → 4 403.

Anything not ticked above is in section 6 and needs an asset, account or decision from you.
