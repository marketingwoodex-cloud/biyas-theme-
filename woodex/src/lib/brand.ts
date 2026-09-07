/**
 * WOODEX INTERIOR — Brand System
 * ------------------------------------------------------------------
 * Single source of truth for identity, voice and contact data.
 * Swap values here when the official brand guidelines land; every
 * surface in the site reads from this file or from the CSS custom
 * properties in `globals.css` (which mirror `palette` below).
 */

export const brand = {
  name: "Woodex",
  fullName: "Woodex Interior",
  legalName: "Woodex Interior Studio",

  /** 3-word essence — drives every art-direction decision. */
  essence: ["Grain", "Precision", "Presence"],

  /** The line that appears under the logo. */
  descriptor: "Interior Architecture & Turnkey Fit-Out",

  /** Positioning statement — used in About + schema.org. */
  positioning:
    "Woodex Interior is a full-suite interior architecture and turnkey fit-out studio. We design, manufacture and install — one contract, one accountable team, one standard of finish.",

  /** The single most important sentence on the site. */
  promise: "We build the room, not the render.",

  /** Voice: how Woodex sounds. */
  voice: {
    is: ["Specific", "Unhurried", "Materially literate", "Quietly confident"],
    isNot: ["Salesy", "Buzzword-heavy", "Boastful", "Cute"],
    rule: "Name the material. Name the tolerance. Never oversell the adjective.",
  },
} as const;

/** Mirrors the CSS custom properties. Reasoning included per token. */
export const palette = {
  ink: {
    hex: "#0B0A08",
    why: "Not black — a warm espresso near-black. Black reads cheap on screens; this holds the wood tone.",
  },
  soot: { hex: "#141210", why: "Second surface for panels so sections separate without lines." },
  char: { hex: "#1C1916", why: "Card fill on dark. Keeps depth without grey drift." },
  bone: { hex: "#F0EAE0", why: "Paper. Warm, unbleached — the colour of plaster and linen, never #FFF." },
  oat: { hex: "#E2D9CA", why: "Alternate light section so the page breathes between dark acts." },
  sand: { hex: "#CDBFA9", why: "Hairlines and dividers on light. Reads as pencil, not border." },
  clay: { hex: "#9C8A70", why: "Muted body copy on light. 4.6:1 on bone — passes AA at 16px+." },
  brass: {
    hex: "#C08A3E",
    why: "The only accent. Unlacquered brass — the studio's signature metal. Used for ≤5% of any view.",
  },
  brassLight: { hex: "#E5C489", why: "Brass on dark grounds where the base tone loses contrast." },
  moss: { hex: "#18251F", why: "One deep green act break. Stops the palette becoming monotonously brown." },
} as const;

/** Motion contract — every animation on the site references these. */
export const motion = {
  ease: {
    out: [0.16, 1, 0.3, 1] as const, // primary reveal — fast in, long settle
    inOut: [0.76, 0, 0.24, 1] as const, // curtains, page transitions
    soft: [0.25, 0.46, 0.45, 0.94] as const, // parallax, camera drift
  },
  dur: {
    micro: 0.24, // hover, cursor
    base: 0.72, // text + image reveal
    scene: 1.4, // act change, curtain
  },
  /** Reveals stagger by line, never by character, above 24px type. */
  stagger: 0.07,
} as const;

export const contact = {
  /** TODO: replace with real details from brand guidelines. */
  email: "studio@woodexinterior.com",
  phone: "+92 42 3577 0100",
  phoneHref: "+924235770100",
  whatsapp: "+92 300 8400 100",
  street: "27-C Main Boulevard, Gulberg III",
  city: "Lahore",
  region: "Punjab",
  postal: "54660",
  country: "Pakistan",
  hours: "Mon–Sat · 09:00–18:00 PKT",
  mapQuery: "Main Boulevard Gulberg III, Lahore",
} as const;

export const social = [
  { label: "Instagram", href: "https://instagram.com/", short: "IG" },
  { label: "LinkedIn", href: "https://linkedin.com/", short: "IN" },
  { label: "Pinterest", href: "https://pinterest.com/", short: "PN" },
  { label: "Behance", href: "https://behance.net/", short: "BE" },
] as const;

export const siteUrl = "https://woodexinterior.com";

/**
 * CTA ladder — ranked by expected click-through.
 * Each one lowers perceived commitment rather than raising urgency.
 */
export const cta = {
  /** #1 — concrete deliverable, zero-cost, time-boxed. */
  primary: "Get a fit-out estimate",
  /** #2 — low commitment, implies looking not buying. */
  secondary: "Book a 20-min walkthrough",
  /** #3 — no meeting required, ownership language. */
  tertiary: "See the material board",
  /** In-page nudges. */
  quiet: "Start with your floor plan",
  work: "Walk through the work",
} as const;

export const stats = [
  { value: 18, suffix: "", label: "Years on site", note: "Since 2007" },
  { value: 340, suffix: "+", label: "Spaces delivered", note: "Across 6 markets" },
  { value: 96, suffix: "%", label: "Handover on schedule", note: "Rolling 24 months" },
  { value: 2, suffix: "mm", label: "Joinery tolerance", note: "Shop standard" },
] as const;

export type Palette = typeof palette;
