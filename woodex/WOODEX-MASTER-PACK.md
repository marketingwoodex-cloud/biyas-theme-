# WOODEX INTERIOR — WEBSITE MASTER PACK
### Linoxa-replica design system · Full IA · Page blueprints · Blog system · SEO map · Conversion · 8-week rollout

**Companion documents**
`WOODEX-WEBSITE-BLUEPRINT.md` — sitemap rationale, service page copy, brand voice checklist, open decisions
`DESIGN-SYSTEM.md` — implemented token reference as built

This pack covers what those two do not: **measured Linoxa tokens, the motion spec
sheet, the modular blog system, the complete keyword map, and the 8-week plan.**

---

# 1. DESIGN SYSTEM — LINOXA REPLICA

## 1.1 Typography tokens — measured from the reference

Values below are read directly from the Linoxa style guide. Nothing is estimated.

| Role | Size | Line height | Weight | Woodex tracking |
|---|---|---|---|---|
| H1 | `5rem` | `112.5%` | **500** | `-0.024em` |
| H2 | `2.812rem` | `122%` | **500** | `-0.018em` |
| H3 | `1.875rem` | `133%` | **500** | `-0.012em` |
| H4 | `1.562rem` | `128%` | **500** | `-0.01em` |
| H5 | `1.25rem` | `150%` | **500** | `0` |
| H6 | `1.125rem` | `155%` | **400** | `0` |
| Body | `1rem` | `162%` | **400** | `0` |
| Sub text | `0.875rem` | `185%` | **400** | `0` |
| Button | `0.9375rem` | `162%` | **500** | `0` |

**Three rules that carry most of the look:**
1. **Headings are weight 500.** Never 600 or 700. This single value separates
   "architectural" from "shouty".
2. **Line heights are loose** — 112.5% on a 5rem headline is generous. Tight
   leading is the most common way to make a premium layout feel cramped.
3. **No uppercase micro-type, no monospace.** Linoxa uses neither. Eyebrows are
   sentence-case sans at 0.875rem.

**Font strategy.** One modern grotesk across the whole system, hierarchy carried
by weight + scale + tracking. `[Match Linoxa: exact family is licensed — Inter
Tight is the closest metric-compatible open substitute and is what is implemented.]`

## 1.2 Colour tokens

**Linoxa reference palette (measured):**
`#000000` Black · `#111111` Jet Black · `#525252` Charcoal Gray · `#c0c0c0` Silver
`#0f1e36` Deep Navy · `#fcf2e8` Light Beige · `#e3e1e1` Light Gray · `#d9d9d9` Deep Gray

**Woodex translation** — same structural logic (near-black ground, warm light
ground, one accent), retuned to the brief's charcoal + bronze:

| Token | Value | Role | Reasoning |
|---|---|---|---|
| `--ink` | `#1C1C1C` | Primary dark ground | Charcoal, not `#000`. True black crushes shadow detail in interior photography |
| `--soot` | `#262523` | Second dark ground | Two dark sections can sit adjacent without a border |
| `--char` | `#33312E` | Card surface on dark | Lifts without going grey |
| `--bone` | `#F7F5F2` | Primary light ground | Off-white. Photography sits on it without a cold seam |
| `--oat` | `#EFEBE5` | Third ground | Page can breathe twice without repeating |
| `--sand` | `#DAD4CC` | Borders, rules | Reads as a drawn line, not a UI border |
| `--slate` | `#3A3A3A` | Body copy on light | 9.4:1 |
| `--clay` | `#6E6A65` | Muted copy | 4.6:1 on off-white — AA at 16px |
| `--bronze` | `#A9764B` | **Sole accent** | Cap at **3% of any viewport** |
| `--bronze-light` | `#C79A6D` | Accent on dark | Base bronze loses contrast on charcoal |
| `--mist` | `#FFFFFF` | Card surface on light | A surface, never a page ground |
| `--error` | `#B4472F` | Form invalid | Rust, not red — belongs to the palette |

> **The 3% rule.** Bronze appears on: the primary button, the active indicator,
> one accent word per section, hover states. Nothing else. Accent scarcity is the
> whole difference between premium and themed.

## 1.3 Spacing scale

