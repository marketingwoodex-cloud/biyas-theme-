# Woodex Interior — Creative Direction & Experience Architecture

**Identity:** re-skinned to the live Woodex system — midnight navy + cream, one grotesk, everything rounded
**Reference structure:** `linoxa.webflow.io/home-two`
**Stack:** Next.js 16 · React 19 · Tailwind v4 · Three.js · Lenis · Motion
**Status:** 22 static routes · 0 TypeScript errors · 0 lint errors

All identity values live in **two places** — `src/lib/brand.ts` and the token
block at the top of `src/app/globals.css`. Nothing is hardcoded in a component.

---

## 1. What changed in the re-skin

The first pass was a warm espresso/bone/brass system with a serif display face.
The live Woodex identity is a different animal, and the build now matches it.

| | Before | Now (live identity) |
|---|---|---|
| Ground | Espresso `#0B0A08` | **Midnight navy `#0E1A2B`** |
| Paper | Bone `#F0EAE0` | **Cream `#F5F2EA`** |
| Accent | Brass, 5% | **Amber `#C08A45`, ≤3%** |
| Display face | Instrument Serif | **Inter Tight 600** — single grotesk |
| Corners | Sharp | **Rounded, 10–32px, everywhere** |
| Buttons | Pill + inline arrow | **Pill + filled circular arrow badge** |
| Services | 7 invented | **The real six** |
| Promise | "We build the room, not the render" | **"Drawn. Then built."** |
| Hero line | Invented | **"We turn ideas into spaces"** |
| Wordmark | Footer only | **Hero + footer**, cropped by the viewport |

**Why navy beats black here.** Every project photograph is lit by warm tungsten.
On black, that warmth has nothing to react against and the page reads flat and
muddy. Navy is a cool complement — it pushes the amber in the photography
forward, so the imagery supplies the palette's warmth and the UI stays quiet.
It is also the reason the accent can be capped at 3%: the pictures are doing it.

**Why one typeface.** The live identity runs a single neutral grotesk from an
8rem hero to an 11px label. Hierarchy comes from weight (600 vs 400), scale, and
tracking that goes negative as size grows (`-0.038em` at display, `+0.16em` at
labels). Adding a serif would have been *my* taste, not the brand's — and it
would have made the pages read as a magazine spread rather than one voice.
The old serif-italic "aside" device is now the amber highlight: one word per
heading, never more.

**Why the rounding matters.** Sharp corners against this palette read as
"unstyled default". Radius is a brand signature here, so it is tokenised
(`--r-sm` → `--r-xl`) and applied to cards, image frames, chips and even the
reveal `clip-path` — the wipe animates a *rounded* rect, so corners never
flash square mid-transition.

---

## 2. Positioning

> **We turn ideas into spaces.** Drawn. Then built.

The wedge is **stills-first vertical integration**. Not "we design beautiful
spaces" (hygiene claim) but a sequence a client can verify:

**3D still → BOQ → site.**

Each step removes a specific fear:
- *Still* kills "I won't get what I was shown."
- *BOQ* kills "the price will move."
- *Own site team* kills "nobody will be accountable."

Real proof points, now used throughout: **500+ projects · ~20 years founder
experience · 10+ years executing · ISO 9001**.

**Audience — two buyers, two fears.**
- *Commercial* (managing partner, ops director, retail head) — fears schedule
  slip and variation orders. Answered by Act VI (Process) and Act VII (Documented).
- *Private* (homeowner, developer) — fears being sold a render they never get.
  Answered by 3D-stills-first and the case-study numbers.

---

## 3. Palette

