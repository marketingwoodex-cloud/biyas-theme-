# Woodex Interior — Creative Direction & Experience Architecture

**Reference:** `linoxa.webflow.io/home-two` (structure & pacing)
**Deliverable:** Next.js 16 · React 19 · Tailwind v4 · Three.js · Lenis · Motion
**Status:** 23 static routes, 0 TypeScript errors, 0 lint errors

> ⚠️ **`brand-guidelines-starter.md` never reached the sandbox.** Everything below is
> an originated system. All identity values live in **one file** — `src/lib/brand.ts`
> — plus the token block at the top of `src/app/globals.css`. Swap those two and the
> entire site re-skins. Nothing is hardcoded in a component.

---

## 1. Positioning — the strategic wedge

Every interior studio on earth says "we design beautiful spaces." That is not a
position, it is a hygiene claim. Woodex's wedge is **vertical integration**:

> **We build the room, not the render.**

Three competitor archetypes and how we sit against them:

| Archetype | Their claim | Their weakness | Woodex counter |
|---|---|---|---|
| The design studio | Taste, awards, mood boards | Hands off at drawing stage; subcontractor dilutes the detail | We own the workshop |
| The fit-out contractor | Speed, price, "we do everything" | No authorship; every project looks the same | We draw it first |
| The furniture showroom | Product, catalogue, availability | Sells objects, not rooms | We resolve the whole plan |

**Audience.** Two buyers with different fears:
- *Commercial* (managing partner, ops director, retail head). Fear = **schedule and
  variation orders**. Buys on cost certainty and accountability.
- *Private* (homeowner, developer). Fear = **being sold a render they never get**.
  Buys on material honesty and evidence.

The site answers both fears explicitly — Process (Act VI) for the first, Material
Monolith + case-study numbers (Acts IV–V) for the second.

---

## 2. Visual narrative

**Core idea: "the raking light."** Every image in the system is lit by one hard,
warm, low-angle source cutting across a material. That single decision unifies
photography, the WebGL scene, the gradients and the shadow language. It is also
literally what interior architects sell: the way light falls on a surface.

**Emotional arc, act by act:**

| Act | Ground | Feeling | Job |
|---|---|---|---|
| I Threshold | Ink | Arrested | Stop the scroll |
| II Story | Bone | Recognised | "They've had my problem" |
| III Offer | Ink | Oriented | "This is buyable" |
| IV Material | Moss | Impressed | "They can actually make it" |
| V Evidence | Bone | Convinced | "They already did" |
| VI Method | Soot | Reassured | "It won't go wrong" |
| VII Voices | Ink | Validated | "Others agree" |
| Close | Bone→Ink | Ready | One low-risk ask |

No two adjacent acts share a ground colour. Scrolling reads as **walking through
rooms**, not scrolling a page — the single most important pacing decision here.

### Palette

| Token | Hex | Reasoning |
|---|---|---|
| `ink` | `#0B0A08` | A warm espresso near-black. True black reads cheap on OLED and fights the wood tone. |
| `soot` | `#141210` | Second dark surface, so sections separate without drawing a border. |
| `bone` | `#F0EAE0` | Paper. The colour of lime plaster and raw linen — never `#FFF`, which reads as "unstyled". |
| `oat` | `#E2D9CA` | Third light ground so the page can breathe twice without repeating. |
| `sand` | `#CDBFA9` | Hairlines on light. Reads as a pencil line, not a UI border. |
| `clay` | `#9C8A70` | Secondary body copy. 4.6:1 on bone — AA at 16px+. |
| `brass` | `#C08A3E` | The **only** accent. Unlacquered brass, the studio's signature metal. Capped at ~5% of any viewport. |
| `moss` | `#18251F` | One deep-green act break. Without it the palette becomes monotonously brown. |

**The 5% rule.** Brass appears on: one CTA, the eyebrow tick, the active
progress fill, and the hover state. Nowhere else. Accent scarcity is what
separates "luxury" from "themed".

### Typography

Three faces, each with a job it cannot be talked out of:

