import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import FaqBlock from "@/components/sections/FaqBlock";
import Jsonld, { faqSchema, breadcrumbSchema } from "@/components/seo/Jsonld";
import { documents } from "@/lib/content/site";
import { siteUrl, cta, sla } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Our Interior Fit-Out Process | Woodex Interior" },
  description:
    "A five-step delivery system: brief, 3D design, BOQ and specifications, fit-out, handover. See exactly what you receive at each stage.",
  alternates: { canonical: `${siteUrl}/process` },
  keywords: [
    "interior fit out process",
    "how interior fit out works",
    "boq process interior",
    "design and build process",
    "fit out project management",
  ],
};

/**
 * PROCESS — the de-risking page.
 *
 * This is where the four objections from the brief get answered directly:
 * will it be on time, will the budget hold, can they coordinate MEP, do they
 * know my sector. Each step therefore states what YOU receive and what WE need
 * from you — a process page that only describes internal activity reassures
 * nobody.
 */
const STEPS = [
  {
    n: "01",
    t: "Brief & survey",
    d: "A site visit, a laser survey and a working session about how the space actually gets used — headcount, flow, peak hours, growth plan.",
    you: "Measured drawings of the existing space and a written brief we both agree on.",
    need: "Access to site, and whoever actually knows how the business runs.",
    when: "Week 1",
  },
  {
    n: "02",
    t: "3D design",
    d: "Layout options tested against your headcount, then the chosen scheme modelled photoreally from the survey — not from an idealised box.",
    you: "Three tested layouts, then photoreal stills of key spaces, day and evening states.",
    need: "Sign-off on one layout and one material direction.",
    when: "Weeks 2–4",
  },
  {
    n: "03",
    t: "BOQ & specifications",
    d: "The approved design is documented into working drawings, a finish schedule and a line-item bill of quantities. MEP is clash-detected before anything is ordered.",
    you: "Plans, elevations, RCPs, joinery details, finish schedule and a line-item BOQ with rates.",
    need: "Approval of the BOQ. This is the number the contract is built on.",
    when: "Weeks 5–7",
  },
  {
    n: "04",
    t: "Fit-out",
    d: "A named project manager, a dated programme, and a written variation policy. Long-lead items were ordered at design freeze, not now.",
    you: "A weekly written progress report with photographs and an open variation register.",
    need: "Written approval on any variation before it is executed. Nothing proceeds without it.",
    when: "Weeks 8–16",
  },
  {
    n: "05",
    t: "Snag & handover",
    d: "Joint snagging, rectification, commissioning records and a documented handover — not a set of keys and a phone number.",
    you: "As-builts, O&M manual, warranties, commissioning records and a signed snag list.",
    need: "A walkthrough with whoever will operate the space.",
    when: "Final week",
  },
] as const;

