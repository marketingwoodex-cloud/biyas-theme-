import type { Project } from "./types";

/**
 * PROJECT CASE STUDIES
 * Structure: brief → approach → materials → measured result.
 * Never "we made it beautiful" — always a number the client cared about.
 */
export const projects: Project[] = [
  {
    slug: "meridian-capital-hq",
    index: "01",
    title: "Meridian Capital HQ",
    client: "Meridian Capital",
    sector: "Workplace",
    serviceSlug: "office-interior-design",
    year: "2025",
    location: "Gulberg, Lahore",
    area: "11,400 sq ft",
    duration: "16 weeks",
    image: "/img/hero-01.jpg",
    gallery: ["/img/hero-01.jpg", "/img/svc-office.jpg", "/img/detail-joinery.jpg"],
    summary:
      "A private investment firm's floor rebuilt around a single arrival sequence in fluted walnut, brass and travertine.",
    brief:
      "Meridian were closing eight-figure mandates in a reception that looked like a dentist's waiting room. They needed a floor that carried the weight of the conversations happening inside it — without reading as a bank.",
    approach: [
      "We collapsed three under-used meeting rooms into one arrival volume: an eight-metre fluted walnut wall, a single stone desk, and nothing else. The room does one thing.",
      "Open plan was re-planned around an acoustic gradient — trading desks at the loud end, analysts at the quiet end, four phone rooms in between. Reverberation was targeted at 0.6s and verified on site.",
      "The boardroom table is a single six-metre walnut slab, dry-assembled in our shop, delivered through a window opening on a Sunday morning.",
    ],
    materials: ["American black walnut, log-matched", "Unlacquered brass reveals", "Honed silver travertine", "Charcoal wool acoustic felt"],
    result: [
      { value: "0.58s", label: "Measured reverberation, open plan" },
      { value: "16 wks", label: "Site programme, delivered on date" },
      { value: "100%", label: "Joinery made in our own shop" },
    ],
    quote: {
      text: "The reception does the first ten minutes of the pitch for us. We stopped explaining who we are.",
      who: "Managing Partner",
      role: "Meridian Capital",
    },
  },
  {
    slug: "villa-noor",
    index: "02",
    title: "Villa Noor",
    client: "Private",
    sector: "Residential",
    serviceSlug: "residential-interior-design",
    year: "2025",
    location: "DHA Phase VI, Lahore",
    area: "8,200 sq ft",
    duration: "22 weeks",
    image: "/img/svc-residential.jpg",
    gallery: ["/img/svc-residential.jpg", "/img/hero-02.jpg", "/img/detail-joinery.jpg"],
    summary:
      "A family villa unified by one oak-and-brass palette that runs from the entrance hall to the last wardrobe pull.",
    brief:
      "The house had been built by three suppliers across two years. Nothing matched, and the family had stopped using half the ground floor.",
    approach: [
      "We stripped the fragmented finishes and set a single palette: white oak, plaster, honed marble, unlacquered brass. Every room now shares at least two of the four.",
      "The kitchen island was re-templated after the substrate went in, so the waterfall edge meets the floor without a scribe strip.",
      "Ninety-one metres of wardrobes, the bedheads, the media wall and the library were manufactured in one batch to guarantee colour continuity.",
    ],
    materials: ["European white oak, rift sawn", "Polished plaster", "Honed Calacatta marble", "Unlacquered brass hardware"],
    result: [
      { value: "91 m", label: "Bespoke joinery, single batch" },
      { value: "4", label: "Materials across the whole house" },
      { value: "2 mm", label: "Installed tolerance" },
    ],
    quote: {
      text: "For the first time the house feels like one house instead of four renovations.",
      who: "Homeowner",
      role: "Villa Noor",
    },
  },
  {
    slug: "the-long-room",
    index: "03",
    title: "The Long Room",
    client: "Independent operator",
    sector: "Hospitality",
    serviceSlug: "hospitality-interior-design",
    year: "2024",
    location: "MM Alam Road, Lahore",
    area: "3,100 sq ft",
    duration: "13 weeks",
    image: "/img/svc-hospitality.jpg",
    gallery: ["/img/svc-hospitality.jpg", "/img/hero-03.jpg", "/img/detail-joinery.jpg"],
    summary:
      "A 96-cover dining room planned back-of-house first, then dressed in caramel leather, fluted timber and antique brass.",
    brief:
      "The operator had a strong menu and a room that could only seat 68 without servers colliding. They needed covers, not decoration.",
    approach: [
      "Re-planning the pass and two waiter stations recovered 28 covers without reducing table spacing below comfort.",
      "Banquettes were built with solid walnut returns rather than veneer, because that is the edge a chair leg hits four hundred times a night.",
      "Lighting runs on a timeclock: 3000K at 60% for lunch, 2700K warm-dim to 22% after eight.",
    ],
    materials: ["Fluted walnut columns", "Caramel contract leather, 100k rub", "Antique brass sconces", "Sealed nero marquina bistro tops"],
    result: [
      { value: "+28", label: "Covers recovered from re-planning" },
      { value: "13 wks", label: "Shell to opening night" },
      { value: "2,700K", label: "Warm-dim after 20:00" },
    ],
    quote: {
      text: "They planned the kitchen route before they showed us a single mood board. That is why it works on a Friday.",
      who: "Owner",
      role: "The Long Room",
    },
  },
  {
    slug: "atelier-forty",
    index: "04",
    title: "Atelier Forty",
    client: "Fashion retailer",
    sector: "Retail",
    serviceSlug: "retail-showroom-fit-out",
    year: "2024",
    location: "Packages Mall, Lahore",
    area: "1,450 sq ft",
    duration: "6 weeks",
    image: "/img/svc-retail.jpg",
    gallery: ["/img/svc-retail.jpg", "/img/detail-joinery.jpg", "/img/hero-01.jpg"],
    summary:
      "A flagship prototyped as a repeatable kit — travertine plinths, brass rails, CRI-95 lighting — documented for rollout.",
    brief:
      "One store was opening, four more were budgeted. The client needed a design that got cheaper and faster each time it was built.",
    approach: [
      "Every fixture was designed as a module on a 600mm grid so panels nest efficiently and ship flat.",
      "Lighting was locked to CRI 95+ with three beam angles, so fabric colour reads identically in every unit.",
      "We issued a 40-page standards manual with a fixed bill of materials, which cut unit two's install to nine days.",
    ],
    materials: ["Cream travertine plinths", "Brushed brass rails", "Micro-cement alcoves", "Oak chevron parquet"],
    result: [
      { value: "6 wks", label: "Flagship, shell to open" },
      { value: "9 days", label: "Unit two install time" },
      { value: "CRI 95+", label: "Colour accuracy on merchandise" },
    ],
  },
  {
    slug: "the-roastery",
    index: "05",
    title: "The Roastery",
    client: "Speciality coffee group",
    sector: "Hospitality",
    serviceSlug: "hospitality-interior-design",
    year: "2024",
    location: "Cantt, Lahore",
    area: "1,900 sq ft",
    duration: "9 weeks",
    image: "/img/hero-03.jpg",
    gallery: ["/img/hero-03.jpg", "/img/svc-hospitality.jpg", "/img/svc-joinery.jpg"],
    summary:
      "An end-grain oak counter, an exposed roasting theatre and a queue that resolves itself without a rope line.",
    brief:
      "Peak-hour queues were blocking the door and the roaster was hidden in a back room the customers paid for but never saw.",
    approach: [
      "The counter was rotated 90° and lengthened, converting the queue from a door blockage into a two-metre viewing line at the roaster.",
      "End-grain oak was chosen for the counter top because it takes a hot portafilter without scarring.",
      "Order and collect were separated by 2.4m so two staff never cross.",
    ],
    materials: ["End-grain white oak counter", "Espresso-limewashed brick", "Brass shelving", "Ochre terrazzo"],
    result: [
      { value: "−40%", label: "Peak queue dwell at the door" },
      { value: "2.4 m", label: "Order-to-collect separation" },
      { value: "9 wks", label: "On site" },
    ],
  },
  {
    slug: "north-house-library",
    index: "06",
    title: "North House Library",
    client: "Private",
    sector: "Residential",
    serviceSlug: "bespoke-joinery-millwork",
    year: "2023",
    location: "Bahria, Lahore",
    area: "640 sq ft",
    duration: "7 weeks",
    image: "/img/hero-02.jpg",
    gallery: ["/img/hero-02.jpg", "/img/svc-joinery.jpg", "/img/detail-joinery.jpg"],
    summary:
      "A single-room commission: full-height walnut bookcases, an integrated brass ladder track and a green marble drinks cabinet.",
    brief:
      "A collector with 4,000 volumes and a room that was structurally out of square by 34mm corner to corner.",
    approach: [
      "Every bay was individually dimensioned from a laser survey rather than repeated at a nominal width, so the reveals read parallel even though the walls are not.",
      "The ladder track was let into a brass channel flush with the shelf face — no surface-mounted rail.",
      "Shelves were engineered at 22mm with a concealed steel spine to hold a 1.1m span without deflection.",
    ],
    materials: ["American black walnut, oiled", "Verde alpi marble", "Brass ladder track", "Concealed steel shelf spines"],
    result: [
      { value: "34 mm", label: "Out-of-square absorbed invisibly" },
      { value: "1.1 m", label: "Unsupported shelf span, zero deflection" },
      { value: "4,000", label: "Volumes housed" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