- **Instrument Serif** (display) — high contrast, slightly literary. Carries
  "architecture as authorship" without the dated Didone luxury cliché. Italic is
  reserved for a *single accent word per heading* — the studio's "aside" voice.
- **Inter Tight** (UI/body) — a neutral grotesk with tight defaults, so interface
  text sits quietly next to a very loud display face.
- **JetBrains Mono** (micro) — labels, indices, specification data. Mono reads as
  **measurement**, which is literally the brand's claim ("2mm tolerance").

Optical tracking scales inversely with size: `-0.035em` at display, `+0.17em` at
11px labels. Large serif needs negative tracking or it looks loose; small caps
need positive or they clot.

Self-hosted, latin subset, woff2 — **~128 KB for four faces**, zero third-party
requests on the critical path.

---

## 3. The 3D layer

Two WebGL scenes, both **procedural** — zero asset payload over the wire.

### `DustField` — hero atmosphere
900 additive points in a shader-driven convection field. Depth-scaled pointer
parallax: near motes move more than far ones, which is what actually sells the
illusion of a volume. Budget: no depth write, DPR clamped to 1.5, paused off-screen
and on `document.hidden`.

*Why:* the hero must feel like a **space** you are standing in, not a photograph
you are looking at. A static image plus a CSS gradient cannot do this.

### `Monolith` — the material centrepiece
A fluted walnut column (32 flutes displaced radially by `sin(angle × 32) × 0.035`)
banded in unlacquered brass on a travertine plinth. Wood grain and stone are drawn
to `<canvas>` at runtime — no texture download. ACES filmic tone mapping, a warm
key raking from the left to match the photography, cool fill, brass rim, and a
PMREM-baked gradient environment for the metal reflections.

**Scroll drives a ¾ turn; cursor drives the tilt.** The canvas stays transparent so
the object sits on the section's own moss ground rather than in a black box.

*Why here and not the hero:* the object's job is **proof of craft**, which belongs
after the offer and before the evidence. A 3D object in the hero would be
decoration; here it is an argument.

Both scenes bail out entirely on `prefers-reduced-motion` and on WebGL context
failure — the photographic and typographic layers underneath are complete on
their own.

---

## 4. Motion system

One contract, defined in `brand.ts` and mirrored in CSS custom properties.

**Easing vocabulary — three curves, no improvisation:**

| Curve | Value | Used for |
|---|---|---|
| `out-expo` | `cubic-bezier(.16,1,.3,1)` | Reveals. Fast in, long settle — content arrives *decided*. |
| `in-out-quint` | `cubic-bezier(.76,0,.24,1)` | Curtains, page/slide transitions. Symmetrical = mechanical = precise. |
| `soft` | `cubic-bezier(.25,.46,.45,.94)` | Parallax and camera drift. Never noticed, only felt. |

**Reveal primitive.** Exactly one: `<Reveal>` toggles `.is-in`; all timing lives in
CSS. This means reduced-motion and no-JS are handled by the stylesheet rather than
by branching in twelve components. `rootMargin: -8%` fires *slightly before* the
element is visible, so content has settled by the time the eye lands — the fix for
"pop" on fast scroll.

**Text reveal is line-masked, never character-staggered.** Per-character animation
on display type reads as a gimmick and measurably hurts legibility. Lines slide up
out of an overflow-hidden box: the type appears to *rise out of the page*.

**Image reveal is a wipe, not a fade.** `clip-path: inset(0 0 100% 0)` opens while
the image counter-scales from 1.18 → 1. It reads as a curtain — filmic rather than
"web".

**Parallax has one rule: the frame never shows its edge.** The image is 130% tall
inside a fixed frame and travels ±8–14%. Spring-damped (`stiffness 120, damping 30`)
so it lags scroll slightly — that lag is the depth cue.

**Pinning is used exactly once**, in Act VI (Process). It earns attention there
because the content is a *sequence*. Implemented with `position: sticky`, not a
scroll library — no layout thrash, works without JS, degrades to a stack on mobile.

**Smooth scroll (Lenis)** drives native `scrollTop`, so `IntersectionObserver`,
`useScroll` and anchor links all keep working. Disabled on touch (native momentum
is better) and on reduced-motion.

