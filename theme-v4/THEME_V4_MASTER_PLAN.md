# BIYA'S ART GALLERY — THEME V4 MASTER PLAN
**The Lahore Atelier** · Art · Poetry · Culture · Lahore

| | |
|---|---|
| Document | THEME_V4_MASTER_PLAN.md |
| Version | 4.0 — Phase 1 (Static Build) |
| Date | 2026-08-25 |
| Status | ✅ Phase 1 complete — **awaiting final design approval** → then Phase 2 (Elementor JSON) begins |
| Stack | HTML5 + Tailwind CSS (CDN) + Vanilla JS · zero dependencies · Elementor-ready structure |
| Folder | `/theme-v4/` — 38 files (37 pages + this plan) |

---

## 1. Vision & Positioning

**Biya's Art Gallery** is an artist-led house in Lahore, Pakistan — one roof for original
artworks, **The Third Art** (thread work), Punjabi **Verha** poetry, exhibitions, and
cultural gatherings (mehfil evenings, mushairas, muqalma dialogues).

**Design idea — "The Lahore Atelier":** the site should feel like walking through a
beautifully lit gallery house at golden hour: deep umber walls, warm paper rooms,
brass signage, hand-lettered verse in Nastaliq script. One continuous story —

> **Arrive (hero) → Look (artworks) → Understand (the artist & her language)
> → Gather (verha, exhibitions, events) → Live with it (commissions, projects, trade)
> → Visit (contact).**

Every page is one room in that house. Navigation is the corridor that never lets you
get lost.

**The 5-second test (Home hero):**
1. Kicker reads *BIYA'S ART GALLERY — LAHORE* (brand, place).
2. Headline *Come for the art. Stay for the mehfil.* (value: gallery + living culture).
3. Gold CTA *Enter the Gallery* (primary action) + *Plan a Visit* (conversion).
4. A real artwork breathes behind the type (craft proof).
5. Rotating brass stamp *ART · POETRY · CULTURE · LAHORE* seals the corner (premium cue).

---

## 2. Content Governance (inherited from Agent 01 rules)

- Public identity: **Biya's Art Gallery**. Descriptor: **Art · Poetry · Culture · Lahore**.
- Founder referenced publicly as **Biya Jee** (until official English spelling approval).
- Every public claim/media item is **Verified**, **Pending Verification**, or **Not for Publication**.
- Catalogue items in this build use **holding copy** with mono captions such as
  `CAT. REF PENDING` — no fabricated prices, dates, or attributions.
- Contact details (email/phone/address) are **placeholder tokens** listed in §13 for replacement.
- No generated imagery is presented as documented archive art; images shipped in
  `assets/img/` are the studio's own photo files (renamed, see §5.7).

---

## 3. Information Architecture & Navigation

### 3.1 Header (all pages)
Brand mark → **Home** · **Artworks ▾** · **Biya Jee ▾** · **Punjabi Verha ▾** ·
**Exhibitions** · **Projects** · **Studio ▾** · **Press** · **Visit** + CTA chip *Plan a Visit*.

| Dropdown | Items |
|---|---|
| Artworks | All Artworks · Collections · The Third Art · Archive & Sold · Artists |
| Biya Jee | Biography · Art · Poetry · Books · Media |
| Punjabi Verha | About Verha · Monthly Events · Mushairas · Muqalma · Video Archive · Media Coverage · Join & Collaborate |
| Studio | Commissions · Trade & Hospitality · Guide & FAQ |

Mobile: full-screen ink drawer, big serif links, grouped sections, keyboard/Escape support.

### 3.2 Footer (all pages)
5 columns — Brand + blurb + rotating stamp · Explore · Biya Jee · Verha & Studio ·
Visit (address, hours, email) + newsletter mini-form (**static demo**) — bottom bar:
© year, Privacy, Terms, Sitemap.

### 3.3 The 38-file manifest (37 pages + this plan)

