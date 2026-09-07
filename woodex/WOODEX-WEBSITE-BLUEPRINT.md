# WOODEX INTERIOR — WEBSITE BLUEPRINT & HANDOFF DOCUMENT

**Version** 1.0  ·  **Prepared for** Woodex Interior, Lahore  ·  **Status** Ready for build
**Scope** Commercial-first lead generation website. Residential = secondary. Woodex Furniture™ = Phase 2, excluded.

---

## 0. HOW TO USE THIS DOCUMENT

Sections 1–9 are the specification. Section 10 is the build order. Section 11 is
the list of things **only you can answer** — the build can start without them,
but the site cannot launch without them.

Anywhere you see `{{TOKEN}}`, that is a deliberate placeholder for a fact I am
not permitted to invent. Every one is listed in §11.1 with the evidence needed
to replace it.

### 0.1 Assumptions log (decisions made where the brief was ambiguous)

| # | Ambiguity | Decision | Reasoning |
|---|---|---|---|
| A1 | Service URLs: brief §2.2 lists them at root (`/office-fit-out/`); the companion build prompt nests them (`/services/office-fit-out`) | **Nested** — `/services/office-fit-out/` | Nesting creates a crawlable topical cluster with the hub passing authority down, and gives clean breadcrumbs. The root-level SEO advantage is negligible today. One-line change if you disagree. |
| A2 | Location URLs: brief §2.4 uses exact-match flat (`/commercial-interior-design-lahore/`); build prompt uses `/locations/lahore` | **Flat exact-match**, per brief §2.4 | Location pages exist to win one query: *"commercial interior design lahore"*. Exact-match URL is still a measurable ranking factor for local commercial intent. This is the one place I recommend breaking URL symmetry, and it is worth it. |
| A3 | Industry pages "only if real proof exists" | **Launch with Office + Retail only.** Pharmacy, Education built but `noindex` until proof lands | A thin industry page with no project ruins the cluster's credibility and cannibalises the service page. |
| A4 | ISO 9001 in the proof bar | **Gated behind `{{ISO_CERTIFIED}}` flag** | Brief §3.2 says "if certified". Claiming it unverified is a legal and trust risk. |
| A5 | Typography — brief §6.1 says "optional elegant serif for headlines" | **Single modern sans throughout** | The word is *optional*. A single grotesk at weight 500 reads executive and precise; Playfair/Cormorant reads editorial-luxury, which pulls toward residential — the opposite of the commercial positioning. Recommend revisiting only if the logo is serif. |
| A6 | Blog at launch | **Structure built, 4 launch articles specified** (§4.4) | An empty `/blog/` is worse than none. Four articles is the minimum to look alive. |
| A7 | Minimum project size qualifier | **"We focus on commercial projects from 1,000 sq ft"** used as soft copy | Brief §5.3 offers this. Confirm the real threshold — see §11. |
| A8 | Residential | **One page under Services, no nav prominence** | Brief §1.5 says keep the revenue, don't dilute focus. |

---

# 1. BRAND & MESSAGING SYSTEM

## 1.1 Name and lockup
**Woodex Interior** — always. Never "WoodX", "Wood-X", "Woodex Interiors" (plural).
First mention on any page: *Woodex Interior*. Subsequent mentions: *Woodex*.

## 1.2 Core value proposition
> **Commercial interior design and fit-out, delivered with disciplined process, clear BOQ, and on-time handover.**

**One-line version (nav, meta, GBP):**
> Commercial interior design and fit-out across Pakistan.

**Hero version (headline):**
> Commercial spaces delivered on time, on budget, on brand.

## 1.3 Positioning against the named competitors

| | Their perceived strength | Their gap | Woodex counter-position |
|---|---|---|---|
| **Mavric** | Scale, brand recognition, polished marketing | Client is one of many; process feels industrialised | Senior attention on every project; you know who is accountable |
| **A Design Studio** | Design credibility, aesthetic reputation | Design-led, execution risk sits with the client | We carry the design *and* the site risk under one contract |
| **Aenzay** | Broad service range, architecture + interiors | Breadth can dilute commercial fit-out specialism | Commercial fit-out is the core discipline, not a side offer |

**The wedge in one sentence:**
> Most studios sell you a design and hand you a risk. Woodex sells you a delivered space with the cost written down before work starts.

## 1.4 Messaging pillars

Every page must express **at least two** of these four.

| Pillar | What it means | Proof required on page |
|---|---|---|
| **1. Design that performs** | Space serves a business goal — workflow, headcount, customer flow, brand impression | Layout logic, capacity numbers, before/after workflow |
| **2. Controlled execution** | BOQ discipline, PM, change-order transparency | Sample BOQ line structure, approval gates, variation policy |
| **3. Pre-build clarity** | 3D renders, drawings, material specs, MEP coordination — before construction | Render → built photo pairs, drawing set list |
| **4. Professional handover** | Snagging, documentation, aftercare | Handover pack contents, warranty terms |

## 1.5 Objection map — the four questions every page must answer

| Objection | Where it is answered | Mechanism |
|---|---|---|
| *"Will they deliver on time?"* | Process page, every service page, FAQ | Dated programme at contract, weekly written reports, on-time record `{{ONTIME_RATE}}` |
| *"Will the budget hold?"* | Service pages, `/request-proposal`, FAQ | Line-item BOQ, written change-order policy, approval gates |
| *"Can they coordinate MEP?"* | Process step 3, service pages | Clash detection before ceilings close, named coordination role |
| *"Do they know my city / industry?"* | Location pages, industry pages, case studies | City project list, industry-specific constraints |

## 1.6 Audience priority

| Rank | Audience | Buys on | Reads |
|---|---|---|---|
| 1 | **Business owner / CEO** | Total cost, speed, single accountability, brand image | Home → Case study → Request Proposal |
| 2 | **Office / HR manager** | Headcount, comfort, operational disruption | Office fit-out → Process → FAQ |
| 3 | **Architect / contractor / specifier** | Drawings, coordination, reliability | Process → 3D Visualization → Contact |
| 4 | **Homeowner** *(secondary)* | Taste, trust | Residential page only |

