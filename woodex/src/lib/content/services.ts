import type { Service } from "./types";

/**
 * COMMERCIAL SERVICE CONTENT — the six from the master brief.
 *
 * Cannibalisation guard, deliberate and load-bearing:
 *   · office-interior-design = planning, layout, capacity, aesthetics, 3D
 *   · office-fit-out         = construction, programme, site, compliance
 * Each links to the other. They must never target the same query.
 *
 * Copy rule: outcome-based, specific, no unqualified adjectives. Every claim is
 * either a process fact or a range — never an invented metric.
 */
export const services: Service[] = [
  {
    slug: "commercial-interior-design",
    index: "01",
    title: "Commercial Interior Design",
    short: "Commercial design",
    kicker: "All sectors",
    headline: "Commercial space is an operating asset, not a decoration budget.",
    metaTitle: "Commercial Interior Design Pakistan | Woodex Interior",
    metaDescription:
      "Commercial interior design for offices, retail and institutions. Space planning, 3D renders, line-item BOQ and full site execution under one contract.",
    keywords: [
      "commercial interior design",
      "commercial interior design pakistan",
      "commercial interior designer",
      "corporate interior design",
      "commercial interior design lahore",
      "business interior design",
      "commercial space planning",
      "commercial fit out design",
    ],
    image: "/img/hero-01.jpg",
    lede:
      "Commercial space decides how many people you can seat, how fast a customer finds what they came for, and what a client concludes about you before the first meeting starts. We design around those outcomes, then build under one contract with the cost written down first.",
    body: [
      "Most commercial interiors are bought as a furniture order with a design attached. That is why so many of them fail quietly: the layout does not match how the business actually runs, the finishes are rated for a domestic wear cycle, and nobody modelled what happens when headcount grows by a third.",
      "We start with the operating brief, not a mood board. How many people, doing what, moving where, at which times of day. What the space has to survive. What a visitor should conclude in the first eleven seconds. Only then does the drawing start, and only then does the material palette get chosen.",
      "Everything is resolved in 3D before it is priced, and priced line by line before it is built. You approve an image of your own space, then a bill of quantities that shows every material, quantity and rate. Nothing is bought against a verbal instruction.",
    ],
    deliverables: [
      { t: "Measured survey", d: "Site visit and laser survey. We leave with dimensions and an operating brief, not a mood board." },
      { t: "Space planning", d: "Capacity modelling, adjacency mapping and tested layout options before a wall is drawn." },
      { t: "3D visualisation", d: "Photoreal views of key spaces, modelled from the survey rather than an idealised box." },
      { t: "Material specification", d: "Every finish named, rated for commercial wear and listed against a cleaning regime." },
      { t: "MEP coordination", d: "Clash detection with mechanical, electrical and plumbing before ceilings close." },
      { t: "Line-item BOQ", d: "Every material, quantity and rate visible, so you can see what each decision costs." },
    ],
    outcomes: [
      "A layout that matches how the business actually runs",
      "Finishes rated for a commercial wear cycle",
      "Costs visible before commitment, not after",
      "One party accountable from drawing to handover",
    ],
    faqs: [
      {
        q: "What is the difference between commercial and residential interior design?",
        a: "Commercial design is planned around operations and regulation — capacity, circulation, escape routes, accessibility, acoustic separation and finishes rated for heavy use. Residential is planned around a family's habits. The drawings look similar; the constraints and the specification are not.",
      },
      {
        q: "Do you take design-only commissions?",
        a: "Yes. We issue a tender-ready drawing and specification set that another contractor can price and build. Most clients move to design-and-build once they see the BOQ, because it removes the coordination risk, but there is no obligation.",
      },
      {
        q: "How early should we involve you?",
        a: "Before the lease is signed, ideally. A one-day feasibility review can tell you whether a floorplate actually seats your headcount, where the services constraints sit and what the fit-out is likely to cost — which is information worth having during negotiation, not after.",
      },
      {
        q: "Do you work outside Lahore?",
        a: "Yes. Our studio is in Lahore and we deliver commercial projects in Karachi, Islamabad, Multan and Faisalabad. Travel and logistics are stated as a separate line in the proposal rather than hidden in rates.",
      },
    ],
  },

  {
    slug: "office-interior-design",
    index: "02",
    title: "Office Interior Design",
    short: "Office design",
    kicker: "Workplace",
    headline: "Your office is the most visible thing your business owns.",
    metaTitle: "Office Interior Design Lahore & Pakistan | Woodex",
    metaDescription:
      "Office interior design built around headcount, workflow and acoustics. Three tested layouts, 3D sign-off and a line-item BOQ before work begins.",
    keywords: [
      "office interior design",
      "office interior design lahore",
      "corporate office design",
      "workspace design pakistan",
      "office space planning",
      "office design company",
      "modern office interior",
      "office layout design",
    ],
    image: "/img/svc-office.jpg",
    lede:
      "An office sets the tone of a negotiation before anyone speaks, decides whether a senior candidate accepts, and governs how much focused work happens between nine and six. We plan offices around headcount, workflow and acoustic reality.",
    body: [
      "Most offices fail at this not because the budget was small, but because the space was planned as a furniture order rather than as architecture. Desks get counted, meeting rooms get added where they fit, and nobody asks how far the loudest person sits from the deepest thinker.",
      "We model the workplace as a sequence: arrival, threshold, focused work, collaboration, retreat, hospitality. We test three layouts against your real headcount and growth plan, then resolve the winner in materials that survive commercial wear — fluted timber hiding acoustic backing, stone that takes a coffee ring, metal that ages instead of chipping.",
      "Looking for the construction side rather than the design? See office fit-out, which covers strip-out, partitions, services and site delivery.",
    ],
    deliverables: [
      { t: "Headcount & adjacency modelling", d: "Who needs to sit near whom, and what happens when the team grows by a third." },
      { t: "Three tested layouts", d: "Real options with trade-offs stated, not one scheme presented as inevitable." },
      { t: "Acoustic strategy", d: "Reverberation targets per zone and speech-privacy detailing for open plan." },
      { t: "Reception & brand moments", d: "The arrival sequence — desk, wall, lighting and signage designed as one object." },
      { t: "Lighting design", d: "Lux levels per task zone, glare control and colour temperature by area." },
      { t: "Furniture specification", d: "Specified, scheduled and procured — with lead times declared up front." },
    ],
    outcomes: [
      "A reception that works before the meeting starts",
      "Open plan that people can concentrate in",
      "A layout that still fits after the next hire",
      "Specification that survives a decade of use",
    ],
    faqs: [
      {
        q: "How much space do we need per person?",
        a: "For most Pakistani commercial offices, plan 70–100 sq ft per person including circulation and shared space — lower for dense sales floors, higher for legal or executive environments. We model this against your actual headcount and growth plan rather than applying a rule of thumb.",
      },
      {
        q: "Can you design around our existing furniture?",
        a: "Yes, and we will tell you honestly which pieces are worth keeping. Retaining sound desking and replacing seating is often the better spend. We audit what you have before specifying anything new.",
      },
      {
        q: "How do you deal with noise in open plan?",
        a: "Acoustics is planned, not treated afterwards. We set reverberation targets per zone, place absorptive material where it works rather than where it shows, separate loud and focused functions by distance, and detail speech privacy into the joinery.",
      },
      {
        q: "What is the difference between this and office fit-out?",
        a: "Design covers planning, layout, 3D, specification and drawings. Fit-out covers the construction — strip-out, partitions, ceilings, services and installation. Most clients take both under one contract, which is what removes the coordination risk.",
      },
    ],
  },

  {
    slug: "office-fit-out",
    index: "03",
    title: "Office Fit-Out",
    short: "Office fit-out",
    kicker: "Delivery",
    headline: "A fit-out is a construction project wearing an interior's clothes.",
    metaTitle: "Office Fit-Out Company Lahore, Pakistan | Woodex",
    metaDescription:
      "Office fit-out with a dated programme, named project manager and written variation policy. Cat A and Cat B delivery across Pakistan.",
    keywords: [
      "office fit out",
      "office fit out lahore",
      "office fit out company",
      "office fit out pakistan",
      "cat b fit out",
      "office renovation lahore",
      "commercial fit out contractor",
      "office refurbishment",
    ],
    image: "/img/svc-turnkey.jpg",
    lede:
      "Fit-out succeeds or fails on programme control, services coordination, and the discipline to hold a specification under pressure. We run them with a dated programme, a named project manager and a written variation policy.",
    body: [
      "The failure mode is always the same, and it is never dramatic. A long-lead item is ordered late. A services clash is found after the ceiling grid is up. A finish is substituted because the original was not available and nobody was asked. Individually each costs a few days; together they are how a sixteen-week programme becomes twenty-two.",
      "We front-load the risk. Long-lead items are identified and ordered at design freeze. MEP is clash-detected before ceilings close. Every substitution goes through a written variation with a price attached, and nothing proceeds without your signature — so the number you approved is the number you pay.",
      "You get a written progress report with photographs every week. Not a phone call when something has already gone wrong.",
    ],
    deliverables: [
      { t: "Dilapidation & strip-out", d: "Including making good to landlord requirements and waste documentation." },
      { t: "Partitions, ceilings, flooring", d: "Acoustic and fire ratings specified per zone, not applied uniformly." },
      { t: "Electrical, data & HVAC", d: "Coordinated, clash-detected and commissioned, with as-built drawings issued." },
      { t: "Joinery procurement & install", d: "Reception desks, storage walls, tea points and meeting furniture — specified, fabricated to our drawings and installed under our supervision." },
      { t: "Fire strategy & compliance", d: "Escape widths, surface-spread-of-flame class and detection coordination." },
      { t: "Weekly written reporting", d: "Progress against the dated programme, with photographs and a variation register." },
    ],
    outcomes: [
      "A dated programme reported against every week",
      "Variations priced and signed before execution",
      "Services coordinated before ceilings close",
      "A handover pack, not a set of keys",
    ],
    faqs: [
      {
        q: "How long does an office fit-out take?",
        a: "A typical Cat B fit-out runs 8–14 weeks on site for a standard floorplate, after 4–6 weeks of design. What extends it is rarely the interior: landlord approvals, utility connections and long-lead imported items are the usual critical path. We issue a dated programme at contract and report against it weekly.",
      },
      {
        q: "Can you work while the office stays occupied?",
        a: "Yes. We phase floor by floor with dust screens, run noisy works out of hours and maintain a temporary circulation plan so the business keeps trading. Phasing adds programme, which is priced transparently up front rather than appearing later as a delay.",
      },
      {
        q: "How do you stop the budget drifting?",
        a: "Three mechanisms. A line-item BOQ so nothing is hidden in a lump sum. Provisional sums declared as provisional rather than buried. And a written variation policy — no work is executed until the change is priced and you have signed it.",
      },
      {
        q: "Do you handle landlord approvals?",
        a: "Yes. We prepare and submit the licence-for-alterations pack, respond to the landlord's surveyor and coordinate access permits and the fit-out schedule with building management. Statutory fees are passed through at cost.",
      },
      {
        q: "Who coordinates the MEP subcontractors?",
        a: "We do, under a single contract. Clash detection happens before ceilings close, and commissioning records form part of the handover pack. You never manage the interface between trades.",
      },
    ],
  },

  {
    slug: "retail-showroom-interior-design",
    index: "04",
    title: "Retail & Showroom",
    short: "Retail",
    kicker: "Customer-facing",
    headline: "Retail is choreography. Design the route, then the fixtures.",
    metaTitle: "Retail & Showroom Interior Design Pakistan | Woodex",
    metaDescription:
      "Retail and showroom interiors planned around customer flow. Modular fixture kits, high-CRI lighting and rollout-ready documentation.",
    keywords: [
      "retail interior design",
      "showroom interior design",
      "showroom interior design lahore",
      "retail fit out",
      "shop interior design pakistan",
      "store design company",
      "retail display design",
      "showroom fit out",
    ],
    image: "/img/svc-retail.jpg",
    lede:
      "Where the eye lands at the door, where the hand reaches, where the queue forms. We design the customer route first and the fixtures second, because retrofitted display never quite fits and customers feel it without being able to name it.",
    body: [
      "The common mistake is treating the shop as a container for fixtures bought later. The room and the fixtures have to be one design: the plinth height that suits your product, the rail depth that suits your hanger, the lighting angle that suits your fabric.",
      "We plan the decompression zone at the entrance, the power wall on the customer's natural right turn, the sightline that pulls them to the back, and the till position that lets one person cover the floor. Then we specify and procure the fixtures as a repeatable, documented kit so the next unit costs less than the first.",
      "Lighting is where most retail is lost. High-CRI accent lighting on adjustable tracks, with beam angles chosen per product type, so texture and colour survive the trip from studio to shelf.",
    ],
    deliverables: [
      { t: "Customer flow & zoning", d: "Decompression, power wall, adjacency and till placement modelled against your product mix." },
      { t: "Modular fixture systems", d: "Rails, plinths, shelving and vitrines designed and specified as a repeatable kit for multi-site rollout." },
      { t: "High-CRI retail lighting", d: "CRI 95+ accent lighting with beam angles and colour temperature matched to merchandise." },
      { t: "Shopfront & signage", d: "Facade, glazing, entrance detailing and illuminated signage to landlord criteria." },
      { t: "Rollout standards manual", d: "Documentation so unit two costs less and looks identical to unit one." },
      { t: "Out-of-hours installation", d: "Fixture swaps and refits executed overnight to protect trading days." },
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
        a: "Yes. We prototype and sign off one flagship, document it as a standards manual with a fixed fixture kit, then place fabrication in batches. Unit economics improve materially from the second store onward, and we price the rollout that way.",
      },
      {
        q: "How quickly can a store be fitted out?",
        a: "A 1,200 sq ft unit with a pre-fabricated fixture kit installs in 10–14 days on site. The lead time sits with the fabricator, which is why we place those orders during landlord approvals rather than after them.",
      },
      {
        q: "Will you work with our existing brand guidelines?",
        a: "We prefer it. Guidelines set colour, type and tone; our job is to translate them into materials, light and three dimensions without flattening them into printed vinyl.",
      },
      {
        q: "Who handles mall or landlord shopfitting approvals?",
        a: "We do. We prepare the design intent pack to the centre's tenant criteria, respond to comments, and coordinate the fit-out schedule and access permits with centre management.",
      },
    ],
  },

  {
    slug: "turnkey-fit-out",
    index: "05",
    title: "Turnkey Fit-Out",
    short: "Turnkey",
    kicker: "One contract",
    headline: "Split contracts fail in the seams.",
    metaTitle: "Turnkey Interior Fit-Out Solutions Pakistan | Woodex",
    metaDescription:
      "One contract, one programme, one number. Turnkey interior fit-out from design through procurement, execution and documented handover.",
    keywords: [
      "turnkey fit out",
      "turnkey interior solutions",
      "turnkey interior solutions pakistan",
      "design and build interior",
      "turnkey fit out company",
      "design build contractor pakistan",
      "end to end interior fit out",
      "single contract fit out",
    ],
    image: "/img/proj-01.jpg",
    lede:
      "When the designer, the contractor and the joiner answer to three different parties, every interface becomes a negotiation and every delay becomes someone else's fault. Turnkey means one contract, one programme, one number, one party accountable at handover.",
    body: [
      "The hidden cost of a split contract is not in any of the quotes. It is in the gaps between them — the scope nobody priced, the interface nobody owned, the four weeks lost while two parties argue about whose drawing was wrong. Those costs are real, and they land on you.",
      "Under a single contract, procurement runs in parallel with design freeze rather than after it. Long-lead items are ordered while drawings are still being detailed. MEP subcontractors are managed by us, not by you. There is no interface pricing and no gap-scope claim, because there is no gap.",
      "This is usually faster than the split equivalent, not slower — which surprises people who assume one contractor means one queue.",
    ],
    deliverables: [
      { t: "Single point of contact", d: "One contract, one project manager, one number to call when something matters." },
      { t: "Design through handover", d: "Concept, drawings, specification, procurement, construction and commissioning." },
      { t: "Procurement management", d: "Long-lead items identified and ordered at design freeze, not after it." },
      { t: "Subcontractor management", d: "MEP and specialist trades contracted to us, coordinated by us." },
      { t: "Statutory & landlord liaison", d: "Approvals, licences for alteration and building management coordination." },
      { t: "Handover pack", d: "As-builts, O&M manuals, warranties, commissioning records and a snag sign-off." },
    ],
    outcomes: [
      "One contract, one programme, one number",
      "No gap-scope claims between trades",
      "Procurement in parallel with design, not after",
      "One party accountable at handover",
    ],
    faqs: [
      {
        q: "Is turnkey more expensive than managing it ourselves?",
        a: "The headline number can look higher because it is complete — it includes scope that split quotes leave out and you discover later. Compared honestly against a split contract plus variations plus your own management time, turnkey is usually the lower total. We are happy to show the comparison line by line.",
      },
      {
        q: "Do we lose design control?",
        a: "No. You approve the layout, the material board, the 3D visuals and the BOQ before anything is bought. What you give up is coordinating five suppliers, not deciding how the space looks.",
      },
      {
        q: "What happens if something goes wrong on site?",
        a: "It comes to us, and we fix it. That is the point of a single contract — there is nobody to pass it to. Warranty terms are stated in the contract and the handover pack, not implied.",
      },
      {
        q: "Can turnkey work for a phased or occupied project?",
        a: "Yes, and it works better than split delivery for occupied sites, because one party controls sequencing, access and out-of-hours works rather than three parties negotiating them weekly.",
      },
    ],
  },

  {
    slug: "3d-visualization",
    index: "06",
    title: "3D Visualization",
    short: "3D Studio",
    kicker: "Pre-build clarity",
    headline: "The most expensive revision is the one made on site.",
    metaTitle: "3D Interior Visualization & Rendering Pakistan | Woodex",
    metaDescription:
      "Photoreal 3D interior stills, walkthroughs and material studies modelled from the measured survey. Standalone commissions welcome.",
    keywords: [
      "3d interior visualization",
      "3d interior visualization pakistan",
      "interior rendering services",
      "3d interior design",
      "architectural visualization pakistan",
      "photoreal interior rendering",
      "3d walkthrough interior",
      "interior 3d rendering lahore",
    ],
    image: "/img/detail-joinery.jpg",
    lede:
      "A wall in the wrong place, a stone that reads grey instead of cream, a pendant 200mm too low. Each is a day lost and a variation raised, and almost all of them are avoidable if the space is rendered accurately first.",
    body: [
      "We model the measured survey, not an idealised box. Real ceiling heights, real beam drops, real window positions and real service runs. Materials are built from the physical samples on your board, and lighting is simulated at the correct colour temperature and lux — so the still predicts the room rather than flattering it.",
      "That accuracy is the point. A render that makes a space look better than it will be is not a design tool, it is a sales tool, and it costs you on site.",
      "The studio also takes standalone commissions. If you have a design and need it visualised for a client, an investor or an approval submission, we will render it with no expectation that we build it.",
    ],
    deliverables: [
      { t: "Photoreal stills", d: "Key views per space at print resolution, modelled from the measured survey." },
      { t: "Material studies", d: "The same view across two or three palettes so a decision can be made by eye." },
      { t: "Walkthrough animation", d: "A 30–60 second camera move for investors, approvals or pre-sales." },
      { t: "Lighting simulation", d: "Correct colour temperature and lux, day and night states, so mood is verified not guessed." },
      { t: "360° panoramas", d: "Room-scale panoramas viewable on a phone or headset." },
      { t: "Standalone commissions", d: "Visualisation for other designers, developers and agencies. No build obligation." },
    ],
    outcomes: [
      "Approve an image, not a promise",
      "Revisions cost hours, not site days",
      "Material decisions made by eye",
      "An asset reusable for approvals and pre-sales",
    ],
    faqs: [
      {
        q: "How accurate are the renders compared with the finished space?",
        a: "Close, because we model the measured survey and build materials from your physical samples. The usual difference is daylight, which changes hourly in reality and is fixed in a render — which is exactly why we produce day and evening states.",
      },
      {
        q: "How long does a set of 3D visuals take?",
        a: "Typically 5–8 working days for a full set, from a signed-off layout and material direction. A single hero view for a pitch can be turned around in 48–72 hours.",
      },
      {
        q: "Can we commission visualisation only?",
        a: "Yes. The studio takes standalone work from designers, architects, developers and agencies. There is no obligation to have us execute the project and we do not pitch you at handover.",
      },
      {
        q: "What do you need from us to start?",
        a: "A floor plan with dimensions, ceiling heights, and either a material direction or reference images. A survey or CAD file removes a modelling day and reduces the fee accordingly.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