| # | File | Title / Role | Pillar |
|---|---|---|---|
| 00 | `THEME_V4_MASTER_PLAN.md` | This document | — |
| 01 | `index.html` | Home — the threshold | All |
| 02 | `artworks.html` | All Artworks (filterable catalogue) | Artworks |
| 03 | `artwork-single.html` | Artwork detail template | Artworks |
| 04 | `collections.html` | Collections (curated stories) | Artworks |
| 05 | `collection-single.html` | Collection detail template | Artworks |
| 06 | `third-art.html` | The Third Art — thread signature | Artworks |
| 07 | `artworks-archived.html` | Archive & Sold (museum wall) | Artworks |
| 08 | `artists.html` | Gallery Artists | Artworks |
| 09 | `biography.html` | Biya Jee — Biography | Biya Jee |
| 10 | `art.html` | Art & Installations (her practice) | Biya Jee |
| 11 | `poetry.html` | Poetry & Writing | Biya Jee |
| 12 | `poetry-single.html` | Poem / verse detail template | Biya Jee |
| 13 | `books.html` | Books & Library | Biya Jee |
| 14 | `book-single.html` | Book detail template | Biya Jee |
| 15 | `media.html` | Media & Interviews | Biya Jee |
| 16 | `verha-about.html` | About Punjabi Verha | Verha |
| 17 | `verha-events.html` | Monthly Events (mehfil calendar) | Verha |
| 18 | `verha-event-single.html` | Event detail template | Verha |
| 19 | `verha-mushairas.html` | Mushairas | Verha |
| 20 | `verha-muqalma.html` | Muqalma & Dialogues | Verha |
| 21 | `verha-video.html` | Video Archive | Verha |
| 22 | `verha-media.html` | Media Coverage | Verha |
| 23 | `verha-join.html` | Join & Collaborate | Verha |
| 24 | `exhibitions.html` | Exhibitions & Events | Programme |
| 25 | `exhibition-single.html` | Exhibition detail template | Programme |
| 26 | `projects.html` | Projects & Interiors | Programme |
| 27 | `project-single.html` | Project detail template | Programme |
| 28 | `commissions.html` | Commissions & Custom Studio | Studio |
| 29 | `trade.html` | Trade & Hospitality | Studio |
| 30 | `press.html` | Media & Press (newsroom) | Press |
| 31 | `visit.html` | Visit / Contact | Visit |
| 32 | `faq.html` | Guide & FAQ | Studio |
| 33 | `privacy.html` | Privacy Policy | Legal |
| 34 | `terms.html` | Terms of Use | Legal |
| 35 | `sitemap.html` | Sitemap (visual index) | Legal |
| 36 | `404.html` | Lost in the house (not found) | System |
| 37 | `elements.html` | Design System & Pattern Library | System |

Detail templates (03, 05, 14, 18, 25, 27, 12) double as the Elementor **single post/page**
templates for their CPT in Phase 2.

---

## 4. Design System — "Atelier" tokens

### 4.1 Colour (CSS variables + Tailwind tokens)

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F7F1E4` | Page ground (gallery paper) |
| `--paper-2` | `#EFE6D3` | Alt panels, inset rooms |
| `--ink` | `#17120B` | Deep umber walls, heroes, footers |
| `--ink-2` | `#221B11` | Raised ink panels |
| `--line` | `#D9CDB0` | Hairlines, rules on paper |
| `--line-2` | `#3A3226` | Hairlines on ink |
| `--muted` | `#6F6350` | Secondary text on paper |
| `--gold` | `#C2A061` | Brass accent: CTAs, rules, `<em>` |
| `--gold-2` | `#E5CF9B` | Pale gold on ink |
| `--pine` | `#1C4A3C` | Verha & culture rooms |
| `--pine-2` | `#143629` | Deep pine panels |
| `--rust` | `#A3512A` | Rare highlight (events, alerts) |

Ratio per page ≈ 70% paper/ink neutrals, 25% imagery, ≤5% gold. Pine appears only in
the Verha/culture narrative rooms; rust only as a small signal.

### 4.2 Typography