---

# 2. FULL SITEMAP

`P` = page priority for build order. `CTA` = the single primary CTA on that page.

## 2.1 Core

| URL | Purpose | Primary keyword | P | CTA |
|---|---|---|---|---|
| `/` | Position + route to service/case study | commercial interior design pakistan | 1 | Request a Proposal |
| `/services/` | Hub; distributes authority to 6 service pages | interior design services pakistan | 1 | Request a Proposal |
| `/portfolio/` | Filterable visual proof grid | interior design portfolio pakistan | 2 | View Case Studies |
| `/case-studies/` | Long-form proof index | commercial fit-out case studies | 2 | Request a Proposal |
| `/case-studies/{slug}/` | Single project, SEO-rich | *(project-specific)* | 2 | Request a similar proposal |
| `/process/` | De-risking. The 5-step delivery system | interior fit-out process | 1 | Request a Proposal |
| `/about/` | Company, team, credentials | about woodex interior | 3 | Request a Proposal |
| `/contact/` | NAP, map, hours, direct lines | contact interior designer lahore | 1 | WhatsApp *(exception: see §5.4)* |
| `/request-proposal/` | **Primary conversion page** | request interior design proposal | 1 | Submit (form is the CTA) |
| `/thank-you/` | Post-submit; sets expectations, no index | — | 1 | — |
| `/404` | Recovery routing | — | 3 | — |

## 2.2 Commercial services

| URL | Primary keyword | Secondary keywords | P |
|---|---|---|---|
| `/services/commercial-interior-design/` | commercial interior design pakistan | commercial interior designer, corporate interior design | 1 |
| `/services/office-interior-design/` | office interior design lahore | corporate office design, workspace design pakistan | 1 |
| `/services/office-fit-out/` | office fit-out lahore | office fit out company pakistan, office renovation | 1 |
| `/services/retail-showroom-interior-design/` | showroom interior design lahore | retail fit out, shop interior design pakistan | 2 |
| `/services/turnkey-fit-out/` | turnkey interior solutions pakistan | design and build interior, turnkey fit out company | 2 |
| `/services/3d-visualization/` | 3d interior visualization pakistan | 3d rendering interior, interior 3d design services | 2 |
| `/services/residential-interior-design/` | residential interior design lahore | home interior design pakistan | 4 |

## 2.3 Industries

| URL | Status at launch | Gate |
|---|---|---|
| `/industries/office-workspaces/` | **Live, indexed** | — |
| `/industries/retail-stores-showrooms/` | **Live, indexed** | — |
| `/industries/pharmacy-healthcare/` | Built, `noindex` | ≥1 completed project |
| `/industries/education-universities/` | Built, `noindex` | ≥1 completed project |
| `/industries/hospitality-restaurants-cafes/` | Phase 2 | ≥1 completed project |
| `/industries/clinics-medical-centres/` | Phase 2 | ≥1 completed project |

> **Rule:** an industry page goes live the day its first case study goes live. Not before.

## 2.4 Locations *(flat exact-match URLs — see assumption A2)*

| URL | Primary keyword | Requirement to publish |
|---|---|---|
| `/commercial-interior-design-lahore/` | commercial interior design lahore | Office address, ≥2 local projects |
| `/commercial-interior-design-karachi/` | commercial interior design karachi | ≥1 delivered project **or** clearly worded "active delivery" |
| `/commercial-interior-design-islamabad/` | commercial interior design islamabad | as above |
| `/commercial-interior-design-multan/` | commercial interior design multan | as above |
| `/commercial-interior-design-faisalabad/` | commercial interior design faisalabad | as above |

> **Compliance:** no address, no "our Karachi office", no local phone number for any
> city except Lahore. Permitted phrasing: *"Delivering commercial fit-out projects in
> Karachi from our Lahore studio."*

## 2.5 Blog

`/blog/` with categories: `commercial`, `office`, `retail`, `cost`, `process`.
Launch set in §4.4.

## 2.6 Internal linking map

```
Home ──┬──▶ Services hub ──┬──▶ Service page ──┬──▶ Case study (2–3)
       │                   │                   ├──▶ Industry page
       │                   │                   └──▶ REQUEST PROPOSAL
       │                   └──▶ Process
       ├──▶ Portfolio ─────────▶ Case study ────▶ REQUEST PROPOSAL
       ├──▶ Industry page ─────▶ Service + Case study
       ├──▶ Location page ─────▶ Service + local Case study
       └──▶ Process ───────────▶ REQUEST PROPOSAL

Blog post ──▶ relevant Service page ──▶ REQUEST PROPOSAL
```

**Rules**
- Every service page links to ≥2 case studies and ≥1 industry page.
- Every case study links back to the service that delivered it.
- Every location page links to the 3 core service pages.
- `/request-proposal/` is reachable in **one click from every page** (nav button).
- No page links to more than 2 other services in body copy — it dilutes intent.

---

# 3. WIREFRAME DESCRIPTIONS

Notation: `§` = section. Every page = one `<h1>`, one primary CTA.

## 3.1 Home

| § | Section | Content | Notes |
|---|---|---|---|
| 1 | **Hero** | H1 *Commercial spaces delivered on time, on budget, on brand.* Sub: *Interior design and fit-out for offices, retail and institutions — Lahore, Karachi, Islamabad, Multan, Faisalabad.* | Primary: **Request a Proposal**. Secondary: **View Case Studies**. Full-bleed project photo, dark grade for contrast |
| 2 | **Proof bar** | `{{YEARS}}` years · `{{PROJECTS}}` projects delivered · 5 cities served · `{{ISO_CERTIFIED}}` | Single row, thin rules between. Hide any item whose token is unresolved |
| 3 | **What we deliver** | 4 columns: **Design** → **BOQ & Specifications** → **Execution** → **Handover** | One line each. Arrow/chevron between columns to read as a sequence, not a menu |
| 4 | **Featured case studies** | 3 tiles: image, project type, city, size, duration → case study | Pull from `projects[]` where `featured: true` |
| 5 | **Industries we serve** | Grid of 4 live industry cards | Only live industries. Cards link to industry pages |
| 6 | **Process snapshot** | 5 steps: Brief → 3D Design → BOQ & Specs → Fit-Out → Handover | Numbered, horizontal on desktop, stacked on mobile. Links to `/process/` |
| 7 | **Why Woodex** | 4 differentiators, thin-line icons: dedicated project management · BOQ transparency · 3D clarity before build · documented QC and handover | Answers the §1.5 objections directly |
| 8 | **FAQ** | 6 commercial questions | FAQPage schema |
| 9 | **Final CTA band** | *Ready to start your project?* | Primary: Request a Proposal. Secondary (text link): WhatsApp |

