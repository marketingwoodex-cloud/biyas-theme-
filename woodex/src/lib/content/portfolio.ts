import type { FAQ } from "./types";

/**
 * PORTFOLIO & CASE STUDY DATA — PLACEHOLDER FRAMEWORK
 * ---------------------------------------------------------------------------
 * The brief forbids inventing client names, testimonials or metrics. These
 * records are therefore deliberately empty in every field that would be a
 * claim, and complete in every field that is structure.
 *
 * HOW TO GO LIVE WITH A REAL PROJECT
 *   1. Replace the bracketed strings.
 *   2. Set `status: "live"` — this adds it to sitemap.xml.
 *   3. Set `verified: true` on any result the client has signed off. Unverified
 *      figures render greyed with "pending client verification".
 *   4. Drop images into /public/img/projects/ and set `pending: false`.
 *
 * `clientLabel` never carries a real company name until written approval
 * exists. Format: "Client Name — [Industry], [City]".
 */

export type PortfolioImage = {
  src: string;
  alt: string;
  ratio: "4:3" | "16:9";
  /** true → renders the "Project photo pending" panel, never a broken image */
  pending: boolean;
};

export type Result = {
  value: string;
  label: string;
  /** false → greyed + "pending client verification". Never shown as fact. */
  verified: boolean;
};

export type PortfolioCategory =
  | "Office"
  | "Retail"
  | "Pharma"
  | "Education"
  | "Hospitality"
  | "Renovation";

export type PortfolioItem = {
  id: string;
  slug: string;
  status: "placeholder" | "live";
  featured: boolean;
  index: string;
  name: string;
  clientLabel: string;
  category: PortfolioCategory;
  city: string;
  size: string;
  duration: string;
  year: string;
  scope: "Design only" | "Design + Build" | "Fit-out only";
  serviceSlug: string;
  summary: string;
  challenge: string;
  constraints: string[];
  solution: string[];
  execution: string[];
  results: Result[];
  thumbnail: PortfolioImage;
  gallery: PortfolioImage[];
  hasCaseStudy: boolean;
  metaTitle: string;
  metaDescription: string;
  faqs?: FAQ[];
};

/** Six gallery slots so the template never collapses on a thin record. */
const gallerySlots = (label: string, city: string): PortfolioImage[] =>
  Array.from({ length: 6 }, (_, i) => ({
    src: "",
    alt: `${label} interior, ${city} — view ${String(i + 1).padStart(2, "0")}`,
    ratio: i === 0 ? "16:9" : "4:3",
    pending: true,
  }));