| Role | Family (Google Fonts) | Notes |
|---|---|---|
| Display | **Fraunces** 300–600, italics | `opsz` variable; tight tracking (−2…−4px), leading .92–1.02 |
| Body/UI | **Manrope** 400–700 | 15–16px body, 12px UI |
| Labels | **IBM Plex Mono** 400/500 | kickers, captions, refs — uppercase, +1.5…3px tracking |
| Verse (Urdu/Punjabi) | **Noto Nastaliq Urdu** 400–700 | line-height 2.1–2.4, dir=rtl |

Scale: `display-1` clamp(3.4rem, 8.5vw, 7.5rem) · `display-2` clamp(2.4rem, 5vw, 4.4rem)
· `display-3` clamp(1.8rem, 3vw, 2.6rem) · lede 19–21px · body 15–16px · micro 10–11px mono.
Italic serif `<em>` inside headlines is always `--gold` (on ink) or `--pine` (on paper).

### 4.3 Spacing & grid
- `.shell` = max-width 1320px, padding-inline clamp(20px, 5vw, 72px).
- Section rhythm: `py-24 md:py-36` (96–144px). Rooms breathe — whitespace is the luxury.
- Works grids are **asymmetric/editorial** (12-col with varied spans + staggered
  `translate-y`), never uniform card rows. Max 3 repeats of one pattern per page.

### 4.4 Signature components (CSS classes in `assets/css/theme.css`)

| Class | Element | Elementor analogue (free) |
|---|---|---|
| `.kicker` | mono eyebrow with gold dash | Text Editor (label style) |
| `.display-1/2/3` | serif headlines | Heading |
| `.btn .btn-gold/.btn-ghost/.btn-line` | CTAs w/ arrow-slide hover | Button |
| `.link-arrow` | text link w/ growing arrow | Text Editor link |
| `.art` + `.art-cap` | artwork frame, slow zoom on hover, caption grid | Image + Heading/Text |
| `.stamp` | rotating circular text badge (SVG) | Image (SVG) or icon box |
| `.marquee` | infinite ticker (verse/discipline) | CSS only — mapped via `marquee` note |
| `.rail` | vertical mono side label | Text Editor rotated |
| `.num` | stat counter (counts on scroll) | Counter |
| `.panel-ink/.panel-pine/.panel-paper2` | room backgrounds | Section background |
| `.chip` | filter pill (artworks) | Toggle List / custom |
| `.acc` | FAQ accordion (`details/summary`) | Accordion / Toggle |
| `.tabs` | tab groups (commissions, trade) | Tabs widget |
| `.tl` | event/exhibition timeline | Icon List / Text stack |
| `.field` | underline form fields | **static HTML in Text Editor (exception)** |
| `.lightbox` | artwork viewer overlay | Pro-only in practice → link to attachment page in WP |
| `.grain` | fixed film-grain overlay | Site-wide CSS |

### 4.5 Motion language (vanilla, `prefers-reduced-motion` respected)
- **Entrance:** `.reveal` → IntersectionObserver adds `.in` (28px rise + fade, 700ms
  cubic-bezier(.2,.7,.2,1)), stagger via `data-delay`.
- **Hero:** staged clip-reveal of headline lines (0.15s steps), image settles from
  `scale(1.06)`; wash parallax on scroll (`data-parallax`).
- **Scroll:** sections hold still; images drift at 0.9x via `data-parallax`;
  sticky side rails; marquee tickers.
- **Hover:** artwork frames zoom 1.0→1.05 (900ms), caption underline draws,
  arrows slide right, big "door list" rows reveal a floating preview image.
- **Durations:** micro 150–250ms, standard 400–700ms, cinematic 900–1200ms.
  Nothing bounces. Nothing flashes.

### 4.6 Imagery treatment
- Real photo files in `assets/img/` (renamed): calligraphy set, Punjab landscapes,
  interiors, portraits, 13 recent studio works (`studio-01…13.jpg`).
- Duotone/ink-wash overlays on text-over-image; 1px `--line` borders on paper;
  mono captions with `CAT. REF` style metadata — museum wall energy.

### 4.7 Iconography & ornament
Hairline rules, brass dots `·`, section numerals (01–09) in mono, rotating stamp,
Nastaliq drop caps. No clip-art icons; only minimal inline SVG arrows/chevrons.