## 3.2 Service page template

| § | Section | Content |
|---|---|---|
| 1 | Hero | H1 = primary keyword. Sub = the delivery promise. Breadcrumb |
| 2 | Intro | 2 short paragraphs. The business problem, then the Woodex answer |
| 3 | Who it's for | 3 cards: Business owners · Office/facility managers · Architects & specifiers |
| 4 | What's included | 6–8 deliverables, checklist format |
| 5 | Timeline | Typical range + a table of what extends it |
| 6 | Cost control | How BOQ works, approval gates, change-order policy. **This section is the differentiator — do not shorten it** |
| 7 | Related case studies | 2–3 tiles |
| 8 | FAQ | 5–8 questions + FAQPage schema |
| 9 | CTA band | Request a Proposal |

## 3.3 Case study template

| § | Section | Content |
|---|---|---|
| 1 | Hero | Project title, hero image |
| 2 | Meta strip | City · Type · Size (sq ft) · Duration · Year · Scope |
| 3 | The brief | The client's **business** problem, not the design brief |
| 4 | Constraints | Timeline, budget, operational limits (trading hours, live floor) |
| 5 | Our approach | Design decisions, materials, spatial logic |
| 6 | Execution | Coordination, site management, milestones |
| 7 | Results | Measurable outcomes. **Placeholder until client-verified** |
| 8 | Gallery | Minimum 6 slots |
| 9 | CTA | *Request a similar proposal* |

## 3.4 Portfolio grid

- Filter row: **All · Office · Retail · Pharma · Education · Hospitality · Renovation**
- Card: image (4:3), title, city, type. Hover: subtle lift + "View project"
- 6–12 items at launch. Cards with a case study link there; others to a short detail panel
- Filter must be URL-reflected (`/portfolio/?type=office`) so filtered views are shareable

## 3.5 Process page

Five expanded steps, each with: what happens · what you receive · what we need from you · typical duration.
Then: change-order policy, QC checklist summary, handover pack contents.

## 3.6 Location page template

1. Hero — *Commercial Interior Design in {City}*
2. **Unique** intro, 120–180 words. Written per city. Zero shared sentences
3. Projects delivered in {City} — or honest "active delivery" statement
4. Services offered, linking to the 3 core service pages
5. Local considerations — building stock, approvals, access constraints specific to that city
6. City FAQ (4–5) + schema
7. CTA band

> **Duplicate-content rule:** sections 2 and 5 must be ≥80% unique per city.
> If you cannot write 150 genuinely different words about a city, do not publish that page.

## 3.7 Request Proposal page

Two columns.
**Left (60%)** — the form (§5.1).
**Right (40%)** — sticky reassurance panel:
- What happens next: 3 numbered steps with timings
- What you'll receive: scope, indicative BOQ structure, programme, budget band
- "We focus on commercial projects from 1,000 sq ft"
- Direct line + WhatsApp for anyone who won't fill a form
- No navigation links in this column — do not offer an exit

---

# 4. CONTENT COPY

> Tone check for everything below: executive, specific, no hype. See §8.

## 4.1 Commercial Interior Design *(hub service)*

**H1** Commercial Interior Design in Pakistan

**Intro**
Commercial space is an operating asset. It decides how many people you can seat, how
fast a customer finds what they came for, and what a client concludes about you before
the first meeting starts. We design commercial interiors around those outcomes, then
build them under one contract with the cost written down before work begins.

**Who it's for** — Business owners planning a move, expansion or rebrand · Facility and
office managers running a live site · Architects and specifiers who need a fit-out
partner who reads drawings properly.

**What's included**
Site survey and measured drawings · Space planning and capacity modelling ·
3D visualisation before construction · Material and finish specification ·
MEP coordination and clash detection · Line-item BOQ with rates ·
Site execution and project management · Snagging, documentation and handover

**Timeline** Typical commercial project: 4–8 weeks design, 8–16 weeks on site,
depending on area, services scope and landlord approvals.

**Cost control** You receive a line-item BOQ before work starts — every material,
quantity and rate visible. Variations are only issued in writing and only proceed on
your written approval. Nothing is bought against a verbal instruction.

---

## 4.2 Office Interior Design

**H1** Office Interior Design in Lahore & Across Pakistan

**Intro**
Your office is the most visible thing your business owns. It sets the tone of a
negotiation before anyone speaks, decides whether a senior candidate accepts, and
governs how much focused work happens between nine and six. We plan offices around
headcount, workflow and acoustic reality — then specify finishes that survive a decade
of commercial use.

**Who it's for** — CEOs and business owners · HR and office managers · Architects
specifying interior packages.

**What's included**
Headcount and adjacency modelling · Three tested layout options ·
Acoustic strategy per zone · Reception and brand-moment design ·
3D visualisation of key spaces · Lighting and lux-level design ·
Furniture specification and procurement · MEP coordination · Line-item BOQ

**Timeline** A 5,000 sq ft office typically runs 4–6 weeks design and 8–10 weeks on
site. What extends it: landlord approvals, heritage or structural constraints, long-lead
imported furniture, live-occupancy phasing.

**Cost control** BOQ issued at design freeze. Approval gates at layout, material board
and 3D sign-off. Change orders priced and signed before execution.

---

## 4.3 Office Fit-Out

**H1** Office Fit-Out Company — Lahore & Pakistan

**Intro**
A fit-out is a construction project wearing an interior's clothes. It succeeds or fails
on programme control, services coordination and the discipline to hold a specification
under pressure. We run fit-outs with a dated programme, a named project manager and a
written variation policy — so the number you approved is the number you pay.

