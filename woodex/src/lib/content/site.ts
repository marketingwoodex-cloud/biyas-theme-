/** Process, materials, testimonials, journal, FAQ — shared narrative content. */

/** The live method: stills first, BOQ second, site last. */
export const process = [
  {
    n: "01",
    t: "Understand the space",
    d: "A site visit, a laser survey and a long conversation about how the space actually gets used. We leave with dimensions and a brief, not a mood board.",
    detail: "Week 1",
  },
  {
    n: "02",
    t: "Material board",
    d: "A physical box of samples — timber, stone, metal, textile. If the palette is wrong, we find out for the price of a courier rather than the price of a wall.",
    detail: "Week 2",
  },
  {
    n: "03",
    t: "3D stills first",
    d: "Photoreal images of your own rooms, modelled from the survey. You approve a picture before anything is drawn for construction or bought.",
    detail: "Weeks 3–4",
  },
  {
    n: "04",
    t: "Documented to BOQ",
    d: "Plans, elevations, RCPs, 1:5 joinery details — then a line-by-line bill of quantities. Every sheet, every metre, every fitting, priced.",
    detail: "Weeks 5–7",
  },
  {
    n: "05",
    t: "Build & coordinate",
    d: "Specialist trades are scheduled and coordinated against the programme. A dedicated site manager, MEP clash detection before ceilings close, and a written report with photographs every Friday.",
    detail: "Weeks 6–14",
  },
  {
    n: "06",
    t: "Snag & hand over",
    d: "Joint snagging, rectification, as-builts, warranties and a maintenance manual. You get the keys and the documentation on the same day.",
    detail: "Week 15",
  },
] as const;

/** The documentation set — what a client actually receives. */
export const documents = [
  { t: "3D stills", d: "Photoreal views of every room, day and evening states." },
  { t: "Working drawings", d: "Plans, elevations, RCPs and setting-out at 1:20." },
  { t: "Joinery details", d: "1:5 and 1:1 sections, hardware schedules, shop drawings." },
  { t: "BOQ", d: "Line-by-line bill of quantities with rates and totals." },
  { t: "Finish schedule", d: "Every surface, coded, with the signed sample reference." },
  { t: "O&M manual", d: "As-builts, warranties, care instructions, supplier contacts." },
] as const;

export const materials = [
  { name: "American Black Walnut", spec: "Log-matched veneer & solid", note: "Darkens with light. Specified where a room needs weight." },
  { name: "European White Oak", spec: "Rift sawn, hard-wax oiled", note: "Straight grain, no cathedral figure. The calm option." },
  { name: "Unlacquered Brass", spec: "Brushed, left to patina", note: "Ages instead of chipping. Our only metal accent." },
  { name: "Honed Travertine", spec: "Silver & cream, vein-cut", note: "Warm underfoot, forgiving of wear, reads as light." },
  { name: "Polished Plaster", spec: "Lime-based, 3-coat", note: "Holds a shadow the way paint never will." },
  { name: "Contract Wool Felt", spec: "Charcoal & moss, 12mm", note: "Acoustics you can see. Absorbs speech, not warmth." },
] as const;

/**
 * PLACEHOLDER. The brief forbids invented testimonials.
 * Structure is real so the component works; every entry is unattributed and
 * flagged. Replace only with quotes you hold written approval for.
 */
export const testimonials = [
  {
    text: "[Client quote pending approval. Use a sentence describing a measurable outcome, not an adjective.]",
    who: "Client Name",
    role: "Financial Services",
    sector: "Office",
    placeholder: true,
  },
  {
    text: "[Client quote pending approval.]",
    who: "Client Name",
    role: "Retail Group",
    sector: "Retail",
    placeholder: true,
  },
  {
    text: "[Client quote pending approval.]",
    who: "Client Name",
    role: "Healthcare",
    sector: "Pharmacy",
    placeholder: true,
  },
] as const;

export const journal = [
  {
    slug: "why-your-office-is-your-best-salesperson",
    title: "Why your office is your most expensive salesperson",
    excerpt:
      "Clients decide how much you charge before you open your mouth. What the first eleven seconds of a reception actually communicate.",
    date: "2026-02-18",
    readTime: "6 min",
    category: "Workplace",
    image: "/img/svc-office.jpg",
  },
  {
    slug: "stills-before-site",
    title: "Why we render the room before we price it",
    excerpt:
      "The most expensive revision is the one made on site. A short argument for approving a picture instead of a promise.",
    date: "2026-01-27",
    readTime: "5 min",
    category: "3D Studio",
    image: "/img/detail-joinery.jpg",
  },
  {
    slug: "value-engineering-is-where-interiors-die",
    title: "Value engineering is where interiors quietly die",
    excerpt:
      "Nobody approves an ugly room. They approve twelve small substitutions. How to protect a specification from itself.",
    date: "2025-12-09",
    readTime: "7 min",
    category: "Execution",
    image: "/img/svc-turnkey.jpg",
  },
] as const;

/** Homepage-level FAQ — renders as FAQPage schema. */
export const homeFaqs = [
  {
    q: "What does Woodex Interior actually do?",
    a: "We design commercial interiors and execute them. Every project starts as a photoreal 3D still, is documented to a line-item BOQ, and is built under one contract with a named project manager and a dated programme.",
  },
  {
    q: "Why do you insist on 3D stills before anything else?",
    a: "Because the most expensive revision is the one made on site. Approving a picture costs an afternoon; approving a built wall costs a week and a variation order. Stills remove almost every avoidable change.",
  },
  {
    q: "Do you only work on large projects?",
    a: "No, but we do focus. Commissions run from a single floor to a full headquarters, and we work to a 1,000 sq ft minimum. The common thread is a commercial brief with a real programme — if a project is purely decorative styling, we are usually not the right studio and will say so early.",
  },
  {
    q: "Can I hire you for design or 3D only?",
    a: "Yes. The 3D studio takes standalone commissions from designers, developers and agencies, and we issue tender-ready drawing sets for design-only clients. There is no obligation to have us build it.",
  },
  {
    q: "Can I get an estimate before committing to a fee?",
    a: "Yes. Send a floor plan and a short brief and we will return a banded estimate with a scope schedule at no charge. It is an honest range with the assumptions written down, not a hook.",
  },
  {
    q: "Which cities do you work in?",
    a: "We are based in Lahore and deliver commercial projects across Pakistan — Karachi, Islamabad, Multan and Faisalabad. Feasibility for a given city is confirmed at proposal stage against scope, scheduling and site readiness.",
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