---

## 5. Page-by-Page Blueprints
*(Layout · hierarchy · visuals · animation · interaction · CTA · transition — the
"one continuous story" spine. EL: = Elementor recipe summary for Phase 2.)*

### 01 · index.html — Home "The Threshold"
- **Hero (cinema, full-vh, ink):** gold-calligraphy artwork, slow Ken Burns, umber
  wash; kicker → 3-line headline (staged clip reveal) → lede → CTA pair; rotating
  stamp right-bottom; scroll cue; mono meta strip (Lahore · N 31.5497° E 74.3436°).
- **Marquee:** `ART — POETRY — CULTURE — LAHORE — MEHFIL —` ticker on gold.
- **Three Doors (no cards):** giant serif door-list rows (Original Art / The Third
  Art / Punjabi Verha); hover floats a preview image; each row links to its room.
- **Featured Works:** asymmetric 3-work editorial grid, staggered heights, artwork
  hover zoom; caption grid (no., title, medium, ref). CTA → artworks.
- **The Third Art feature:** split pine panel, oversized type + thread image,
  process teaser, CTA → third-art.
- **Numbers band:** counters (works, events, cities/collectors pending) on hairlines.
- **Verha verse strip:** Nastaliq couplet marquee + next mehfil teaser → verha.
- **Biya Jee teaser:** portrait split with gold rule, signature story CTA → biography.
- **Press ticker:** mono list of coverage names (pending verification) → press.
- **Visit room:** ink panel, hours/address placeholder, map note, CTA → visit.
- **EL:** Container/Section ×9, Heading, Text, Buttons, Image, Counter ×3, marquee →
  static text row (see §11 exception note).

### 02 · artworks.html — All Artworks "The Long Wall"
- **Hero:** paper room; oversized `display-1` left, right-anchored artwork peek;
  filter chips (All / Calligraphy / Thread / Mixed / Landscape / Interiors) — JS filter.
- **Catalogue:** masonry-feel asymmetric grid (varying spans), mono caption grid,
  status dot (Available / Reserved / Sold→archive link).
- **Between rows:** a full-width "interlude" quote band (pine) to break repetition.
- **Interactions:** hover zoom + caption underline; click → artwork-single; lightbox
  on quick-view button. **CTA:** Can't find a work? → commissions.
- **EL:** Section + Heading + Image grid (Posts/CPT loop in WP), chips → Toggle filter note.