**Who it's for** — Businesses relocating or expanding · Facility managers refurbishing
a live floor · Landlords preparing Cat A / Cat B space.

**What's included**
Dilapidation and strip-out · Partitions, ceilings and flooring ·
Electrical, data and HVAC coordination · Joinery manufacture and installation ·
Fire strategy and compliance · Furniture installation ·
Weekly written progress reporting · Snagging and O&M handover pack

**Timeline** Cat B fit-out: 8–14 weeks on site for a typical floorplate. Phased
occupied fit-outs run longer by design — priced transparently as programme, not surprises.

**Cost control** Line-item BOQ. Provisional sums declared as provisional, never buried.
Variation register maintained and shared weekly.

---

## 4.4 Retail & Showroom Interior Design

**H1** Retail & Showroom Interior Design in Pakistan

**Intro**
Retail is choreography. Where the eye lands at the door, where the hand reaches, where
the queue forms. We design the customer route first and the fixtures second — because
retrofitted display never quite fits, and customers feel it without being able to name it.

**Who it's for** — Retail owners and brand managers · Multi-site operators planning a
rollout · Showroom and distribution businesses.

**What's included**
Customer flow and zoning · Decompression zone and power-wall planning ·
Modular, repeatable display fixture design · High-CRI retail lighting ·
Shopfront, glazing and signage coordination · Landlord/mall criteria submissions ·
Rollout standards manual · Night and out-of-hours installation

**Timeline** A 1,200 sq ft unit with a pre-manufactured fixture kit installs in
10–14 days on site. The lead time sits in the workshop, so manufacture starts during
landlord approvals rather than after.

**Cost control** Fixture kits are costed per unit, so unit two is predictable before
you sign for unit one.

---

## 4.5 Turnkey Fit-Out

**H1** Turnkey Interior Fit-Out Solutions — Pakistan

**Intro**
Split contracts fail in the seams. When the designer, the contractor and the joiner
answer to three different parties, every interface becomes a negotiation and every
delay becomes someone else's fault. Turnkey means one contract, one programme, one
number and one party accountable at handover.

**Who it's for** — Owners who do not want to manage a supply chain · Businesses with
no in-house project function · Anyone who has been through a split-contract fit-out once.

**What's included**
Single point of contact and one contract · Design through to handover ·
Full procurement management · MEP subcontractor management ·
Statutory approvals and landlord liaison · Single consolidated BOQ ·
One programme with dated milestones · Handover pack, warranties and aftercare

**Timeline** Design 4–8 weeks, site 8–16 weeks. Because procurement runs in parallel
with design freeze rather than after it, turnkey is usually *faster* than the split
equivalent, not slower.

**Cost control** One BOQ, no interface pricing, no gap-scope claims between trades.

---

## 4.6 3D Visualization

**H1** 3D Interior Visualization & Rendering — Pakistan

**Intro**
The most expensive revision is the one made on site. A wall in the wrong place, a stone
that reads grey instead of cream, a pendant hanging 200mm too low — each is a day lost
and a variation raised. Almost all of them are avoidable if the space is rendered
accurately first. We model the measured survey, not an idealised box.

**Who it's for** — Clients who need to approve before they commit · Architects and
designers needing visualisation only · Developers needing pre-sale or investor assets.

**What's included**
Photoreal stills of key views · Material studies — the same view across 2–3 palettes ·
Walkthrough animation (30–60s) · Accurate lighting simulation, day and night states ·
360° panoramas for phone or headset · Standalone commissions, no build obligation

**Timeline** 5–8 working days for a full set from a signed-off layout and material
direction. A single hero view for a pitch: 48–72 hours.

**Cost control** Fixed price per view, with three revision rounds included as standard.

---

## 4.7 Blog launch set

| Slug | Title | Category | Intent |
|---|---|---|---|
| `/blog/office-fit-out-cost-pakistan/` | Office Fit-Out Cost in Pakistan: What Drives the Number | cost | Commercial informational — highest lead value |
| `/blog/what-is-boq-interior-fit-out/` | What Is a BOQ in an Interior Fit-Out? | process | Builds trust in the core differentiator |
| `/blog/office-fit-out-timeline/` | How Long Does an Office Fit-Out Take? | office | Answers objection #1 |
| `/blog/choose-interior-design-company-pakistan/` | How to Choose an Interior Design Company in Pakistan | commercial | Comparison intent — capture competitor research |

Each ends with a contextual link to the matching service page, then Request a Proposal.

---

# 5. CONVERSION & LEAD QUALIFICATION

## 5.1 Request a Proposal — form specification

| # | Field | Type | Required | Options / Validation |
|---|---|---|---|---|
| 1 | Full name | text | ✅ | min 2 chars |
| 2 | Phone / WhatsApp | tel | ✅ | PK format hint `+92 3XX XXXXXXX` |
| 3 | Email | email | ⬜ | valid format if present |
| 4 | City | select | ✅ | Lahore · Karachi · Islamabad · Multan · Faisalabad · Other |
| 5 | Property type | select | ✅ | Office · Retail / Showroom · Pharmacy / Healthcare · Education · Hospitality · Other |
| 6 | Approximate area | number | ✅ | sq ft. Inline note: *We focus on commercial projects from 1,000 sq ft* |
| 7 | Project scope | radio | ✅ | Design only · Design + Build · Fit-out only |
| 8 | Target handover date | date | ✅ | future dates only |
| 9 | **Budget range** | select | ✅ | See §5.2 |
| 10 | Project description | textarea | ✅ | min 20 chars |
| 11 | Floor plan / photos | file | ⬜ | pdf, jpg, png, dwg · max 10MB |
| 12 | Consent | checkbox | ✅ | *I agree to be contacted about this enquiry* |

**Design rules**
- Single column. Two columns halves completion on mobile.
- No progress bar for ≤12 fields — it draws attention to length.
- Budget is **required**. It is the single highest-value qualification field and the
  primary gatekeeping mechanism. Include a *Not sure yet* option so it does not block
  genuine early-stage enquiries — but track that segment separately.