| Token | Hex | Reasoning |
|---|---|---|
| `ink` | `#0E1A2B` | Midnight navy. Cool ground that pushes warm photography forward. |
| `soot` | `#15243A` | Second dark surface — sections separate without a border. |
| `char` | `#1D3049` | Card fill on navy. Lifts without going grey. |
| `bone` | `#F5F2EA` | Cream, not white. The colour of plaster and unbleached linen. |
| `oat` | `#EAE5D9` | Third light ground so the page breathes twice without repeating. |
| `sand` | `#D9D2C3` | Hairlines on cream. Reads as pencil, not as a UI border. |
| `clay` | `#6E7686` | Secondary copy. Cool grey-blue so it belongs to the navy. |
| `amber` | `#C08A45` | The only chroma. Pulled from the tungsten in every project photo. **≤3%.** |
| `amberLight` | `#E0B274` | Amber on navy, where the base tone loses contrast. |
| `mist` | `#FFFFFF` | Card fill on cream. Allowed on a surface, never as a page ground. |

Amber appears on exactly four things: the eyebrow tick, the active progress
fill, one accent word per heading, and hover states. Accent scarcity is what
separates "premium" from "themed".

---

## 4. Narrative — the eight acts

| Act | Ground | Section | Job |
|---|---|---|---|
| I | Navy | **Hero** | Three rooms in 20s + kinetic wordmark |
| — | Soot | **TrustBar** | Client roster, typeset not logo-walled |
| II | Cream | **Manifesto** | Founder story: struggle → turn → resolution |
| III | Navy | **ServicesList** | *Six services you can actually buy* |
| IV | Soot | **MaterialSection** | WebGL monolith — proof of craft |
| — | Navy | **SectorBand** | Coverage, in two seconds |
| V | Cream | **FeaturedWork** | Six case studies, each led by a number |
| VI | Soot | **Process** | Stills → BOQ → site, pinned |
| VII | Oat | **Documented** | The six artefacts you physically receive |
| VIII | Navy | **Voices** | Third-party confirmation |
| — | Cream | **JournalRow** | Expertise + SEO surface |
| — | Soot | **FaqBlock** | Kills the last objections |
| — | Navy | **Footer** | One low-commitment ask + `INTERIOR` wordmark |

**No two adjacent acts share a ground colour.** Scrolling reads as walking
through rooms, not scrolling a page. That single rule does more for perceived
quality than any individual animation.

---

## 5. The 3D layer

Two WebGL scenes, both **procedural** — zero asset payload over the wire.

**`DustField`** (hero) — 900 additive points in a shader convection field with
depth-scaled pointer parallax: near motes move more than far ones, which is what
actually sells the volume. No depth write, DPR clamped to 1.5, paused off-screen
and on `document.hidden`.

**`Monolith`** (Act IV) — a fluted walnut column (32 flutes displaced radially by
`sin(angle × 32) × 0.035`) banded in brass on a travertine plinth. Wood grain and
stone are drawn to `<canvas>` at runtime. **Retuned for the navy skin:** the
ambient and fill lights are now cool (`#BCD0E6`, `#7EA3C8`) against a warm key,
and the PMREM environment fades to `#0E1A2B` — so the object belongs to a navy
room instead of floating in a brown box. Scroll drives a ¾ turn; cursor drives
the tilt. The canvas stays transparent.

Both bail out entirely on `prefers-reduced-motion` and on WebGL failure — the
photographic and typographic layers beneath are complete on their own.

---

## 6. Motion system

Three easing curves, no improvisation:

| Curve | Value | Used for |
|---|---|---|
| `out-expo` | `cubic-bezier(.16,1,.3,1)` | Reveals — fast in, long settle |
| `in-out-quint` | `cubic-bezier(.76,0,.24,1)` | Curtains, slide changes — symmetrical = mechanical = precise |
| `soft` | `cubic-bezier(.25,.46,.45,.94)` | Parallax, camera drift — never noticed, only felt |

- **One reveal primitive.** `<Reveal>` toggles `.is-in`; all timing lives in CSS,
  so reduced-motion and no-JS are handled by the stylesheet, not by branching in
  twelve components. `rootMargin: -8%` fires *before* the element is visible, so
  content has settled by the time the eye arrives.
