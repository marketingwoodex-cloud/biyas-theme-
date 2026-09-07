import type { Service } from "./types";

/**
 * SERVICE CONTENT — the live Woodex six.
 * Residential · Office · Restaurant · Retail · Craft · 3D Studio
 *
 * Each entry carries its own metaTitle / metaDescription / keywords and a
 * FAQ block that renders as visible content AND FAQPage JSON-LD.
 * Copy rule: short sentences, name the deliverable, never oversell.
 */
export const services: Service[] = [
  {
    slug: "residential-interior-design",
    index: "01",
    title: "Residential",
    short: "Residential",
    kicker: "Homes",
    headline: "A home that reads as one idea, room to room.",
    metaTitle: "Residential Interior Design & Home Execution | Woodex Interior",
    metaDescription:
      "Residential interior design for villas, apartments and penthouses — 3D stills before anything is bought, full BOQ, and execution by our own site team.",
    keywords: [
      "residential interior design",
      "home interior design",
      "villa interior design",
      "apartment interior design",
      "bespoke kitchen design",
      "custom wardrobes",
      "house renovation",
      "interior designer Lahore",
    ],
    image: "/img/svc-residential.jpg",
    lede:
      "Most homes are decorated in fragments — a kitchen from one supplier, wardrobes from another, a sofa chosen on a Sunday. We draw the whole house as one idea, then build it.",
    body: [
      "The difference between an expensive house and a considered one is continuity. The same oak that lines the entrance hall should return as the bedhead. The metal on the kitchen tap should be the metal on the wardrobe pull. When those decisions are made by five suppliers across five weeks, the house never resolves — and no amount of styling fixes it.",
      "We start with how the family actually lives: which door people really use, where school bags land, who cooks and who watches. Then we build a material palette that runs the length of the plan and produce 3D stills of every room. You approve a picture of your own house before a single item is ordered.",
      "After sign-off the drawing becomes a BOQ — every sheet, every metre, every fitting, priced. Kitchens, wardrobes, vanities and media walls are made in our workshop and installed by the same team that measured them.",
    ],
    deliverables: [
      { t: "Brief & measured survey", d: "A site visit, a laser survey and a long conversation about how the space is actually used." },
      { t: "Material board", d: "A physical box of samples — timber, stone, metal, textile — before any 3D is produced." },
      { t: "3D stills, room by room", d: "Photoreal stills of every space, revised until you recognise your own home in them." },
      { t: "Full drawing set", d: "Plans, elevations, RCPs, joinery details and electrical setting-out at 1:20 and 1:5." },
      { t: "BOQ & fixed pricing", d: "A line-by-line bill of quantities so you can see exactly what each decision costs." },
      { t: "Execution & handover", d: "Our own site team, weekly written progress, joint snagging and a clean handover." },
    ],
    outcomes: [
      "One coherent material story across every room",
      "You approve a picture, not a promise",
      "Line-by-line costs before work starts",
      "Joinery that fits the wall it was measured against",
    ],
    faqs: [
      {
        q: "Do you take on single-room projects?",
        a: "Yes — kitchens, primary suites and libraries as standalone commissions, provided the scope includes made joinery. For purely decorative single rooms we are usually not the right studio, and we will say so early.",
      },
      {
        q: "Can we live in the house during the works?",
        a: "For a full renovation we strongly recommend vacating — wet trades, dust and services shutdowns make it unpleasant and slow the programme. For a phased apartment we can seal zones and work around occupancy.",
      },
      {
        q: "How many revisions do the 3D stills include?",
        a: "Three rounds per room as standard, which is almost always enough because the material board is signed off first. Further rounds are quoted, but in practice they are rare.",
      },
      {
        q: "How involved will I need to be?",
        a: "Roughly four decision points: material board, layout, 3D still sign-off, and a pre-handover walkthrough. Between those we send a written weekly update with photographs so you can stay light-touch.",
      },
    ],
  },

  {
    slug: "office-interior-design",
    index: "02",
    title: "Office",
    short: "Office",
    kicker: "Workplace",
    headline: "Your office is your most visible brand statement.",
    metaTitle: "Office Interior Design & Workplace Fit-Out | Woodex Interior",
    metaDescription:
      "Corporate office interior design and workplace fit-out — space planning, acoustics, bespoke joinery and MEP coordination, delivered from 3D still to BOQ to site.",
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
      "An office is the only marketing asset your team stands inside all day. It sets the tone of a negotiation before anyone speaks, decides whether a senior hire says yes, and quietly governs how much focused work happens between nine and six. Most offices fail at this not because the budget was small, but because the space was planned as a furniture order rather than as architecture.",
      "We approach workplace as a sequence: arrival, threshold, work, retreat, hospitality. We plan the whole journey — how a visitor is received, where a confidential call can happen, how far the loudest person sits from the deepest thinker — then resolve it in materials that survive commercial wear. Fluted timber that hides acoustic backing. Stone that takes a coffee ring. Metal that ages instead of chipping.",
      "You see the reception in 3D before it is priced, and priced before it is built. Because our joinery is made in-house, the desk in the still is the desk that arrives on site — no value-engineering conversation three weeks before handover.",
    ],
    deliverables: [
      { t: "Space planning & test fits", d: "Headcount modelling, adjacency mapping and three tested layouts before a wall is drawn." },
      { t: "Acoustic strategy", d: "Reverberation targets per zone, absorptive joinery and speech-privacy detailing for open plan." },
      { t: "Reception & brand moments", d: "The arrival sequence — desk, wall, lighting and signage designed as one object." },
      { t: "3D stills for sign-off", d: "Photoreal views of reception, boardroom and open plan before procurement starts." },
      { t: "Lighting & MEP coordination", d: "Lux levels, glare control and full clash detection with services before ceilings close." },
      { t: "BOQ, build & handover", d: "Line-by-line pricing, our own site team, snagging and O&M documentation." },
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
        a: "Yes. We routinely phase fit-outs floor by floor, with dust screens, out-of-hours noisy works and a temporary circulation plan so the business keeps trading. Phasing is priced transparently — it adds programme, not surprises.",
      },
      {
        q: "Do you handle landlord approvals and building regulations?",
        a: "We prepare and submit the licence-for-alterations pack, coordinate with the landlord's surveyor, and deliver a compliant scheme covering fire strategy, means of escape and accessibility. Statutory fees are passed through at cost.",
      },
      {
        q: "What does office interior design cost?",
        a: "The variable is almost always joinery, stone and services — not floor area. Send a floor plan and we will return a banded estimate with the assumptions written down, before you commit to anything.",
      },
    ],
  },

  {
    slug: "restaurant-interior-design",
    index: "03",
    title: "Restaurant",
    short: "Restaurant",
    kicker: "Hospitality",
    headline: "Rooms that earn their seat covers.",
    metaTitle: "Restaurant, Café & Hospitality Interior Design | Woodex Interior",
    metaDescription:
      "Restaurant and café interior design and fit-out — covers-driven planning, back-of-house coordination, contract-grade detailing and fast, phased delivery.",
    keywords: [
      "restaurant interior design",
      "cafe interior design",
      "hospitality interior design",
      "hotel interior design",
      "bar design",
      "restaurant fit-out",
      "F&B interior design",
      "banquette design",
    ],
    image: "/img/svc-hospitality.jpg",
    lede:
      "In hospitality, design is an operating cost or an operating advantage — never neutral. We plan for covers, service routes and turn times first, then make it beautiful.",
    body: [
      "A restaurant interior has to do three jobs at once: photograph well enough to fill the diary, seat enough covers to make the rent work, and let a server carry four plates from pass to table without a detour. Get the third one wrong and the first two stop mattering by month six.",
      "We plan hospitality from the back of house forward. Pass position, waiter stations, glass wash, dry store, bin route, staff changing — resolved before a single banquette is drawn. Then we layer the guest experience: the threshold moment, the sightline from the door to the best table, the lighting curve that shifts from lunch to late service on a timeclock.",
      "Materials are chosen for a ten-year abuse cycle. Solid timber edges instead of veneer on banquette returns. Metal that patinas rather than wearing through. Upholstery in 100,000-rub contract grades. Stone sealed for wine, oil and citrus.",
    ],
    deliverables: [
      { t: "Covers & flow modelling", d: "Seat count optimised against service routes, accessibility and escape widths." },
      { t: "Back-of-house planning", d: "Kitchen interface, pass, stations, storage and staff welfare coordinated with your operator." },
      { t: "Feature joinery & bars", d: "Bar fronts, back-bars, banquettes and host desks built in our own workshop." },
      { t: "Lighting & scene control", d: "Timeclock scenes for brunch, dinner and late service, warm-dim on guest-facing circuits." },
      { t: "Contract-grade specification", d: "Every finish rated for commercial wear, cleaning regime and fire compliance." },
      { t: "Phased night works", d: "Trading-hours-friendly programmes for refurbishments of live venues." },
    ],
    outcomes: [
      "A covers count that actually pays the rent",
      "Service routes that shave seconds off every trip",
      "Finishes that still look new in year three",
      "A room guests photograph without being asked",
    ],
    faqs: [
      {
        q: "Can you refurbish a venue without closing it?",
        a: "Often yes. We run night and early-morning shifts, seal the works zone and stage deliveries outside trading hours. Expect a longer programme and a modest premium, offset against continued revenue.",
      },
      {
        q: "Do you coordinate with the kitchen consultant?",
        a: "Always. The commercial kitchen designer leads back-of-house equipment; we own the interface — pass height, service window, station placement, floor finishes and drainage transitions — and coordinate drawings both ways.",
      },
      {
        q: "How do you handle fire and food-safety compliance?",
        a: "Finishes are specified to the required surface-spread-of-flame class, escape widths are checked at layout stage, and all wash-down zones are detailed in impervious, cleanable materials with coved junctions.",
      },
      {
        q: "What is a realistic programme for a new restaurant?",
        a: "For a shell unit around 3,000 sq ft, expect 6–8 weeks design and 10–14 weeks on site including kitchen installation and commissioning. Landlord and utility connections are the usual critical path, not the interior.",
      },
    ],
  },

  {
    slug: "retail-interior-design",
    index: "04",
    title: "Retail",
    short: "Retail",
    kicker: "Showrooms",
    headline: "Merchandise looks expensive when the room does.",
    metaTitle: "Retail Interior Design & Showroom Fit-Out | Woodex Interior",
    metaDescription:
      "Retail interior design and showroom fit-out — customer flow, modular display systems, high-CRI lighting and rollout-ready joinery built in our own workshop.",
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
      "We plan the decompression zone at the entrance, the power wall on the customer's natural right turn, the sightline that pulls them to the back of the store, and the till position that lets one person cover the floor. Then we build the fixtures as a system — modular, repeatable and shippable to your next unit.",
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
        a: "A 1,200 sq ft unit with a pre-manufactured fixture kit installs in 10–14 days on site. The lead time sits in the workshop, which is why we start manufacturing during landlord approvals rather than after.",
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
    slug: "craft-bespoke-joinery",
    index: "05",
    title: "Craft",
    short: "Craft",
    kicker: "Workshop",
    headline: "We own the shop. That is the whole argument.",
    metaTitle: "Bespoke Joinery, Millwork & Custom Furniture | Woodex Interior",
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
      "Most studios draw joinery and hope a subcontractor honours it. We draw it, cut it, finish it and hang it — so the detail in the still is the detail on the wall.",
    body: [
      "Joinery is where interiors are won or lost. It is also where they are quietly value-engineered: a 6mm shadow gap becomes 12mm, a book-matched veneer becomes randomly slipped, a solid edge becomes a taped one. None of it is visible on a schedule; all of it is visible in the room.",
      "Our workshop runs CNC nesting, edge banding, spray finishing and hand assembly under one roof. We buy veneer by the log so a sequence runs true across an eight-metre wall. We finish in-house, so colour matches between the wardrobe and the bedhead built four weeks apart.",
      "Every piece is site-measured after substrates are complete, manufactured to a 2mm tolerance, dry-assembled in the shop, then delivered and installed by the makers. If something is out, the person who cut it is the person who fixes it.",
    ],
    deliverables: [
      { t: "Design & shop drawings", d: "1:5 and 1:1 details, hardware schedules and setting-out issued for approval before cutting." },
      { t: "Veneer & solid timber", d: "Log-matched veneer, solid edges and hand-selected boards — walnut, oak, ash, teak, sapele." },
      { t: "Spray & hand finishing", d: "Lacquer, oil, stain and patina applied in a controlled booth, with sample panels signed off first." },
      { t: "Panelling systems", d: "Fluted, slatted, book-matched and acoustic panelling with concealed fixing and true shadow gaps." },
      { t: "Metal & stone integration", d: "Inlays, steel frames and stone tops templated and married to timber in the shop, not on site." },
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
        q: "Will you manufacture from another designer's drawings?",
        a: "Yes — we take trade commissions from architects and interior designers. We review your details for buildability and come back with comments before quoting, which usually saves both of us a revision cycle.",
      },
      {
        q: "What timber species do you work with?",
        a: "Walnut, European and white oak, ash, teak and sapele in both solid and veneer. Anything outside that is sourced to order; expect four to six weeks for specialist or log-matched veneer.",
      },
      {
        q: "How do you guarantee colour matching?",
        a: "We spray sample panels in the actual substrate and finish, sign them off under the project's own lighting, then keep the batch formulation on file for the life of the project so later additions match.",
      },
      {
        q: "What tolerance do you work to?",
        a: "2mm on manufactured units and 1mm on visible reveals and shadow gaps. Where a building is out of square — and it usually is — we scribe on site rather than leaving a tapered gap.",
      },
    ],
  },

  {
    slug: "3d-visualisation-studio",
    index: "06",
    title: "3D Studio",
    short: "3D Studio",
    kicker: "Visualisation",
    headline: "See it. Understand it. Build it.",
    metaTitle: "3D Interior Visualisation & Photoreal Rendering Studio | Woodex",
    metaDescription:
      "Photoreal 3D interior stills, walkthroughs and material studies — approve the room before anything is bought. Available standalone or as part of a full fit-out.",
    keywords: [
      "3d interior visualisation",
      "interior rendering",
      "photoreal 3d rendering",
      "architectural visualisation",
      "3d interior design",
      "interior walkthrough animation",
      "3d rendering studio",
      "interior design 3d stills",
    ],
    image: "/img/detail-joinery.jpg",
    lede:
      "Stills first. Every project starts as a photoreal image of your own room — because approving a picture costs nothing and approving a built wall costs everything.",
    body: [
      "The most expensive revision is the one made on site. A wall in the wrong place, a stone that reads grey instead of cream, a pendant that hangs 200mm too low — each is a day lost and a variation raised. Almost all of them are avoidable if the room is rendered accurately first.",
      "Our 3D studio models the actual survey geometry, not an idealised box. Real ceiling heights, real beam drops, real window positions. Materials are built from the physical samples on your board, and lighting is simulated at the correct colour temperature and lux — so the still predicts the room rather than flattering it.",
      "The studio also takes standalone commissions. If you have a design and need it visualised for a client, an investor or a planning submission, we will render it without any expectation that we build it.",
    ],
    deliverables: [
      { t: "Photoreal stills", d: "Key views per room at print resolution, modelled from the measured survey — not a generic box." },
      { t: "Material studies", d: "The same view rendered across two or three palettes so a decision can be made by eye." },
      { t: "Walkthrough animation", d: "A 30–60 second camera move through the resolved scheme, for investors or pre-sales." },
      { t: "Lighting simulation", d: "Correct colour temperature and lux levels, day and night states, so the mood is verified not guessed." },
      { t: "360° panoramas", d: "Room-scale panoramas viewable on a phone or headset, for clients who read space better in the round." },
      { t: "Standalone commissions", d: "Visualisation for other designers, developers and agencies, with no build obligation." },
    ],
    outcomes: [
      "Approve a picture, not a promise",
      "Revisions cost hours, not site days",
      "Material decisions made by eye, not imagination",
      "An asset you can use for pre-sales and marketing",
    ],
    faqs: [
      {
        q: "How accurate are the stills compared to the finished room?",
        a: "Very — because we model the measured survey and build materials from your physical samples. The usual difference is daylight, which changes hourly in reality and is fixed in a render. We render day and evening states for exactly that reason.",
      },
      {
        q: "How long does a set of 3D stills take?",
        a: "Typically 5–8 working days from a signed-off material board and layout for a full residential set. A single hero view for a pitch can be turned around in 48–72 hours.",
      },
      {
        q: "Can I commission visualisation only?",
        a: "Yes. The 3D studio takes standalone work from designers, architects, developers and agencies. There is no obligation to have us execute the project, and we do not pitch you at handover.",
      },
      {
        q: "What do you need from me to start?",
        a: "A floor plan with dimensions, ceiling heights, and either a material direction or a set of reference images. If you have a survey or CAD file, better — it removes a modelling day.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
