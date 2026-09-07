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
    "Woodex Interior is a commercial-first interior design and fit-out studio in Lahore, delivering across Pakistan. We draw the space in 3D before anything is bought, document it to a line-item BOQ, and build it under one contract.",

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
  bronze: {
    hex: "#C08A45",
    why: "The only chroma. Pulled from the tungsten light inside every project photo. ≤3% of any view.",
  },
  bronzeLight: { hex: "#E0B274", why: "Amber on navy grounds, where the base tone loses contrast." },
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
  email: "studio@woodex.interior",
  phone: "+92 336 2259477",
  phoneHref: "+923362259477",
  whatsapp: "+92 336 2259477",
  whatsappHref: "https://wa.me/923362259477",
  street: "LG 90 Link Road, Model Town",
  city: "Lahore",
  region: "Punjab",
  postal: "54700",
  country: "Pakistan",
  hours: "Office 10:00 – 8:30",
  mapQuery: "Link Road, Model Town, Lahore",
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
  primary: "Request a Proposal",
  secondary: "View Case Studies",
  tertiary: "See the studies",
  quiet: "Tell us about your space",
  work: "Walk through the work",
  estimate: "Request a Proposal",
} as const;

/**
 * Stats are now token-driven — see src/lib/siteConfig.ts.
 * Components read `tokens` through <Stat>, which renders NOTHING when a value
 * is unresolved. Do not reintroduce hardcoded figures here.
 */
export const stats = [] as const;

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
