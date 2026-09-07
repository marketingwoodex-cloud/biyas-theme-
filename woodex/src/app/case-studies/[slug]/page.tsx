import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import { Pending } from "@/components/ui/Stat";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { caseStudies, getPortfolioItem } from "@/lib/content/portfolio";
import { getService } from "@/lib/content/services";
import { siteUrl, cta } from "@/lib/siteConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPortfolioItem(slug);
  if (!p) return {};
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: `${siteUrl}/case-studies/${p.slug}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${siteUrl}/case-studies/${p.slug}`,
      type: "article",
    },
  };
}

/** Section wrapper so every block shares one rhythm. */
function Block({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="grid gap-x-12 gap-y-5 border-t border-sand pt-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-baseline gap-3">
            <span className="t-num text-sm text-bronze">{n}</span>
            <h2 className="t-h4 text-ink">{title}</h2>
          </div>
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPortfolioItem(slug);
  if (!p) notFound();

  const service = getService(p.serviceSlug);
  const next = caseStudies[(caseStudies.findIndex((c) => c.slug === p.slug) + 1) % caseStudies.length];

  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: p.name, path: `/case-studies/${p.slug}` },
        ])}
      />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.metaTitle,
          description: p.metaDescription,
          url: `${siteUrl}/case-studies/${p.slug}`,
          creator: { "@type": "Organization", name: "Woodex Interior" },
          locationCreated: { "@type": "Place", name: p.city },
        }}
      />

      <PageHero
        eyebrow={`${p.category} · ${p.city}`}
        lines={[<span key="a">{p.name}</span>]}
        sub={p.summary}
        image={p.thumbnail.src}
        imageAlt={p.thumbnail.alt}
        crumbs={[
          { name: "Case Studies", path: "/case-studies" },
          { name: p.name, path: `/case-studies/${p.slug}` },
        ]}
      />

      {/* Meta strip */}
      <section className="bg-oat text-ink">
        <div className="shell-wide py-10">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-6">
            {[
              ["City", p.city],
              ["Type", p.category],
              ["Size", p.size],
              ["Duration", p.duration],
              ["Scope", p.scope],
              ["Year", p.year],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="t-meta text-clay">{k}</dt>
                <dd className="t-h5 mt-1 text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-bone text-ink">
        <div className="shell act space-y-14">
          <Block n="01" title="The brief">
            <p className="t-lede text-clay">{p.challenge}</p>
          </Block>

          <Block n="02" title="Constraints">
            <ul className="list-ul t-body text-clay">
              {p.constraints.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Block>

          <Block n="03" title="Our approach">
            <ul className="list-ul t-body text-clay">
              {p.solution.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Block>

          <Block n="04" title="Execution">
            <ol className="list-ol t-body text-clay">
              {p.execution.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ol>
          </Block>

          <Block n="05" title="Results">
            {/* Every figure renders through <Pending> until the client signs it
                off. An unverified number is not a proof point. */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {p.results.map((r) =>
                r.verified ? (
                  <div key={r.label}>
                    <p className="t-num text-[clamp(1.75rem,3vw,2.5rem)] leading-none">{r.value}</p>
                    <p className="t-meta mt-2 text-clay">{r.label}</p>
                  </div>
                ) : (
                  <Pending key={r.label} label={r.label} />
                )
              )}
            </div>
          </Block>
        </div>
      </section>

      {/* Gallery — six slots minimum */}
      <section className="bg-oat text-ink">
        <div className="shell-wide act">
          <Reveal>
            <Eyebrow tone="clay">Gallery</Eyebrow>
            <h2 className="t-h3 mt-5">{p.gallery.length} views</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.gallery.map((g, i) => (
              <Reveal key={i} delay={Math.min(i, 5) * 60}>
                <PlaceholderImage
                  src={g.src}
                  alt={g.alt}
                  pending={g.pending}
                  ratio="4:3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder disclosure — required while status is placeholder */}
      {p.status === "placeholder" && (
        <section className="bg-bone text-ink">
          <div className="shell pb-16">
            <p className="t-meta rounded-[var(--r-md)] border border-sand bg-mist px-5 py-4 text-clay">
              This project record will be replaced with full details and photography upon
              launch. Figures shown are placeholders pending client verification.
            </p>
          </div>
        </section>
      )}

      {/* Service + next */}
      <section className="bg-ink text-bone">
        <div className="shell act">
          <div className="grid gap-10 lg:grid-cols-2">
            {service && (
              <Reveal>
                <Eyebrow>Delivered under</Eyebrow>
                <h2 className="t-h3 mt-5">{service.title}</h2>
                <p className="t-body mt-4 max-w-[42ch] text-bone/55">{service.headline}</p>
                <div className="mt-7">
                  <Btn href={`/services/${service.slug}`} variant="ghost">
                    {service.title}
                  </Btn>
                </div>
              </Reveal>
            )}

            <Reveal delay={100}>
              <Eyebrow>Next case study</Eyebrow>
              <h2 className="t-h3 mt-5">
                <Link href={`/case-studies/${next.slug}`} className="ulink" data-cursor="link">
                  {next.name}
                </Link>
              </h2>
              <p className="t-body mt-4 text-bone/55">
                {next.category} · {next.city} · {next.size}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-soot text-bone">
        <div className="shell act text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-[22ch]">Request a similar proposal</h2>
            <p className="t-body mx-auto mt-6 max-w-[50ch] text-bone/55">
              Send a floor plan and a short brief. Scope, indicative BOQ structure,
              programme and budget band come back in writing.
            </p>
            <div className="mt-9 flex justify-center">
              <Btn href="/request-proposal" variant="ghost">
                {cta.similar}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
