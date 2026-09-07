import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Parallax } from "@/components/ui/Parallax";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import FaqBlock from "@/components/sections/FaqBlock";
import Jsonld, { faqSchema, breadcrumbSchema } from "@/components/seo/Jsonld";
import { Stat, ProofRow } from "@/components/ui/Stat";
import { brand, cities, siteUrl, cta, contact, qualifier } from "@/lib/siteConfig";

/**
 * ABOUT — built to spec V1.0.
 *
 * Two constraints drive every decision here:
 *
 * 1. NO MANUFACTURING CLAIMS. Woodex does not own a workshop. Credibility is
 *    therefore built from standards, documentation and accountability rather
 *    than from "we cut it ourselves". Every proof point is a process fact.
 *
 * 2. BACKGROUND DISTRIBUTION. Cream → White → Dark → White → Cream → White →
 *    Dark → White. Four of eight sections are white (50%), and no two adjacent
 *    sections share a ground. The page reads as eight distinct rooms rather
 *    than one long scroll of repeated blocks.
 *
 * Heading system is two-layer: an editorial display line for voice, and a
 * separate keyword-bearing H1 for search. They are not the same string.
 */

export const metadata: Metadata = {
  title: { absolute: "About Woodex Interior | Commercial Fit-Out Studio" },
  description:
    "Woodex Interior is a commercial-first interior design and fit-out studio based in Lahore, delivering across Pakistan with BOQ-led scope control and accountable handover.",
  keywords: [
    "commercial interior design studio lahore",
    "fit-out company lahore",
    "turnkey interior pakistan",
    "commercial interior designer lahore",
    "interior fit out studio",
  ],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About Woodex Interior | Commercial Fit-Out Studio",
    description: brand.proposition,
    url: `${siteUrl}/about`,
    images: [{ url: `${siteUrl}/img/svc-office.jpg`, width: 1200, height: 1500 }],
  },
};

const STANDARDS = [
  {
    n: "01",
    t: "Documentation before spend",
    d: "No execution begins without priced scope and a written approval against it. If it is not on the BOQ, it is not on site.",
  },
  {
    n: "02",
    t: "Site coordination",
    d: "Specialist trades are scheduled and sequenced against a dated programme, with services clash-detected before ceilings close.",
  },
  {
    n: "03",
    t: "Snagging discipline",
    d: "Snags are logged, tracked, rectified and signed off — so handover is a walkthrough, not a negotiation.",
  },
];

const ARTIFACTS = [
  { t: "Weekly report", meta: "Every Friday", d: "Progress against programme, with photographs." },
  { t: "Programme", meta: "Revision-controlled", d: "Dated milestones, updated and reissued, never verbal." },
  { t: "Approval log", meta: "Live", d: "Every change priced, signed and time-stamped." },
];

const MATRIX = [
  { stage: "Brief", out: "Measured survey notes, objectives summary, constraints register" },
  { stage: "Concept", out: "Space plan, adjacency logic, 3D stills as applicable" },
  { stage: "Developed design", out: "Elevations, key details, finish direction, lighting intent" },
  { stage: "Pre-build", out: "BOQ structure, dated programme, approvals pack" },
  { stage: "Build", out: "Weekly written reports, coordination notes, variation register" },
  { stage: "Handover", out: "Snag list, rectification log, handover pack as applicable" },
];

const ROLES = [
  { t: "Design & 3D documentation", out: "Space plans, elevations, stills, finish schedule" },
  { t: "BOQ structuring & approvals", out: "Line-item BOQ, variation register, approval log" },
  { t: "Site coordination", out: "Programme, trade sequencing, weekly reporting" },
  { t: "Quality checks & snagging", out: "Snag list, rectification log, sign-off" },
];

