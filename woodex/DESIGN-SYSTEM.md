# Woodex Interior — Design System Master Plan

Built against **[linoxa.webflow.io/style-guide](https://linoxa.webflow.io/style-guide)**.
Every value below is either taken from that style guide or derived from it with
a stated reason. This is the contract — components read from it, they never
invent values.

**Source of truth:** `src/lib/brand.ts` + the token block in `src/app/globals.css`.

---

## 0. The correction this pass made

The previous build looked *robotic*. That was not a vague impression — it had
three specific, measurable causes:

| Cause | Was | Now |
|---|---|---|
| **Monospace on descriptive copy** | JetBrains Mono on every label, caption, chip and button | **Removed from the project entirely** |
| **UPPERCASE + 0.16em tracking** on micro-type | `text-transform: uppercase` on all labels | Sentence case, `letter-spacing: 0` |
| **11px button text** | `0.6875rem` uppercase mono | `0.9375rem` sans, weight 500 |

A typewriter face on a proof point turns it into a log line. `0.58S · MEASURED
REVERBERATION, OPEN PLAN` reads as console output; *0.58s — measured
reverberation, open plan* reads as a fact an architect is telling you. Linoxa
uses **no monospace anywhere**, and neither does this system now.

**Side effect:** the font payload went from 4 files / ~128 KB → **1 file / 44 KB**.
The whole site now runs on a single font request.

---

## 1. Colour

### Core ramp

| Token | Hex | Role | Reasoning |
|---|---|---|---|
| `ink` | `#0E1A2B` | Primary ground | Midnight navy (style guide: Deep Navy `#0f1e36`). Cool ground pushes the warm tungsten in interior photography forward. |
| `soot` | `#15243A` | Secondary dark | Lets two dark acts sit adjacent without a border between them. |
| `char` | `#1D3049` | Card fill on dark | Lifts off `ink` without going grey. |
| `bone` | `#F5F2EA` | Light ground | Cream, not white (style guide: Light Beige `#fcf2e8`). |
| `oat` | `#EAE5D9` | Third ground | A page can breathe twice without repeating itself. |
| `sand` | `#D9D2C3` | Hairlines on light | Reads as a pencil line, not a UI border. |
| `clay` | `#6E7686` | Secondary text | Cool grey-blue so it belongs to the navy, not the cream. 4.7:1 on bone. |
| `amber` | `#C08A45` | Sole accent | Pulled from the tungsten in every project photo. |
| `amberLight` | `#E0B274` | Accent on dark | The base amber loses contrast on navy. |
| `mist` | `#FFFFFF` | Card fill on light | Allowed on a **surface**, never as a page ground. |

### The 3% rule
Amber appears on exactly four things: the eyebrow dot, the active indicator,
**one** accent word per heading, and hover states. Nothing else. Accent scarcity
is the difference between premium and themed.

### Ground rhythm
**No two adjacent sections share a ground colour.** Scrolling then reads as
moving through rooms rather than down a page. This single rule does more for
perceived quality than any individual animation.

---

## 2. Typography

**One family: Inter Tight.** Variable, self-hosted, latin subset, 44 KB.
Hierarchy comes from weight, scale and tracking — never from a second face.

### Scale — style guide, to the number

| Style | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| `t-display` | `clamp(3rem, 8.2vw, 7rem)` | 1.06 | 500 | −0.028em |
| `t-h1` | `clamp(2.35rem, 5.4vw, 5rem)` | **112.5%** | **500** | −0.024em |
| `t-h2` | `clamp(1.75rem, 3.1vw, 2.812rem)` | **122%** | **500** | −0.018em |
| `t-h3` | `clamp(1.375rem, 2.1vw, 1.875rem)` | **133%** | **500** | −0.012em |
| `t-h4` | `clamp(1.2rem, 1.7vw, 1.562rem)` | **128%** | **500** | −0.01em |
| `t-h5` | `1.25rem` | **150%** | **500** | 0 |
| `t-h6` | `1.125rem` | **155%** | **400** | 0 |
| `t-lede` | `clamp(1.0625rem, 1.35vw, 1.25rem)` | 162% | 400 | 0 |
| `t-body` | `1rem` | **162%** | **400** | 0 |
| `t-meta` (sub) | `0.875rem` | **185%** | **400** | 0 |
| `t-label` | `0.875rem` | 150% | 500 | **0** |
| Button | `0.9375rem` | **162%** | **500** | 0 |

**Two rules that matter most:**

1. **Headings are weight 500, never 600 or 700.** That one value is most of the
   difference between "architectural" and "shouty". The scale does the work.
2. **Tracking scales inversely with size but never goes positive.** Large type
   needs negative tracking or it looks loose. Small type at `letter-spacing: 0`
   reads as language; at `0.16em` it reads as a machine readout.

### Wordmark
`t-wordmark` — weight 500, `line-height: 0.75`, uppercase, cropped by the
section edge. Two fills:
- `t-wordmark-fill` — vertical gradient, near-full strength. **Hero.** It is a
  graphic element, not a watermark.
- `t-wordmark-outline` — 1px stroke at 20%. **Footer.** At that scale a solid
  fill competes with the links above it; a stroke reads as an embossed sign-off.

---

## 3. Spacing

Rhythm comes from four fluid tokens, not from ad-hoc numbers.

| Token | Value | Use |
|---|---|---|
| `--gutter` | `clamp(1.25rem, 4.4vw, 5.5rem)` | Page inset, every side |
| `--act` | `clamp(5.5rem, 11vw, 11rem)` | Vertical padding on a full section |
| `--shell` | `96rem` | Max content width |
| Grid gap | `clamp(1rem, 2vw, 2rem)` | 12-column grid |

**Component rhythm** (multiples of a 4px base):
`eyebrow → heading` 24px · `heading → body` 20px · `body → CTA` 32px ·
`card padding` `clamp(1.25rem, 2.2vw, 2rem)` · `list item gap` 12px.

---

## 4. Radius & elevation

Radius is a brand signature. **Nothing in this system is sharp.**

| Token | Value | Applied to |
|---|---|---|
| `--r-sm` | 10px | Inline chips, small badges |
| `--r-md` | 16px | Caption chips, nested surfaces |
| `--r-lg` | 24px | Cards, image frames, panels |
| `--r-xl` | 32px | Full-bleed feature panels |
| pill | 999px | Buttons, data pills, icon buttons |

The reveal animation clips a **rounded** rect (`inset(… round 24px)`), so
corners never flash square mid-transition.

### Shadows — navy-tinted, not black

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(14,26,43,.04), 0 2px 8px rgba(14,26,43,.04)` | Resting cards, pills |
| `--shadow-md` | `0 2px 4px rgba(14,26,43,.04), 0 12px 28px rgba(14,26,43,.07)` | Hovered cards |
| `--shadow-lg` | `0 4px 8px rgba(14,26,43,.05), 0 28px 64px rgba(14,26,43,.12)` | Modals, floating panels |

A neutral black shadow under a cream card turns grey and dirty. Tinting to the
page navy makes the card look **lifted** instead of **smudged**.

**Cards on cream use shadow, not a border.** A 1px line around a white card on
a cream page reads as a wireframe.

---

## 5. Buttons

One anatomy site-wide: **pill + label + filled circular arrow badge.**

```
[ Start your project   (↗) ]
```

| Variant | Base | Hover fill | Use |
|---|---|---|---|
| `btn-solid` | ink bg, bone text | amber rises | Primary, on light grounds |
| `btn-ghost` | 1px hairline, bone text | bone rises | Secondary, on dark |
| `btn-light` | 1px hairline, ink text | ink rises | Primary on photography / dark |

**Two things animate, deliberately differently:**
- The **label** rolls up to an identical copy — mechanical, precise.
- The **badge** rotates 45° so the diagonal arrow points due right — release.

The badge is the highest-contrast object in the control, so it is what the eye
targets and what confirms the click.

**States:** `:hover` and `:focus-visible` are identical (keyboard users get the
same feedback). `:disabled` = 50% opacity, no fill. Focus ring is
`2px amberLight` at `3px` offset.

### CTA ladder — ranked by expected CTR
1. **Start your project** · 2. Get a 3D still first · 3. Get a BOQ estimate ·
4. Tell us about your space · 5. See the studies · 6. Walk through the work ·
7. Read the case study · 8. Meet the studio

Never "Submit". Never "Learn More". Never "Contact Us".

---

## 6. Components

| Class | What it is | Note |
|---|---|---|
| `.card` / `.card-dark` / `.card-oat` | Rounded surface, `--r-lg` | Shadow on light, flat fill on dark |
| `.card-hover` | Lift 3px + `--shadow-md` | Only where the whole card is a link |
| `.pill` / `.pill-dark` | Data pill — figure + descriptor | Figure at weight 500 in text colour, descriptor dropped back |
| `.chip` | Toggle, `aria-pressed` | 0.9375rem sans; ink fill when pressed |
| `.icon-btn` | 40px circular icon button | Social links, controls |
| `.list-ul` | Amber 12px rule, not a bullet | A dot is generic; a rule echoes the eyebrow |
| `.list-ol` | `decimal-leading-zero` in amber | `01, 02, 03` — matches section indices |
| `.rt` | Rich-text wrapper | Styles CMS output so editors can't ship an unstyled page |
| `.field` + `.field-label` | Underline input, floating label | Placeholder only appears on focus |
| `.ulink` | Directional underline sweep | Origin flips left↔right on enter/exit |
| `.tone` | Rounded image frame + navy grade | Unifies photography temperature |

---

## 7. Motion

Three curves. No improvisation.

| Curve | Value | Used for |
|---|---|---|
| `--ease-out-expo` | `cubic-bezier(.16,1,.3,1)` | Reveals — fast in, long settle |
| `--ease-in-out-quint` | `cubic-bezier(.76,0,.24,1)` | Curtains, slide changes — symmetrical = mechanical = precise |
| `--ease-soft` | `cubic-bezier(.25,.46,.45,.94)` | Parallax, drift — never noticed, only felt |

**Durations:** micro `240ms` · base `720ms` · scene `1400ms` · stagger `70ms`.

**Rules:**
- **One reveal primitive.** `<Reveal>` toggles `.is-in`; all timing lives in CSS,
  so reduced-motion and no-JS are handled by the stylesheet.
- `rootMargin: -8%` — reveals fire *before* the element is visible, so content
  has settled by the time the eye arrives.
- **Text reveals are line-masked, never per-character.** Character stagger hurts
  legibility and dates fast.
- **Image reveals are rounded wipes** — `clip-path` opens while the image
  counter-scales 1.16 → 1.
- **Parallax never shows its frame edge.** Image is 130% tall in a fixed frame,
  travelling ±8–14%, spring-damped so it lags scroll. The lag *is* the depth cue.
- **Pinning is used exactly once** (Process), via `position: sticky`.
- Everything collapses under `prefers-reduced-motion` — including both WebGL
  scenes and the loader.

---

## 8. Iconography

- **Line icons only.** 1.3px stroke, `stroke-linecap: square`, 13–16px box.
  Square caps because the brand is about joinery tolerances, not soft edges.
- **The arrow is diagonal (↗) at rest and rotates to horizontal on hover.**
  One icon, one motion, used in every button and every list row — so the
  affordance is learned once and works everywhere.
- **Social icons are 2-letter monograms** (IG / IN / PN / BE) in `.icon-btn`
  circles, not brand glyphs. Brand glyphs drag in five foreign colour systems
  and instantly cheapen a restrained palette.

---

## 9. Accessibility contract

- Contrast: body text ≥ 4.5:1, large text ≥ 3:1. `clay` on `bone` = 4.7:1.
- Focus visible on every interactive element — `2px amberLight`, `3px` offset.
- `aria-pressed` on chips, `aria-expanded` on menus, `aria-current` on active
  nav and active list rows.
- Skip link, semantic landmarks, one `h1` per page, ordered heading levels.
- Full reduced-motion path.
- Hover is never the only route to information — every hover state has a
  focus equivalent and every preview target is a real link.

---

## 10. Where to change things

| To change… | Edit |
|---|---|
| Colour, radius, shadow, type scale, motion curves | `src/app/globals.css` (top ~200 lines) |
| Brand name, tagline, contact, CTAs, stats, sectors | `src/lib/brand.ts` |
| Service copy, SEO meta, FAQs | `src/lib/content/services.ts` |
| Case studies | `src/lib/content/projects.ts` |
| Process, documents, materials, testimonials | `src/lib/content/site.ts` |
| Homepage section order | `src/app/page.tsx` |
