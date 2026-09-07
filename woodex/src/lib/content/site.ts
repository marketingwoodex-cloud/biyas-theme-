/** Process, materials, testimonials, journal, FAQ — shared narrative content. */

export const process = [
  {
    n: "01",
    t: "Listen & measure",
    d: "A site visit, a laser survey and a long conversation about how the space actually gets used. We leave with dimensions and a brief, not a mood board.",
    detail: "Week 1",
  },
  {
    n: "02",
    t: "Material board",
    d: "A physical box of samples — timber, stone, metal, textile — before any render exists. If the palette is wrong, we find out for the price of a courier.",
    detail: "Week 2",
  },
  {
    n: "03",
    t: "Design & detail",
    d: "Plans, elevations, RCPs and 1:5 joinery details. Every junction resolved on paper, because a shadow gap invented on site is a shadow gap that looks invented.",
    detail: "Weeks 3–6",
  },
  {
    n: "04",
    t: "Make",
    d: "Manufacture starts in our workshop while wet trades run on site. Nesting, edge banding, spray finishing and dry assembly under one roof.",
    detail: "Weeks 5–12",
  },
  {
    n: "05",
    t: "Build & coordinate",
    d: "A dedicated site manager, clash detection with MEP before ceilings close, and a written weekly report with photographs.",
    detail: "Weeks 6–14",
  },
  {
    n: "06",
    t: "Snag & hand over",
    d: "Joint snagging, rectification, as-builts, warranties and a maintenance manual. You get the keys and the documentation on the same day.",
    detail: "Week 15",
  },
] as const;

export const materials = [
  { name: "American Black Walnut", spec: "Log-matched veneer & solid", note: "Darkens with light. Specified where a room needs weight." },
  { name: "European White Oak", spec: "Rift sawn, hard-wax oiled", note: "Straight grain, no cathedral figure. The calm option." },
  { name: "Unlacquered Brass", spec: "Brushed, left to patina", note: "Ages instead of chipping. Our only metal accent." },
  { name: "Honed Travertine", spec: "Silver & cream, vein-cut", note: "Warm underfoot, forgiving of wear, reads as light." },
  { name: "Polished Plaster", spec: "Lime-based, 3-coat", note: "Holds a shadow the way paint never will." },
  { name: "Contract Wool Felt", spec: "Charcoal & moss, 12mm", note: "Acoustics you can see. Absorbs speech, not warmth." },
] as const;

export const testimonials = [
  {
    text: "We had been quoted by two contractors and a design studio. Woodex was the only one who arrived with a laser measure instead of a portfolio.",
    who: "Managing Partner",
    role: "Meridian Capital",
    sector: "Workplace",
  },
  {
    text: "The joinery arrived on the day they said, fitted the walls they measured, and matched the sample panel we signed four months earlier.",
    who: "Homeowner",
    role: "Villa Noor",
    sector: "Residential",
  },
  {
    text: "Twelve weeks, one number, no variations we did not approve in writing. I have not had that experience before.",
    who: "Operations Director",
    role: "Hospitality group",
    sector: "F&B",
  },
] as const;

export const journal = [
  {
    slug: "why-your-office-is-your-best-salesperson",
    title: "Why your office is your most expensive salesperson",
    excerpt:
      "Clients decide how much you charge before you open your mouth. Here is what the first eleven seconds of a reception actually communicate.",
    date: "2026-02-18",
    readTime: "6 min",
    category: "Workplace",
    image: "/img/svc-office.jpg",
  },
  {
    slug: "the-2mm-rule",
    title: "The 2mm rule: why tolerance is the only luxury metric",
    excerpt:
      "Marble and brass do not make a room feel expensive. Consistent reveals do. A short argument for measuring what nobody photographs.",
    date: "2026-01-27",
    readTime: "5 min",
    category: "Craft",
    image: "/img/detail-joinery.jpg",
  },
  {
    slug: "value-engineering-is-where-interiors-die",
    title: "Value engineering is where interiors quietly die",
    excerpt:
      "Nobody approves an ugly room. They approve twelve small substitutions. Here is how to protect a specification from itself.",
    date: "2025-12-09",
    readTime: "7 min",
    category: "Delivery",
    image: "/img/svc-turnkey.jpg",
  },
] as const;

/** Homepage-level FAQ — renders as FAQPage schema. */
export const homeFaqs = [
  {
    q: "What does Woodex Interior actually do?",
    a: "We are a full-suite interior architecture and turnkey fit-out studio. We design the space, manufacture the joinery in our own workshop, manage every trade on site, and hand over a finished, snagged room under a single contract.",
  },
  {
    q: "Do you only work on large projects?",
    a: "No. Our commissions range from a single bespoke library to an 11,000 sq ft headquarters. The common thread is bespoke joinery — if a project is purely decorative with no made elements, we are usually not the right studio.",
  },
  {
    q: "How is a turnkey contract different from hiring a designer and a contractor?",
    a: "Under a split arrangement you carry the risk in the gap between the two. Under turnkey, Woodex holds design, manufacture and construction, so coordination failures are our cost to absorb, not yours to arbitrate.",
  },
  {
    q: "Can I get an estimate before committing to a design fee?",
    a: "Yes. Send a floor plan and a short brief and we will return a banded fit-out estimate with a scope schedule at no charge. It is an honest range, not a hook.",
  },
  {
    q: "Which cities do you work in?",
    a: "We are based in Lahore and deliver across Pakistan, with selected international commissions where the joinery package can be shipped from our workshop.",
  },
] as const;

export const clients = [
  "Meridian Capital",
  "Atelier Forty",
  "The Long Room",
  "Northfield Group",
  "Sahil Hospitality",
  "Verha Collective",
  "Kalam Studios",
  "Orchard & Vine",
] as const;