### 03 · artwork-single.html — Artwork Detail "The Viewing Room"
- **Split hero:** 60% image (paper room, museum label), 40% dossier: kicker, title,
  medium/dims/year (pending), story paragraphs, price on request, CTA pair
  (Enquire → visit#enquire; Save → share).
- **Detail strip:** 3 zoom details (thread/detail shots) horizontal scroll rail.
- **"You may live with"** related works (2-up, asymmetric). Collection link chip.
- **EL:** Section, Image, Heading, Text, Button, related → CPT loop.

### 04 · collections.html — Collections "Chapters"
- **Hero:** paper-2 room, `display-1`, intro; collections as **chapter list** (numbered
  rows, hairline dividers) with hover preview + count.
- **Feature splash:** first collection as full-bleed image panel w/ overlay title.
- **EL:** Heading, Text, image list rows.

### 05 · collection-single.html — Collection Detail "The Story Wall"
- Full-bleed collection hero (title over image), curator's note (drop cap),
  story grid of works (asymmetric), interlude quote, CTA to enquire.

### 06 · third-art.html — The Third Art "The Loom Room"
- **Hero:** pine room, thread artwork right, giant serif left; Nastaliq wordmark accent.
- **What is it:** premise split w/ sticky label rail; process steps 01–04 (numbered
  list, not cards) w/ reveal stagger.
- **Folio archive teaser:** horizontal scroll rail of folios → artworks-archived.
- **Commission CTA band** (gold on ink).
- **EL:** Sections, Heading, Text, Icon List (process), Image carousel note.

### 07 · artworks-archived.html — Archive & Sold "The Museum Wall"
- Ink room; dense archival grid (small tiles, hover reveals dossier), counter of
  archived works, note on provenance honesty, CTA → commissions (a new work can begin).

### 08 · artists.html — Gallery Artists "The Salon Wall"
- Portrait-led list: large alternating rows (portrait / statement / discipline),
  hairline dividers, mono meta; join as artist CTA → verha-join.

### 09 · biography.html — Biya Jee "The Founder's Room"
- **Split hero:** portrait left (caption: interview photograph on file), name +
  alias right on paper-2; **Timeline** of chapters (vertical, sticky year rail).
- **Voice band:** pull quote in serif italic + Nastaliq pair.
- **Today + tomorrow** two-column; CTA → her art / poetry / books.

### 10 · art.html — Art & Installations "Her Language"
- Dark gallery corridor: alternating full-bleed work + short essay blocks;
  medium taxonomy chips; installations section (wide plates); CTA → collections.

### 11 · poetry.html — Poetry & Writing "The Diwan"
- Paper room, oversized couplet opener (Nastaliq + translation), poem list as
  numbered index rows; "verse of the season" feature; CTA → books / verha.

### 12 · poetry-single.html — Poem Detail "One Verse, One Room"
- Centered verse chamber: Nastaliq large, translation below, recitation note,
  share/save actions, next-poem nav.

### 13 · books.html — Books & Library "The Shelf"
- Spine-led grid (book plates as vertical spines), each with author/mono meta;
  reading-room photo band; CTA → enquire for copies.

### 14 · book-single.html — Book Detail "The Title Page"
- Cover left, title-page right (title, blurb, contents list, meta table),
  sample verse interlude, CTA enquire.

### 15 · media.html — Media & Interviews "On Record"
- Interview list rows (date · outlet · topic), featured conversation excerpt,
  photo plate; CTA → press kit (press).

### 16 · verha-about.html — About Punjabi Verha "The Word House"
- Pine hero with Nastaliq display; what-is-verha premise split; oral-history note;
  pillars list (Events, Mushaira, Muqalma, Video); CTA → events.

### 17 · verha-events.html — Monthly Events "The Mehfil Calendar"
- Calendar hero (month marker); timeline rows (upcoming) + past list (compact);
  RSVP CTA per event → verha-event-single.

### 18 · verha-event-single.html — Event Detail "One Evening"
- Poster hero, details table (date/time/venue placeholder), programme list,
  RSVP static form (TextEditor exception), past-edition note.

### 19 · verha-mushairas.html — Mushairas "The Gathering of Poets"
- Pine room, couplet marquee, mushaira explained (numbered flow), photo plates,
  CTA → join as poet.

### 20 · verha-muqalma.html — Muqalma & Dialogues "In Conversation"
- Dialogue-formatted excerpt (alternating speakers, hairline rules), topic index,
  video teaser → verha-video, CTA propose a dialogue.

### 21 · verha-video.html — Video Archive "The Reel Room"
- Featured player plate (poster + play), filter chips (recitals/dialogues/events),
  video plate grid (poster, duration, mono meta).

### 22 · verha-media.html — Media Coverage "Clippings"
- Clipping rows (outlet · date · headline · tag), featured quote, CTA → press.

### 23 · verha-join.html — Join & Collaborate "The Open Door"
- Split CTA hero (as poet / as volunteer / as host), numbered "how joining works",
  static registration form (TextEditor exception), community note.

### 24 · exhibitions.html — Exhibitions & Events "Now & Always"
- **Now showing** full-bleed feature; upcoming timeline; past exhibitions archive
  list (year rails); CTA → visit for private view.

### 25 · exhibition-single.html — Exhibition Detail "The Show Room"
- Title hero over installation plate; curator note; works in show (grid);
  dates/venue table; CTA → visit.

### 26 · projects.html — Projects & Interiors "Art That Lives In"
- Case-study list rows (interior plates + scope mono meta), before/after note,
  trade crossover CTA → trade.

### 27 · project-single.html — Project Detail "One Residence"
- Full-bleed opener, brief, image story grid, credits table, next project nav.

### 28 · commissions.html — Commissions "Made For You"
- Hero with process stamp; 4-step tabs (Envision → Design → Craft → Deliver);
  scale/medium matrix; static enquiry form (TextEditor exception) with work-ref
  prefill support (`?work=`); FAQ teaser.

### 29 · trade.html — Trade & Hospitality "For Hotels & Homes"
- B2B room: sectors list (hotels, offices, embassies, interiors), offerings matrix,
  process timeline, plate band, static trade enquiry form (exception), testimonials
  (pending) note.

### 30 · press.html — Media & Press "The Newsroom"
- Press kit panel (bio PDF/logo note — placeholders), latest coverage rows,
  quote board, contact for journalists CTA.

### 31 · visit.html — Visit / Contact "The Front Door"
- Split hero: hours & address block + door photograph; **enquiry static form**
  (exception) with subject chips; map placeholder panel; WhatsApp/phone placeholders;
  private-view CTA.

### 32 · faq.html — Guide & FAQ "The Concierge"
- Grouped accordions (Buying / Visiting / Commissions / Verha), still-need-help band.

### 33–35 · privacy · terms · sitemap — Legal rooms in plain premium type;
  sitemap doubles as a visual index of all 37 pages grouped by pillar.

### 36 · 404.html — "Lost in the house" — ink room, big serif apology,
  three doors back (Home / Artworks / Visit).

### 37 · elements.html — Pattern Library: tokens, type scale, buttons, chips,
  art frames, accordion, tabs, timeline, forms, motion demos — **the living spec
  used for Phase 2 mapping and QA.**

---

## 6. Global Interaction & Transition Rules
1. **Navigation is the corridor:** header transparent over dark heroes, solid paper
   on scroll (`.is-scrolled`); active link gets gold underline; dropdowns fade/slide
   12px, Escape closes, full keyboard tab order.
2. **Between rooms:** sections never fight — alternate paper/ink/pine rooms;
   hairline dividers + mono section numerals (`01 — ARTWORKS`) carry the story thread.
3. **Every scroll ends in a door:** each section's last element is a CTA (`.link-arrow`
   or `.btn`); no dead ends except legal pages.