- Submit label: **Request Proposal**. Never "Submit", never "Send".
- On success → `/thank-you/` (a real URL, so the conversion is trackable in GA4).

## 5.2 Budget ranges *(confirm against real project economics — §11)*

`Under PKR 2.5M` · `PKR 2.5M – 6M` · `PKR 6M – 15M` · `PKR 15M – 40M` · `PKR 40M+` · `Not sure yet`

## 5.3 WhatsApp — secondary CTA

Prefilled message, populated from page context where available:

> Hello Woodex, I'm interested in a {{SERVICE}} project in {{CITY}}. Area: {{AREA}} sq ft. Budget: {{BUDGET}}. Can we discuss?

Placement: sticky button on mobile only; text link in the CTA band on desktop.
**Never** a floating desktop bubble — it competes with the primary CTA and cheapens a
premium positioning.

## 5.4 One primary CTA per page

| Page type | Primary | Secondary |
|---|---|---|
| Home | Request a Proposal | View Case Studies |
| Service | Request a Proposal | View related case study |
| Case study | Request a similar proposal | View more work |
| Industry | Request a Proposal | View service |
| Location | Request a Proposal | WhatsApp |
| Process | Request a Proposal | — |
| About | Request a Proposal | View Case Studies |
| **Contact** | **WhatsApp / call** | Request a Proposal |
| Portfolio | View Case Studies | Request a Proposal |

> Contact is the deliberate exception: someone on `/contact/` wants a human now.
> Making them fill a 12-field form is friction in the wrong direction.

## 5.5 Gatekeeping language

**Use:** *Request a detailed proposal with scope, timeline and budget* · *Project
assessment* · *Commercial briefing* · *We focus on commercial projects from 1,000 sq ft*

**Never:** *Free consultation* · *Free quote* · *Get a free estimate* · *No obligation!*
· any exclamation mark.

## 5.6 Lead response SLA *(publish it — it converts)*

| Step | Timing |
|---|---|
| Acknowledgement | Within 2 working hours |
| Qualification call | Within 1 working day |
| Written proposal | Within `{{PROPOSAL_DAYS}}` working days of site access |

## 5.7 Tracking

GA4 events: `form_start` · `form_submit` · `whatsapp_click` · `phone_click` ·
`case_study_view` · `proposal_page_view`.
Mark `form_submit` as the primary conversion. Segment all of it by `city` and
`budget_range` — that is how you learn which location pages actually pay.

---

# 6. SEO MASTER PLAN

## 6.1 Metadata — every URL

Titles ≤60 characters, descriptions ≤160. Counts verified.

| URL | Title | Meta description |
|---|---|---|
| `/` | Commercial Interior Design & Fit-Out Pakistan \| Woodex | Commercial interior design and fit-out delivered with disciplined process, clear BOQ and on-time handover. Lahore, Karachi, Islamabad, Multan, Faisalabad. |
| `/services/` | Interior Design & Fit-Out Services \| Woodex Interior | Commercial interior design, office fit-out, retail, turnkey delivery and 3D visualisation. One contract from design to documented handover. |
| `/services/commercial-interior-design/` | Commercial Interior Design Pakistan \| Woodex Interior | Commercial interior design for offices, retail and institutions. Space planning, 3D renders, line-item BOQ and full site execution under one contract. |
| `/services/office-interior-design/` | Office Interior Design Lahore & Pakistan \| Woodex | Office interior design built around headcount, workflow and acoustics. Three tested layouts, 3D sign-off and a line-item BOQ before work begins. |
| `/services/office-fit-out/` | Office Fit-Out Company Lahore, Pakistan \| Woodex | Office fit-out with a dated programme, named project manager and written variation policy. Cat A and Cat B delivery across Pakistan. |
| `/services/retail-showroom-interior-design/` | Retail & Showroom Interior Design Pakistan \| Woodex | Retail and showroom interiors planned around customer flow. Modular fixture kits, high-CRI lighting and rollout-ready documentation. |
| `/services/turnkey-fit-out/` | Turnkey Interior Fit-Out Solutions Pakistan \| Woodex | One contract, one programme, one number. Turnkey interior fit-out from design through procurement, execution and documented handover. |
| `/services/3d-visualization/` | 3D Interior Visualization & Rendering Pakistan \| Woodex | Photoreal 3D interior stills, walkthroughs and material studies modelled from the measured survey. Standalone commissions welcome. |
| `/portfolio/` | Interior Design & Fit-Out Portfolio \| Woodex Interior | Commercial interior design and fit-out projects across offices, retail, healthcare and education. Filter by sector and city. |
| `/case-studies/` | Commercial Fit-Out Case Studies \| Woodex Interior | Long-form case studies covering the brief, constraints, execution and measured results of commercial interior projects across Pakistan. |
| `/process/` | Our Interior Fit-Out Process \| Woodex Interior | A five-step delivery system: brief, 3D design, BOQ and specifications, fit-out, handover. See exactly what you receive at each stage. |
| `/about/` | About Woodex Interior \| Commercial Fit-Out Studio | A commercial-first interior design and fit-out studio based in Lahore, delivering across Pakistan with disciplined process and documented handover. |
| `/contact/` | Contact Woodex Interior \| Lahore Studio | Speak to the Woodex Interior studio in Lahore about a commercial interior design or fit-out project. Phone, WhatsApp, email and office hours. |
| `/request-proposal/` | Request a Proposal \| Woodex Interior | Tell us about your commercial project and receive a proposal with scope, indicative BOQ structure, programme and budget band. |
| `/industries/office-workspaces/` | Office & Workspace Interior Design \| Woodex Interior | Interior design and fit-out for corporate offices and workspaces — capacity planning, acoustics and finishes rated for commercial wear. |
| `/industries/retail-stores-showrooms/` | Retail Store & Showroom Fit-Out \| Woodex Interior | Interior design and fit-out for retail stores and showrooms, from single flagship units to documented multi-site rollouts. |
| `/commercial-interior-design-lahore/` | Commercial Interior Design Lahore \| Woodex Interior | Commercial interior design and fit-out in Lahore. Studio-based delivery with line-item BOQ, dated programme and documented handover. |
| `/commercial-interior-design-karachi/` | Commercial Interior Design Karachi \| Woodex Interior | Commercial interior design and fit-out projects delivered in Karachi from our Lahore studio. BOQ discipline and on-time handover. |
| `/commercial-interior-design-islamabad/` | Commercial Interior Design Islamabad \| Woodex | Commercial interior design and fit-out delivered in Islamabad. Disciplined process, clear BOQ and documented handover. |
| `/commercial-interior-design-multan/` | Commercial Interior Design Multan \| Woodex Interior | Commercial interior design and fit-out delivered in Multan. Clear scope, line-item BOQ and a dated site programme. |
| `/commercial-interior-design-faisalabad/` | Commercial Interior Design Faisalabad \| Woodex | Commercial interior design and fit-out delivered in Faisalabad. Disciplined delivery with transparent BOQ and on-time handover. |
| `/blog/` | Interior Design & Fit-Out Insights \| Woodex Interior | Practical guidance on commercial fit-out cost, timelines, BOQs and choosing an interior design partner in Pakistan. |
| `/thank-you/` | Thank You \| Woodex Interior | *(noindex)* |

