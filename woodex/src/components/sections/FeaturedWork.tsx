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
                  and what they <span className="t-aside !text-brass">changed</span>.
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

                <div className="mt-5 flex items-start justify-between gap-6 border-t border-sand pt-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="t-meta text-brass">{p.index}</span>
                      <span className="t-label text-clay">{p.sector}</span>
                    </div>
                    <h3 className="t-h3 mt-2 transition-colors duration-500 group-hover:text-brass">
                      {p.title}
                    </h3>
                    <p className="t-body mt-2 max-w-[46ch] text-clay">{p.summary}</p>
                  </div>
                  <div className="hidden shrink-0 text-right sm:block">
                    <p className="t-meta text-clay">{p.year}</p>
                    <p className="t-meta mt-1 text-clay/70">{p.area}</p>
                  </div>
                </div>

                {/* Result chips — the number is the hook, not the photograph. */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.result.slice(0, 2).map((r) => (
                    <span
                      key={r.label}
                      className="t-meta rounded-full border border-sand px-3.5 py-1.5 text-clay"
                    >
                      <b className="font-medium text-ink">{r.value}</b> · {r.label}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