4. **Hover = invitation, not surprise:** 150–250ms, no layout shift (transform/opacity only).
5. **Forms are theatre:** beautiful, but **static** in this phase (see §11 exception) —
   submit shows a graceful "We will connect this form in WordPress" notice.

---

## 7. Accessibility & Responsive Baseline
- Contrast ≥ 4.5:1 body / ≥ 3:1 large; focus-visible rings (gold) everywhere.
- Alt text on all artworks; `aria-` on menus, accordions, lightbox; Escape closes overlays.
- Works at 360px, 768px, 1024px, 1440px; fluid type via clamp; touch targets ≥ 44px.
- `prefers-reduced-motion: reduce` → reveals/marquee/parallax/ken-burns disabled.

## 8. SEO Scaffold
- Unique title/description per page (build script injects), semantic landmarks
  (`header/main/section/footer`), one `h1` per page, descriptive internal linking
  (the corridor), sitemap.html as human index; Open Graph tokens listed in §13.

---

## 9. Phase 2 — Native Elementor JSON Conversion Plan
*(starts only after design approval of Phase 1)*

### 9.1 Hard rules
1. **Free (native) Elementor widgets only** — Section/Container, Column, Heading,
   Text Editor, Image, Button, Image Box, Icon List, Counter, Testimonial,
   Accordion, Tabs, Toggle, Divider, Spacer, Star Rating, Icon, Video, Google Maps,
   Shortcode, HTML *(prohibited — see exception)*.
2. **Never the HTML widget.** One exception: contact/dummy forms are **plain static
   HTML wrapped in a TextEditor widget** (Text Editor accepts raw HTML) — never a
   functional form in Phase 2; real forms come later via a form plugin decision.
3. Global colours/fonts map 1:1 to Elementor **Site Settings** (§4.1/4.2 tokens) —
   no hard-coded hex in widgets beyond globals.
