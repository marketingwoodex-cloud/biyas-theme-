import type { Service } from "./types";

/**
 * SERVICE CONTENT — SEO layer
 * Each entry carries its own metaTitle / metaDescription / keywords and a
 * FAQ block that renders as visible content AND FAQPage JSON-LD.
 * Copy rule: name the material, name the tolerance, never oversell.
 */
export const services: Service[] = [
  {
    slug: "office-interior-design",
    index: "01",
    title: "Office Interior Design",
    short: "Office",
    kicker: "Workplace",
    headline: "Your office is your most visible brand statement.",
    metaTitle: "Office Interior Design & Workplace Fit-Out | Woodex Interior",
    metaDescription:
      "Corporate office interior design and turnkey workplace fit-out — space planning, acoustics, bespoke joinery and MEP coordination. Design, manufacture and install under one contract.",
    keywords: [
      "office interior design",
      "corporate office fit-out",
      "workplace interior design",
      "commercial interior design",
      "office space planning",
      "office renovation",
      "boardroom design",
      "acoustic office design",
    ],
    image: "/img/svc-office.jpg",
    lede:
      "Every client, every candidate and every employee reads your office before they read your deck. We design workplaces that argue your case in the first eleven seconds — then keep working for the next ten years.",
    body: [
      "An office is the only marketing asset your team stands inside all day. It sets the tone of a negotiation before anyone speaks, decides whether a senior hire says yes, and quietly governs how much focused work actually happens between nine and six. Most offices fail at this not because the budget was small, but because the space was planned as a furniture order rather than as architecture.",
      "Woodex approaches workplace as a sequence: arrival, threshold, work, retreat, hospitality. We plan the whole journey — how a visitor is received, where a confidential call can happen, how far the loudest person sits from the deepest thinker — then resolve it in materials that survive commercial wear. Fluted timber that hides acoustic backing. Stone that takes a coffee ring. Brass that ages instead of chipping.",
      "Because we own the joinery shop, the reception desk in your drawing is the reception desk that arrives on site. There is no value-engineering conversation three weeks before handover, no substituted veneer, no gap where a shadow line was specified.",
    ],
    deliverables: [
      { t: "Space planning & test fits", d: "Headcount modelling, adjacency mapping and three tested layouts before a single wall is drawn." },
      { t: "Acoustic strategy", d: "Reverberation targets per zone, absorptive joinery, and speech-privacy detailing for open plan." },
      { t: "Reception & brand moments", d: "The arrival sequence — desk, wall, lighting and signage designed as one object." },
      { t: "Bespoke workplace joinery", d: "Boardroom tables, storage walls, tea points and lockers built in our own shop." },
      { t: "Lighting & MEP coordination", d: "Lux levels, glare control and full clash-detection with services before ceilings close." },
      { t: "Furniture specification", d: "Ergonomic and loose furniture selected, procured, delivered and installed." },
    ],
    outcomes: [
      "A reception that closes deals before the meeting starts",
      "Measurable drop in open-plan noise complaints",
      "Fit-out that survives a decade of commercial wear",
      "One contract, one team, one handover date",
    ],
    faqs: [
      {
        q: "How long does an office fit-out take?",
        a: "A 5,000 sq ft workplace typically runs 6 weeks of design and 8–10 weeks on site. Larger floorplates or heritage buildings extend the survey and approvals phase, not usually the build. We issue a dated programme at contract stage and report against it weekly.",
      },
      {
        q: "Can you work while the office stays occupied?",
        a: "Yes. We routinely phase fit-outs floor by floor or zone by zone, with dust screens, out-of-hours noisy works and a temporary circulation plan so the business keeps trading. Phasing is priced transparently — it adds programme, not surprises.",
      },
      {
        q: "Do you handle landlord approvals and building regulations?",
        a: "We prepare and submit the licence-for-alterations pack, coordinate with the landlord's surveyor, and deliver a compliant scheme covering fire strategy, means of escape and accessibility. Statutory fees are passed through at cost.",
      },
      {
        q: "What does office interior design cost?",
        a: "Fit-out in this market ranges roughly from a functional refresh to a full architectural specification, and the variable is almost always joinery, stone and services — not floor area. We give you a banded estimate from your floor plan before you commit to anything.",
      },
    ],
  },

  {
    slug: "residential-interior-design",
    index: "02",
    title: "Residential Interior Design",
    short: "Residential",
    kicker: "Private",
    headline: "A home that reads as one idea, room to room.",
    metaTitle: "Luxury Residential Interior Design & Home Renovation | Woodex",
    metaDescription:
      "Full-service residential interior design: villas, apartments and penthouses. Bespoke kitchens, wardrobes and stone work — designed, manufactured and installed by one studio.",
    keywords: [
      "residential interior design",
      "luxury home interior design",
      "villa interior design",
      "apartment interior design",
      "bespoke kitchen design",
      "home renovation",
      "custom wardrobes",
      "interior designer",
    ],
    image: "/img/svc-residential.jpg",
    lede:
      "Most homes are decorated in fragments — a kitchen from one supplier, wardrobes from another, a sofa chosen on a Sunday. We design the whole house as a single material argument, then build it.",
    body: [
      "The difference between an expensive house and a considered one is continuity. The same oak that lines the entrance hall should return as the bedhead. The brass on the kitchen tap should be the brass on the wardrobe pull. When those decisions are made by five different suppliers on five different weeks, the house never resolves — and no amount of styling fixes it.",
      "We start with how the family actually lives: which door people really use, where school bags land, who cooks and who watches. Then we build a material palette that runs the length of the plan and detail every junction — the shadow gap where plaster meets timber, the 2mm reveal under a floating vanity, the way a door handle feels at 3mm of travel.",
      "Kitchens, wardrobes, vanities, media walls and libraries are manufactured in our own workshop to a 2mm tolerance and installed by the same team that measured them. Stone is templated on site after the substrate is built, never before.",
    ],
    deliverables: [
      { t: "Concept & material board", d: "A physical box of samples — timber, stone, metal, textile — before any 3D is produced." },
      { t: "Full drawing set", d: "Plans, elevations, RCPs, joinery details and electrical setting-out at 1:20 and 1:5." },
      { t: "Bespoke kitchens & wardrobes", d: "Manufactured in-house in veneer, lacquer or solid timber with soft-close German hardware." },
      { t: "Stone & surfaces", d: "Slab selection with you at the yard, digital templating, book-matched fabrication." },
      { t: "Lighting design", d: "Layered circuits — ambient, task, accent, feature — with dimming scenes set at handover." },
      { t: "Styling & handover", d: "Art, rugs, ceramics and textiles placed. The house is photographed and handed over clean." },
    ],
    outcomes: [
      "One coherent material story across every room",
      "Joinery that fits the wall it was measured against",
      "No supplier gaps and no orphan finishes",
      "A documented set you own for future works",
    ],
    faqs: [
      {
        q: "Do you take on single-room projects?",
        a: "We take on kitchens, primary suites and libraries as standalone commissions when the scope includes bespoke joinery. For purely decorative single rooms we are usually not the right studio, and we will say so early.",
      },
      {
        q: "Can we live in the house during the works?",
        a: "For a full renovation we strongly recommend vacating — wet trades, dust and services shutdowns make it unpleasant and slow the programme. For a phased apartment project we can seal zones and work around occupancy.",
      },
      {
        q: "How involved will I need to be?",
        a: "Roughly four decision points: material board sign-off, layout sign-off, stone selection at the yard, and a pre-handover walkthrough. Between those we run weekly written updates with photographs so you can stay light-touch.",
      },
      {
        q: "Do you supply furniture as well?",
        a: "Yes. We specify, procure and install loose furniture, lighting, rugs and accessories. Anything bespoke is made in our workshop; everything else is bought through trade accounts and passed to you with the discount visible.",
      },
    ],
  },

  {
    slug: "hospitality-interior-design",
    index: "03",
    title: "Hospitality Interiors",
    short: "Hospitality",
    kicker: "F&B / Hotel",
    headline: "Rooms that earn their seat covers.",
    metaTitle: "Restaurant, Café & Hotel Interior Design | Woodex Interior",
    metaDescription:
      "Hospitality interior design and fit-out for restaurants, cafés, bars and boutique hotels. Covers-driven space planning, durable detailing and fast, phased delivery.",
    keywords: [
      "hospitality interior design",
      "restaurant interior design",
      "cafe interior design",
      "hotel interior design",
      "bar design",
      "restaurant fit-out",
      "boutique hotel interiors",
      "F&B design",
    ],
    image: "/img/svc-hospitality.jpg",
    lede:
      "In hospitality, design is an operating cost or an operating advantage — never a neutral. We plan for covers, service routes and turn times first, then make it beautiful.",
    body: [
      "A restaurant interior has to do three jobs at once: photograph well enough to fill the diary, seat enough covers to make the rent work, and let a server carry four plates from pass to table without a detour. Get the third one wrong and the first two stop mattering by month six.",
      "We plan hospitality from the back of house forward. Pass position, waiter stations, glass wash, dry store, bin route, staff changing — resolved before a single banquette is drawn. Then we layer the guest experience: the threshold moment, the sightline from the door to the best table, the lighting curve that shifts from lunch to late service on a timeclock.",
      "Materials are chosen for a ten-year abuse cycle. Solid timber edges instead of veneer on banquette returns. Unlacquered brass that patinas rather than wearing through. Upholstery in 100,000-rub contract grades. Stone sealed for wine, oil and citrus.",
    ],
    deliverables: [
      { t: "Covers & flow modelling", d: "Seat count optimisation against service routes, accessibility and fire escape widths." },
      { t: "Back-of-house planning", d: "Kitchen interface, pass, stations, storage and staff welfare coordinated with your operator." },
      { t: "Feature joinery & bars", d: "Bar fronts, back-bars, banquettes and host desks built in-house in solid and veneered timber." },
      { t: "Lighting & scene control", d: "Timeclock scenes for brunch, dinner and late service, with 2700K warm-dim on guest-facing circuits." },
      { t: "Contract-grade specification", d: "Every finish rated for commercial wear, cleaning regime and fire compliance." },
      { t: "Phased night works", d: "Trading-hours-friendly programmes for refurbishments of live venues." },
    ],
    outcomes: [
      "Covers count that actually pays the rent",
      "Service routes that shave seconds off every trip",
      "Finishes that still look new after year three",
      "A room guests photograph without being asked",
    ],
    faqs: [
      {
        q: "Can you refurbish a venue without closing it?",
        a: "Often yes. We run night and early-morning shifts, seal the works zone, and stage material deliveries outside trading hours. Expect a longer programme and a modest premium, offset against continued revenue.",
      },
      {
        q: "Do you coordinate with the kitchen consultant?",
        a: "Always. The commercial kitchen designer leads back-of-house equipment; we own the interface — pass height, service window, station placement, floor finishes and drainage transitions — and coordinate drawings both ways.",
      },
      {
        q: "How do you handle fire and food-safety compliance?",
        a: "Finishes are specified to the required surface-spread-of-flame class, escape widths are checked at layout stage, and all food-contact and wash-down zones are detailed in impervious, cleanable materials with coved junctions.",
      },
      {
        q: "What is a realistic programme for a new restaurant?",
        a: "For a shell-and-core unit of around 3,000 sq ft, expect 6–8 weeks design and 10–14 weeks on site including kitchen installation and commissioning. Landlord and utility connections are the usual critical path, not the interior.",
      },
    ],
  },

  {
    slug: "retail-showroom-fit-out",
    index: "04",
    title: "Retail & Showroom Fit-Out",
    short: "Retail",
    kicker: "Commercial",
    headline: "Merchandise looks expensive when the room does.",
    metaTitle: "Retail Interior Design & Showroom Fit-Out | Woodex Interior",
    metaDescription:
      "Retail interior design and showroom fit-out — customer flow, display systems, lighting and rollout-ready joinery packages built and installed by one studio.",
    keywords: [
      "retail interior design",
      "showroom design",
      "retail fit-out",
      "shop interior design",
      "store design",
      "retail display joinery",
      "boutique interior design",
      "retail rollout",
    ],
    image: "/img/svc-retail.jpg",
    lede:
      "Retail is choreography. Where the eye lands at the door, where the hand reaches, where the queue forms. We design the route, build the fixtures, and light the product properly.",
    body: [
      "The most common retail mistake is treating the shop as a container for fixtures bought later. The room and the fixtures have to be one design: the plinth height that suits your product, the rail depth that suits your hanger, the lighting angle that suits your fabric. Retrofitted display never quite fits, and customers feel it even when they cannot name it.",
      "We plan the decompression zone at the entrance, the power wall on the customer's natural right turn, the sightline that pulls them to the back of the store, and the till position that lets one person cover the floor. Then we build the fixtures in our workshop as a system — modular, repeatable, and shippable to your next unit.",
      "Lighting is where most retail is lost. We specify high-CRI accent lighting on adjustable tracks with beam angles chosen per product type, so texture and colour survive the trip from studio to shelf.",
    ],
    deliverables: [
      { t: "Customer flow & zoning", d: "Decompression, power wall, adjacency and till placement modelled against your product mix." },
      { t: "Modular display systems", d: "Rails, plinths, shelving and vitrines designed as a repeatable kit for multi-site rollout." },
      { t: "High-CRI retail lighting", d: "CRI 95+ accent lighting, beam angles and colour temperature matched to merchandise." },
      { t: "Shopfront & signage", d: "Facade, glazing, entrance detailing and illuminated signage coordinated with landlord criteria." },
      { t: "Rollout documentation", d: "A brand-standards manual so unit two costs less and looks identical to unit one." },
      { t: "Rapid night installation", d: "Fixture swaps and refits executed overnight to protect trading days." },
    ],
    outcomes: [
      "A route customers follow without signage",
      "Product that reads true under the light",
      "A fixture kit that scales to the next store",
      "Fewer trading days lost to installation",
    ],
    faqs: [
      {
        q: "Can you deliver a multi-site rollout?",
        a: "Yes. We prototype and sign off one flagship, document it as a standards manual with a fixed fixture kit, then manufacture in batches. Unit economics improve substantially from the second store onward.",
      },
      {
        q: "How quickly can a store be fitted out?",
        a: "A 1,200 sq ft unit with a pre-manufactured fixture kit can be installed in 10–14 days on site. The lead time sits in the workshop, which is why we start manufacturing during landlord approvals rather than after.",
      },
      {
        q: "Do you work with our existing brand guidelines?",
        a: "We prefer it. Brand guidelines set the colour, type and tone; our job is to translate them into materials, light and three dimensions without flattening them into printed vinyl.",
      },
      {
        q: "Who handles landlord shopfitting approvals?",
        a: "We do. We prepare the design intent pack to the centre's tenant criteria, respond to comments, and coordinate the fit-out schedule and access permits with centre management.",
      },
    ],
  },

  {
    slug: "bespoke-joinery-millwork",
    index: "05",
    title: "Bespoke Joinery & Millwork",
    short: "Joinery",
    kicker: "Workshop",
    headline: "We own the shop. That is the whole argument.",
    metaTitle: "Bespoke Joinery & Custom Millwork Manufacturing | Woodex",
    metaDescription:
      "Custom joinery and millwork made in our own workshop — kitchens, wardrobes, reception desks, panelling and veneer work to a 2mm tolerance, measured and installed by our team.",
    keywords: [
      "bespoke joinery",
      "custom millwork",
      "custom furniture manufacturing",
      "veneer panelling",
      "made to measure wardrobes",
      "reception desk manufacturing",
      "fluted wood panelling",
      "carpentry workshop",
    ],
    image: "/img/svc-joinery.jpg",
    lede:
      "Most interior studios draw joinery and hope a subcontractor honours it. We draw it, cut it, finish it and hang it — so the detail on the drawing is the detail on the wall.",
    body: [
      "Joinery is where interiors are won or lost. It is also where they are quietly value-engineered: a 6mm shadow gap becomes 12mm, a book-matched veneer becomes randomly slipped, a solid edge becomes a taped one. None of it is visible on a schedule, all of it is visible in the room.",
      "Our workshop runs CNC nesting, edge banding, spray finishing and hand assembly under one roof. We buy veneer by the log so a sequence runs true across an eight-metre wall. We finish in-house, so colour matches between the wardrobe and the bedhead built four weeks apart.",
      "Every piece is site-measured after substrates are complete, manufactured to a 2mm tolerance, dry-assembled in the shop, then delivered and installed by the makers. If something is out, the person who cut it is the person who fixes it.",
    ],
    deliverables: [
      { t: "Design & shop drawings", d: "1:5 and 1:1 details, hardware schedules and setting-out issued for your approval before cutting." },
      { t: "Veneer & solid timber", d: "Log-matched veneer, solid edges and hand-selected boards; walnut, oak, ash, teak and sapele." },
      { t: "Spray & hand finishing", d: "Lacquer, oil, stain and patina applied in a controlled booth, with sample panels signed off first." },
      { t: "Panelling systems", d: "Fluted, slatted, book-matched and acoustic panelling with concealed fixing and true shadow gaps." },
      { t: "Metal & stone integration", d: "Brass inlays, steel frames and stone tops templated and married to timber in the shop, not on site." },
      { t: "Measure & install", d: "Site survey, dry fit, delivery and installation by the same team that manufactured the piece." },
    ],
    outcomes: [
      "Drawn detail equals delivered detail",
      "2mm tolerance across every unit",
      "Colour and grain continuity across the project",
      "One party accountable for the finish",
    ],
    faqs: [
      {
        q: "Will you manufacture for another designer's drawings?",
        a: "Yes — we take trade commissions from architects and interior designers. We will review your details for buildability and come back with comments before quoting, which usually saves both of us a revision cycle.",
      },
      {
        q: "What timber species do you stock?",
        a: "Walnut, European and white oak, ash, teak and sapele in both solid and veneer. Anything outside that is sourced to order; expect four to six weeks for specialist or log-matched veneer.",
      },
      {
        q: "How do you guarantee colour matching?",
        a: "We spray sample panels in the actual substrate and finish, sign them off with you under the project's lighting, then keep the batch formulation on file for the life of the project so later additions match.",
      },
      {
        q: "What tolerance do you work to?",
        a: "2mm on manufactured units and 1mm on visible reveals and shadow gaps. Where a building is out of square — and it usually is — we scribe on site rather than leaving a tapered gap.",
      },
    ],
  },

  {
    slug: "turnkey-fit-out-management",
    index: "06",
    title: "Turnkey Fit-Out & Project Management",
    short: "Turnkey",
    kicker: "Delivery",
    headline: "One contract. One number. One handover date.",
    metaTitle: "Turnkey Interior Fit-Out & Project Management | Woodex",
    metaDescription:
      "Turnkey interior fit-out delivery — single-contract design, manufacture, MEP coordination, site management and handover with weekly cost and programme reporting.",
    keywords: [
      "turnkey fit-out",
      "interior fit-out contractor",
      "interior project management",
      "design and build interiors",
      "MEP coordination",
      "site supervision",
      "fit-out contractor",
      "interior construction management",
    ],
    image: "/img/svc-turnkey.jpg",
    lede:
      "The most expensive thing in any interior project is the gap between parties. Turnkey removes the gap: we hold the design, the manufacture and the site under one agreement.",
    body: [
      "Split contracts fail in the seams. The designer says the contractor built it wrong; the contractor says the drawing was unbuildable; the joiner says nobody told them about the sprinkler drop. Every one of those conversations costs you a week and a variation order.",
      "Under a turnkey agreement Woodex carries the whole chain. We produce the design, manufacture the joinery, appoint and manage the wet trades, coordinate MEP, run the site, and hand you a snag-free space on the date in the contract. If two trades clash, it is our problem to solve, not yours to referee.",
      "You get a fixed lump sum against a defined specification, a dated programme, weekly written progress with photographs, and a transparent variation process where any change is priced and approved before it is executed. No end-of-project reconciliations, no invoices you did not see coming.",
    ],
    deliverables: [
      { t: "Single-point contract", d: "One agreement covering design, manufacture, construction and handover." },
      { t: "Fixed lump-sum pricing", d: "A priced specification with a clear inclusions and exclusions schedule — no hidden provisional sums." },
      { t: "Programme & critical path", d: "A dated Gantt with milestones, long-lead items flagged and float shown honestly." },
      { t: "MEP & services coordination", d: "Clash detection across HVAC, electrical, sprinklers and data before ceilings and walls close." },
      { t: "Site management & QA", d: "A dedicated site manager, weekly written reports with photographs, and documented quality checks by trade." },
      { t: "Snag, handover & O&M", d: "Joint snagging, rectification, as-built drawings, warranties and a maintenance manual at handover." },
    ],
    outcomes: [
      "No finger-pointing between design and build",
      "Cost certainty from contract to completion",
      "Weekly visibility without chasing anyone",
      "A documented, warranted, snag-free handover",
    ],
    faqs: [
      {
        q: "What exactly does 'turnkey' include?",
        a: "Everything from measured survey to the day you unlock the door: design, approvals support, joinery manufacture, all trades, MEP coordination, furniture installation, snagging, cleaning and handover documentation. Statutory fees and utility connection charges are the usual exclusions and are always listed.",
      },
      {
        q: "How are variations and extra costs handled?",
        a: "Nothing is built before it is priced and signed. Any change — yours or a site condition we discover — is issued as a written variation with cost and programme impact, and only proceeds on your approval.",
      },
      {
        q: "What are typical payment terms?",
        a: "A mobilisation payment at contract, then staged payments against verified milestones — not against calendar dates. A retention is held until the snag list is closed at the end of the defects period.",
      },
      {
        q: "Do you offer a warranty after handover?",
        a: "Twelve months on workmanship as standard, with manufacturer warranties on hardware, appliances and equipment passed directly to you. We run a formal defects inspection before the period closes.",
      },
    ],
  },

  {
    slug: "art-curation-gallery-walls",
    index: "07",
    title: "Full-Suite Art Curation",
    short: "Art",
    kicker: "Curation",
    headline: "The last five percent that makes a room finished.",
    metaTitle: "Art Curation, Gallery Walls & Bespoke Commissions | Woodex",
    metaDescription:
      "Full-suite art curation for interiors — sourcing, commissioning, framing, gallery lighting and installation. Original works and site-specific commissions from a working gallery network.",
    keywords: [
      "art curation",
      "corporate art consultancy",
      "gallery wall design",
      "art commissioning",
      "bespoke art for interiors",
      "picture lighting design",
      "art installation service",
      "hotel art curation",
    ],
    image: "/img/detail-joinery.jpg",
    lede:
      "A finished interior with rented posters on the wall is an unfinished interior. We curate, commission, frame, light and hang original work as part of the build — not as an afterthought six months later.",
    body: [
      "Art is usually the item that gets deferred. The budget runs tight, the walls go up bare, and the client promises to sort it later. Later never has the site access, the lighting circuits or the wall blocking that would have made it easy — so the room stays 95% resolved forever.",
      "We treat art as a construction item. Hanging positions are set at drawing stage, so blocking goes into the wall and picture circuits go into the ceiling. Frames are specified against the joinery palette. Scale is tested with full-size mock-ups before anything is bought.",
      "Through our gallery network we source original work, negotiate directly with artists, and commission site-specific pieces — calligraphy, textile, sculpture and mixed media — at the scale the wall actually needs. Every piece arrives conservation-framed, condition-reported and hung on a security fixing.",
    ],
    deliverables: [
      { t: "Curatorial brief", d: "A written point of view for the collection — themes, media, scale and budget bands — before shopping." },
      { t: "Sourcing & commissioning", d: "Original works sourced from represented artists, or site-specific pieces commissioned to your wall." },
      { t: "Conservation framing", d: "Museum-grade mounts, UV glazing and frame profiles drawn from the project's material palette." },
      { t: "Gallery lighting", d: "Dedicated picture circuits, framing projectors and beam angles set to eliminate glare and hotspots." },
      { t: "Scale mock-ups", d: "Full-size paper proofs hung on site so scale and position are proven before purchase." },
      { t: "Installation & documentation", d: "Security fixings, condition reports, a valuation schedule and an insurance-ready inventory." },
    ],
    outcomes: [
      "Walls resolved on handover day, not next year",
      "Original work instead of reproduction filler",
      "Lighting that makes the art readable",
      "A documented, insurable collection",
    ],
    faqs: [
      {
        q: "Do we have to buy the art outright?",
        a: "No. We arrange outright purchase, rotating leases for corporate lobbies, and commission agreements with staged payments. Leasing suits reception and hospitality spaces where you want the collection to change.",
      },
      {
        q: "Can you commission work at a specific size?",
        a: "That is the point of commissioning. We brief the artist against your wall dimensions, palette and sightlines, review at sketch and mid-stage, and manage delivery to fit the construction programme.",
      },
      {
        q: "How far in advance should art be planned?",
        a: "At concept stage. Wall blocking, picture circuits and lighting positions are construction decisions. Commissioned work typically needs 8–16 weeks, which should run parallel to the fit-out, not after it.",
      },
      {
        q: "Do you provide valuations and insurance documentation?",
        a: "Yes. Every installed piece is delivered with a condition report, provenance where available, and a valuation schedule formatted for your insurer.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
