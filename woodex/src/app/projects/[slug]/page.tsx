import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { projects, getProject } from "@/lib/content/projects";
import { getService } from "@/lib/content/services";
import { siteUrl, cta } from "@/lib/brand";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title} — ${p.sector} Interior Fit-Out, ${p.location}`;
  return {
    title,
    description: `${p.summary} ${p.area}, delivered in ${p.duration} by Woodex Interior.`,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title,
      description: p.summary,
      url: `${siteUrl}/projects/${p.slug}`,
      type: "article",
      images: [{ url: p.image, width: 1200, height: 1500, alt: p.title }],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const svc = getService(p.serviceSlug);
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: p.title, path: `/projects/${p.slug}` },
        ])}
      />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.title,
          headline: p.title,
          description: p.summary,
          url: `${siteUrl}/projects/${p.slug}`,
          image: p.gallery.map((g) => `${siteUrl}${g}`),
          dateCreated: p.year,
          creator: { "@id": `${siteUrl}/#organization` },
          locationCreated: { "@type": "Place", name: p.location },
          about: p.sector,
          material: p.materials,
        }}
      />

      <PageHero
        eyebrow={`${p.sector} · ${p.year}`}
        lines={[<>{p.title}</>]}
        sub={p.summary}
        image={p.image}
        imageAlt={`${p.title} — ${p.sector} interior fit-out in ${p.location}`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: p.title, path: `/projects/${p.slug}` },
        ]}
        meta={[
          { k: "Client", v: p.client },
          { k: "Location", v: p.location },
          { k: "Area", v: p.area },
          { k: "Programme", v: p.duration },
        ]}
      />

      {/* Brief + approach */}
      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow tone="clay">The brief</Eyebrow>
                <p className="font-medium mt-6 max-w-[24ch] text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.15] tracking-[-0.02em]">
                  {p.brief}
                </p>
                {svc && (
                  <Link href={`/services/${svc.slug}`} className="ulink t-label mt-8 inline-block text-bronze" data-cursor="link">
                    Service: {svc.title} →
                  </Link>
                )}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 lg:col-start-6">
              <Eyebrow tone="clay">What we did</Eyebrow>
              <ol className="mt-7 space-y-8">
                {p.approach.map((a, i) => (
                  <li key={i} className="fade-up flex gap-5 border-b border-sand pb-8" style={{ transitionDelay: `${i * 90}ms` }}>
                    <span className="t-meta shrink-0 text-bronze">{String(i + 1).padStart(2, "0")}</span>
                    <p className="t-lede max-w-[54ch] text-ink/85">{a}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <p className="t-label text-bronze">Material palette</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.materials.map((m) => (
                    <span key={m} className="pill"><span className="pill-note">
                      {m}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ink">
        <div className="shell-wide act">
          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <Parallax
                src={p.gallery[0]}
                alt={`${p.title} — principal view`}
                className="wipe aspect-[16/11] w-full"
                sizes="(max-width:900px) 100vw, 64vw"
                distance={9}
              />
            </Reveal>
            <Reveal className="lg:col-span-4 lg:pt-16" delay={120}>
              <Parallax
                src={p.gallery[1] ?? p.image}
                alt={`${p.title} — detail`}
                className="wipe aspect-[3/4] w-full"
                sizes="(max-width:900px) 100vw, 32vw"
                distance={12}
              />
            </Reveal>
            <Reveal className="lg:col-span-5" delay={60}>
              <Parallax
                src={p.gallery[2] ?? p.image}
                alt={`${p.title} — material detail`}
                className="wipe aspect-[4/3] w-full"
                sizes="(max-width:900px) 100vw, 40vw"
                distance={10}
              />
            </Reveal>
            <Reveal className="flex items-center lg:col-span-6 lg:col-start-7" delay={180}>
              <div>
                <Eyebrow>Result</Eyebrow>
                <div className="mt-8 grid gap-8 sm:grid-cols-3">
                  {p.result.map((r) => (
                    <div key={r.label}>
                      <p className="num text-bronze-light">{r.value}</p>
                      <p className="t-meta mt-2 max-w-[18ch] text-clay">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      {p.quote && (
        <section className="bg-soot text-bone">
          <div className="shell-wide act">
            <Reveal className="mx-auto max-w-[46rem] text-center">
              <blockquote>
                <p className="font-medium text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.14] tracking-[-0.03em]">
                  &ldquo;{p.quote.text}&rdquo;
                </p>
              </blockquote>
              <p className="t-meta mt-8 text-bronze-light">
                {p.quote.who} · {p.quote.role}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Next */}
      <section className="bg-ink">
        <div className="shell-wide act">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="t-label text-clay">Next project</p>
              <SplitLines as="h2" className="t-h1 mt-5 text-bone" lines={[<>{next.title}</>]} />
              <p className="t-body mt-4 max-w-[46ch] text-clay">{next.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href={`/projects/${next.slug}`} variant="ghost">
                  Open {next.title}
                </Btn>
                <Btn href="/request-proposal" variant="solid">
                  {cta.primary}
                </Btn>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Link href={`/projects/${next.slug}`} data-cursor="view" data-cursor-label="Next">
                <Parallax
                  src={next.image}
                  alt={next.title}
                  className="wipe aspect-[4/3] w-full"
                  sizes="(max-width:900px) 100vw, 32vw"
                  distance={8}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
