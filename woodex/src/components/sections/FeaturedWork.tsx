import Link from "next/link";
import { portfolio } from "@/lib/content/portfolio";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import { Pending } from "@/components/ui/Stat";
import { cta } from "@/lib/siteConfig";

/**
 * FEATURED CASE STUDIES
 *
 * Offset editorial grid rather than an equal-height card row: unequal spans
 * force a diagonal read, which slows scanning just enough for each project to
 * register instead of blurring into a wall of thumbnails.
 *
 * Result figures render through <Pending> until the client verifies them. An
 * unverified number is not a proof point, and showing one as fact is exactly
 * what the brief forbids.
 */
export default function FeaturedWork() {
  const featured = portfolio.filter((p) => p.featured);

  return (
    <section className="bg-bone text-ink">
      <div className="shell-wide act">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="clay">Selected work</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6"
              lines={[
                <span key="a">Projects, and</span>,
                <span key="b">
                  how they <span className="t-aside">went</span>.
                </span>,
              ]}
            />
          </div>
          <div className="fade-up lg:col-span-4 lg:col-start-9" style={{ transitionDelay: "220ms" }}>
            <p className="t-body text-clay">
              Each case study covers the brief, the constraints, what we decided and what
              happened on site — including the parts that were difficult.
            </p>
            <Link href="/case-studies" className="ulink t-label mt-6 inline-block text-ink" data-cursor="link">
              All case studies
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          {featured.map((p, i) => (
            <Reveal key={p.id}>
              <article
                className={`grid items-center gap-x-12 gap-y-8 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  href={`/case-studies/${p.slug}`}
                  className={`group block ${i % 3 === 1 ? "lg:col-span-6" : "lg:col-span-7"}`}
                  data-cursor="view"
                  data-cursor-label="Read"
                >
                  <PlaceholderImage
                    src={p.thumbnail.src}
                    alt={p.thumbnail.alt}
                    pending={p.thumbnail.pending}
                    ratio={i % 3 === 1 ? "4:3" : "16:9"}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="wipe"
                  />
                </Link>

                <div className={i % 3 === 1 ? "lg:col-span-5" : "lg:col-span-4"}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="t-num text-sm text-bronze">{p.index}</span>
                    <span className="t-label text-clay">{p.category}</span>
                    <span className="ml-auto t-meta text-clay">{p.city}</span>
                  </div>

                  <h3 className="t-h3 mt-3">
                    <Link
                      href={`/case-studies/${p.slug}`}
                      className="transition-colors duration-500 hover:text-bronze"
                      data-cursor="link"
                    >
                      {p.name}
                    </Link>
                  </h3>

                  <p className="t-body mt-3 max-w-[46ch] text-clay">{p.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="pill">
                      <span className="pill-figure">{p.size}</span>
                    </span>
                    <span className="pill">
                      <span className="pill-figure">{p.duration}</span>
                    </span>
                  </div>

                  {/* Unverified results are labelled, never shown as fact. */}
                  {p.results.some((r) => r.verified) && (
                    <div className="mt-6 grid grid-cols-2 gap-6 border-t border-sand pt-5">
                      {p.results
                        .filter((r) => r.verified)
                        .slice(0, 2)
                        .map((r) => (
                          <div key={r.label}>
                            <p className="t-num text-2xl leading-none">{r.value}</p>
                            <p className="t-meta mt-1.5 text-clay">{r.label}</p>
                          </div>
                        ))}
                    </div>
                  )}

                  {!p.results.some((r) => r.verified) && p.status === "placeholder" && (
                    <div className="mt-6 grid grid-cols-2 gap-6 border-t border-sand pt-5">
                      {p.results.slice(0, 2).map((r) => (
                        <Pending key={r.label} label={r.label} />
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Btn href="/portfolio" variant="light">
            {cta.work}
          </Btn>
        </Reveal>
      </div>
    </section>
  );
}
