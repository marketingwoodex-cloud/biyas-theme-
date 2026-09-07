import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Eyebrow } from "@/components/ui/Btn";
import { process } from "@/lib/content/site";
import { Stat, ProofRow } from "@/components/ui/Stat";
import { cities } from "@/lib/siteConfig";

/**
 * ACT VI — THE METHOD
 *
 * The heading pins while six steps scroll past it. Pinning is used exactly
 * once on the page: it earns attention here because the content is a
 * sequence, and it would be noise anywhere else.
 * Implemented with `position: sticky` rather than a scroll library — no
 * layout thrash, works without JS, and degrades to a normal stack on mobile.
 */
export default function Process() {
  return (
    <section className="relative bg-soot" id="process">
      <div className="shell-wide act">
        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-12">
          {/* Pinned column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>How it runs</Eyebrow>
                <SplitLines
                  as="h2"
                  className="t-h1 mt-6 text-bone"
                  lines={[
                    <>Fifteen weeks,</>,
                    <>
                      <span className="t-aside">visible</span> throughout.
                    </>,
                  ]}
                />
                <p className="t-body mt-7 max-w-[36ch] text-clay">
                  A dated programme at contract, a written report with photographs every
                  Friday, and no work executed before it is priced and approved.
                </p>

                {/* Token-driven. <Stat> renders nothing when a token is
                    unresolved, so this row can never display an invented
                    figure — it simply gets shorter. Cities served is a
                    verifiable fact, so it is a literal. */}
                <ProofRow className="mt-10 border-t border-[var(--hairline-dark)] pt-8">
                  <Stat token="YEARS" label="Years delivering fit-out" suffix="" />
                  <Stat token="PROJECTS" label="Projects completed" suffix="+" />
                  <Stat token="ONTIME_RATE" label="Delivered on contract date" suffix="%" />
                  <Stat value={cities.length} label="Cities served" />
                </ProofRow>
              </Reveal>
            </div>
          </div>

          {/* Scrolling steps */}
          <div className="lg:col-span-7 lg:col-start-6">
            {process.map((p, i) => (
              <Reveal key={p.n} className="group">
                <div className="fade-up flex gap-6 border-b border-[var(--hairline-dark)] py-9 transition-colors duration-500 hover:bg-bone/[0.02] sm:gap-10 sm:py-11">
                  <div className="shrink-0">
                    <span className="t-label text-bronze">{p.n}</span>
                    {/* Connector line: draws the sequence literally. */}
                    {i < process.length - 1 && (
                      <span className="mx-auto mt-4 block h-full w-px bg-[var(--hairline-dark)]" aria-hidden />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="t-h3 text-bone">{p.t}</h3>
                      <span className="t-meta text-clay/70">{p.detail}</span>
                    </div>
                    <p className="t-body mt-3 max-w-[52ch] text-clay">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
