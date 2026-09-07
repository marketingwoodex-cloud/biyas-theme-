import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import Process from "@/components/sections/Process";
import FaqBlock from "@/components/sections/FaqBlock";
import Jsonld, { breadcrumbSchema, faqSchema } from "@/components/seo/Jsonld";
import { services } from "@/lib/content/services";
import { siteUrl, cta } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Interior Design & Fit-Out Services",
  description:
    "Full-suite interior services: office interior design, residential, hospitality and retail fit-out, bespoke joinery, turnkey project management and art curation — one accountable studio.",
  alternates: { canonical: "/services" },
  keywords: [
    "interior design services",
    "office interior design",
    "commercial fit-out services",
    "residential interior design",
    "hospitality interior design",
    "retail fit-out",
    "bespoke joinery",
    "turnkey fit-out",
  ],
  openGraph: {
    title: "Interior Design & Fit-Out Services | Woodex Interior",
    description:
      "Seven disciplines under one contract — design, manufacture and site delivery from a single accountable studio.",
    url: `${siteUrl}/services`,
    images: [{ url: "/img/svc-office.jpg", width: 1200, height: 1500 }],
  },
};

/** Aggregate FAQ: the first question from each service, so this page ranks
 *  for the broad "interior design services" intent without duplicating the
 *  long-tail answers that live on each child page. */
const pageFaqs = [
  {
    q: "What interior design services does Woodex offer?",
    a: "Seven: office interior design, residential interior design, hospitality interiors, retail and showroom fit-out, bespoke joinery and millwork, turnkey fit-out with project management, and full-suite art curation. Any combination can be delivered under a single contract.",
  },
  {
    q: "Can I hire Woodex for design only?",
    a: "Yes. We take design-only commissions and issue a complete tender-ready drawing set. Most clients move to design-and-build once they see the joinery package, because it removes the coordination risk — but there is no obligation to.",
  },
  {
    q: "Do you work on both commercial and residential projects?",
    a: "Both, roughly 60/40 commercial to residential. The workshop and the detailing standard are identical; what changes is the wear specification and the programme constraints.",
  },
  {
    q: "How do I know which service I need?",
    a: "Most clients do not, and that is fine. Send a floor plan and describe the problem — we will tell you which parts of the scope you actually need and which you can skip, before quoting anything.",
  },
  {
    q: "What is the minimum project size you take on?",
    a: "There is no square-footage minimum. The qualifier is bespoke joinery: if the project includes made elements, we are a good fit. Purely decorative single-room schemes are usually better served elsewhere and we will say so.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Jsonld data={faqSchema(pageFaqs)} />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Interior design and fit-out services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.metaDescription,
              url: `${siteUrl}/services/${s.slug}`,
              provider: { "@id": `${siteUrl}/#organization` },
              areaServed: { "@type": "Country", name: "Pakistan" },
            },
          })),
        }}
      />

      <PageHero
        eyebrow="Services"
        lines={[<>Everything a room</>, <>needs, from <span className="t-aside">one</span></>, <>studio.</>]}
        sub="Design, manufacture and site delivery are three different businesses in most projects — and three different places for a specification to get lost. We run all three, so the detail you approve is the detail that gets installed."
        image="/img/svc-office.jpg"
        imageAlt="Contemporary open-plan office interior with oak acoustic slat walls and a long solid-timber communal table"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
        meta={[
          { k: "Disciplines", v: "Seven" },
          { k: "Contract", v: "Single point" },
          { k: "Joinery", v: "Made in-house" },
          { k: "Warranty", v: "12 months" },
        ]}
      />

      {/* ---- Positioning statement ---- */}
      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow tone="clay">The argument</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h2 mt-6"
                lines={[<>Split contracts</>, <>fail in the <span className="t-aside !text-brass">seams</span>.</>]}
              />
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <div className="fade-up max-w-[58ch] space-y-5">
                <p className="t-lede text-ink/80">
                  The designer says the contractor built it wrong. The contractor says the
                  drawing was unbuildable. The joiner says nobody mentioned the sprinkler drop.
                  Every one of those conversations costs a week and a variation order.
                </p>
                <p className="t-body text-clay">
                  Woodex exists to delete that conversation. We hold the drawing, the machine
                  and the site under one agreement — so coordination failures are our cost to
                  absorb, not yours to arbitrate. It is a less profitable way to run a studio
                  and a considerably better way to finish a room.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Btn href="/contact" variant="light">{cta.primary}</Btn>
                <Btn href="/projects" variant="light">{cta.work}</Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- The seven services, full detail ---- */}
      <section className="bg-ink">
        <div className="shell-wide act">
          <Reveal className="mb-16 border-b border-[var(--hairline-dark)] pb-10">
            <Eyebrow>Capability index</Eyebrow>
            <SplitLines as="h2" className="t-h1 mt-6 text-bone" lines={[<>What we do</>]} />
          </Reveal>

          <div className="space-y-24 lg:space-y-32">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <article className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
                  {/* Alternate the image side so the page has a rhythm */}
                  <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group block"
                      data-cursor="view"
                      data-cursor-label="Open"
                      aria-label={`${s.title} — read more`}
                    >
                      <div className="tone wipe aspect-[4/5] w-full">
                        <Image
                          src={s.image}
                          alt={`${s.title} by Woodex Interior — ${s.headline}`}
                          fill
                          sizes="(max-width: 900px) 100vw, 40vw"
                          quality={78}
                          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                    <div className="flex items-center gap-4">
                      <span className="t-meta text-brass">{s.index}</span>
                      <span className="h-px w-8 bg-[var(--hairline-dark)]" aria-hidden />
                      <span className="t-label text-clay">{s.kicker}</span>
                    </div>

                    <h3 className="t-h2 mt-5 text-bone">
                      <Link href={`/services/${s.slug}`} className="transition-colors duration-500 hover:text-brass" data-cursor="link">
                        {s.title}
                      </Link>
                    </h3>

                    <p className="font-[family-name:var(--font-display)] mt-4 text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.25] text-brass-light">
                      {s.headline}
                    </p>

                    <p className="t-body mt-5 max-w-[56ch] text-clay">{s.lede}</p>

                    <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {s.deliverables.slice(0, 6).map((d) => (
                        <li key={d.t} className="flex items-start gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" aria-hidden />
                          <span className="t-meta text-bone/80">{d.t}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-9">
                      <Btn href={`/services/${s.slug}`} variant="ghost">
                        {s.title}
                      </Btn>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <FaqBlock
        items={pageFaqs}
        title="Service questions"
        lines={[<span key="a">What clients ask</span>, <span key="b">before they <span className="t-aside">commit</span>.</span>]}
      />
    </>
  );
}
