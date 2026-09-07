import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import FaqBlock from "@/components/sections/FaqBlock";
import Jsonld, { faqSchema, breadcrumbSchema } from "@/components/seo/Jsonld";
import { locations, getLocation, deliverySentence } from "@/lib/content/locations";
import { services } from "@/lib/content/services";
import { siteUrl, cta, contact } from "@/lib/siteConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const l = getLocation(city);
  if (!l) return {};
  return {
    title: { absolute: l.metaTitle },
    description: l.metaDescription,
    keywords: [...l.keywords],
    alternates: { canonical: `${siteUrl}/${l.slug}` },
    openGraph: {
      title: l.metaTitle,
      description: l.metaDescription,
      url: `${siteUrl}/${l.slug}`,
      images: [{ url: `${siteUrl}${l.image}`, width: 1200, height: 1500, alt: `Commercial interior design in ${l.city}` }],
      type: "article",
    },
  };
}

/** The three core services promoted on every city page. */
const CORE = ["commercial-interior-design", "office-fit-out", "retail-showroom-interior-design"];

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const l = getLocation(city);
  if (!l) notFound();

  const core = CORE.map((s) => services.find((x) => x.slug === s)).filter(Boolean);

  return (
    <>
      <Jsonld data={faqSchema(l.faqs)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: `Commercial Interior Design ${l.city}`, path: `/${l.slug}` },
        ])}
      />

      <PageHero
        eyebrow={l.base ? "Our studio city" : "Service area"}
        lines={[
          <span key="a">Commercial interior</span>,
          <span key="b">
            design in <span className="t-aside">{l.city}</span>
          </span>,
        ]}
        sub={l.metaDescription}
        image={l.image}
        imageAlt={`Commercial interior project, ${l.city}`}
        crumbs={[{ name: `Commercial Interior Design ${l.city}`, path: `/${l.slug}` }]}
      />

      {/* Unique intro + the compliance-safe coverage statement */}
      <section className="bg-bone text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              {l.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "t-lede text-ink" : "t-body mt-6 text-clay"}>
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
              <div className="card">
                <h2 className="t-h5 text-ink">Working in {l.city}</h2>
                {/* Rendered from data, so a page author cannot accidentally
                    imply an office that does not exist. */}
                <p className="t-body mt-4 text-clay">{deliverySentence(l)}</p>
                <div className="mt-6 border-t border-sand pt-6">
                  <p className="t-label text-clay">Studio</p>
                  <p className="t-body mt-2 text-ink">
                    {contact.street}
                    <br />
                    {contact.city}, {contact.country}
                  </p>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="ulink t-body mt-3 inline-block text-ink"
                    data-cursor="link"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* City-specific realities — the section that makes the page non-duplicate */}
      <section className="bg-oat text-ink">
        <div className="shell act">
          <Reveal>
            <Eyebrow tone="clay">On the ground</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h2 mt-6 max-w-[20ch]"
              lines={[<span key="a">What {l.city} actually</span>, <span key="b">demands of a fit-out.</span>]}
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {l.local.map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div className="card card-hover fade-up h-full">
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
      </section>

      {/* Services offered here */}
      <section className="bg-ink text-bone">
        <div className="shell act">
          <Reveal>
            <Eyebrow>Services in {l.city}</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-[22ch]">Three ways most {l.city} projects start.</h2>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {core.map((s, i) =>
              s ? (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    href={`/services/${s.slug}`}
                    data-cursor="link"
                    className="card-dark fade-up group flex h-full flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
                  >
                    <span className="t-num text-sm text-bronze-light">{s.index}</span>
                    <h3 className="t-h4 mt-4 text-bone">{s.title}</h3>
                    <p className="t-body mt-3 flex-1 text-bone/55">{s.short === s.title ? s.kicker : s.headline}</p>
                    <span className="ulink t-label mt-6 inline-block text-bone">Read more</span>
                  </Link>
                </Reveal>
              ) : null
            )}
          </div>
        </div>
      </section>

      <FaqBlock
        items={l.faqs}
        title={`${l.city} questions`}
        lines={[<span key="a">Answered before</span>, <span key="b">you have to ask.</span>]}
        tone="light"
      />

      {/* CTA */}
      <section className="bg-soot text-bone">
        <div className="shell act text-center">
          <Reveal>
            <h2 className="t-h2 mx-auto max-w-[22ch]">
              Planning a commercial project in {l.city}?
            </h2>
            <p className="t-body mx-auto mt-6 max-w-[52ch] text-bone/55">
              Send a floor plan and a short brief. You will get a proposal with scope, an
              indicative BOQ structure, a programme and a budget band.
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