const FAQS = [
  {
    q: "How do you stop the programme slipping?",
    a: "Three things. Long-lead items are identified and ordered at design freeze rather than when they are needed. MEP is clash-detected before ceilings close. And you get a written progress report against the dated programme every week, so slippage is visible in week two rather than week ten.",
  },
  {
    q: "What exactly is a BOQ, and when do I get one?",
    a: "A bill of quantities lists every material, its quantity and its rate, line by line. You receive it at the end of stage three, before the contract is signed. It is what makes a price checkable rather than a lump sum you have to trust.",
  },
  {
    q: "How are variations handled?",
    a: "In writing, priced, and only executed after you sign. We maintain an open variation register shared with the weekly report, so the running total is never a surprise at the end.",
  },
  {
    q: "Who coordinates the MEP contractors?",
    a: "We do, under a single contract. Clash detection happens at stage three, before ceilings close. You never manage the interface between trades.",
  },
  {
    q: "Can we stop after the design stage?",
    a: "Yes. Stages one to three produce a tender-ready package that any competent contractor can price and build. Most clients continue with us because it removes the coordination risk, but the drawings are yours either way.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Jsonld data={faqSchema(FAQS)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "The Woodex Interior fit-out process",
          description:
            "A five-step commercial interior delivery system from brief to documented handover.",
          step: STEPS.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.t,
            text: s.d,
          })),
        }}
      />

      <PageHero
        eyebrow="How we work"
        lines={[<span key="a">Five steps.</span>, <span key="b">Nothing improvised.</span>]}
        sub="Brief, 3D design, BOQ, fit-out, handover. At every stage you know what you receive and what we need from you."
        image="/img/svc-turnkey.jpg"
        imageAlt="Commercial interior fit-out in progress"
        crumbs={[{ name: "Process", path: "/process" }]}
      />

      {/* Steps */}
      <section className="bg-bone text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <Eyebrow tone="clay">The system</Eyebrow>
                  <SplitLines
                    as="h2"
                    className="t-h2 mt-6"
                    lines={[<span key="a">A process you</span>, <span key="b">can audit.</span>]}
                  />
                  <p className="t-body mt-7 max-w-[38ch] text-clay">
                    Most fit-outs fail quietly — a late order, a services clash found after
                    the ceiling is up, a substitution nobody approved. Each costs days.
                    Together they turn sixteen weeks into twenty-two. This is how we stop it.
                  </p>
                  <div className="mt-8">
                    <Btn href="/request-proposal" variant="light">
                      {cta.primary}
                    </Btn>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mt-14 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <div className="space-y-4">
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={i * 60}>
                    <div className="card fade-up">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <div className="flex items-baseline gap-4">
                          <span className="t-num text-bronze">{s.n}</span>
                          <h3 className="t-h4 text-ink">{s.t}</h3>
                        </div>
                        <span className="t-meta text-clay">{s.when}</span>
                      </div>

                      <p className="t-body mt-4 text-clay">{s.d}</p>

                      <dl className="mt-6 grid gap-x-8 gap-y-4 border-t border-sand pt-5 sm:grid-cols-2">
                        <div>
                          <dt className="t-label text-bronze">What you receive</dt>
                          <dd className="t-meta mt-1.5 text-clay">{s.you}</dd>
                        </div>
                        <div>
                          <dt className="t-label text-clay">What we need</dt>
                          <dd className="t-meta mt-1.5 text-clay">{s.need}</dd>
                        </div>
                      </dl>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The documentation set */}
      <section className="bg-ink text-bone">
        <div className="shell act">
          <Reveal>
            <Eyebrow>Deliverables</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h2 mt-6 max-w-[22ch]"
              lines={[<span key="a">Six documents</span>, <span key="b">leave our studio.</span>]}
            />
            <p className="t-body mt-6 max-w-[48ch] text-bone/55">
              They are what turns an approved image into something a site team can build —
              and what you keep afterwards for insurance, maintenance and future works.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((d, i) => (
              <Reveal key={d.t} delay={i * 60}>
                <div className="card-dark fade-up h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="t-h5 text-bone">{d.t}</h3>
                    <span className="t-num text-sm text-bronze-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="t-body mt-3 text-bone/55">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Response commitments */}
      <section className="bg-oat text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow tone="clay">Before any of it starts</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[16ch]">What happens when you enquire.</h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
              <ol className="list-ol">
                {sla.map((s) => (
                  <li key={s.step}>
                    <span className="t-h5 block text-ink">{s.step}</span>
                    <span className="t-body text-clay">{s.when}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqBlock
        items={FAQS}
        title="Process questions"
        lines={[<span key="a">The four things</span>, <span key="b">everyone asks.</span>]}
        tone="light"
      />

      <section className="bg-soot text-bone">
        <div className="shell act text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-[22ch]">Ready to start at step one?</h2>
            <div className="mt-9 flex justify-center">
              <Btn href="/request-proposal" variant="ghost">
                {cta.primary}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