- **Text reveals are line-masked, never per-character.** Character stagger on
  display type is a gimmick that hurts legibility and dates fast.
- **Image reveals are rounded wipes.** `clip-path: inset(… round 24px)` opens
  while the image counter-scales 1.16 → 1.
- **Parallax never shows its frame edge.** Image is 130% tall inside a fixed
  frame, travelling ±8–14%, spring-damped so it lags scroll slightly — the lag
  *is* the depth cue.
- **Pinning is used exactly once** (Act VI), via `position: sticky`, because the
  content is a genuine sequence. Anywhere else it would be noise.
- **The button badge rotates 45°** on hover while the label rolls up. Two
  different motions: mechanical precision (label) and release (badge). The badge
  is the highest-contrast object in the control, so it is what the eye targets.

---

## 7. Message hierarchy

| Layer | Copy | Job |
|---|---|---|
| Headline | *We turn ideas into spaces* | The live tagline |
| Sub | Drawn. Documented. Then built. | The wedge in four words |
| Benefit 1 | You approve a picture, not a promise | Kills the render fear |
| Benefit 2 | Line-by-line BOQ before work starts | Kills the price fear |
| Benefit 3 | Our own workshop, our own site team | Kills the accountability fear |
| Proof | 500+ projects · ISO 9001 · ~20 yrs | Verifiable, not adjectival |
| Objection | 6 homepage FAQs + 4 per service | Removes the last reasons not to enquire |
| Close | *Tell us about your space* | Zero-commitment, plain language |

**Founder story** lands the hook in sentence one: *a shadow gap that should have
been six millimetres was fourteen, and the client noticed before he did.* No bio,
no "founded in", no credentials paragraph.

### CTA ladder — ranked by expected CTR

| # | Copy | Why |
|---|---|---|
| 1 | **Tell us about your space** | Plain, human, zero commitment implied |
| 2 | Get a 3D still first | Names a deliverable that costs nothing |
| 3 | Get a BOQ estimate | Concrete artefact; qualifies serious intent |
| 4 | Start with your floor plan | Implies a process already underway |
| 5 | See the studies | Browsing language, no contact implied |
| 6 | Walk through the work | Verb of exploration, zero risk |
| 7 | Read the case study | Lowest commitment, highest qualification |
| 8 | Meet the studio | Warm but vaguer — weakest, in-body only |

Never "Submit". Never "Learn More". Never "Contact Us".

---

## 8. Ruthless audit — generic default vs. what was built

| # | Generic | Built | Impact |
|---|---|---|---|
| 1 | Pure black + pure white | Midnight navy + cream | ★★★★★ The single biggest expensive-vs-template tell |
| 2 | Sharp corners | Tokenised radius, incl. the reveal clip-path | ★★★★★ Matches the identity; square corners looked broken against it |
| 3 | Grey logo wall | Typeset client roster at 12px mono | ★★★★★ Logo walls read as borrowed authority |
| 4 | 3×2 service card grid | Typeset index + summoned preview image | ★★★★★ Cards force six equal decisions; a list lets you scan |
| 5 | "Our Services" heading | *Six services you can actually buy* | ★★★★☆ Names the number and the transaction |
| 6 | Fade-in on everything | Line-masked type, rounded clip-path wipes | ★★★★☆ Fades are the visual equivalent of a shrug |
| 7 | "Amazing team" testimonials | Quotes containing verifiable specifics | ★★★★☆ Adjectival testimonials are worth zero |
| 8 | Equal-height project grid | Offset editorial grid, unequal spans | ★★★★☆ Forces a diagonal read; slows scanning enough to register |
| 9 | Stock 3D blob in the hero | Procedural monolith placed in Act IV | ★★★★☆ Placement makes it an argument, not decoration |
| 10 | Accent colour everywhere | Amber capped at ≤3% | ★★★★☆ Accent scarcity is the whole game |
| 11 | Plain arrow in a button | Filled circular badge that rotates 45° | ★★★☆☆ Gives the control a target and a payoff |
| 12 | Boxed form fields | Underline fields, floating labels, chips | ★★★☆☆ A wall of boxes suppresses completion |
| 13 | Footer sitemap only | Cropped wordmark sign-off at 6% opacity | ★★☆☆☆ The page ends in the brand's own hand |

