import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import { SplitLines } from "@/components/ui/SplitLines";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { projects } from "@/lib/content/projects";
import { siteUrl, cta } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Projects — Interior Design & Fit-Out Portfolio",
  description:
    "Selected interior architecture and fit-out projects by Woodex Interior: workplace, residential, hospitality and retail — each with the measured result it delivered.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Woodex Interior",
    description: "Workplace, residential, hospitality and retail interiors — built, not rendered.",
    url: `${siteUrl}/projects`,
    images: [{ url: "/img/hero-01.jpg", width: 1376, height: 768 }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Woodex Interior — Projects",
          url: `${siteUrl}/projects`,
          hasPart: projects.map((p) => ({
            "@type": "CreativeWork",
            name: p.title,
            url: `${siteUrl}/projects/${p.slug}`,
            about: p.sector,
            dateCreated: p.year,
            locationCreated: { "@type": "Place", name: p.location },
          })),
        }}
      />

      <PageHero
        eyebrow="Selected work"
        lines={[<>Built, not</>, <><span className="t-aside">rendered</span>.</>]}
        sub="Six projects across workplace, home and hospitality. Each entry leads with the number the client cared about — covers recovered, reverberation measured, days saved — because that is what a portfolio is actually for."
        image="/img/hero-01.jpg"
        imageAlt="Fluted walnut reception wall with bronze reveals and travertine floor"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
        meta={[
          { k: "Coverage", v: "5 cities" },
          { k: "Sectors", v: "Four" },
          { k: "Reporting", v: "Weekly, written" },
          { k: "Since", v: "2007" },
        ]}
      />

      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="space-y-24 lg:space-y-32">
            {projects.map((p, i) => (
              <Reveal key={p.slug}>
                <article className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-center">
                  <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2 lg:col-start-6" : ""}`}>
                    <Link href={`/projects/${p.slug}`} className="group block" data-cursor="view" data-cursor-label="View">
                      <Parallax
                        src={p.image}
                        alt={`${p.title} — ${p.sector} interior by Woodex Interior, ${p.location}`}
                        className="wipe aspect-[16/11] w-full"
                        sizes="(max-width:900px) 100vw, 58vw"
                        distance={9}
                        imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                      />
                    </Link>
                  </div>

                  <div className={`lg:col-span-4 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
                    <div className="flex items-center gap-4">
                      <span className="t-meta text-bronze">{p.index}</span>
                      <span className="t-label text-clay">{p.sector}</span>
                    </div>
                    <h2 className="t-h2 mt-4">
                      <Link href={`/projects/${p.slug}`} className="transition-colors duration-500 hover:text-bronze" data-cursor="link">
                        {p.title}
                      </Link>
                    </h2>
                    <p className="t-body mt-4 max-w-[44ch] text-clay">{p.summary}</p>

                    <dl className="mt-7 grid grid-cols-2 gap-y-4 border-t border-sand pt-5">
                      {[
                        ["Location", p.location],
                        ["Area", p.area],
                        ["Year", p.year],
                        ["Programme", p.duration],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <dt className="t-label text-clay/70">{k}</dt>
                          <dd className="t-meta mt-1.5 text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-7">
                      <Btn href={`/projects/${p.slug}`} variant="light">
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

      <section className="bg-ink">
        <div className="shell-wide act text-center">
          <Reveal>
            <Eyebrow className="justify-center">Your project</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mx-auto mt-6 max-w-[16ch] text-bone"
              lines={[<>The next one</>, <>could be <span className="t-aside">yours</span>.</>]}
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Btn href="/request-proposal" variant="solid">{cta.primary}</Btn>
              <Btn href="/services" variant="ghost">{cta.tertiary}</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
