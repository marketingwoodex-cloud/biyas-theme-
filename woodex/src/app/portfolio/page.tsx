import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/layout/PageHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Reveal from "@/components/ui/Reveal";
import { Btn } from "@/components/ui/Btn";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { portfolio } from "@/lib/content/portfolio";
import { siteUrl, cta } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Interior Design & Fit-Out Portfolio | Woodex Interior" },
  description:
    "Commercial interior design and fit-out projects across offices, retail, healthcare and education. Filter by sector and city.",
  alternates: { canonical: `${siteUrl}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Woodex Interior portfolio",
          itemListElement: portfolio.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${p.category} — ${p.city}`,
            url: `${siteUrl}/${p.hasCaseStudy ? "case-studies" : "portfolio"}/${p.slug}`,
          })),
        }}
      />

      <PageHero
        eyebrow="Work"
        lines={[<span key="a">Commercial projects,</span>, <span key="b">sector by sector.</span>]}
        sub="Offices, retail, healthcare and education across five cities. Filter to the sector closest to yours."
        image="/img/proj-01.jpg"
        imageAlt="Corporate office interior fit-out by Woodex Interior"
        crumbs={[{ name: "Portfolio", path: "/portfolio" }]}
      />

      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          {/* Suspense boundary is required: PortfolioGrid reads useSearchParams,
              which opts the subtree into client-side rendering. */}
          <Suspense fallback={<div className="min-h-[40vh]" />}>
            <PortfolioGrid />
          </Suspense>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="shell act text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-[24ch]">Something like yours in here?</h2>
            <p className="t-body mx-auto mt-6 max-w-[52ch] text-bone/55">
              Send a floor plan and a short brief. You will get scope, an indicative BOQ
              structure, a programme and a budget band.
            </p>
            <div className="mt-9 flex justify-center">
              <Btn href="/request-proposal" variant="ghost">{cta.primary}</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