const PRINCIPLES = [
  { t: "Nothing moves without approval.", d: "Scope changes are priced and documented before execution. No verbal instruction ever reaches site." },
  { t: "Draw first, build second.", d: "3D and documentation exist to remove rework and regret. The most expensive revision is the one made on site." },
  { t: "Programme is a tool, not a guess.", d: "We plan it, report against it weekly, and revise it in the open when reality changes." },
  { t: "Handover is not the end.", d: "Snagging, documentation and aftercare are part of delivery, not an add-on you have to chase." },
];

const FAQS = [
  {
    q: "Do you handle design-only projects?",
    a: "Yes. We issue a tender-ready package — drawings, finish schedule and BOQ structure — that any competent contractor can price and build. Most clients continue with us because it removes the coordination risk, but the documentation is yours either way.",
  },
  {
    q: "How do you manage scope changes?",
    a: "Every change is priced and issued as a written variation, and nothing proceeds until you have signed it. A live variation register is shared with the weekly report, so the running total is visible throughout rather than arriving as a surprise at the end.",
  },
  {
    q: "What information do you need for a proposal?",
    a: "A floor plan with dimensions, an approximate area, your target handover date and a short brief on how the space will be used. Ceiling heights and any landlord fit-out criteria help. Without a plan we can still talk, but the numbers stay broad.",
  },
  {
    q: "Can you deliver projects in Karachi, Islamabad, Multan or Faisalabad?",
    a: "Yes. We are based in Lahore and deliver commercial projects across Pakistan. Feasibility for a given city depends on scope, scheduling and site readiness, and we confirm it during the proposal rather than after you commit.",
  },
  {
    q: "What does handover include?",
    a: "A joint snagging walkthrough, a tracked rectification log, and a handover pack containing as-built information, warranties and commissioning records as applicable to the scope. You receive a documented asset, not a set of keys.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Jsonld data={faqSchema(FAQS)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${siteUrl}/about`,
          mainEntity: { "@id": `${siteUrl}/#organization` },
        }}
      />

      {/* ═══ 01 · EDITORIAL HERO — CREAM ═══════════════════════════════════ */}
      <PageHero
        eyebrow="The studio"
        lines={[<span key="a">Almost right</span>, <span key="b">is <span className="t-aside">wrong</span>.</span>]}
        sub={brand.proposition}
        image="/img/svc-office.jpg"
        imageAlt="Drawings and finish samples under review before a commercial fit-out, Lahore"
        crumbs={[{ name: "About", path: "/about" }]}
        meta={[
          { k: "Focus", v: "Commercial fit-out" },
          { k: "Studio", v: contact.city },
          { k: "Coverage", v: `${cities.length} cities` },
          { k: "Pricing", v: "Line-item BOQ" },
        ]}
      />

      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              {/* SEO H1 sits under the editorial display line — two layers, one
                  for voice, one for search. Styled as a label so it does not
                  compete visually with the display headline in the hero. */}
              <h1 className="t-label text-clay">
                About Woodex Interior — Commercial Interior Design Studio in Lahore
              </h1>

              <div className="mt-8 max-w-[56ch] space-y-5">
                <p className="t-lede text-ink/80">
                  The biggest problems in fit-out rarely come from one big mistake. They come
                  from small compromises — each of them <em>almost right</em> — accumulating
                  until the space feels off, the budget drifts, and handover becomes stressful.
                </p>
                <p className="t-body text-clay">
                  Our work exists to remove those compromises through documentation,
                  coordination and accountability. We draw the space in 3D before anything is
                  purchased, structure costs through a BOQ framework, and execute with
                  documented approvals — so decisions stay clear and budgets stay honest.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Btn href="/request-proposal" variant="light">{cta.primary}</Btn>
                <Btn href="/process" variant="light">Read our process</Btn>
              </div>

              <ProofRow className="mt-12 border-t border-sand pt-8">
                <Stat token="YEARS" label="Years delivering fit-out" suffix="+" />
                <Stat token="PROJECTS" label="Projects completed" suffix="+" />
                <Stat value={cities.length} label="Cities served" />
                <Stat token="ISO_CERTIFIED" label="Quality management" />
              </ProofRow>
            </Reveal>

            <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
              <div className="relative">
                <Parallax
                  src="/img/proj-01.jpg"
                  alt="Boardroom in a completed corporate office fit-out, Lahore"
                  className="wipe aspect-[4/5] w-full"
                  sizes="(max-width:900px) 100vw, 40vw"
                  distance={10}
                />
                <div
                  className="fade-up absolute -bottom-8 -left-5 w-[64%] max-w-[18rem] rounded-[var(--r-md)] border border-sand bg-mist p-5 shadow-[var(--shadow-md)]"
                  style={{ transitionDelay: "420ms" }}
                >
                  <p className="t-label text-bronze">Accountability</p>
                  <p className="t-body mt-2.5 text-ink">
                    One documented programme, one approval trail.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 02 · THE STANDARD — WHITE ═════════════════════════════════════ */}
      <section className="bg-mist text-ink">
        <div className="shell act">
          <Reveal className="max-w-[62ch]">
            <Eyebrow tone="clay">The standard</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6"
              lines={[<span key="a">A standard you</span>, <span key="b">can <span className="t-aside">measure</span>.</span>]}
            />
            <p className="t-lede mt-7 text-clay">
              In commercial projects precision is not aesthetic, it is operational. Doors
              align, junctions close cleanly, lighting reads correctly, and maintenance stays
              simple.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 sm:grid-cols-3">
            {STANDARDS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="fade-up border-t border-sand pt-6">
                  <span className="t-num text-sm text-bronze">{s.n}</span>
                  <h3 className="t-h4 mt-3 text-ink">{s.t}</h3>
                  <p className="t-body mt-3 text-clay">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 03 · HOW IT RUNS — DARK ═══════════════════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <Eyebrow>How it runs</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6"
                lines={[<span key="a">Visible</span>, <span key="b">throughout.</span>]}
              />
              <p className="t-lede mt-7 max-w-[42ch] text-bone/60">
                A dated programme at contract, a written report with photographs every
                Friday, and changes priced before they move.
              </p>
              <p className="t-body mt-5 max-w-[42ch] text-bone/45">
                You always know what is complete, what is next, and what is waiting on an
                approval — including when the thing it is waiting on is you.
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-3">
                {ARTIFACTS.map((a, i) => (
                  <Reveal key={a.t} delay={i * 90}>
                    <div className="card-dark fade-up group flex items-center gap-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[var(--r-sm)] border border-[var(--hairline-dark)] text-bone/50">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M6 3h8l4 4v14H6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                          <path d="M14 3v4h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <h3 className="t-h5 text-bone">{a.t}</h3>
                          <span className="t-meta text-bronze-light">{a.meta}</span>
                        </div>
                        <p className="t-meta mt-0.5 text-bone/45">{a.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="t-meta mt-5 text-bone/35">
                Sample artefacts. Formats are shared in your proposal pack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 04 · DELIVERABLES MATRIX — WHITE ══════════════════════════════ */}
      <section className="bg-mist text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-6">
              <Eyebrow tone="clay">Deliverables</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6"
                lines={[<span key="a">What you receive,</span>, <span key="b">stage by stage.</span>]}
              />
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
              <p className="t-body text-clay">
                Commercial projects succeed when deliverables are clear early. We work in
                stages so you can approve with confidence before the build begins.
              </p>
              <Link href="/process" className="ulink t-label mt-5 inline-block text-ink" data-cursor="link">
                See the full process
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 overflow-hidden rounded-[var(--r-md)] border border-sand">
            {MATRIX.map((r, i) => (
              <Reveal key={r.stage} delay={Math.min(i, 5) * 55}>
                <div
                  className={`grid gap-x-8 gap-y-1 px-6 py-5 sm:grid-cols-[minmax(9rem,1fr)_3fr] sm:px-8 ${
                    i % 2 === 1 ? "bg-oat/50" : ""
                  } ${i > 0 ? "border-t border-sand" : ""}`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="t-num text-sm text-bronze">{String(i + 1).padStart(2, "0")}</span>
                    <span className="t-h5 text-ink">{r.stage}</span>
                  </div>
                  <p className="t-body text-clay">{r.out}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 05 · ACCOUNTABILITY — CREAM ═══════════════════════════════════ */}
      <section className="bg-bone text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow tone="clay">Accountability</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6"
                lines={[<span key="a">One accountable lead.</span>, <span key="b">Coordinated specialists.</span>]}
              />
              <p className="t-body mt-7 max-w-[44ch] text-clay">
                Fit-out needs multiple specialist trades. What matters is not pretending they
                do not exist — it is coordinating them properly, documenting scope, and
                owning delivery when something goes wrong.
              </p>
              <p className="t-meta mt-6 text-clay">
                Names and project roles are shared in your proposal pack.
              </p>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {ROLES.map((r, i) => (
                  <Reveal key={r.t} delay={i * 70}>
                    <div className="card card-hover fade-up group h-full">
                      <h3 className="t-h5 text-ink">{r.t}</h3>
                      <p className="t-label mt-4 text-bronze">Typical outputs</p>
                      <p className="t-meta mt-1.5 text-clay">{r.out}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 06 · WHERE WE DELIVER — WHITE ═════════════════════════════════ */}
      <section className="bg-mist text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-6">
              <Eyebrow tone="clay">Coverage</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6"
                lines={[<span key="a">Based in Lahore.</span>, <span key="b">Delivering across Pakistan.</span>]}
              />
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
              <p className="t-body text-clay">
                Delivery depends on scope, scheduling and site readiness. We confirm
                feasibility during the proposal — before you commit, not after.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {cities.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  href={`/commercial-interior-design-${c.slug}`}
                  data-cursor="link"
                  className="card card-hover fade-up group flex h-full flex-col justify-between gap-6"
                >
                  <div>
                    <p className="t-h4 text-ink">{c.name}</p>
                    <p className="t-meta mt-1.5 text-clay">{c.base ? "Studio" : "Delivery"}</p>
                  </div>
                  <span className="ulink t-label inline-block text-ink">View</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 07 · PRINCIPLES — DARK ════════════════════════════════════════ */}
      <section className="bg-ink text-bone">
        <div className="shell act">
          <Reveal className="max-w-[46ch]">
            <Eyebrow>Principles</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6"
              lines={[<span key="a">Principles we</span>, <span key="b">won&rsquo;t <span className="t-aside">trade</span>.</span>]}
            />
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="fade-up border-t border-[var(--hairline-dark)] pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="t-num text-sm text-bronze-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="t-h3 text-bone">{p.t}</h3>
                  </div>
                  <p className="t-body mt-3 max-w-[46ch] pl-10 text-bone/55">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 08 · FAQ + CTA — WHITE ════════════════════════════════════════ */}
      <section className="bg-mist text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Eyebrow tone="clay">Next step</Eyebrow>
                <SplitLines
                  as="h2"
                  className="t-h2 mt-6"
                  lines={[
                    <span key="a">If your project needs</span>,
                    <span key="b">a clean handover,</span>,
                    <span key="c">start with a proposal.</span>,
                  ]}
                />
                <p className="t-body mt-7 max-w-[42ch] text-clay">
                  Send a floor plan and a short brief. You will receive scope, an indicative
                  BOQ structure, a programme and a budget band.
                </p>
                <div className="mt-8">
                  <Btn href="/request-proposal" variant="light">{cta.primary}</Btn>
                </div>
                <p className="t-meta mt-6 text-clay">{qualifier}</p>
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <FaqBlock items={FAQS} bare />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