4. Each HTML section carries an `<!-- EL: … -->` comment (present in source) that
   states its widget recipe — conversion is mechanical, not creative.
5. Detail templates become **Elementor single templates** for CPTs
   (artwork, collection, event, exhibition, project, book, poem) using the same
   widget recipes with dynamic-ready structure (free-version compatible).

### 9.2 Mapping table (pattern → free widgets)

| Pattern | Native recipe |
|---|---|
| Cinema hero | Container(ink, min-h) + Image(abs, cover) + Heading + Text + Button×2 + Icon(scroll cue) |
| Door list rows | Container(repeater-like) — per row: Heading link + Text; preview image via Image hover note* |
| Asymmetric works grid | Container grid + Columns (varied widths) + Image + Heading + Text |
| Counter band | 3× Counter widget |
| Marquee | Text Editor row + `marquee` class in Additional CSS (site-wide CSS holds keyframes) |
| Process steps | Icon List (numbered icons) |
| Timeline | Icon List rows / Heading+Text stack per row |
| Accordion FAQ | Accordion widget |
| Commissions steps | Tabs widget |
| Video plates | Video widget (poster) / Image + link |
| Forms | **Static HTML inside Text Editor** (the single exception) |
| Footer/Header | Elementor Theme Builder locations (header/footer templates) |

*Free-version limitation: hover-swap images degrade to static images — noted in QA.

### 9.3 Workflow
1. Approve design (this document, Phase 1 pages) → freeze patterns in `elements.html`.
2. Export Site Settings JSON (colours/fonts) → import into staging.
3. Convert header + footer → Theme Builder templates.
4. Convert pages pillar-by-pillar (Artworks → Biya Jee → Verha → Programme → Studio →
   Info) into template JSON files under `theme-v4/elementor/*.json`.
5. Each JSON validated: no `html` widget except TextEditor form blocks; no Pro tags.
6. QA per §10 → handoff package (JSON + import notes).

## 10. QA Checklist (both phases)
- [ ] 37 pages resolve; nav active states correct; no orphan links
- [ ] 360/768/1024/1440 screenshots pass; no horizontal scroll
- [ ] Keyboard-only walkthrough; Escape closes menu/lightbox
- [ ] Reduced-motion respected; Lighthouse a11y ≥ 95
- [ ] One h1/page; titles/descriptions unique
- [ ] Elementor JSON: free widgets only; forms as TextEditor static HTML; globals used

## 11. Placeholder Register (replace before launch)
| Token | Where | Replace with |
|---|---|---|
| `hello@biyasartgallery.com` | footer, visit, press | Verified email |
| `+92 3XX XXXXXXX` | visit | Verified phone/WhatsApp |
| `House No. · Street · Lahore` | footer, visit | Verified address |
| Hours `Tue–Sun · 11:00–19:00` | footer, visit | Verified hours |
| `CAT. REF PENDING` captions | all catalogue pages | Verified catalogue data |
| Coordinates `N 31.5497° E 74.3436°` | home hero meta | Verified or remove |

## 12. Build Phases
- **Phase 1 (this delivery):** master plan + 37 static pages + assets. ✅
- **Phase 2 (after approval):** Elementor Site Settings + header/footer templates + 37 page JSONs.
- **Phase 3:** WordPress CPT wiring, dynamic loops, form plugin decision, media import.

## 13. Source Assets Register
`assets/img/` — 36 renamed studio files: `calligraphy-01…05`, `calligraphy-horse`,
`contemporary-calligraphy`, `gold-calligraphy`, `kaaba-light`, `kaaba-mixed-media`,
`ya-ali`, `surah-rehman-handmade`, `shafaq-e-tishnagi`, `studio-01…13` (recent works,
photographed 2026-08-24), `punjab-fields/-courtyard/-sunset`, `walled-city`,
`gallery-installation`, `golden-leaves-interior`, `minimal-texture-interior`,
`biya-jee-portrait`, `biya-interview`, `biya-gallery-brand-hero`.
All treated as Pending Verification for public catalogue claims.

— *End of plan. Approve Phase 1 to unlock Phase 2 (Elementor JSON conversion).*
