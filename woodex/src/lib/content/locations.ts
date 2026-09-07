import type { FAQ } from "./types";

/**
 * CITY PAGES.
 *
 * Compliance rule from the brief: no fake addresses. Only Lahore has an office.
 * `delivered: false` cities must use service-area language and must never imply
 * a local presence. `deliverySentence` below enforces that at the data layer so
 * a page author cannot get it wrong.
 *
 * Uniqueness rule: `intro` and `local` must be ≥80% unique per city. If you
 * cannot write 150 genuinely different words about a city, do not publish it —
 * three strong location pages outperform five thin duplicated ones.
 */

export type Location = {
  slug: string;
  city: string;
  /** true only where a project has actually completed */
  delivered: boolean;
  base: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  /** Unique. Never share a sentence with another city. */
  intro: string[];
  /** City-specific building stock, approvals and access realities. */
  local: { t: string; d: string }[];
  faqs: FAQ[];
};

/** The only permitted phrasing for a city with no delivered project yet. */
export function deliverySentence(l: Location) {
  return l.base
    ? `Our studio is in ${l.city}. Surveys, site meetings and snagging visits happen in person, at short notice.`
    : l.delivered
      ? `We deliver commercial fit-out projects in ${l.city} from our Lahore studio, with a resident site manager for the duration of the works.`
      : `We deliver commercial fit-out projects in ${l.city} from our Lahore studio. We do not maintain an office in ${l.city}; site management is assigned per project and stated in the proposal.`;
}