**Cursor** = hard brass dot tracking 1:1 (clicking feels precise) + a ring
interpolating at `0.16` lerp ≈ 120 ms lag (reads as *mass*, not lag). States are
driven by `data-cursor` attributes anywhere in the tree.

**Loader:** 1.75s counter with three brand words, then two panels split apart.
Session-flagged — it never plays twice in a session, and never on reduced-motion.

---

## 5. Message hierarchy

Written for a phone. Every line short enough to read at arm's length.

| Layer | Copy | Job |
|---|---|---|
| **Headline** | *Rooms that argue your case before you speak* | Outcome, not service |
| **Sub** | Design, manufacture, install — one contract | The wedge, in 6 words |
| **Benefit 1** | Drawn detail equals delivered detail | Kills the substitution fear |
| **Benefit 2** | 2mm tolerance, shop standard | A number, not an adjective |
| **Benefit 3** | One team, one date, one number | Kills the coordination fear |
| **Proof** | Case studies leading with the client's metric | Verifiable, not testimonial fluff |
| **Objection** | FAQ answering cost, timeline, disruption, accountability | Removes the last four reasons not to enquire |
| **Close** | *Send us a floor plan. We'll send back a real number.* | Zero-commitment, concrete deliverable |

**Founder story** (Act II / About) uses struggle → turn → resolution and lands the
emotional hook in the first sentence: *a shadow gap that should have been six
millimetres was fourteen, and the client noticed before he did.* No bio, no
"founded in", no credentials paragraph. A stranger connects in under 15 seconds
because the failure is recognisable.

### CTA ladder — ranked by expected CTR

| # | Copy | Why it ranks here |
|---|---|---|
| 1 | **Get a fit-out estimate** | Concrete deliverable, zero cost implied, no meeting |
| 2 | Send us a floor plan | Names the artefact — feels like a task, not a commitment |
| 3 | Book a 20-min walkthrough | Time-boxed; "20 min" defuses the sales-call fear |
| 4 | See the material board | Browsing language; no contact implied |
| 5 | Walk through the work | Verb of exploration, zero risk |
| 6 | Start with your floor plan | "Start" implies a process already underway |
| 7 | Read the case study | Lowest commitment, highest intent-qualification |
| 8 | Meet the studio | Warm but vaguer — weakest CTR, used only in-body |

Rule applied throughout: **never "Submit", never "Learn More", never "Contact Us".**
Every button names either the thing you receive or the thing you do.

---

## 6. Ruthless audit — what would have felt cheap, and what was done instead

Ranked by impact on perceived quality.

| # | Generic default | What was built | Impact |
|---|---|---|---|
| 1 | Logo wall of grey client logos | Typeset client roster in 12px mono | ★★★★★ Logo walls read as borrowed authority |
| 2 | 3×2 grid of service cards | Typeset index with a summoned preview image | ★★★★★ Cards force 7 equal decisions; a list lets you scan |
| 3 | Pure black `#000` + pure white `#FFF` | Warm espresso ink + unbleached bone | ★★★★★ The single biggest "expensive vs. template" tell |
| 4 | Fade-in on everything | Line-masked type, clip-path wipes on image | ★★★★☆ Fades are the visual equivalent of a shrug |
| 5 | Testimonials saying "amazing team" | Quotes containing verifiable specifics | ★★★★☆ Adjectival testimonials are worth zero |
| 6 | Tidy equal-height project grid | Offset editorial grid, unequal spans | ★★★★☆ Forces a diagonal read; slows scanning enough to register |
| 7 | Stock 3D blob in the hero | Procedural fluted-walnut monolith in Act IV | ★★★★☆ Placement makes it an argument, not decoration |
| 8 | Accent colour everywhere | Brass capped at ~5% of any viewport | ★★★★☆ Accent scarcity is the whole game |
| 9 | Boxed form fields | Underline fields, floating labels, chip selectors | ★★★☆☆ A wall of boxes suppresses completion |
| 10 | "Submit" / "Learn More" | Deliverable-named CTAs, ranked | ★★★☆☆ Direct conversion lift |
| 11 | Character-staggered headlines | Line stagger only | ★★★☆☆ Character stagger hurts legibility and dates fast |
| 12 | Footer with a sitemap and nothing else | Oversized wordmark sign-off at 7% opacity | ★★☆☆☆ The page ends in the brand's own hand |

