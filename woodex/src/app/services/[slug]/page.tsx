import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Parallax } from "@/components/ui/Parallax";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import FaqBlock from "@/components/sections/FaqBlock";
import Jsonld, { breadcrumbSchema, faqSchema } from "@/components/seo/Jsonld";
import { services, getService } from "@/lib/content/services";
import { portfolio } from "@/lib/content/portfolio";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { siteUrl, cta } from "@/lib/brand";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    // `absolute` because each service's metaTitle already carries the brand —
    // the layout template would otherwise duplicate it.
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: `${siteUrl}/services/${s.slug}`,
      type: "article",
      images: [{ url: s.image, width: 1200, height: 1500, alt: s.title }],
    },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug);
  const related = portfolio.filter((x) => x.serviceSlug === s.slug).slice(0, 3);
  const fallback = portfolio.slice(0, 3);
  const shown = related.length ? related : fallback;

  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.title, path: `/services/${s.slug}` },
        ])}
      />
      <Jsonld data={faqSchema(s.faqs)} />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${siteUrl}/services/${s.slug}#service`,
          name: s.title,
          alternateName: s.keywords[0],
          serviceType: s.title,
          description: s.metaDescription,
          url: `${siteUrl}/services/${s.slug}`,
          image: `${siteUrl}${s.image}`,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: { "@type": "Country", name: "Pakistan" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${s.title} deliverables`,
            itemListElement: s.deliverables.map((d) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: d.t, description: d.d },
            })),
          },
        }}
      />

      <PageHero
        eyebrow={`Service ${s.index} · ${s.kicker}`}
        lines={s.title.split(" & ").map((part, i, arr) => (
          <span key={i}>{part}{i < arr.length - 1 ? " &" : ""}</span>
        ))}
        sub={s.headline}
        image={s.image}
        imageAlt={`${s.title} — ${s.headline}`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.title, path: `/services/${s.slug}` },
        ]}
      />

      {/* ---- Lede + body ---- */}
      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow tone="clay">Overview</Eyebrow>
                <p className="font-medium mt-6 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.1] tracking-[-0.025em]">
                  {s.headline}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Btn href="/request-proposal" variant="light">
                    {cta.primary}
                  </Btn>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 lg:col-start-6">
              <p className="t-lede max-w-[60ch] text-ink/85">{s.lede}</p>
              <div className="mt-8 max-w-[62ch] space-y-6">
                {s.body.map((p, i) => (
                  <p key={i} className="t-body fade-up text-clay" style={{ transitionDelay: `${i * 90}ms` }}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Outcomes — the reason to buy, in four scannable lines */}
              <div className="mt-12 border-t border-sand pt-8">
                <p className="t-label text-bronze">What you get</p>
                <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {s.outcomes.map((o, i) => (
                    <li key={o} className="fade-up flex items-start gap-3" style={{ transitionDelay: `${i * 80}ms` }}>
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="mt-1.5 shrink-0" aria-hidden>
                        <path d="M1 5.5 5 9.5 13 1" stroke="var(--color-bronze)" strokeWidth="1.4" />
                      </svg>
                      <span className="t-body text-ink">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Deliverables ---- */}
      <section className="bg-ink">
        <div className="shell-wide act">
          <Reveal className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Scope</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h1 mt-6 text-bone"
                lines={[<>What&apos;s actually</>, <>in the <span className="t-aside">contract</span>.</>]}
              />
            </div>
            <p className="fade-up t-body text-clay lg:col-span-4 lg:col-start-9" style={{ transitionDelay: "200ms" }}>
              Every line below is a deliverable, not an aspiration. Anything outside it is
              listed as an exclusion before you sign.
            </p>
          </Reveal>

          <div className="grid gap-x-8 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
            {s.deliverables.map((d, i) => (
              <Reveal key={d.t} delay={i * 60}>
                <div className="fade-up group h-full border-t border-[var(--hairline-dark)] py-8 transition-colors duration-500">
                  <div className="flex items-baseline gap-4">
                    <span className="t-meta text-bronze/70">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="t-h3 !text-[1.25rem] text-bone transition-colors duration-500 group-hover:text-bronze-light">
                      {d.t}
                    </h3>
                  </div>
                  <p className="t-body mt-3 max-w-[38ch] text-clay">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Full-bleed material moment ---- */}
      <section className="relative">
        <Parallax
          src={s.image}
          alt={`${s.title} detail — Woodex Interior`}
          className="h-[60vh] min-h-[380px] w-full"
          sizes="100vw"
          distance={14}
        />
        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="shell-wide pb-12">
            <p className="t-label text-bronze-light">{s.kicker}</p>
            <p className="font-medium mt-3 max-w-[20ch] text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.03em] text-bone">
              {s.headline}
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related work ---- */}
      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow tone="clay">Proof</Eyebrow>
              <SplitLines as="h2" className="t-h2 mt-5" lines={[<>Built, not rendered.</>]} />
            </div>
            <Btn href="/portfolio" variant="light">
              All projects
            </Btn>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link
                  href={p.hasCaseStudy ? `/case-studies/${p.slug}` : `/portfolio?type=${p.category.toLowerCase()}`}
                  className="group block"
                  data-cursor="view"
                  data-cursor-label="View"
                >
                  <PlaceholderImage
                    src={p.thumbnail.src}
                    alt={p.thumbnail.alt}
                    pending={p.thumbnail.pending}
                    ratio="4:3"
                    sizes="(max-width:768px) 100vw, 30vw"
                    className="wipe"
                  />
                  <div className="mt-4 flex items-center gap-3">
                    <span className="t-label text-bronze">{p.category}</span>
                    <span className="t-meta text-clay">{p.city}</span>
                  </div>
                  <h3 className="t-h4 mt-2 transition-colors duration-500 group-hover:text-bronze">
                    {p.name}
                  </h3>
                  <p className="t-body mt-2 text-clay">{p.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock
        items={s.faqs}
        title={`${s.title} — FAQ`}
        lines={[<span key="a">The questions</span>, <span key="b">that actually <span className="t-aside">matter</span>.</span>]}
      />

      {/* ---- Next service ---- */}
      <section className="bg-ink">
        <div className="shell-wide py-16">
          <Reveal>
            <p className="t-label text-clay">Other services</p>
            <div className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  data-cursor="link"
                  className="group flex items-center justify-between gap-4 border-b border-[var(--hairline-dark)] py-4 transition-[padding] duration-500 hover:pl-2"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="t-meta text-bronze/60">{o.index}</span>
                    <span className="font-medium text-lg text-bone transition-colors group-hover:text-bronze-light">
                      {o.title}
                    </span>
                  </span>
                  <span className="t-meta text-clay opacity-0 transition-opacity group-hover:opacity-100">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
