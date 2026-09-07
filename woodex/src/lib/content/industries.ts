import type { FAQ } from "./types";

/**
 * INDUSTRY PAGES.
 *
 * Gate rule from the brief: high-intent, but only publish where real proof
 * exists. `indexed: false` pages are built and reachable, but excluded from the
 * sitemap and marked noindex — a thin industry page with no project ruins the
 * cluster's credibility and cannibalises the service page it should support.
 *
 * Flip `indexed` to true the day the first case study in that sector goes live.
 */

export type Industry = {
  slug: string;
  name: string;
  /** false → noindex + excluded from sitemap until a real project exists */
  indexed: boolean;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  lede: string;
  /** What makes this sector different from a generic commercial fit-out. */
  constraints: { t: string; d: string }[];
  outcomes: string[];
  faqs: FAQ[];
};

export const industries: Industry[] = [
  {
    slug: "office-workspaces",
    name: "Offices & Workspaces",
    indexed: true,
    serviceSlug: "office-interior-design",
    metaTitle: "Office & Workspace Interior Design | Woodex Interior",
    metaDescription:
      "Interior design and fit-out for corporate offices and workspaces — capacity planning, acoustics and finishes rated for commercial wear.",
    keywords: [
      "office interior design company",
      "workspace fit out",
      "corporate office interior",
      "office design pakistan",
      "workplace design",
      "office refurbishment company",
    ],
    image: "/img/svc-office.jpg",
    lede:
      "Offices are judged twice: by the client who visits once, and by the team who sits in them every day. Those two audiences want different things, and a workspace only works when the plan serves both.",
    constraints: [
      { t: "Capacity vs. comfort", d: "Density that looks efficient on a plan produces a room nobody can concentrate in. We model headcount against acoustic separation, not just against square footage." },
      { t: "Growth headroom", d: "Most offices are outgrown before they are worn out. Layouts are tested against your hiring plan so the space still works after the next intake." },
      { t: "Acoustic separation", d: "Open plan needs reverberation targets per zone and absorptive material placed where it works — not where it shows." },
      { t: "Ten-year wear", d: "Commercial traffic destroys domestic-grade finishes. Every surface is specified against a wear rating and a cleaning regime." },
    ],
    outcomes: [
      "A reception that works before the meeting starts",
      "Open plan people can actually concentrate in",
      "Layout that survives the next hiring round",
      "Finishes that still look right in year five",
    ],
    faqs: [
      {
        q: "How much space should we allow per person?",
        a: "For most Pakistani commercial offices, 70–100 sq ft per person including circulation and shared space. Dense sales floors run lower; legal and executive environments run higher. We model it against your actual headcount rather than applying a rule of thumb.",
      },
      {
        q: "Can you fit out while we keep working?",
        a: "Yes. We phase by floor or zone, seal the works area, run noisy trades out of hours and maintain a temporary circulation plan. Phasing adds programme, which is priced transparently rather than appearing later as delay.",
      },
      {
        q: "How do you handle meeting room demand?",
        a: "By counting actual usage rather than requests. Most offices need fewer large rooms and more two-person spaces than they think. We size the mix against observed patterns where data exists, and against sector norms where it does not.",
      },
    ],
  },

  {
    slug: "retail-stores-showrooms",
    name: "Retail Stores & Showrooms",
    indexed: true,
    serviceSlug: "retail-showroom-interior-design",
    metaTitle: "Retail Store & Showroom Fit-Out | Woodex Interior",
    metaDescription:
      "Interior design and fit-out for retail stores and showrooms, from single flagship units to documented multi-site rollouts.",
    keywords: [
      "retail interior design company",
      "store fit out pakistan",
      "showroom fit out company",
      "retail design agency",
      "shop fit out",
      "retail rollout",
    ],
    image: "/img/svc-retail.jpg",
    lede:
      "Retail interiors are measured, not admired. Conversion rate, dwell time, basket size and trading days lost to installation — those are the numbers a store design is accountable to.",
    constraints: [
      { t: "Trading days are revenue", d: "Every day the shutter is down costs money. Fixtures are manufactured off-site during approvals so installation windows stay short." },
      { t: "Fixture-first thinking fails", d: "The room and the fixtures must be one design. Plinth height, rail depth and lighting angle are decided by your product, not by a catalogue." },
      { t: "Light misrepresents product", d: "Low-CRI lighting makes merchandise read wrong. Accent lighting is specified at CRI 95+ with beam angles per product type." },
      { t: "Rollout economics", d: "Unit one should make unit two cheaper. That only happens if the first store is documented as a standards manual and a fixed kit." },
    ],
    outcomes: [
      "A route customers follow without signage",
      "Product that reads true under the light",
      "A fixture kit that scales to the next store",
      "Fewer trading days lost to installation",
    ],
    faqs: [
      {
        q: "How long will our store be closed?",
        a: "For a refit with a pre-manufactured fixture kit, typically 10–14 days. Where closure is unacceptable we work overnight in phases — slower overall, but the shutter stays up.",
      },
      {
        q: "Can you roll the design out to more stores?",
        a: "Yes. We prototype and sign off one flagship, document it as a standards manual with a fixed fixture kit, then manufacture in batches. Unit costs fall materially from the second store onward.",
      },
      {
        q: "Do you handle mall tenant approvals?",
        a: "Yes. We prepare the design intent pack to the centre's tenant criteria, respond to comments and coordinate access permits and the fit-out schedule with centre management.",
      },
    ],
  },

  {
    slug: "pharmacy-healthcare",
    name: "Pharmacy & Healthcare",
    indexed: false,
    serviceSlug: "commercial-interior-design",
    metaTitle: "Pharmacy & Healthcare Interior Design | Woodex Interior",
    metaDescription:
      "Interior design and fit-out for pharmacies and healthcare facilities — hygiene-rated surfaces, controlled circulation and compliant detailing.",
    keywords: [
      "pharmacy interior design",
      "medical store interior design",
      "healthcare interior design pakistan",
      "clinic fit out",
      "pharmacy fit out",
      "medical interior design",
    ],
    image: "/img/svc-residential.jpg",
    lede:
      "Healthcare interiors carry a duty that retail does not: the finish schedule is part of the infection-control strategy, and the circulation plan is part of patient dignity.",
    constraints: [
      { t: "Cleanable surfaces", d: "Impervious finishes with coved junctions and no open joints where they matter. Specified against a cleaning regime, not chosen by appearance." },
      { t: "Controlled circulation", d: "Public, staff and clinical routes need separation. Where they must cross, the crossing is designed rather than accidental." },
      { t: "Dispensing security", d: "Controlled-drug storage, secure counters and sightlines that let a small team supervise a full floor." },
      { t: "Waiting with dignity", d: "Seating layout, acoustic privacy at the counter and a queue that does not put a patient's business in public earshot." },
    ],
    outcomes: [
      "A finish schedule that supports infection control",
      "Separated public, staff and clinical routes",
      "Secure dispensing without a fortress feel",
      "Waiting areas that respect patient privacy",
    ],
    faqs: [
      {
        q: "What surfaces are appropriate for a clinical area?",
        a: "Impervious, cleanable finishes with coved junctions and sealed joints — welded vinyl or resin flooring, wipeable wall finishes, and solid-surface counters without open seams. The schedule is written against the cleaning regime, not chosen visually.",
      },
      {
        q: "Can you fit out a pharmacy without closing it?",
        a: "Usually yes, in phases, provided dispensing and controlled-drug storage remain secure and compliant throughout. That sequencing is agreed with you before work starts.",
      },
      {
        q: "Do you design the dispensing area?",
        a: "Yes, in coordination with your pharmacist. Counter height, secure storage, sightlines and the queue arrangement are designed together, because changing one of them later usually breaks the others.",
      },
    ],
  },

  {
    slug: "education-universities",
    name: "Education & Universities",
    indexed: false,
    serviceSlug: "commercial-interior-design",
    metaTitle: "School & University Interior Design | Woodex Interior",
    metaDescription:
      "Interior design and fit-out for schools, colleges and universities — durable finishes, acoustic control and layouts built for teaching.",
    keywords: [
      "school interior design pakistan",
      "university interior fit out",
      "education interior design",
      "campus fit out",
      "classroom design",
      "college interior design",
    ],
    image: "/img/proj-05.jpg",
    lede:
      "Education interiors face the hardest wear cycle of any commercial sector and the shortest possible installation window. Everything has to survive a thousand students and be finished before term starts.",
    constraints: [
      { t: "The vacation window", d: "Campus works happen in a fixed, immovable break. The programme is built backwards from the first day of term, with float protected at the front." },
      { t: "Extreme wear", d: "Corridors, door edges and furniture take abuse no office ever sees. Edge protection and impact-resistant surfaces are baseline, not upgrades." },
      { t: "Teaching acoustics", d: "A room where the back row cannot hear has failed regardless of how it looks. Reverberation is designed for speech intelligibility." },
      { t: "Safeguarding sightlines", d: "Supervision requires visibility. Glazing, door vision panels and corridor sightlines are planned for it." },
    ],
    outcomes: [
      "Handover before the first day of term",
      "Surfaces that survive a full academic year",
      "Rooms where the back row can hear",
      "Sightlines that support supervision",
    ],
    faqs: [
      {
        q: "Can you complete works during a vacation?",
        a: "That is how most campus work is programmed. We build the schedule backwards from the first day of term and protect float at the front, because the deadline genuinely cannot move.",
      },
      {
        q: "What finishes hold up in a school?",
        a: "Impact-resistant wall protection at corridor height, sealed hard flooring rather than carpet in circulation, solid timber or laminate edges rather than taped, and door hardware rated for very high cycles.",
      },
      {
        q: "Do you handle acoustics in classrooms?",
        a: "Yes. Speech intelligibility is the target, not just noise reduction. That means controlling reverberation to a target time and placing absorption where it improves clarity at the back of the room.",
      },
    ],
  },

  {
    slug: "hospitality",
    name: "Hospitality",
    indexed: false,
    serviceSlug: "commercial-interior-design",
    metaTitle: "Restaurant & Cafe Interior Design | Woodex Interior",
    metaDescription:
      "Interior design and fit-out for restaurants, cafes and hospitality venues — covers-driven planning and contract-grade specification.",
    keywords: [
      "restaurant interior design pakistan",
      "cafe fit out",
      "hospitality interior design",
      "restaurant fit out lahore",
      "cafe interior design",
      "bar design pakistan",
    ],
    image: "/img/svc-hospitality.jpg",
    lede:
      "In hospitality, design is an operating cost or an operating advantage — never neutral. Covers, service routes and turn times come first; everything else follows.",
    constraints: [
      { t: "Covers pay the rent", d: "Seat count is optimised against service routes, accessibility and escape widths — not squeezed in afterwards." },
      { t: "Back of house leads", d: "Pass position, stations and bin route are resolved before a single banquette is drawn. Get this wrong and no amount of styling fixes it." },
      { t: "Ten-year abuse cycle", d: "Contract-grade upholstery, sealed stone and solid edges. Domestic specification fails inside a year in a trading venue." },
      { t: "Service scene control", d: "Lighting shifts from lunch to late service on a timeclock. It is designed, not adjusted nightly by staff." },
    ],
    outcomes: [
      "A covers count that pays the rent",
      "Service routes that save seconds per trip",
      "Finishes that still look new in year three",
      "A room guests photograph unprompted",
    ],
    faqs: [
      {
        q: "Can you refurbish a venue without closing it?",
        a: "Often yes, with night and early-morning shifts and a sealed works zone. Expect a longer programme and a modest premium, offset against continued trading revenue.",
      },
      {
        q: "Do you coordinate with the kitchen consultant?",
        a: "Always. The commercial kitchen designer leads back-of-house equipment; we own the interface — pass height, service window, station placement, floor finishes and drainage transitions — and coordinate drawings both ways.",
      },
      {
        q: "How long does a restaurant fit-out take?",
        a: "For a shell unit around 3,000 sq ft, expect 6–8 weeks design and 10–14 weeks on site including kitchen installation and commissioning. Utility connections are usually the critical path, not the interior.",
      },
    ],
  },

  {
    slug: "clinics-medical",
    name: "Clinics & Medical Centres",
    indexed: false,
    serviceSlug: "commercial-interior-design",
    metaTitle: "Clinic & Medical Centre Interior Design | Woodex",
    metaDescription:
      "Interior design and fit-out for clinics and medical centres — consultation privacy, compliant surfaces and calm, legible circulation.",
    keywords: [
      "clinic interior design pakistan",
      "medical centre fit out",
      "doctor clinic interior design",
      "dental clinic interior design",
      "medical interior design lahore",
      "diagnostic centre design",
    ],
    image: "/img/proj-03.jpg",
    lede:
      "A clinic interior does clinical work. It lowers anxiety before a consultation, protects confidentiality at the desk, and makes a route obvious to someone who is unwell and unfamiliar.",
    constraints: [
      { t: "Acoustic confidentiality", d: "Consultation rooms need genuine speech privacy — full-height partitions, sealed penetrations and door seals, not decorative screening." },
      { t: "Legible wayfinding", d: "A patient who is anxious should not have to ask. Routes are made obvious through layout and light before signage is added." },
      { t: "Compliant surfaces", d: "Cleanable finishes, coved junctions, sealed joints and appropriate hand-hygiene provision throughout." },
      { t: "Equipment coordination", d: "Imaging and dental equipment carry structural, power and shielding requirements that must be resolved at design stage, not on site." },
    ],
    outcomes: [
      "Consultation rooms that hold a conversation privately",
      "Routes patients follow without asking",
      "Surfaces that meet the cleaning regime",
      "Equipment coordinated before installation",
    ],
    faqs: [
      {
        q: "How do you ensure consultation privacy?",
        a: "Full-height partitions rather than stopping at the ceiling grid, sealed service penetrations, acoustic door seals and careful placement of the reception queue relative to consultation doors. Decorative screening does not achieve speech privacy.",
      },
      {
        q: "Can you coordinate medical equipment installation?",
        a: "Yes. Imaging, dental and diagnostic equipment carry structural loading, power and shielding requirements. We coordinate with your supplier at design stage so the room is right before delivery, not modified after.",
      },
      {
        q: "What is the typical programme for a clinic fit-out?",
        a: "For a mid-size clinic, 4–6 weeks design and 8–12 weeks on site, depending on equipment lead times and whether medical gas or shielding is involved. Equipment lead time is usually the critical path.",
      },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const indexedIndustries = industries.filter((i) => i.indexed);
