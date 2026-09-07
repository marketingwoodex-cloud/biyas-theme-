import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import FaqBlock from "@/components/sections/FaqBlock";
import Jsonld, { faqSchema, breadcrumbSchema } from "@/components/seo/Jsonld";
import { industries, getIndustry } from "@/lib/content/industries";
import { getService } from "@/lib/content/services";
import { siteUrl, cta } from "@/lib/siteConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return {
    title: { absolute: ind.metaTitle },
    description: ind.metaDescription,
    keywords: [...ind.keywords],
    alternates: { canonical: `${siteUrl}/industries/${ind.slug}` },
    // Gate rule: an industry page with no delivered project stays out of the
    // index. A thin sector page cannibalises the service page it should support.
    robots: ind.indexed ? undefined : { index: false, follow: true },
    openGraph: {
      title: ind.metaTitle,
      description: ind.metaDescription,
      url: `${siteUrl}/industries/${ind.slug}`,
      images: [{ url: `${siteUrl}${ind.image}`, width: 1200, height: 1500, alt: ind.name }],
      type: "article",
    },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const service = getService(ind.serviceSlug);
  const others = industries.filter((i) => i.slug !== ind.slug && i.indexed);

  return (
    <>
      <Jsonld data={faqSchema(ind.faqs)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/services" },
          { name: ind.name, path: `/industries/${ind.slug}` },
        ])}
      />

      <PageHero
        eyebrow="Sector"
        lines={[<span key="a">{ind.name}</span>]}
        sub={ind.lede}
        image={ind.image}
        imageAlt={`${ind.name} interior fit-out by Woodex Interior`}
        crumbs={[{ name: ind.name, path: `/industries/${ind.slug}` }]}
      />

      {/* Sector constraints — what makes this different from generic fit-out */}
      <section className="bg-bone text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow tone="clay">What changes</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h2 mt-6"
                lines={[<span key="a">The constraints</span>, <span key="b">that shape it.</span>]}
              />
              <p className="t-body mt-7 max-w-[42ch] text-clay">
                Every sector has a handful of realities that decide whether a fit-out works.
                These are the ones that matter here — and the ones a generic commercial
                specification usually misses.
              </p>
              {service && (
                <div className="mt-8">
                  <Btn href={`/services/${service.slug}`} variant="light">
                    {service.title}
                  </Btn>
                </div>
              )}
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid gap-4">
                {ind.constraints.map((c, i) => (
                  <Reveal key={c.t} delay={i * 70}>
                    <div className="card card-hover fade-up">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="t-h5 text-ink">{c.t}</h3>
                        <span className="t-num text-sm text-bronze">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <p className="t-body mt-3 text-clay">{c.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-ink text-bone">
        <div className="shell act">
          <Reveal>
            <Eyebrow>What you get</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-[20ch]">Outcomes we hold ourselves to.</h2>
          </Reveal>
          <ul className="list-ul t-lede mt-10 grid gap-x-12 gap-y-4 text-bone/70 sm:grid-cols-2">
            {ind.outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 60} as="li">
                {o}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqBlock
        items={ind.faqs}
        title={`${ind.name} questions`}
        lines={[<span key="a">Sector-specific</span>, <span key="b">answers.</span>]}
        tone="light"
      />

      {/* Other sectors */}
      {others.length > 0 && (
        <section className="bg-oat text-ink">
          <div className="shell act">
            <Reveal>
              <Eyebrow tone="clay">Other sectors</Eyebrow>
              <h2 className="t-h3 mt-5">We also work in</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 70}>
                  <Link
                    href={`/industries/${o.slug}`}
                    data-cursor="link"
                    className="card card-hover fade-up flex items-center justify-between gap-4"
                  >
                    <span className="t-h5 text-ink">{o.name}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-bone">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path
                          d="M3.5 10.5 10.5 3.5M10.5 3.5H4.9M10.5 3.5v5.6"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-soot text-bone">
        <div className="shell act text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-[24ch]">Planning a {ind.name.toLowerCase()} project?</h2>
            <p className="t-body mx-auto mt-6 max-w-[52ch] text-bone/55">
              Send a floor plan and a short brief. You will get scope, an indicative BOQ
              structure, a programme and a budget band.
            </p>
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