**Case study titles:** `{Project Type} Fit-Out, {City} — {Size} sq ft | Woodex`

## 6.2 On-page rules

1. One search intent per URL. Never two services on one page.
2. Exactly one `<h1>`, containing the primary keyword, phrased naturally.
3. `<h2>`/`<h3>` carry secondary keywords. No skipped levels.
4. Primary keyword in: title, H1, first 100 words, one H2, meta description, URL.
5. Keyword density is not a target. If a sentence reads oddly, rewrite it.
6. Every image: descriptive alt text naming the space and city where relevant —
   *"Reception desk in walnut and bronze, corporate office Lahore"*. Never *"image1"*,
   never a keyword list.
7. Internal links use descriptive anchors — *"office fit-out process"*, not *"click here"*.
8. Every page: canonical, Open Graph, Twitter card.

## 6.3 Structured data

| Schema | Where |
|---|---|
| `Organization` + `LocalBusiness` | Sitewide, from siteConfig. **Lahore address only** |
| `WebSite` + `SearchAction` | Sitewide |
| `Service` | Each service page |
| `FAQPage` | Every page with a FAQ block — home, all services, all locations, process |
| `BreadcrumbList` | Every page below root |
| `ItemList` | Services hub, portfolio, case study index |
| `Article` | Blog posts |
| `CreativeWork` / `Project` | Case studies |
| `AggregateRating` / `Review` | **Do not implement** until real, attributable reviews exist |

## 6.4 Local SEO

- **One** Google Business Profile — the real Lahore office. Category:
  *Interior designer* (primary), *Commercial interior designer*, *General contractor*.
- Set **service areas** for Karachi, Islamabad, Multan, Faisalabad. **Do not create
  location listings or addresses for them.**
- NAP identical everywhere — site footer, GBP, all directories. Decide the canonical
  string once and never vary it (see §11).
- Location pages must carry: unique intro, city projects, city FAQ, and the honest
  service-area statement.
- Local citations: Google, Bing Places, Yelp PK, Zameen, Pakistan business directories.
  Consistency matters more than volume.

## 6.5 Technical SEO

| Requirement | Target |
|---|---|
| LCP (mobile, 4G) | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Total page weight | < 1.5MB above the fold |
| URLs | lowercase, hyphenated, trailing-slash consistent |
| `sitemap.xml` | auto-generated from route + content data |
| `robots.txt` | allow all; disallow `/thank-you/`; reference sitemap |
| Images | AVIF/WebP with fallback, explicit width/height, lazy-load below fold |
| Analytics | GA4 + Search Console verified before launch |

---

# 7. PLACEHOLDER PORTFOLIO SYSTEM

## 7.1 Project data schema

```
Project {
  id                  string        "prj-001"
  slug                string        "corporate-office-lahore-01"
  status              enum          "placeholder" | "live"
  featured            boolean
  title               string        "[Project Name] — Corporate Office, Lahore"
  clientLabel         string        "Client Name — Financial Services, Lahore"   // never a real name until approved
  city                enum          Lahore | Karachi | Islamabad | Multan | Faisalabad
  type                enum          Office | Retail | Pharma | Education | Hospitality | Renovation
  serviceSlug         string        → services[].slug
  industrySlug        string        → industries[].slug
  sizeSqFt            number|null
  durationWeeks       number|null
  year                number|null
  scope               enum          "Design only" | "Design + Build" | "Fit-out only"
  thumbnail           Image
  gallery             Image[]       min 6 slots
  brief               string        client's business problem
  constraints         string[]
  approach            string[]
  execution           string[]
  results             Result[]      { value, label, verified: boolean }
  hasCaseStudy        boolean
  seo                 { title, description }
}

Image {
  src                 string        "/assets/projects/{slug}-01.jpg"
  alt                 string        "modern office lounge Lahore"
  ratio               enum          "4:3" | "16:9"
  pending             boolean       true → renders "Project photo pending" overlay
}

Result {
  value               string        "[XX]%"
  label               string        "Reduction in meeting-room booking conflicts"
  verified            boolean       false → renders greyed with "pending client verification"
}
```

## 7.2 Launch set — 10 placeholder projects

| id | Type | City | Featured | Case study |
|---|---|---|---|---|
| prj-001 | Office | Lahore | ✅ | ✅ |
| prj-002 | Office | Karachi | ✅ | ✅ |
| prj-003 | Retail | Lahore | ✅ | ✅ |
| prj-004 | Retail | Islamabad | — | — |
| prj-005 | Office | Islamabad | — | — |
| prj-006 | Pharma | Lahore | — | — |
| prj-007 | Education | Lahore | — | — |
| prj-008 | Office | Multan | — | — |
| prj-009 | Renovation | Lahore | — | — |
| prj-010 | Office | Faisalabad | — | — |

Covers every filter with ≥1 result and every city with ≥1 project.

