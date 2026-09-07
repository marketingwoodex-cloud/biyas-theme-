/**
 * DEPRECATED SHIM — do not add anything here.
 * ---------------------------------------------------------------------------
 * `src/lib/siteConfig.ts` is the single source of truth for brand identity,
 * contact details, coverage and CTAs.
 *
 * This file exists only so the fifteen modules that still import from
 * "@/lib/brand" keep working. Everything below is re-exported from siteConfig,
 * so the two can no longer drift — which is exactly the bug that let the About
 * page keep a craft-studio voice after the brand moved to commercial-first.
 *
 * When touching a file that imports from here, repoint it at "@/lib/siteConfig"
 * and delete the import. When the last one is gone, delete this file.
 */

export {
  brand as brandConfig,
  contact,
  social,
  siteUrl,
  cta,
  cities,
  cityList,
  tokens,
  has,
  sla,
  qualifier,
  whatsappLink,
} from "./siteConfig";

import { brand as core, cities } from "./siteConfig";

/**
 * Legacy shape. `positioning` and `promise` are kept as aliases because they
 * appear in metadata and JSON-LD; both now resolve to the commercial-first
 * strings rather than the old workshop narrative.
 */
export const brand = {
  ...core,
  positioning: core.proposition,
  promise: core.headline,
} as const;

/** Sector band. Derived, not a second list to maintain. */
export const sectors = [
  "Offices",
  "Retail & Showrooms",
  "Healthcare",
  "Education",
  "Hospitality",
  "Renovation",
] as const;

/** Cities, for any component still importing from here. */
export const cityCount = cities.length;

/**
 * Motion contract. Lives here rather than in siteConfig because it is a design
 * token, not brand identity — it is mirrored in globals.css.
 */
export const motion = {
  ease: {
    out: [0.16, 1, 0.3, 1] as const,
    inOut: [0.76, 0, 0.24, 1] as const,
    soft: [0.25, 0.46, 0.45, 0.94] as const,
  },
  dur: { micro: 0.24, base: 0.72, scene: 1.4 },
  stagger: 0.07,
} as const;

/** Removed. Stats are token-driven — use <Stat> from components/ui/Stat.tsx. */
export const stats = [] as const;
