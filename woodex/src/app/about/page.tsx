import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Parallax } from "@/components/ui/Parallax";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import { Counter } from "@/components/ui/Counter";
import Process from "@/components/sections/Process";
import Voices from "@/components/sections/Voices";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { brand, stats, siteUrl, cta } from "@/lib/brand";
import { materials } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "Woodex Interior is a Lahore-based interior architecture and turnkey fit-out studio with its own joinery workshop. Eighteen years, 340+ spaces, one accountable team.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Woodex Interior",
    description: brand.positioning,
    url: `${siteUrl}/about`,
    images: [{ url: "/img/svc-joinery.jpg", width: 1200, height: 1500 }],
  },
};

const values = [
  {
    n: "01",
    t: "Own the whole chain",
    d: "Design, manufacture and site under one roof. Not because it is efficient — because it removes the place where quality usually leaks out.",
  },
  {
    n: "02",
    t: "Specify less, detail more",
    d: "Six materials, endlessly detailed, beats sixty materials loosely coordinated. Restraint is the cheapest luxury there is.",
  },
  {
    n: "03",
    t: "Measure what nobody photographs",
    d: "Reveals, tolerances, reverberation, lux. The things a client cannot name are the things they feel first.",
  },
  {
    n: "04",
    t: "Say the difficult thing early",
    d: "If the budget cannot buy the drawing, we say so at week one, not at week fourteen with a variation order.",
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
        lines={[<>We bought a</>, <>workshop so the</>, <><span className="t-aside">drawing</span> would win.</>]}
        sub={brand.positioning}
        image="/img/svc-joinery.jpg"
        imageAlt="Woodex joinery workshop: stacked walnut panels, hand tools and sawdust in window light"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        meta={[
          { k: "Founded", v: "2007, Lahore" },
          { k: "Team", v: "42 across studio & shop" },
          { k: "Workshop", v: "18,000 sq ft" },
          { k: "Delivered", v: "340+ spaces" },
        ]}
      />

      {/* Founder story */}
      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="grid gap-x-12 gap-y-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Eyebrow tone="clay">Origin</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6"
                lines={[<>Almost right</>, <>is <span className="t-aside !text-amber">wrong</span>.</>]}
              />
              <div className="mt-9 max-w-[54ch] space-y-5">
                <p className="t-lede text-ink/80">
                  In 2007 our founder stood in a finished reception looking at a shadow gap
                  that should have been six millimetres. It was fourteen. The veneer above it
                  ran the wrong way. The client had noticed before he had.
                </p>
                <p className="t-body text-clay">
                  Nobody had been careless. The drawing was good, the joiner was skilled, the
                  contractor was competent. But three companies had each made one small,
                  defensible compromise, and the room had absorbed all three.
                </p>
                <p className="t-body text-clay">
                  He spent the next two years buying machines. Today the studio and the
                  workshop share a car park, and the person who draws a detail can walk
                  forty metres to watch it being cut. That is the entire strategy. It is not
                  clever, but it is the only version of this business we know how to run.
                </p>
                <p className="font-medium text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.02em] text-ink">
                  {brand.promise}
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5 lg:col-start-8">
              <Parallax
                src="/img/detail-joinery.jpg"
                alt="Macro detail: quarter-sawn walnut meeting a brushed amber inlay and honed travertine with a precise shadow gap"
                className="wipe aspect-[4/5] w-full"
                sizes="(max-width:900px) 100vw, 40vw"
                distance={10}
              />
              <div className="mt-6 grid grid-cols-2 gap-6 border-t border-sand pt-6">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label}>
                    <p className="num">
                      <Counter to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="t-meta mt-2 text-clay">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink">
        <div className="shell-wide act">
          <Reveal className="mb-14">
            <Eyebrow>How we work</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6 max-w-[16ch] text-bone"
              lines={[<>Four rules we</>, <>refuse to <span className="t-aside">bend</span>.</>]}
            />
          </Reveal>

          <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 90}>
                <div className="fade-up border-t border-[var(--hairline-dark)] py-9">
                  <span className="t-meta text-amber">{v.n}</span>
                  <h3 className="t-h3 mt-4 text-bone">{v.t}</h3>
                  <p className="t-body mt-3 max-w-[42ch] text-clay">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-oat text-ink">
        <div className="shell-wide act">
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow tone="clay">Specification</Eyebrow>
              <SplitLines as="h2" className="t-h1 mt-6" lines={[<>The palette,</>, <>in <span className="t-aside !text-amber">full</span>.</>]} />
            </div>
            <p className="fade-up t-body text-clay lg:col-span-4 lg:col-start-9">
              Six materials specified across every project since 2019. Consistency is what
              lets a portfolio read as a body of work rather than a collection of jobs.
            </p>
          </Reveal>

          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="fade-up border-t border-sand py-7">
                  <div className="flex items-baseline justify-between">
                    <h3 className="t-h3 !text-[1.3rem]">{m.name}</h3>
                    <span className="t-meta text-amber">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="t-meta mt-2 text-clay">{m.spec}</p>
                  <p className="t-body mt-3 max-w-[34ch] text-ink/70">{m.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Voices />

      <section className="bg-bone text-ink">
        <div className="shell-wide act text-center">
          <Reveal>
            <Eyebrow tone="clay" className="justify-center">Work with us</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mx-auto mt-6 max-w-[18ch]"
              lines={[<>Bring us a plan</>, <>and a <span className="t-aside !text-amber">problem</span>.</>]}
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Btn href="/contact" variant="light">{cta.primary}</Btn>
              <Btn href="/projects" variant="light">{cta.work}</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
