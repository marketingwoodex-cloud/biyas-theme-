import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Eyebrow, Btn } from "@/components/ui/Btn";
import { Parallax } from "@/components/ui/Parallax";
import { documents } from "@/lib/content/site";
import { cta } from "@/lib/brand";

/**
 * HOW A ROOM IS DOCUMENTED
 *
 * The trust act. Design studios are bought on taste but chosen on paperwork —
 * this section shows the six artefacts a client physically receives, which is
 * the fastest way to distinguish a studio that executes from one that draws.
 *
 * Laid out as cards on cream because a list of documents reads as bureaucracy;
 * the same list in discrete rounded cards reads as a deliverable set.
 */
export default function Documented() {
  return (
    <section className="bg-oat text-ink">
      <div className="shell-wide act">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="clay">The paperwork</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6"
              lines={[
                <span key="a">How a room is</span>,
                <span key="b">
                  <span className="t-aside">documented</span>.
                </span>,
              ]}
            />
            <p className="t-body mt-7 max-w-[40ch] text-clay">
              Six artefacts leave our studio for every project. They are what turns a
              approved image into something a site team can actually build — and what you
              keep afterwards for insurance, maintenance and future works.
            </p>

            <div className="mt-9">
              <Parallax
                src="/img/hero-01.jpg"
                alt="Fluted walnut reception wall with brass reveals and travertine floor"
                className="wipe aspect-[16/10] w-full"
                sizes="(max-width: 900px) 100vw, 40vw"
                distance={8}
              />
            </div>

            <div className="mt-8">
              <Btn href="/services/3d-visualisation-studio" variant="light">
                {cta.secondary}
              </Btn>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {documents.map((d, i) => (
                <Reveal key={d.t} delay={i * 70}>
                  <div className="card fade-up group h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="t-h3 !text-[1.15rem] text-ink">{d.t}</h3>
                      <span className="t-meta shrink-0 text-bronze">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="t-body mt-3 text-clay">{d.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* The one-line promise, isolated so it lands */}
            <Reveal delay={240}>
              <div className="card-dark fade-up mt-4 flex flex-wrap items-center justify-between gap-6">
                <p className="t-h3 max-w-[24ch] text-bone">
                  From approved still to <span className="t-aside">BOQ and site</span>.
                </p>
                <Btn href="/contact" variant="ghost">
                  {cta.primary}
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
