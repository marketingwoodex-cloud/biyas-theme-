import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { caseStudies } from "@/lib/content/portfolio";
import { siteUrl, cta } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Commercial Fit-Out Case Studies | Woodex Interior" },
  description:
    "Long-form case studies covering the brief, constraints, execution and results of commercial interior projects across Pakistan.",
  alternates: { canonical: `${siteUrl}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />

      <PageHero
        eyebrow="Proof"
        lines={[<span key="a">How the work</span>, <span key="b">actually went.</span>]}
        sub="Brief, constraints, approach, execution and results — including the parts that were difficult."
        image="/img/svc-office.jpg"
        imageAlt="Commercial office interior by Woodex Interior"
        crumbs={[{ name: "Case Studies", path: "/case-studies" }]}
      />

      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="space-y-20 lg:space-y-28">
            {caseStudies.map((p, i) => (
              <Reveal key={p.id}>
                <article
                  className={`grid items-center gap-x-12 gap-y-8 lg:grid-cols-12 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Link
                    href={`/case-studies/${p.slug}`}
                    className="group block lg:col-span-7"
                    data-cursor="view"
                    data-cursor-label="Read"
                  >
                    <PlaceholderImage
                      src={p.thumbnail.src}
                      alt={p.thumbnail.alt}
                      pending={p.thumbnail.pending}
                      ratio="16:9"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="wipe"
                    />
                  </Link>

                  <div className="lg:col-span-5">
                    <Eyebrow tone="clay">
                      {p.category} · {p.city}
                    </Eyebrow>
                    <h2 className="t-h2 mt-5">
                      <Link
                        href={`/case-studies/${p.slug}`}
                        className="transition-colors duration-500 hover:text-bronze"
                        data-cursor="link"
                      >
                        {p.name}
                      </Link>
                    </h2>
                    <p className="t-body mt-4 max-w-[46ch] text-clay">{p.summary}</p>

                    <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-sand pt-6">
                      {[
                        ["Size", p.size],
                        ["Duration", p.duration],
                        ["Scope", p.scope],
                        ["Year", p.year],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <dt className="t-meta text-clay">{k}</dt>
                          <dd className="t-body mt-0.5 text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8">
                      <Btn href={`/case-studies/${p.slug}`} variant="light">
                        Read the case study
                      </Btn>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="shell act text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-[22ch]">Want one of these written about your project?</h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Btn href="/request-proposal" variant="ghost">{cta.primary}</Btn>
              <Btn href="/portfolio" variant="ghost">View all work</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
