import Link from "next/link";
import { projects } from "@/lib/content/projects";
import { Parallax } from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Btn, Eyebrow } from "@/components/ui/Btn";

/**
 * ACT V — THE EVIDENCE
 *
 * An offset editorial grid, not a tidy 3×2. Unequal column widths and
 * vertical offsets make the eye travel diagonally down the page, which
 * slows scanning just enough for the case-study numbers to register.
 */

const LAYOUT = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-32",
  "lg:col-span-5",
  "lg:col-span-7 lg:mt-24",
  "lg:col-span-6",
  "lg:col-span-6 lg:mt-20",
];

export default function FeaturedWork() {
  return (
    <section className="relative bg-bone text-ink" id="work">
      <div className="shell-wide act">
        <Reveal className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="clay">Selected work</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6"
              lines={[
                <>Rooms we built,</>,
                <>
                  and what they <span className="t-aside !text-amber">changed</span>.
                </>,
              ]}
            />
          </div>
          <div className="fade-up flex lg:col-span-4 lg:col-start-9 lg:justify-end" style={{ transitionDelay: "220ms" }}>
            <Btn href="/projects" variant="light">
              All projects
            </Btn>
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal key={p.slug} className={LAYOUT[i] ?? "lg:col-span-6"}>
              <Link
                href={`/projects/${p.slug}`}
                className="group block"
                data-cursor="view"
                data-cursor-label="View"
              >
                <Parallax
                  src={p.image}
                  alt={`${p.title} — ${p.sector} interior fit-out by Woodex Interior in ${p.location}`}
                  className={`wipe w-full ${i % 3 === 1 ? "aspect-[4/5]" : "aspect-[16/11]"}`}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                  distance={8}
                />

                {/* Caption.
                    The previous version put year + area in a right-aligned
                    `shrink-0` column, which could not compress — on a narrow
                    grid cell it pushed straight through the container edge and
                    got clipped. Everything now lives in one flow that wraps. */}
                <div className="mt-6 border-t border-sand pt-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="t-num text-sm text-amber">{p.index}</span>
                    <span className="t-label text-clay">{p.sector}</span>
                    <span className="ml-auto t-meta text-clay/70">{p.year}</span>
                  </div>

                  <h3 className="t-h3 mt-3 transition-colors duration-500 group-hover:text-amber">
                    {p.title}
                  </h3>

                  <p className="t-body mt-3 max-w-[52ch] text-clay">{p.summary}</p>

                  {/* Proof row.
                      One measured figure per pill, the number set in the text
                      colour and the descriptor dropped back. Sentence case, no
                      monospace — these are proof points, not console output. */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="pill">
                      <span className="pill-figure">{p.area}</span>
                    </span>
                    {p.result.slice(0, 2).map((r) => (
                      <span key={r.label} className="pill">
                        <span className="pill-figure">{r.value}</span>
                        <span className="pill-note">{r.label}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
