/**
 * WOODEX INTERIOR — Brand System
 * ------------------------------------------------------------------
 * Re-skinned to the live Woodex identity: midnight navy + cream,
 * a single grotesk, heavy rounded geometry, kinetic wordmarks.
 *
 * Single source of truth for identity, voice and contact data.
 * Every surface reads from this file or from the token block at the
 * top of `globals.css` (which mirrors `palette` below).
 */

export const brand = {
  name: "Woodex",
  fullName: "Woodex Interior",
  legalName: "Woodex Interiors",

  /** The live hero line. Everything else defers to it. */
  tagline: "We turn ideas into spaces",

  /** 3-word essence — drives every art-direction decision. */
  essence: ["Drawn", "Documented", "Built"],

  /** Sits under the logo. */
  descriptor: "Interior Design · 3D Studio · Execution",

  /** Positioning statement — used in About + schema.org. */
  positioning:
    "Woodex Interior is an interior design and execution studio. We draw the space in 3D before anything is bought, document it to BOQ, and build it with our own team — 500+ projects, ISO 9001 certified.",

  /** The single most important sentence on the site. */
  promise: "Drawn. Then built.",

  /** Secondary promise, used on the process act. */
  method: "Stills first. BOQ second. Site last.",

  voice: {
    is: ["Plain", "Specific", "Unhurried", "Quietly certain"],
    isNot: ["Salesy", "Buzzword-heavy", "Boastful", "Cute"],
    rule: "Short sentences. Name the deliverable. Never oversell the adjective.",
  },
} as const;

/**
 * Mirrors the CSS custom properties.
 * Two-tone by design: midnight navy and cream do all the structural work,
 * photography supplies every warm tone in the palette. Amber exists only as
 * a functional highlight and is capped at ~3% of any viewport.
 */
export const palette = {
  ink: {
    hex: "#0E1A2B",
    why: "Midnight navy, not black. Black flattens interior photography; navy sits under it and lets the warm light in the images read as the accent.",
  },
  soot: { hex: "#15243A", why: "Second dark surface so sections separate without a border." },
  char: { hex: "#1D3049", why: "Card fill on navy. Lifts without turning grey." },
  bone: { hex: "#F5F2EA", why: "Cream, not white. Unbleached paper — the colour of plaster and linen." },
  oat: { hex: "#EAE5D9", why: "Third light ground so the page can breathe twice without repeating." },
  sand: { hex: "#D9D2C3", why: "Hairlines and dividers on cream. Reads as a pencil line, not a UI border." },
  clay: { hex: "#6E7686", why: "Secondary copy. Cool grey-blue so it belongs to the navy, not the cream." },
  amber: {
    hex: "#C08A45",
    why: "The only chroma. Pulled from the tungsten light inside every project photo. ≤3% of any view.",
  },
  amberLight: { hex: "#E0B274", why: "Amber on navy grounds, where the base tone loses contrast." },
  mist: { hex: "#FFFFFF", why: "Card fill on cream. Pure white is allowed on a surface, never as a page ground." },
} as const;

/** Corner radius is a brand signature here — nothing in the system is sharp. */
export const radius = {
  sm: "10px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  pill: "999px",
  why: "The live identity rounds every card and image. Sharp corners read as 'unstyled default' against it.",
} as const;

/** Motion contract — every animation on the site references these. */
export const motion = {
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.76, 0, 0.24, 1] as const,
    soft: [0.25, 0.46, 0.45, 0.94] as const,
  },
  dur: { micro: 0.24, base: 0.72, scene: 1.4 },
  stagger: 0.07,
} as const;

export const contact = {
  /** TODO: replace with the live details. */
  email: "hello@woodexinterior.com",
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
 * Each lowers perceived commitment rather than raising urgency.
 */
export const cta = {
  primary: "Tell us about your space",
  secondary: "Get a 3D still first",
  tertiary: "See the studies",
  quiet: "Start with your floor plan",
  work: "Walk through the work",
  estimate: "Get a BOQ estimate",
} as const;

/** The live numbers. */
export const stats = [
  { value: 500, suffix: "+", label: "Projects delivered", note: "Since inception" },
  { value: 20, suffix: "yrs", label: "Founder experience", note: "Hands on site" },
  { value: 10, suffix: "+", label: "Years executing", note: "Own site teams" },
  { value: 9001, suffix: "", label: "ISO certified", note: "Quality management" },
] as const;

/** Sector band — matches the live marquee. */
export const sectors = [
  "Residences",
  "Workplaces",
  "Hospitality",
  "Retail",
  "3D Studio",
  "Renovation",
] as const;

export type Palette = typeof palette;