export const locations: Location[] = [
  {
    slug: "commercial-interior-design-lahore",
    city: "Lahore",
    delivered: true,
    base: true,
    metaTitle: "Commercial Interior Design Lahore | Woodex Interior",
    metaDescription:
      "Commercial interior design and fit-out in Lahore. Studio-based delivery with line-item BOQ, dated programme and documented handover.",
    keywords: [
      "commercial interior design lahore",
      "interior design company lahore",
      "office fit out lahore",
      "interior designer lahore",
      "office interior design lahore",
      "commercial fit out lahore",
    ],
    image: "/img/hero-01.jpg",
    intro: [
      "Lahore is where our studio and our site coordination team are based. That proximity is the practical difference: a survey can happen the day after a call, a material sample can be dropped at your reception, and a snag can be looked at in person rather than described over a phone.",
      "The city's commercial stock ranges from purpose-built towers on Main Boulevard to converted Gulberg houses operating as offices and clinics. Those are very different fit-out problems. A tower gives you a regular grid, a services riser and a landlord specification to satisfy. A converted house gives you thick walls, non-standard levels, an electrical supply designed for a family, and almost no floor plan that matches reality.",
    ],
    local: [
      { t: "Converted residential stock", d: "Gulberg, Model Town and Garden Town offices are frequently converted houses. Expect out-of-square walls, level changes between rooms and a distribution board never intended for a commercial load. We survey before we quote." },
      { t: "Tower fit-out criteria", d: "Main Boulevard and Kalma Chowk towers issue tenant fit-out criteria covering ceiling voids, sprinkler modification, riser access and permitted working hours. We prepare and submit the approval pack." },
      { t: "Load-shedding & backup", d: "Commercial continuity means UPS and generator changeover has to be designed in, not added later. It affects riser sizing, cable routes and where you can put a server room." },
      { t: "Access and working hours", d: "Many commercial buildings restrict deliveries and noisy works to specific windows. We build the programme around the building's rules rather than discovering them in week two." },
    ],
    faqs: [
      {
        q: "Can we visit your Lahore studio?",
        a: "Yes. We prefer it for the material board stage, because deciding on a finish from a photograph is how people end up disappointed. Contact us to arrange a time.",
      },
      {
        q: "How quickly can you survey a site in Lahore?",
        a: "Usually within two working days of a confirmed enquiry, and often the next day. A survey takes two to four hours depending on area and complexity.",
      },
      {
        q: "Do you work on converted residential properties used as offices?",
        a: "Frequently. They are common in Gulberg and Model Town and they carry specific risks — out-of-square walls, level changes and domestic-grade electrical supply. We survey and price those realities up front rather than raising them as variations later.",
      },
      {
        q: "What does a commercial fit-out cost in Lahore?",
        a: "The variable is scope and specification, not floor area alone. Send a floor plan and a short brief and we will return a banded estimate with the assumptions written down.",
      },
    ],
  },

  {
    slug: "commercial-interior-design-karachi",
    city: "Karachi",
    delivered: true,
    base: false,
    metaTitle: "Commercial Interior Design Karachi | Woodex Interior",
    metaDescription:
      "Commercial interior design and fit-out projects delivered in Karachi from our Lahore studio. BOQ discipline and on-time handover.",
    keywords: [
      "commercial interior design karachi",
      "interior design company karachi",
      "office fit out karachi",
      "office interior design karachi",
      "commercial fit out karachi",
      "showroom design karachi",
    ],
    image: "/img/proj-01.jpg",
    intro: [
      "Karachi is Pakistan's largest commercial market and its fit-out conditions are unlike anywhere else in the country. Corporate floorplates in Clifton and I.I. Chundrigar sit alongside industrial conversions in SITE and Korangi, and the two demand entirely different specifications.",
      "The coastal environment is the constraint most out-of-town contractors underestimate. Salt-laden air attacks unprotected metal, accelerates corrosion in fixings and shortens the life of poorly specified hardware. We specify finishes and fixings for that reality rather than importing a Lahore specification unchanged.",
    ],
    local: [
      { t: "Coastal corrosion", d: "Salt air materially shortens the life of untreated steel and low-grade hardware. Ironmongery, fixings and any exposed metal are specified with corrosion resistance appropriate to the location." },
      { t: "Corporate floorplates", d: "Clifton and I.I. Chundrigar towers operate strict tenant criteria, permit-to-work systems and access windows. Programme is built around the building's rules from day one." },
      { t: "Industrial conversion", d: "SITE and Korangi conversions offer volume and structure but rarely commercial-grade services. Power, ventilation and fire strategy usually need to be designed from scratch." },
      { t: "Logistics and lead time", d: "Deliveries into central Karachi need scheduling around traffic restrictions. We add this to the programme explicitly rather than absorbing it as slippage." },
    ],
    faqs: [
      {
        q: "Do you have an office in Karachi?",
        a: "No. Our studio is in Lahore. We deliver commercial projects in Karachi with site management assigned per project, and the arrangement — who is on site, how often, and who you call — is stated in the proposal before you commit.",
      },
      {
        q: "How do you manage a Karachi project from Lahore?",
        a: "A named project manager owns the job, a site supervisor is assigned for the duration of the works, and you receive a written progress report with photographs every week. Travel and accommodation appear as a separate transparent line in the BOQ.",
      },
      {
        q: "Does the coastal climate change the specification?",
        a: "Yes, and it should. Salt-laden air attacks unprotected metal and shortens hardware life. We specify corrosion-resistant fixings and appropriate finishes rather than transplanting an inland specification.",
      },
      {
        q: "Is a Karachi project more expensive?",
        a: "Materials are broadly comparable. The differences are logistics, site management travel and occasionally higher labour rates. All of it is shown as separate BOQ lines so you can see exactly what the location costs.",
      },
    ],
  },

  {
    slug: "commercial-interior-design-islamabad",
    city: "Islamabad",
    delivered: true,
    base: false,
    metaTitle: "Commercial Interior Design Islamabad | Woodex",
    metaDescription:
      "Commercial interior design and fit-out delivered in Islamabad. Disciplined process, clear BOQ and documented handover.",
    keywords: [
      "commercial interior design islamabad",
      "interior design company islamabad",
      "office fit out islamabad",
      "office interior design islamabad",
      "commercial fit out islamabad",
      "interior designer islamabad",
    ],
    image: "/img/svc-office.jpg",
    intro: [
      "Islamabad's commercial fit-out work is shaped by two things that do not apply elsewhere: CDA regulation and the client mix. Blue Area towers, the F-6 and F-7 markaz commercial blocks and the newer G-8 and I-8 developments each sit under building control that is enforced more consistently than in most Pakistani cities.",
      "The client base skews toward diplomatic missions, development-sector organisations, consultancies and technology firms. That means procurement is frequently formal — tender documentation, itemised comparison, audit trail — and a fit-out partner who cannot produce a clean, itemised BOQ simply will not clear the process.",
    ],
    local: [
      { t: "CDA approvals", d: "Building control is applied consistently. Alteration approvals and compliance documentation must be prepared properly; we build the approvals window into the programme rather than treating it as a formality." },
      { t: "Formal procurement", d: "Diplomatic, NGO and development-sector clients tender with itemised comparison and audit requirements. Our BOQ format is built for that scrutiny." },
      { t: "Blue Area towers", d: "Established towers carry ageing service risers and tenant criteria that constrain ceiling voids and sprinkler modification. Survey findings go into the proposal, not into variations." },
      { t: "Seismic zone", d: "Islamabad sits in a higher seismic zone than Lahore. Partition head details, heavy joinery fixing and suspended ceiling restraint are specified accordingly." },
    ],
    faqs: [
      {
        q: "Do you have an office in Islamabad?",
        a: "No. Our studio is in Lahore. We deliver commercial projects in Islamabad with site management assigned per project, stated in the proposal before you commit.",
      },
      {
        q: "Can you meet CDA documentation requirements?",
        a: "Yes. We prepare alteration approval packs and compliance documentation, and we allow for the approvals window in the programme rather than discovering it mid-project.",
      },
      {
        q: "Can you participate in a formal tender?",
        a: "Yes. Our BOQ is line-item by default, which is exactly the format formal procurement requires. We can supply itemised comparison documentation and the supporting specification.",
      },
      {
        q: "Does the seismic zone affect the fit-out?",
        a: "It affects detailing rather than headline cost. Partition head restraint, heavy joinery fixing and suspended ceiling bracing are specified for the zone.",
      },
    ],
  },

  {
    slug: "commercial-interior-design-multan",
    city: "Multan",
    delivered: true,
    base: false,
    metaTitle: "Commercial Interior Design Multan | Woodex Interior",
    metaDescription:
      "Commercial interior design and fit-out delivered in Multan. Clear scope, line-item BOQ and a dated site programme.",
    keywords: [
      "commercial interior design multan",
      "interior designer multan",
      "office interior design multan",
      "office fit out multan",
      "showroom design multan",
      "commercial fit out multan",
    ],
    image: "/img/svc-retail.jpg",
    intro: [
      "Multan's commercial growth has concentrated around Bosan Road, Cantt and the Gulgasht commercial strip, with a client mix weighted toward healthcare, education, agri-business and retail rather than corporate head offices. Those sectors carry specific requirements — hygiene-rated surfaces, high-traffic durability, and layouts that handle queueing and public flow.",
      "The climate is the other defining factor. Summer temperatures place real load on cooling, and interior specification has to account for it: glazing treatment, insulation at the ceiling void, and HVAC capacity sized for the actual heat gain rather than a national rule of thumb.",
    ],
    local: [
      { t: "Extreme summer load", d: "Cooling load drives glazing treatment, ceiling void insulation and HVAC sizing. Under-specified cooling is the most common cause of a comfortable-looking space nobody can work in by June." },
      { t: "Healthcare & education mix", d: "Clinics, laboratories and campuses need hygiene-rated, cleanable surfaces with coved junctions — a different specification from corporate finishes." },
      { t: "Retail on high-traffic strips", d: "Bosan Road and Gulgasht retail sees heavy footfall. Flooring, door hardware and edge protection are specified for that wear, not for showroom conditions." },
      { t: "Material sourcing", d: "Specialist finishes are sourced from Lahore or Karachi. Lead times are stated in the programme rather than absorbed silently." },
    ],
    faqs: [
      {
        q: "Do you have an office in Multan?",
        a: "No. Our studio is in Lahore. We deliver commercial projects in Multan with site management assigned per project and stated in the proposal.",
      },
      {
        q: "How does the climate affect specification?",
        a: "Substantially. Cooling load drives glazing treatment, insulation and HVAC sizing. We size for the actual heat gain of the building rather than applying a generic figure, because under-specified cooling is the most common failure in this climate.",
      },
      {
        q: "Do you work on clinics and educational facilities?",
        a: "Yes. Those require hygiene-rated cleanable surfaces, coved junctions and layouts that handle public queueing. The specification differs from a corporate office and is priced accordingly.",
      },
      {
        q: "Are lead times longer in Multan?",
        a: "For specialist finishes, yes, because they are sourced from Lahore or Karachi. We state those lead times in the programme up front so they do not surface later as delay.",
      },
    ],
  },

  {
    slug: "commercial-interior-design-faisalabad",
    city: "Faisalabad",
    delivered: true,
    base: false,
    metaTitle: "Commercial Interior Design Faisalabad | Woodex",
    metaDescription:
      "Commercial interior design and fit-out delivered in Faisalabad. Disciplined delivery with transparent BOQ and on-time handover.",
    keywords: [
      "commercial interior design faisalabad",
      "interior designer faisalabad",
      "office interior design faisalabad",
      "office fit out faisalabad",
      "commercial fit out faisalabad",
      "showroom design faisalabad",
    ],
    image: "/img/proj-04.jpg",
    intro: [
      "Faisalabad is an industrial and textile economy, and its commercial interiors reflect that. The dominant brief is not a corporate headquarters but a head office attached to a manufacturing operation, a buyer-facing showroom where international clients are hosted, or an administrative block within a mill compound.",
      "That creates a specific design problem. The same building often has to impress an overseas buyer in a meeting room and survive industrial adjacency — dust, vibration, heavy circulation and staff moving between production and office areas. Treating it as a standard corporate fit-out produces a space that looks wrong within a year.",
    ],
    local: [
      { t: "Industrial adjacency", d: "Offices attached to production carry dust ingress, vibration and heavy foot traffic. Entry sequences, floor finishes and air handling are specified for it." },
      { t: "Buyer-facing showrooms", d: "Textile buyers assess a supplier partly by the room they are hosted in. Sample display, lighting quality for fabric assessment and meeting facilities are the priority spend." },
      { t: "Mill compound logistics", d: "Working inside an operating compound means access permits, restricted delivery windows and coordinating with production schedules. Built into the programme." },
      { t: "Fabric-appropriate lighting", d: "Colour assessment needs high-CRI lighting at controlled temperature. Standard office lighting misrepresents fabric and costs a supplier credibility." },
    ],
    faqs: [
      {
        q: "Do you have an office in Faisalabad?",
        a: "No. Our studio is in Lahore. We deliver commercial projects in Faisalabad with site management assigned per project and stated in the proposal.",
      },
      {
        q: "Can you work inside an operating mill compound?",
        a: "Yes. It requires access permits, restricted delivery windows and sequencing around production. We coordinate with your operations team and build those constraints into the programme rather than treating them as obstacles discovered later.",
      },
      {
        q: "Do you design buyer-facing showrooms?",
        a: "Yes, and it is one of the most common Faisalabad briefs. The priorities are sample display, high-CRI lighting suitable for fabric colour assessment, and meeting facilities that hold up to international scrutiny.",
      },
      {
        q: "How do you handle dust from adjacent production?",
        a: "With the entry sequence, the floor specification and the air handling. Transition zones, appropriate floor finishes and correctly specified filtration keep the office usable without pretending the factory next door does not exist.",
      },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