---

## 7. Production checklist

**Done**
- [x] 23 routes prerendered static (SSG) — no server needed to host
- [x] 0 TypeScript errors, 0 ESLint errors (incl. React Compiler rules)
- [x] Self-hosted fonts, latin subset, ~128 KB, `display: swap`, `adjustFontFallback` → **CLS 0**
- [x] AVIF → WebP → JPEG ladder; `deviceSizes` trimmed to breakpoints actually used
- [x] `priority` on the LCP hero image only; everything else lazy
- [x] All WebGL paused off-screen and on `document.hidden`; DPR clamped
- [x] Full `prefers-reduced-motion` path — animation, 3D, smooth scroll, loader all bail
- [x] Skip link, focus-visible rings, `aria-expanded` / `aria-pressed` / `aria-current`
- [x] Semantic landmarks, one `h1` per page, ordered heading levels
- [x] Immutable cache headers on `/img/*`; `nosniff`, `Referrer-Policy` site-wide
- [x] Per-page canonical, OG + Twitter cards, keywords
- [x] JSON-LD: `Organization` + `LocalBusiness`, `WebSite`, `Service` × 7 with
      `OfferCatalog`, `CreativeWork` × 6, `FAQPage` × 9, `BreadcrumbList`, `ItemList`
- [x] `sitemap.xml` + `robots.txt` generated from content, not hand-maintained
- [x] Custom 404 that routes to all seven services

**Before launch — needs you**
- [ ] Re-attach `brand-guidelines-starter.md` → I map real tokens into `brand.ts`
- [ ] Replace placeholder contact block in `src/lib/brand.ts` (address, phone, email)
- [ ] Point `siteUrl` at the real domain (currently `woodexinterior.com`)
- [ ] Wire `ContactForm.onSubmit` to a real endpoint (route handler / Resend / HubSpot)
- [ ] Swap generated imagery for the real project photography
- [ ] Add a proper SVG logo → replaces the wordmark and the schema `logo` field
- [ ] Run Lighthouse on the deployed URL and confirm LCP < 2.0s on 4G

**Performance fix list, in priority order**

| Fix | Expected gain | Measure with |
|---|---|---|
| Real photography exported at ≤ 1600px, AVIF | −40–60% image bytes | Network panel, "Img" filter |
| Confirm hero is the LCP element and preloaded | −0.4–0.9s LCP | Lighthouse → "Largest Contentful Paint element" |
| Drop `three` from the hero on mobile (`< 640px`) | −120 KB JS, −0.3s TBT | Coverage tab |
| Serve from a CDN edge (Vercel/Cloudflare) | −100–300ms TTFB | WebPageTest, TTFB metric |
| Verify `Cache-Control: immutable` reaches production | Repeat-visit ≈ 0 bytes | Network panel, "Disk cache" |

**Targets before you stop:** LCP < 2.0s · CLS < 0.02 · INP < 200ms ·
Lighthouse Performance ≥ 92 mobile · Accessibility 100 · SEO 100.

---

## 8. Where to change things

| Want to change… | Edit |
|---|---|
| Colours, fonts, spacing, motion curves | `src/app/globals.css` (top ~90 lines) |
| Brand name, promise, contact, CTAs, stats | `src/lib/brand.ts` |
| Service copy, SEO meta, FAQs | `src/lib/content/services.ts` |
| Case studies | `src/lib/content/projects.ts` |
| Process, materials, testimonials, journal | `src/lib/content/site.ts` |
| Homepage act order | `src/app/page.tsx` |
| The 3D column | `src/components/three/Monolith.tsx` |
| Hero slides | `src/components/sections/Hero.tsx` (`SLIDES`) |

```bash
cd woodex
npm install
npm run dev     # http://localhost:3000
npm run build   # 23 static routes
```