export const portfolio: PortfolioItem[] = [
  {
    id: "prj-001",
    slug: "corporate-office-lahore",
    status: "placeholder",
    featured: true,
    index: "01",
    name: "[Project Name]",
    clientLabel: "Client Name — Financial Services, Lahore",
    category: "Office",
    city: "Lahore",
    size: "[Size] sq ft",
    duration: "[Duration] weeks",
    year: "[Year]",
    scope: "Design + Build",
    serviceSlug: "office-fit-out",
    summary: "[One-line summary of the commercial outcome delivered.]",
    challenge: "[The client's business problem. Not the design brief — the operational reason the project existed.]",
    constraints: [
      "[Programme constraint — fixed handover date, lease expiry, trading requirement]",
      "[Budget constraint — capped spend, phased release]",
      "[Operational constraint — occupied floor, restricted access, working hours]",
    ],
    solution: [
      "[Key design decision one, and the reason for it]",
      "[Key design decision two]",
      "[Material or specification decision, and what it solved]",
    ],
    execution: [
      "[Coordination approach — MEP, subcontractors, landlord]",
      "[Site management and reporting arrangement]",
      "[Milestones met and how the programme was protected]",
    ],
    results: [
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
    ],
    thumbnail: { src: "/img/proj-01.jpg", alt: "Corporate office interior, Lahore", ratio: "4:3", pending: false },
    gallery: gallerySlots("Corporate office", "Lahore"),
    hasCaseStudy: true,
    metaTitle: "Corporate Office Fit-Out, Lahore | Woodex Interior",
    metaDescription:
      "A corporate office fit-out in Lahore delivered under one contract — space planning, 3D sign-off, line-item BOQ and documented handover.",
  },
  {
    id: "prj-002",
    slug: "corporate-office-karachi",
    status: "placeholder",
    featured: true,
    index: "02",
    name: "[Project Name]",
    clientLabel: "Client Name — Logistics, Karachi",
    category: "Office",
    city: "Karachi",
    size: "[Size] sq ft",
    duration: "[Duration] weeks",
    year: "[Year]",
    scope: "Design + Build",
    serviceSlug: "office-interior-design",
    summary: "[One-line summary of the commercial outcome delivered.]",
    challenge: "[The client's business problem.]",
    constraints: [
      "[Coastal environment — corrosion-resistant specification required]",
      "[Tower tenant criteria and permit-to-work restrictions]",
      "[Delivery windows constrained by central Karachi access]",
    ],
    solution: [
      "[Key design decision one]",
      "[Key design decision two]",
      "[Specification response to the coastal environment]",
    ],
    execution: [
      "[Remote site management arrangement from the Lahore studio]",
      "[Coordination with building management]",
      "[Weekly written reporting cadence]",
    ],
    results: [
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
    ],
    thumbnail: { src: "/img/svc-office.jpg", alt: "Corporate office interior, Karachi", ratio: "4:3", pending: false },
    gallery: gallerySlots("Corporate office", "Karachi"),
    hasCaseStudy: true,
    metaTitle: "Corporate Office Interior, Karachi | Woodex Interior",
    metaDescription:
      "A corporate office interior in Karachi — capacity planning, acoustic strategy and a specification written for the coastal environment.",
  },
  {
    id: "prj-003",
    slug: "showroom-fit-out-lahore",
    status: "placeholder",
    featured: true,
    index: "03",
    name: "[Project Name]",
    clientLabel: "Client Name — Retail, Lahore",
    category: "Retail",
    city: "Lahore",
    size: "[Size] sq ft",
    duration: "[Duration] weeks",
    year: "[Year]",
    scope: "Design + Build",
    serviceSlug: "retail-showroom-interior-design",
    summary: "[One-line summary of the commercial outcome delivered.]",
    challenge: "[The client's business problem — conversion, dwell time, brand consistency.]",
    constraints: [
      "[Trading days that could not be lost]",
      "[Landlord or centre fit-out criteria]",
      "[Fixture lead time against opening date]",
    ],
    solution: [
      "[Customer flow and zoning decision]",
      "[Modular fixture system designed for rollout]",
      "[Lighting specification for product presentation]",
    ],
    execution: [
      "[Off-site manufacture during approvals]",
      "[Out-of-hours installation to protect trading]",
      "[Handover and staff walkthrough]",
    ],
    results: [
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
    ],
    thumbnail: { src: "/img/svc-retail.jpg", alt: "Retail showroom interior, Lahore", ratio: "4:3", pending: false },
    gallery: gallerySlots("Retail showroom", "Lahore"),
    hasCaseStudy: true,
    metaTitle: "Showroom Fit-Out, Lahore | Woodex Interior",
    metaDescription:
      "A retail showroom fit-out in Lahore — customer flow planning, a modular fixture system and high-CRI lighting, installed out of hours.",
  },
  {
    id: "prj-004",
    slug: "retail-store-islamabad",
    status: "placeholder",
    featured: false,
    index: "04",
    name: "[Project Name]",
    clientLabel: "Client Name — Retail, Islamabad",
    category: "Retail",
    city: "Islamabad",
    size: "[Size] sq ft",
    duration: "[Duration] weeks",
    year: "[Year]",
    scope: "Fit-out only",
    serviceSlug: "retail-showroom-interior-design",
    summary: "[One-line summary.]",
    challenge: "[The client's business problem.]",
    constraints: ["[CDA approval window]", "[Fixed opening date]", "[Shopfront and signage criteria]"],
    solution: ["[Design decision one]", "[Design decision two]", "[Specification decision]"],
    execution: ["[Approvals coordination]", "[Site sequencing]", "[Snagging and handover]"],
    results: [
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
    ],
    thumbnail: { src: "/img/proj-04.jpg", alt: "Retail store interior, Islamabad", ratio: "4:3", pending: false },
    gallery: gallerySlots("Retail store", "Islamabad"),
    hasCaseStudy: false,
    metaTitle: "Retail Store Fit-Out, Islamabad | Woodex Interior",
    metaDescription: "A retail store fit-out in Islamabad, delivered to a fixed opening date under CDA approvals.",
  },
  {
    id: "prj-005",
    slug: "pharmacy-interior-lahore",
    status: "placeholder",
    featured: false,
    index: "05",
    name: "[Project Name]",
    clientLabel: "Client Name — Pharmacy, Lahore",
    category: "Pharma",
    city: "Lahore",
    size: "[Size] sq ft",
    duration: "[Duration] weeks",
    year: "[Year]",
    scope: "Design + Build",
    serviceSlug: "commercial-interior-design",
    summary: "[One-line summary.]",
    challenge: "[The client's business problem.]",
    constraints: [
      "[Dispensing had to remain operational throughout]",
      "[Controlled-drug storage security requirements]",
      "[Hygiene-rated finish schedule]",
    ],
    solution: ["[Circulation separation]", "[Dispensing counter and security design]", "[Cleanable surface specification]"],
    execution: ["[Phasing to keep dispensing live]", "[Compliance coordination]", "[Handover]"],
    results: [
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
    ],
    thumbnail: { src: "/img/proj-03.jpg", alt: "Pharmacy interior, Lahore", ratio: "4:3", pending: false },
    gallery: gallerySlots("Pharmacy", "Lahore"),
    hasCaseStudy: false,
    metaTitle: "Pharmacy Interior Fit-Out, Lahore | Woodex Interior",
    metaDescription:
      "A pharmacy interior in Lahore — hygiene-rated surfaces, secure dispensing and separated public and staff circulation.",
  },
  {
    id: "prj-006",
    slug: "campus-interior-multan",
    status: "placeholder",
    featured: false,
    index: "06",
    name: "[Project Name]",
    clientLabel: "Client Name — Education, Multan",
    category: "Education",
    city: "Multan",
    size: "[Size] sq ft",
    duration: "[Duration] weeks",
    year: "[Year]",
    scope: "Design + Build",
    serviceSlug: "commercial-interior-design",
    summary: "[One-line summary.]",
    challenge: "[The client's business problem.]",
    constraints: [
      "[Fixed vacation window — handover before term start]",
      "[Extreme summer cooling load]",
      "[Finishes rated for very high student traffic]",
    ],
    solution: ["[Teaching acoustic strategy]", "[Durable finish specification]", "[Supervision sightlines]"],
    execution: ["[Programme built backwards from term start]", "[Float protected at the front]", "[Handover before first day]"],
    results: [
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
      { value: "[Metric Placeholder]", label: "[What was measured]", verified: false },
    ],
    thumbnail: { src: "/img/proj-05.jpg", alt: "Campus interior, Multan", ratio: "4:3", pending: false },
    gallery: gallerySlots("Campus", "Multan"),
    hasCaseStudy: false,
    metaTitle: "Campus Interior Fit-Out, Multan | Woodex Interior",
    metaDescription:
      "A campus interior fit-out in Multan, programmed backwards from the first day of term with finishes rated for student traffic.",
  },
];

export const CATEGORIES: PortfolioCategory[] = [
  "Office",
  "Retail",
  "Pharma",
  "Education",
  "Hospitality",
  "Renovation",
];

export const getPortfolioItem = (slug: string) => portfolio.find((p) => p.slug === slug);
export const caseStudies = portfolio.filter((p) => p.hasCaseStudy);
/** Only live records belong in sitemap.xml. */
export const livePortfolio = portfolio.filter((p) => p.status === "live");
