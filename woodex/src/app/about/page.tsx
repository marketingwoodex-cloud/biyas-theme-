import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Parallax } from "@/components/ui/Parallax";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import Process from "@/components/sections/Process";
import Voices from "@/components/sections/Voices";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { Stat, ProofRow } from "@/components/ui/Stat";
import { brand, cities, siteUrl, cta, contact, qualifier } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "Woodex Interior is a Lahore-based commercial interior design and fit-out studio delivering across Pakistan. Disciplined process, line-item BOQ, documented handover.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About Woodex Interior | Commercial Fit-Out Studio",
    description: brand.proposition,
    url: `${siteUrl}/about`,
    images: [{ url: `${siteUrl}/img/svc-office.jpg`, width: 1200, height: 1500 }],
  },
};

/**
 * The four principles are the four messaging pillars, stated as operating
 * commitments rather than adjectives. Each one is checkable — a client can
 * hold us to it — which is the difference between a value and a slogan.
 */
const PRINCIPLES = [
  {
    n: "01",
    t: "Design that performs",
    d: "A commercial space has a job: seat a headcount, move a customer, host a client. We plan against that job first. If a decision looks good and works badly, it does not go in.",
  },
  {
    n: "02",
    t: "Controlled execution",
    d: "A line-item BOQ before the contract, provisional sums declared as provisional, and a written variation policy. No work proceeds until the change is priced and you have signed it.",
  },
  {
    n: "03",
    t: "Pre-build clarity",
    d: "3D stills, working drawings, a finish schedule and MEP clash detection — all before anything is ordered. The most expensive revision is the one made on site.",
  },
  {
    n: "04",
    t: "Professional handover",
    d: "Joint snagging, as-builts, O&M manual, warranties and commissioning records. You should receive a documented asset, not a set of keys and a phone number.",
  },
];

export default function AboutPage() {
  return (
    <>
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

      <PageHero
        eyebrow="The studio"
        lines={[
          <span key="a">We are judged on</span>,
          <span key="b">
            the <span className="t-aside">handover</span>,
          </span>,
          <span key="c">not the render.</span>,
        ]}
        sub={brand.proposition}
        image="/img/svc-office.jpg"
        imageAlt="Corporate office interior delivered by Woodex Interior, Lahore"
        crumbs={[{ name: "About", path: "/about" }]}
        /* Structural facts only. No invented team size, founding year or
           workshop area — every figure here is either verifiable or a token. */
        meta={[
          { k: "Focus", v: "Commercial fit-out" },
          { k: "Studio", v: contact.city },
          { k: "Coverage", v: `${cities.length} cities` },
          { k: "Pricing", v: "Line-item BOQ" },
        ]}
      />

      {/* Why we work this way — an industry truth, not a fabricated anecdote */}
      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Eyebrow tone="clay">Why we work this way</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6"
                lines={[
                  <span key="a">Split contracts</span>,
                  <span key="b">
                    fail in the <span className="t-aside">seams</span>.
                  </span>,
                ]}
              />
              <div className="mt-9 max-w-[54ch] space-y-5">
                <p className="t-lede text-ink/80">
                  Most commercial fit-outs do not fail dramatically. They fail in small,
                  defensible increments — a long-lead item ordered late, a services clash
                  found after the ceiling grid is up, a finish substituted because the
                  original was unavailable and nobody was asked.
                </p>
                <p className="t-body text-clay">
                  Individually each costs a few days and nobody is at fault. Together they
                  are how a sixteen-week programme becomes twenty-two, and how a specification
                  a client approved becomes a space they did not expect. When the designer,
                  the contractor and the joiner answer to three different parties, every
                  interface becomes a negotiation and every delay becomes someone else&apos;s
                  responsibility.
                </p>
                <p className="t-body text-clay">
                  We run design, documentation and site delivery under one contract for
                  exactly that reason. Not because it is more efficient — because it removes
                  the place where accountability usually leaks out.
                </p>
                <p className="t-h4 pt-2 text-ink">{brand.wedge}</p>
              </div>

              <ProofRow className="mt-10 border-t border-sand pt-8">
                <Stat token="YEARS" label="Years delivering fit-out" suffix="+" />
                <Stat token="PROJECTS" label="Projects completed" suffix="+" />
                <Stat value={cities.length} label="Cities served" />
                <Stat token="ISO_CERTIFIED" label="Quality management" />
              </ProofRow>
            </Reveal>

            <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
              <Parallax
                src="/img/proj-01.jpg"
                alt="Boardroom interior in a corporate office fit-out, Lahore"
                className="wipe aspect-[4/5] w-full"
                sizes="(max-width:900px) 100vw, 40vw"
                distance={10}
              />
              {/* Clearly marked slot. The founder's real story belongs here and
                  cannot be written by anyone but the founder. */}
              <div className="card mt-6">
                <p className="t-label text-bronze">Founder&apos;s note</p>
                <p className="t-body mt-4 text-clay">
                  [Founder statement pending. One paragraph, first person: the project that
                  made you change how the business runs. Name the failure, not the
                  achievement — it is more persuasive and it is what a client recognises.]
                </p>
                <p className="t-meta mt-4 text-clay">
                  [Name] · [Role]
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ink text-bone">
        <div className="shell-wide act">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>How we operate</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6"
                lines={[
                  <span key="a">Four commitments</span>,
                  <span key="b">you can hold us to.</span>,
                ]}
              />
            </div>
            <div
              className="fade-up lg:col-span-4 lg:col-start-9"
              style={{ transitionDelay: "220ms" }}
            >
              <p className="t-body text-bone/55">
                Not values — operating commitments. Each one is checkable, and each one has
                a document attached to it.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((v, i) => (
              <Reveal key={v.n} delay={i * 70}>
                <div className="card-dark fade-up h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="t-h4 text-bone">{v.t}</h3>
                    <span className="t-num text-sm text-bronze-light">{v.n}</span>
                  </div>
                  <p className="t-body mt-4 text-bone/55">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-oat text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow tone="clay">Who we work with</Eyebrow>
              <h2 className="t-h2 mt-6 max-w-[18ch]">Commercial first, and openly so.</h2>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
              <ul className="list-ul t-body text-clay">
                <li>
                  <strong className="text-ink">Business owners and CEOs</strong> — planning a
                  move, an expansion or a rebrand, who want one accountable partner rather
                  than a supply chain to manage.
                </li>
                <li>
                  <strong className="text-ink">Office and facility managers</strong> — running
                  a live site, where phasing, disruption and reporting matter as much as the
                  design.
                </li>
                <li>
                  <strong className="text-ink">Architects and specifiers</strong> — who need a
                  fit-out partner that reads drawings properly and comments on buildability
                  before quoting.
                </li>
              </ul>
              <p className="t-meta mt-8 rounded-[var(--r-md)] border border-sand bg-mist px-5 py-4 text-clay">
                {qualifier} Residential enquiries are welcome, but they are handled separately
                and lead times differ.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Process />
      <Voices />

      <section className="bg-bone text-ink">
        <div className="shell act text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-[22ch]">
              Tell us what you have and where you are in the process.
            </h2>
            <p className="t-body mx-auto mt-6 max-w-[50ch] text-clay">
              You will get scope, an indicative BOQ structure, a programme and a budget band
              — in writing.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Btn href="/request-proposal" variant="light">
                {cta.primary}
              </Btn>
              <Btn href="/portfolio" variant="light">
                {cta.work}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