## 7.3 Placeholder rendering rules

- `status: "placeholder"` → subtle *"Project details pending"* chip on the card.
- `Image.pending: true` → neutral panel at the correct aspect ratio, thin-line icon,
  caption *"Project photo pending"*. **Never a broken image, never a stock photo.**
- `Result.verified: false` → shown greyed with *"pending client verification"*.
- Case study pages carry one line above the footer:
  > *This project record will be replaced with full details and photography upon launch.*
- **Do not** `noindex` placeholder pages — but **do** keep them out of `sitemap.xml`
  until `status: "live"`.

## 7.4 Image specification

| Use | Ratio | Delivered size | Naming |
|---|---|---|---|
| Card thumbnail | 4:3 | 1200×900 | `{project-slug}-thumb.jpg` |
| Case study hero | 16:9 | 2400×1350 | `{project-slug}-hero.jpg` |
| Gallery | 4:3 or 16:9 | 1800px long edge | `{project-name}-{location}-{type}-01.jpg` |

Alt text describes the space even in placeholder mode:
`"modern office lounge Lahore"` · `"retail showroom display wall Karachi"`

---

# 8. BRAND VOICE CHECKLIST

Run every sentence through this before it ships.

### The five tests
1. **Specific?** Does it contain a noun a competitor could not also claim?
2. **Outcome-led?** Does it describe what the client gets, not what we enjoy doing?
3. **Calm?** No exclamation marks, no superlatives, no urgency theatre.
4. **Provable?** If it is a claim, can it be evidenced? If not, delete or token it.
5. **Short?** Would it read on a phone at arm's length?

### Word list

| Use | Avoid |
|---|---|
| scope, BOQ, deliverables, programme, approvals, handover, snagging, tolerance, coordination, workflow, capacity, durability, maintenance | beautiful, luxurious, stunning, dream, passion, bespoke *(unqualified)*, world-class, cutting-edge, unique, exclusive *(as adjective)* |
| delivered, documented, specified, coordinated, executed | crafted, curated, elevated, transformed |
| *"We focus on commercial projects from 1,000 sq ft"* | *"No project too big or small!"* |

### Rewrites

| ✗ | ✓ |
|---|---|
| We create beautiful spaces. | We design commercial spaces that improve workflow, reflect your brand and deliver on time. |
| We are the best interior designers in Pakistan. | Trusted by businesses across Lahore, Karachi, Islamabad, Multan and Faisalabad for controlled fit-out delivery. |
| Get a free consultation now! | Request a detailed proposal with scope, timeline and budget. |
| We use premium quality materials. | Finishes are specified to commercial wear ratings and listed by name in the BOQ. |
| We have years of experience. | `{{YEARS}}` years delivering commercial fit-out, `{{PROJECTS}}` projects completed. |
| Contact us today! | Request a proposal. |

### Hard bans
- "Best in Pakistan" / "#1" / "leading" — unless citing a named external ranking.
- Any client name, logo, testimonial or metric without written approval.
- Any address outside Lahore.
- "WoodX", "Wood-X", "Woodex Interiors".
- Any mention of Woodex Furniture™ (Phase 2).

---

# 9. VISUAL DESIGN DIRECTION

## 9.1 Aesthetic
Premium, minimal, executive. Large whitespace, strong grid, photography doing the
emotional work while the interface stays quiet.

## 9.2 Colour

| Role | Value | Reasoning |
|---|---|---|
| Ground (light) | `#F7F5F2` off-white | Warmer than white; photography sits on it without a cold seam |
| Ground (dark) | `#1C1C1C` charcoal | True black crushes the shadow detail in interior photography |
| Surface | `#FFFFFF` | Cards only, never a page ground |
| Border / rule | `#DAD4CC` | Reads as a drawn line, not a UI border |
| Body text | `#3A3A3A` on light · `#F7F5F2` on dark | ≥ 4.5:1 both directions |
| Muted text | `#6E6A65` | 4.6:1 on off-white |
| **Accent** | `#A9764B` warm bronze | The only chroma. **Cap at 3% of any viewport** |

> Accent scarcity is the difference between premium and themed. Bronze appears on:
> the primary button, the active state, one accent word per section, hover. Nothing else.

## 9.3 Typography *(single modern sans — see assumption A5)*

| Style | Size | Line height | Weight |
|---|---|---|---|
| H1 | `clamp(2.35rem, 5.4vw, 5rem)` | 112.5% | 500 |
| H2 | `clamp(1.75rem, 3.1vw, 2.8rem)` | 122% | 500 |
| H3 | `clamp(1.375rem, 2.1vw, 1.875rem)` | 133% | 500 |
| H4 | `clamp(1.2rem, 1.7vw, 1.56rem)` | 128% | 500 |
| Body | `1rem` | 162% | 400 |
| Sub / caption | `0.875rem` | 185% | 400 |
| Button | `0.9375rem` | 162% | 500 |

**Headings are weight 500, never 600+.** Scale carries the hierarchy; weight stays
executive. No monospace anywhere — it reads as a systems dashboard, not a studio.

## 9.4 Spacing & grid
12-column, `max-width 1440px`, gutter `clamp(1.25rem, 4.4vw, 5.5rem)`.
Section padding `clamp(4.5rem, 9vw, 9rem)`. All spacing on a 4px base.

## 9.5 Components
- **Radius** 4px on cards and inputs, pill on buttons. Slight, not soft.
- **Buttons** Primary = filled bronze, white text. Secondary = 1px outline.
  Text = sentence case, 0.9375rem, weight 500. Never uppercase micro-type.
- **Icons** Thin-line, 1.5px stroke, 20–24px. Consistent set (Lucide or equivalent).
- **Shadows** Barely there. `0 2px 4px rgba(28,28,28,.04), 0 12px 28px rgba(28,28,28,.07)`
  on hovered cards only.
- **Reused blocks** Hero · ProofBar · SectionHeading · ServiceCard · IndustryCard ·
  ProjectCard · ProcessTimeline · FeatureGrid · TestimonialSlider · FAQAccordion ·
  CTABand · Breadcrumbs · PlaceholderImage.