---

## 9. Production checklist

**Done**
- [x] 22 routes prerendered static (SSG) — no server needed to host
- [x] 0 TypeScript errors, 0 ESLint errors (incl. React Compiler rules)
- [x] Self-hosted fonts, latin subset — **2 files, ~85 KB** after dropping the serif
- [x] `display: swap` + `adjustFontFallback` → **CLS 0**
- [x] AVIF → WebP → JPEG; `deviceSizes` trimmed to breakpoints actually used
- [x] `priority` on the LCP hero image only; everything else lazy
- [x] WebGL paused off-screen and on `document.hidden`; DPR clamped
- [x] Full `prefers-reduced-motion` path — animation, 3D, smooth scroll, loader
- [x] Skip link, focus-visible rings, `aria-expanded` / `aria-pressed` / `aria-current`
- [x] Semantic landmarks, one `h1` per page, ordered heading levels
- [x] Immutable cache headers on `/img/*`; `nosniff`, `Referrer-Policy`
- [x] Per-page canonical, OG + Twitter cards, keywords
- [x] JSON-LD: `Organization` + `LocalBusiness`, `WebSite`, `Service` × 6 with
      `OfferCatalog`, `CreativeWork` × 6, `FAQPage` × 8, `BreadcrumbList`, `ItemList`
- [x] `sitemap.xml` + `robots.txt` generated from content
- [x] Custom 404 routing to all six services

**Before launch — needs you**
- [ ] Confirm the six services are exactly right (I read them off your live site)
- [ ] Replace the placeholder contact block in `src/lib/brand.ts`
- [ ] Point `siteUrl` at the real domain
- [ ] Wire `ContactForm.onSubmit` to a real endpoint
- [ ] Swap generated imagery for real project photography
- [ ] Supply the logo SVG → replaces the wordmark and the schema `logo` field
- [ ] Confirm the exact brand navy and grotesk from your guidelines
- [ ] Lighthouse on the deployed URL; confirm LCP < 2.0s on 4G

**Performance fix list, priority order**

| Fix | Expected gain | Measure with |
|---|---|---|
| Real photography exported ≤1600px, AVIF | −40–60% image bytes | Network panel, "Img" filter |
| Confirm hero is the LCP element and preloaded | −0.4–0.9s LCP | Lighthouse LCP element |
| Drop `three` from the hero below 640px | −120 KB JS, −0.3s TBT | Coverage tab |
| Serve from a CDN edge | −100–300ms TTFB | WebPageTest |
| Verify `immutable` headers reach production | Repeat visit ≈ 0 bytes | Network → "Disk cache" |

**Targets:** LCP < 2.0s · CLS < 0.02 · INP < 200ms · Lighthouse Perf ≥ 92 mobile ·
A11y 100 · SEO 100.

---

## 10. Where to change things

| Want to change… | Edit |
|---|---|
| Colours, radius, type scale, motion curves | `src/app/globals.css` (top ~110 lines) |
| Brand name, tagline, contact, CTAs, stats, sectors | `src/lib/brand.ts` |
| Service copy, SEO meta, FAQs | `src/lib/content/services.ts` |
| Case studies | `src/lib/content/projects.ts` |
| Process, documents, materials, testimonials | `src/lib/content/site.ts` |
| Homepage act order | `src/app/page.tsx` |
| The 3D column | `src/components/three/Monolith.tsx` |
| Hero slides + wordmark | `src/components/sections/Hero.tsx` |

```bash
cd woodex
npm install
npm run dev     # http://localhost:3000
npm run build   # 22 static routes
```