Base unit **4px**. Steps: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 176`

| Application | Value |
|---|---|
| Section padding (vertical) | `clamp(4.5rem, 9vw, 9rem)` |
| Page gutter | `clamp(1.25rem, 4.4vw, 5.5rem)` |
| Grid gap | `clamp(1rem, 2vw, 2rem)` |
| Card padding | `clamp(1.25rem, 2.2vw, 2rem)` |
| Eyebrow → heading | `24px` |
| Heading → body | `20px` |
| Body → CTA | `32px` |
| List item gap | `12px` |

## 1.4 Grid & breakpoints

| | |
|---|---|
| Container max | `1440px` |
| Columns | 12 desktop · 6 tablet · 4 mobile |
| Breakpoints | `360` · `768` · `1024` · `1440` |
| Max text measure | `72ch` body · `18ch` display headline |

## 1.5 Radius & shadow

| Token | Value |
|---|---|
| `--r-sm` | `2px` |
| `--r-md` | `4px` |
| `--r-lg` | `4px` |
| `--r-xl` | `6px` |
| Buttons | `999px` (pill) |

> Radius is deliberately **slight**. The brief asks for "sharp edges or slight
> rounding"; 16–24px cards read consumer-soft against an executive positioning.

| Shadow | Value | Use |
|---|---|---|
| `sm` | `0 1px 2px rgba(28,28,28,.04), 0 2px 8px rgba(28,28,28,.04)` | Resting cards |
| `md` | `0 2px 4px rgba(28,28,28,.04), 0 12px 28px rgba(28,28,28,.07)` | Hovered cards |
| `lg` | `0 4px 8px rgba(28,28,28,.05), 0 28px 64px rgba(28,28,28,.12)` | Modals |

Shadows are **charcoal-tinted, never neutral black** — a neutral shadow under a
warm off-white card turns grey and dirty.

## 1.6 Component inventory

| Component | Spec |
|---|---|
| **Button — primary** | Pill · ink fill · bone text · bronze fill rises on hover · arrow badge rotates 45° |
| **Button — secondary** | Pill · 1px hairline · transparent · fill rises on hover |
| **Button — ghost** | No border · underline sweeps from left |
| **Button anatomy** | Label left, filled circular arrow badge right. Badge is the highest-contrast object — it is what the eye targets |
| **Input** | Underline only, no box. Height `48px`. Floating label. Focus = bronze underline |
| **Input error** | Underline `--error` + message below at `0.875rem/185%` |
| **Select** | Same underline treatment, custom chevron |
| **Chip / filter** | Pill, 1px sand border, `0.9375rem/500`. Active = ink fill, bone text |
| **Card — service** | `--r-md`, white on light, `shadow-sm`, lift 3px + `shadow-md` on hover |
| **Card — portfolio** | Image 4:3, caption below. Hover: image scale `1.03`, caption slides up 4px |
| **Card — blog** | Image 16:9, category chip, title, read time |
| **Accordion** | Full-width row, `+`→`×` rotate, grid-rows `0fr→1fr` expand |
| **Navbar** | Sticky. Transparent over hero → ink + blur after 40px. Hides on scroll-down past 420px |
| **Badge** | `0.875rem`, sand border, pill |
| **Data pill** | Figure at weight 500 in text colour + descriptor in `--clay` |
| **Breadcrumb** | `<ol>`, `0.875rem`, `/` separator, current not linked |

## 1.7 Icon style

Thin-line, **1.5px stroke**, `20–24px` box, **square caps**.
Square rather than round because the brand is about joinery tolerances, not soft
edges. One family throughout (Lucide or equivalent). Never filled, never duotone.

**Social icons:** 2-letter monograms in 40px circles — not brand glyphs. Brand
glyphs import five foreign colour systems and instantly cheapen a restrained palette.

---

# 2. MOTION SPEC SHEET

## 2.1 Easing vocabulary — three curves, no improvisation

| Name | Curve | Use |
|---|---|---|
| `out-expo` | `cubic-bezier(.16, 1, .3, 1)` | Reveals. Fast in, long settle — content arrives *decided* |
| `in-out-quint` | `cubic-bezier(.76, 0, .24, 1)` | Curtains, slide changes. Symmetrical = mechanical = precise |
| `soft` | `cubic-bezier(.25, .46, .45, .94)` | Parallax, drift. Never noticed, only felt |

## 2.2 Timing

| Token | Duration |
|---|---|
| Micro (hover, focus) | `240ms` |
| Base (reveal, expand) | `720ms` |
| Scene (image wipe, slide) | `1400ms` |
| Grid stagger | `70ms` per item, cap at 6 |

## 2.3 Trigger table

| Event | Behaviour | Duration / easing |
|---|---|---|
| **Section enter** | Fade + rise `24px` | `720ms` `out-expo` |
| **Trigger point** | `rootMargin: -8%` — fires *before* visible so content has settled by the time the eye lands | — |
| **Heading reveal** | Line-masked: each line slides up out of `overflow:hidden` | `950ms` `out-expo`, `90ms` stagger per line |
| **Grid stagger** | Children reveal in sequence | `70ms` increment, max 6 then simultaneous |
| **Image reveal** | `clip-path: inset(0 0 100% 0)` opens; image counter-scales `1.16 → 1` | `1250ms` `in-out-quint` |
| **Button hover** | Label rolls up to identical copy; badge rotates `45°`; fill rises from bottom | `550ms` / `600ms` `out-expo` |
| **Card hover** | Translate `-3px`, shadow `sm → md` | `500ms` `out-expo` |
| **Image hover** | Scale `1.03`, caption rises `4px` | `1400ms` / `500ms` `out-expo` |
| **Link hover** | Underline scales from left; on exit collapses to right | `500ms` `out-expo` |
| **Navbar** | Transparent → ink + `blur(16px)` at `40px`; hides on scroll-down past `420px`, returns on scroll-up | `400ms` `out-expo` |
| **Accordion** | `grid-template-rows: 0fr → 1fr`; icon rotates `45°` | `500ms` `out-expo` |
| **Page transition** | Fade out `200ms`, in `400ms` | `soft` |

## 2.4 Motion rules

1. **Text reveals are line-masked, never per-character.** Character stagger on
   display type hurts legibility and dates fast.
2. **Nothing auto-plays, nothing bounces, nothing loops** except one marquee band.
3. **Pinning is used once** on the whole site (Process), via `position: sticky`.
4. **Parallax never shows its frame edge** — image is 130% tall in a fixed frame,
   travelling ±8–14%, spring-damped so it lags scroll. The lag *is* the depth cue.
5. **Full `prefers-reduced-motion` path.** All transforms → `none`, all durations
   → `0.001ms`, clip-paths removed. The page must be complete without motion.

---

# 3. SITEMAP

> Full rationale, per-page purpose and CTA table: `WOODEX-WEBSITE-BLUEPRINT.md` §2.

**Core** `/` · `/services/` · `/portfolio/` · `/case-studies/` · `/case-studies/{slug}/` ·
`/process/` · `/about/` · `/blog/` · `/contact/` · `/request-proposal/` · `/thank-you/`

**Services** `/services/commercial-interior-design/` · `/services/office-interior-design/` ·
`/services/office-fit-out/` · `/services/retail-showroom-interior-design/` ·
`/services/turnkey-fit-out/` · `/services/3d-visualization/`

**Industries** `/industries/office-workspaces/` · `/industries/retail-stores-showrooms/` ·
`/industries/pharmacy-healthcare/` · `/industries/education-universities/` ·
`/industries/hospitality/` · `/industries/clinics-medical/`

**Cities** `/commercial-interior-design-lahore/` · `-karachi/` · `-islamabad/` ·
`-multan/` · `-faisalabad/`

**Two structural decisions, documented:**
- Service pages **nested** under `/services/` — builds a crawlable topical cluster
  with the hub passing authority down, and gives clean breadcrumbs.
- City pages **flat exact-match** — those pages exist to win one query
  (*"commercial interior design lahore"*), and exact-match URL still moves the
  needle for local commercial intent. Worth breaking URL symmetry once.

---

# 4. SECTION MOTIF LIBRARY

> Rule §0.8: *every section must be visually distinct.* This is the mechanism that
> guarantees it. Each homepage section is assigned a **different composition
> motif**. No two adjacent sections may share one.

| # | Section | Motif | Ground |
|---|---|---|---|
| 1 | Hero | Full-bleed image, copy bottom-left, oversized cropped wordmark | Ink |
| 2 | Trust bar | Single horizontal row, hairline dividers, no cards | Soot |
| 3 | Commercial outcomes | 4 columns joined by connector chevrons — reads as a **sequence**, not a menu | Bone |
| 4 | Featured case studies | Horizontal scroll / carousel, offset card heights | Bone |
| 5 | Service grid | Image panel left (sticky) + menu rows right, one container | Ink |
| 6 | Industries | Asymmetric mosaic, tiles of unequal span | Oat |
| 7 | Process timeline | Sticky heading + numbered vertical steps | Soot |
| 8 | Cost & quality control | Split: narrative left, sample BOQ table right | Bone |
| 9 | Testimonials | Single large quote, mono-scale, minimal frame | Ink |
| 10 | Final CTA | Full-bleed band, centred, single button | Bronze-tinted ink |

**No two adjacent sections share a ground colour.** Scrolling reads as moving
through rooms rather than down a page — this rule does more for perceived quality
than any single animation.

---

# 5. BLOG SYSTEM

## 5.1 Post page layout

| # | Section | Spec |
|---|---|---|
| 1 | **Hero** | Category chip · H1 (`t-h1`, max 18ch) · date · read time · author. No hero image above fold on mobile — it delays LCP for nothing |
| 2 | **Intro** | 2 short paragraphs at `t-lede`. Names the problem before the solution |
| 3 | **Table of contents** | Sticky left rail ≥1024px, collapsed accordion below. Active heading tracked by IntersectionObserver |
| 4 | **Body** | Modular blocks (§5.2). Max measure `72ch` |
| 5 | **Key takeaways** | Oat card, `list-ul`, 3–5 items. Placed at ~70% scroll depth |
| 6 | **FAQ** | Accordion + FAQPage schema |
| 7 | **CTA banner** | Full-bleed ink band, "Request a Proposal" |
| 8 | **Related posts** | 3-card grid, same category first |
| 9 | **Author box** | Avatar placeholder, name, role, one line |
| 10 | **Lead magnet** *(optional)* | Checklist download, email-gated. Use on cost/planning posts only |

## 5.2 Modular content blocks — 12

Each is a distinct visual motif. Rule: **never place two of the same block
consecutively**, and use **no more than 5 block types per article**.

| # | Block | When to use | Layout | Motion | Copy pattern | SEO note |
|---|---|---|---|---|---|---|
| 1 | **Problem / Solution split** | Opening an argument | 2 columns; left oat tint, right white; divider rule | Both fade-rise, right delayed `120ms` | *"What usually happens" / "What should happen"* | Long-tail question phrasing in the left heading |
| 2 | **Checklist card** | Actionable steps | White card, `list-ul` with bronze rules, `shadow-sm` | Stagger `70ms` per item | *"Before you sign, check:"* | Featured-snippet candidate — keep items ≤12 words |
| 3 | **Cost drivers table** | Any cost article | 3-col table, zebra oat rows, sticky header | Fade only — tables must not slide | *Driver / Impact / Typical range* | Table schema; put the primary keyword in the caption |
| 4 | **Do / Don't grid** | Corrective advice | 2 columns, bronze ✓ / clay ✗ | Alternate L/R entrance | Verb-first, ≤10 words per line | Naturally captures *"mistakes"* queries |
| 5 | **Step-by-step timeline** | Process explanation | Vertical, numbered `01–0n`, connector rule | Sequential reveal, `90ms` stagger | *"Step 3 — What you receive"* | HowTo schema candidate |
| 6 | **Material comparison** | Spec decisions | Card grid, swatch + name + spec + note | Grid stagger | *Material / Best for / Watch out for* | Long-tail material keywords |
| 7 | **Mini case study callout** | Proof mid-article | Ink band, image left, 3 stats right | Wipe on image, counter on stats | *"On a [size] sq ft [type] in [city]…"* | Internal link to the full case study |
| 8 | **Quote pull** | Break a long passage | Oversized `t-h3`, bronze left rule, no avatar | Line-mask reveal | Never adjectival. A specific claim only | — |
| 9 | **Mistakes to avoid** | BOFU / comparison | Numbered, each with a one-line fix | Stagger | *"Mistake 02 — …  The fix:"* | Captures *"problems"* and *"avoid"* intent |
| 10 | **KPI / impact panel** | Results | 3–4 stat columns, hairline dividers | Count-up on enter, once | Figure + short label | Use `[Metric Placeholder]` until verified |
| 11 | **Image + caption story** | Show, don't tell | Full-bleed image, caption in `t-meta` below-left | Clip-path wipe + counter-scale | Caption names material, place, decision | Descriptive alt with city where relevant |
| 12 | **Summary accordion** | Long reference posts | Collapsed sections, first open | `grid-rows` expand | Question-form headings | FAQPage schema if phrased as questions |

## 5.3 Categories

`Commercial Fit-Out` · `Office Design` · `Retail & Showroom Design` ·
`Cost & Planning` · `Process & BOQ`

## 5.4 Twelve-article launch plan

| # | Title | Primary keyword | Intent | Internal links | CTA placement |
|---|---|---|---|---|---|
| 1 | Office Fit-Out Cost in Pakistan: What Actually Drives the Number | office fit out cost pakistan | **MOFU** | Office Fit-Out, Request Proposal | After cost table + end |
| 2 | What Is a BOQ in an Interior Fit-Out? | what is boq interior | **TOFU** | Turnkey, Process | End only |
| 3 | How Long Does an Office Fit-Out Take? | office fit out timeline | **MOFU** | Office Fit-Out, Process | After timeline block |
| 4 | How to Choose an Interior Design Company in Pakistan | interior design company pakistan | **BOFU** | Services hub, About | Mid + end |
| 5 | Design-and-Build vs Split Contract: Which Costs Less? | design and build vs split contract | **BOFU** | Turnkey Fit-Out | After comparison table |
| 6 | Office Space Planning: How Many People Fit? | office space planning | **TOFU** | Office Interior Design | End only |
| 7 | Why 3D Renders Save Money on Site | 3d interior visualization | **MOFU** | 3D Visualization | After mini case study |
| 8 | Retail Store Layout: Designing the Customer Route | retail store layout design | **TOFU** | Retail & Showroom | End only |
| 9 | Change Orders: How to Stop a Fit-Out Budget Drifting | fit out change order | **MOFU** | Process, Turnkey | Mid + end |
| 10 | Commercial Flooring: Which Finish Survives Ten Years? | commercial flooring pakistan | **TOFU** | Office Fit-Out | End only |
| 11 | Fitting Out an Occupied Office Without Stopping Work | occupied office fit out | **MOFU** | Office Fit-Out | After timeline |
| 12 | What to Send Before Asking for a Fit-Out Quote | interior design quote pakistan | **BOFU** | Request Proposal | Top + end |

**Cadence:** 2 per week for 6 weeks. Publish BOFU first (4, 5, 12) — those convert
while the TOFU pieces are still earning rankings.

---

# 6. SEO KEYWORD MAP

## 6.1 Mapping table

One primary keyword per URL. No two pages share a primary — that is what prevents
cannibalisation.

| Page | Primary | Secondary |
|---|---|---|
| `/` | commercial interior design pakistan | interior design company pakistan, fit out company |
| `/services/` | interior design services pakistan | commercial design services |
| `/services/commercial-interior-design/` | commercial interior design | commercial interior designer, corporate interior design |
| `/services/office-interior-design/` | office interior design lahore | corporate office design, workspace design pakistan |
| `/services/office-fit-out/` | office fit out lahore | office fit out company, office renovation pakistan |
| `/services/retail-showroom-interior-design/` | showroom interior design lahore | retail fit out, shop interior design pakistan |
| `/services/turnkey-fit-out/` | turnkey interior solutions pakistan | design and build interior, turnkey fit out company |
| `/services/3d-visualization/` | 3d interior visualization pakistan | interior rendering services, 3d interior design |
| `/portfolio/` | interior design portfolio pakistan | commercial interior projects |
| `/case-studies/` | commercial fit out case studies | office fit out project |
| `/process/` | interior fit out process | how interior fit out works, boq process |
| `/about/` | woodex interior | commercial interior design studio lahore |
| `/blog/` | interior design blog pakistan | fit out guides |
| `/commercial-interior-design-lahore/` | commercial interior design lahore | interior design company lahore, fit out lahore |
| `/commercial-interior-design-karachi/` | commercial interior design karachi | interior design company karachi |
| `/commercial-interior-design-islamabad/` | commercial interior design islamabad | interior design company islamabad |
| `/commercial-interior-design-multan/` | commercial interior design multan | interior designer multan |
| `/commercial-interior-design-faisalabad/` | commercial interior design faisalabad | interior designer faisalabad |
| `/industries/office-workspaces/` | office interior design company | workspace fit out |
| `/industries/retail-stores-showrooms/` | retail interior design company | store fit out pakistan |
| `/industries/pharmacy-healthcare/` | pharmacy interior design | medical store interior design |
| `/industries/education-universities/` | school interior design pakistan | university interior fit out |
| `/industries/hospitality/` | restaurant interior design pakistan | cafe fit out |
| `/industries/clinics-medical/` | clinic interior design pakistan | medical centre fit out |

## 6.2 Cannibalisation guards

| Risk | Guard |
|---|---|
| `office-interior-design` vs `office-fit-out` | **Design page** = planning, layout, aesthetics, 3D. **Fit-out page** = construction, programme, site. Each links to the other with a one-line "you may want the other one" |
| Service page vs city page | Service pages are **city-agnostic**. City modifiers live only on city pages |
| Service page vs industry page | Service = *what we do*. Industry = *who we do it for*, with sector-specific constraints |
| City pages vs each other | ≥80% unique content, verified by diff. If you cannot write 150 genuinely different words about a city, **do not publish it** |

## 6.3 On-page rules

1. One search intent per URL.
2. Exactly one `<h1>`, containing the primary keyword, phrased naturally.
3. Primary keyword in: title, H1, first 100 words, one H2, meta description, URL.
4. Title ≤60 chars, description ≤160. Unique across every URL.
5. Alt text describes the space and city — *"reception desk in walnut, corporate
   office Lahore"*. Never `image1`, never a keyword list.
6. Descriptive internal anchors — *"office fit-out process"*, not *"click here"*.
7. Keyword density is not a target. If a sentence reads oddly, rewrite it.

## 6.4 Schema plan

| Schema | Pages |
|---|---|
| `Organization` + `LocalBusiness` | Sitewide. **Lahore address only** |
| `WebSite` | Sitewide |
| `Service` | Each service page |
| `FAQPage` | Home, all services, all cities, all industries, process, blog posts with FAQ |
| `BreadcrumbList` | Every page below root |
| `ItemList` | Services hub, portfolio, case study index, blog hub |
| `Article` | Blog posts |
| `CreativeWork` | Case studies |
| `HowTo` | Process page, step-by-step articles |
| `AggregateRating` / `Review` | **Do not implement** until real attributable reviews exist |

---

# 7. CONVERSION SYSTEM

> Full field spec, validation and reassurance-panel content:
> `WOODEX-WEBSITE-BLUEPRINT.md` §5. **Implemented and live at `/request-proposal`.**

**Summary of the qualification logic:**
- **Budget is required** — the single highest-value gatekeeping field. A
  *"Not sure yet"* option prevents blocking genuine early-stage enquiries; track
  that segment separately.
- **Area is required** and carries the 1,000 sq ft qualifier inline, so filtering
  happens before submission rather than in a phone call.
- Single column. Two columns measurably halves mobile completion.
- Submit reads **"Request Proposal"** — never "Submit", never "Send".
- Success routes to `/thank-you/` — a real URL, so GA4 and Ads can fire a conversion.

**Lead routing**

| Trigger | Action |
|---|---|
| Submit | POST to CRM/email · redirect `/thank-you/` · GA4 `form_submit` |
| Budget ≥ PKR 15M | Flag **priority** · route to director |
| Budget "Not sure yet" | Route to qualification call queue, separate segment |
| Area < 1,000 sq ft | Flag for triage — not auto-rejected |
| City ≠ Lahore | Attach travel/logistics note to the brief |
| No response in 2h | Escalate |

**Auto-reply template** — `[Name]`, thank you · what happens next (3 steps) ·
who will call · what to have ready (floor plan, headcount, target date) · direct
line and WhatsApp. No marketing footer, no newsletter signup.

---

# 8. PORTFOLIO PLACEHOLDER FRAMEWORK

## 8.1 Data fields

```
Project {
  name            "[Project Name]"
  category        Office | Retail | Pharma | Education | Hospitality | Renovation
  city            Lahore | Karachi | Islamabad | Multan | Faisalabad
  size            "[Size] sq ft"
  year            "[Year]"
  duration        "[Duration] weeks"
  servicesUsed    string[]        → service slugs
  summary         "[One-line summary]"
  challenge       "[Client's business problem]"
  solution        "[Design and delivery response]"
  results         Result[]        { value, label, verified: boolean }
  gallery         Image[]         6–12 slots
  status          "placeholder" | "live"
}
```

## 8.2 Six placeholder entries

| # | Card label | Category | City |
|---|---|---|---|
| 1 | `[Project Name]` — Office Fit-Out — Lahore — `[Size]` | Office | Lahore |
| 2 | `[Project Name]` — Corporate Office — Karachi — `[Size]` | Office | Karachi |
| 3 | `[Project Name]` — Showroom Fit-Out — Lahore — `[Size]` | Retail | Lahore |
| 4 | `[Project Name]` — Retail Store — Islamabad — `[Size]` | Retail | Islamabad |
| 5 | `[Project Name]` — Pharmacy Interior — Lahore — `[Size]` | Pharma | Lahore |
| 6 | `[Project Name]` — Campus Interior — Multan — `[Size]` | Education | Multan |

Covers every filter with ≥1 result and four of five cities.

## 8.3 Honest placeholder rules

- Missing image → neutral panel at the correct ratio + *"Project photo pending"*.
  **Never a broken image, never a stock substitute.**
- Unverified metric → greyed + *"pending client verification"*.
- Case study pages carry: *"This project record will be replaced with full details
  and photography upon launch."*
- Placeholder projects are **excluded from `sitemap.xml`** until `status: "live"`.
- **No invented client names.** Format: `Client Name — [Industry], [City]`.

---

# 9. 8-WEEK ROLLOUT

### Weeks 1–2 — Foundation
- Brand messaging finalisation · sitemap sign-off
- Design tokens, component library, motion system (Linoxa replica)
- Homepage wireframe blueprint · service page template blueprint
- **Gate:** tokens approved, no page built before this

### Weeks 3–4 — Core + services
- Home, About, Process, Contact
- **Request Proposal + Thank You built FIRST** — the conversion page is the
  product; every other page is a route to it
- 6 service pages, each with unique section composition
- SEO mapping applied, schema implemented
- **Gate:** form submits, validates, and fires a GA4 conversion

### Weeks 5–6 — Proof
- Portfolio grid + filter · case study template
- 3–6 placeholder case studies populated
- Internal linking map wired: service ↔ case study ↔ request proposal
- **Gate:** every service page links to ≥2 case studies

### Weeks 7–8 — Expansion
- 6 industry pages *(pharmacy, education, hospitality, clinics `noindex` until proof)*
- 5 city pages, uniqueness diff-verified
- Blog template + 12 modular blocks + first 6 article outlines
- Lighthouse, schema validation, GA4 + Search Console
- **Gate:** pre-launch checklist (blueprint §10.3) fully green

---

# 10. QUALITY CHECKLIST

- [ ] Every page has exactly one primary CTA — Request a Proposal
      *(`/contact` is the documented exception: phone first)*
- [ ] Every section uses a different composition motif (§4)
- [ ] No two adjacent sections share a ground colour
- [ ] Copy is outcome-based and commercial-first; no unqualified adjectives
- [ ] No two pages share a primary keyword
- [ ] City pages ≥80% unique, verified by diff
- [ ] No invented metric, testimonial, client name or logo anywhere
- [ ] No address outside Lahore, including in schema
- [ ] Placeholder projects excluded from sitemap
- [ ] Headings weight 500; no uppercase micro-type; no monospace
- [ ] Bronze ≤3% of any viewport
- [ ] Contrast AA · focus visible · keyboard path through form and nav
- [ ] `prefers-reduced-motion` fully honoured
- [ ] Lighthouse mobile ≥90 Performance, 100 Accessibility, 100 SEO

---

**End of master pack.**