## 9.6 Photography
Real projects only. Site progress and team-at-work shots build more trust than
polished finals — use both. No generic stock. Where a real photo does not exist yet,
use the placeholder panel (§7.3), never a substitute image.

## 9.7 Motion
Restrained. Fade-and-rise on scroll (24px, 600ms, `cubic-bezier(.16,1,.3,1)`).
Hover: 2–3px lift. Nothing parallaxes, nothing auto-plays, nothing bounces.
Full `prefers-reduced-motion` path.

---

# 10. IMPLEMENTATION GUIDELINES & BUILD ORDER

## 10.1 Standards
- Mobile-first. Breakpoints 360 / 768 / 1024 / 1440.
- Modular components — no copy-pasted sections.
- WCAG 2.1 AA: contrast, alt text, keyboard navigation, visible focus, semantic
  landmarks, one `h1`, `aria-expanded` on accordions and menus.
- All display strings in a separate content/data layer, not hardcoded in components —
  this is what makes the Urdu version a translation job rather than a rebuild.
- Structured data on every page (§6.3).
- Images optimised, lazy-loaded below the fold, explicit dimensions to prevent CLS.

## 10.2 Build order

| Phase | Deliverable | Blocking? |
|---|---|---|
| **1** | Design tokens, global styles, component library, siteConfig | — |
| **2** | Navbar, Footer, SEO wrapper, CTABand, Breadcrumbs, PlaceholderImage | — |
| **3** | Data layer: services, industries, locations, projects, faqs, testimonials | — |
| **4** | `/request-proposal/` + `/thank-you/` | **Build first among pages.** Everything routes here |
| **5** | Home, `/services/` hub, 6 service pages | — |
| **6** | `/process/`, `/about/`, `/contact/` | — |
| **7** | `/portfolio/`, `/case-studies/`, case study template | — |
| **8** | 2 live industry pages, 5 location pages | Needs §11 city facts |
| **9** | `/blog/` + 4 launch articles | — |
| **10** | Schema audit, Lighthouse pass, GA4 + Search Console, sitemap | — |

> Phase 4 first is deliberate. The conversion page is the product; every other page is
> a route to it. Building it last is how sites end up with a beautiful funnel that
> empties into a broken form.

## 10.3 Pre-launch checklist

- [ ] Every `{{TOKEN}}` resolved or its component hidden
- [ ] No invented client name, testimonial, metric or logo anywhere
- [ ] No address outside Lahore anywhere, including schema
- [ ] Every page: unique title ≤60, description ≤160, one `h1`, canonical
- [ ] FAQ schema validates on all service and location pages
- [ ] LocalBusiness schema matches GBP exactly, character for character
- [ ] Form submits, validates, uploads, and lands on `/thank-you/`
- [ ] WhatsApp prefill works on iOS and Android
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility 100, SEO 100
- [ ] Keyboard-only pass through the form and the nav
- [ ] Location pages ≥80% unique content, verified with a diff
- [ ] `sitemap.xml` excludes placeholder projects and `/thank-you/`
- [ ] GA4 conversions firing; Search Console verified

---

# 11. WHAT ONLY YOU CAN ANSWER

## 11.1 Placeholder tokens

| Token | Needed for | Evidence required |
|---|---|---|
| `{{YEARS}}` | Proof bar, About | Year of incorporation |
| `{{PROJECTS}}` | Proof bar, About | Countable completed projects |
| `{{ISO_CERTIFIED}}` | Proof bar | Certificate number + issuing body, or remove |
| `{{ONTIME_RATE}}` | Why Woodex, objection handling | Projects delivered on the contracted date ÷ total |
| `{{PROPOSAL_DAYS}}` | Response SLA | Realistic internal turnaround |
| `{{WHATSAPP}}` | Sitewide | Business WhatsApp number |
| `{{PHONE}}` `{{EMAIL}}` `{{ADDRESS}}` | NAP, schema, GBP | Canonical string, decided once |
| `{{TEAM_SIZE}}` | About | Headcount |

## 11.2 Decisions needed

1. **Minimum project size.** Is 1,000 sq ft the real qualifier, or should it be higher?
   This is your main gatekeeping lever.
2. **Budget bands.** Do the §5.2 ranges match your actual project economics?
3. **City proof.** For each of Karachi, Islamabad, Multan, Faisalabad: any delivered
   project? Without one, the page says "active delivery" and stays thin — and I would
   rather publish three strong location pages than five weak ones.
4. **Industry proof.** Any completed pharmacy/healthcare or education project? Those
   pages stay `noindex` until yes.
5. **Client permissions.** Which clients will allow name, logo, photography or a
   testimonial? Nothing goes live without written approval.
6. **Residential.** Keep as one page, or drop entirely for launch focus?
7. **Logo.** Is the wordmark serif or sans? It settles assumption A5.

---

## APPENDIX A — Homepage message hierarchy

| Layer | Copy |
|---|---|
| Headline | Commercial spaces delivered on time, on budget, on brand. |
| Sub | Interior design and fit-out for offices, retail and institutions across Lahore, Karachi, Islamabad, Multan and Faisalabad. |
| Benefit 1 | **Pre-build clarity.** 3D renders and drawings before anything is bought. |
| Benefit 2 | **Controlled cost.** A line-item BOQ, and a written change-order policy. |
| Benefit 3 | **One accountable partner.** Design, execution and handover under one contract. |
| Proof | `{{YEARS}}` years · `{{PROJECTS}}` projects · 5 cities · `{{ISO_CERTIFIED}}` |
| Objection | FAQ covering timeline, budget control, MEP coordination, city coverage |
| Close | Ready to start your project? → **Request a Proposal** |

## APPENDIX B — Homepage FAQ set

1. How long does a commercial fit-out take?
2. How do you control the budget once work starts?
3. What exactly is a BOQ, and when do I get one?
4. Do you handle MEP and coordinate other contractors?
5. Do you work outside Lahore?
6. Can you work while our office stays occupied?

*(Answers to be drafted from §4 service copy, one intent each, 40–70 words.)*

---

**End of blueprint.**
