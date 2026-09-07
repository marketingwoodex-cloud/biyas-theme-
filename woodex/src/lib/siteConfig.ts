/**
 * WOODEX INTERIOR — SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * Single source of truth for identity, contact, coverage and CTAs.
 *
 * PLACEHOLDER TOKENS
 * Anything this studio cannot verify lives in `tokens` as `null`. Components
 * must render nothing when a token is null — never a zero, never a dash, never
 * a guess. See <Stat> in components/ui/Stat.tsx.
 *
 * The brief is explicit: do not invent client names, testimonials or metrics.
 * A null here is not an omission, it is the correct value until evidence exists.
 */

export const brand = {
  name: "Woodex",
  fullName: "Woodex Interior",
  legalName: "Woodex Interior",

  /** Core value proposition — the sentence the whole site defends. */
  proposition:
    "Commercial interior design and fit-out, delivered with disciplined process, clear BOQ, and on-time handover.",

  /** One-line version for nav, meta and Google Business Profile. */
  short: "Commercial interior design and fit-out across Pakistan.",

  /** Hero headline. */
  headline: "Commercial spaces delivered on time, on budget, on brand.",

  descriptor: "Commercial Interior Design & Fit-Out",

  /** The wedge, stated plainly. Used on About and in positioning copy. */
  wedge:
    "Most studios sell you a design and hand you a risk. Woodex sells you a delivered space with the cost written down before work starts.",

  voice: {
    is: ["Executive", "Precise", "Calm", "Delivery-led"],
    isNot: ["Salesy", "Superlative", "Urgent", "Decorative"],
    rule: "Name the deliverable. Cite the number or drop the claim. No exclamation marks.",
  },
} as const;

/**
 * Verified facts only.
 * `null` = not yet evidenced. The UI hides it. Do not fill these in without
 * the evidence listed in the blueprint §11.1.
 */
export const tokens: Record<string, string | null> = {
  /** Year of incorporation → years trading. */
  YEARS: null,
  /** Countable completed projects. */
  PROJECTS: null,
  /** Certificate number + issuing body, or leave null. */
  ISO_CERTIFIED: null,
  /** Projects delivered on the contracted date ÷ total. */
  ONTIME_RATE: null,
  /** Realistic internal proposal turnaround, in working days. */
  PROPOSAL_DAYS: "3",
  /** Headcount. */
  TEAM_SIZE: null,
};

/** True when a token has been resolved to a real value. */
export const has = (key: keyof typeof tokens | string) =>
  Boolean(tokens[key] && String(tokens[key]).trim().length > 0);

/**
 * NAP — must match the Google Business Profile character for character.
 * Lahore is the ONLY address. The brief forbids addresses for other cities.
 */
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
  countryCode: "PK",
  hours: "Mon–Sat, 10:00–20:30",
  mapQuery: "Link Road, Model Town, Lahore",
} as const;

/**
 * Coverage.
 * `delivered: false` means we have no completed project there yet — the page
 * must say "active delivery from our Lahore studio" and must never imply a
 * local office. Flip to true only when a real project exists.
 */
export const cities = [
  { slug: "lahore", name: "Lahore", base: true, delivered: true },
  { slug: "karachi", name: "Karachi", base: false, delivered: false },
  { slug: "islamabad", name: "Islamabad", base: false, delivered: false },
  { slug: "multan", name: "Multan", base: false, delivered: false },
  { slug: "faisalabad", name: "Faisalabad", base: false, delivered: false },
] as const;

export const cityNames = cities.map((c) => c.name);

/** "Lahore, Karachi, Islamabad, Multan and Faisalabad" */
export const cityList = `${cityNames.slice(0, -1).join(", ")} and ${cityNames[cityNames.length - 1]}`;

export const social = [
  { label: "Instagram", href: "https://instagram.com/", short: "IG" },
  { label: "LinkedIn", href: "https://linkedin.com/", short: "IN" },
  { label: "Facebook", href: "https://facebook.com/", short: "FB" },
] as const;

export const siteUrl = "https://woodexinterior.com";

/**
 * CTA system.
 * One primary per page. `/contact` is the documented exception — someone there
 * wants a human now, so the primary is the phone, not a 12-field form.
 */
export const cta = {
  primary: "Request a Proposal",
  secondary: "View Case Studies",
  work: "View our work",
  service: "Explore services",
  similar: "Request a similar proposal",
  process: "See how we work",
} as const;

/** Prefilled WhatsApp deep link, populated from page context where available. */
export function whatsappLink(opts?: { service?: string; city?: string; area?: string }) {
  const service = opts?.service ?? "commercial interior design";
  const city = opts?.city ?? "";
  const area = opts?.area ?? "";
  const msg =
    `Hello Woodex, I'm interested in a ${service} project` +
    (city ? ` in ${city}` : "") +
    (area ? `. Area: ${area} sq ft` : "") +
    `. Can we discuss?`;
  return `${contact.whatsappHref}?text=${encodeURIComponent(msg)}`;
}

/** Response commitments. Published because publishing them converts. */
export const sla = [
  { step: "Acknowledgement", when: "Within 2 working hours" },
  { step: "Qualification call", when: "Within 1 working day" },
  {
    step: "Written proposal",
    when: has("PROPOSAL_DAYS")
      ? `Within ${tokens.PROPOSAL_DAYS} working days of site access`
      : "Following site access",
  },
] as const;

/** Soft gatekeeping. Confirm the real threshold before launch. */
export const qualifier = "We focus on commercial projects from 1,000 sq ft.";

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
