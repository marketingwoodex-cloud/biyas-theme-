import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Parallax } from "@/components/ui/Parallax";
import { Btn, Eyebrow } from "@/components/ui/Btn";

/**
 * ACT II — THE STORY
 *
 * Struggle → turn → resolution, in under 15 seconds of reading.
 * The founder story is not a bio: it opens on a failure the reader has also
 * lived (a beautiful drawing that arrived wrong), which buys the credibility
 * the rest of the page spends.
 */
export default function Manifesto() {
  return (
    <section className="relative bg-bone text-ink">
      <div className="shell-wide act">
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-12">
          {/* Left: image stack with offset depth */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <Parallax
                src="/img/svc-joinery.jpg"
                alt="Woodex workshop interior: stacked walnut panels, hand tools and sawdust suspended in window light"
                className="wipe aspect-[4/5] w-full"
                sizes="(max-width: 900px) 100vw, 40vw"
                distance={9}
              />
              {/* Overlapping detail card — creates a Z relationship rather
                  than a flat two-column layout. */}
              <div
                className="fade-up absolute -bottom-10 -right-6 w-[58%] max-w-[17rem] border border-sand/60 bg-bone p-5 shadow-[0_24px_60px_-24px_rgba(11,10,8,.35)] sm:-right-10"
                style={{ transitionDelay: "420ms" }}
              >
                <p className="t-label text-amber">Shop standard</p>
                <p className="num mt-3 text-ink">2mm</p>
                <p className="t-meta mt-2 text-clay">
                  Manufacturing tolerance across every unit we build.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: the story */}
          <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <Eyebrow tone="clay">Why we exist</Eyebrow>

            <SplitLines
              as="h2"
              className="t-h1 mt-7 text-ink"
              lines={[
                <>We started because</>,
                <>
                  the drawing kept <span className="t-aside">losing</span>.
                </>,
              ]}
            />

            <div className="mt-9 max-w-[54ch] space-y-5">
              <p className="t-lede text-ink/80">
                Eighteen years ago our founder handed a joinery drawing to a subcontractor
                and got back something almost right. A 6mm shadow gap had become 14mm. The
                veneer no longer matched across the wall. The client noticed in four seconds.
              </p>
              <p className="t-body text-clay">
                It happened on the next project too, and the one after. The problem was never
                a bad drawing or a bad joiner — it was the gap between them. Two contracts,
                two margins, two versions of &ldquo;good enough&rdquo;, and a client left to
                referee a conversation they never asked to be part of.
              </p>
              <p className="t-body text-clay">
                So we bought a workshop. Today Woodex draws the detail, cuts it, finishes it
                and hangs it — one contract, one accountable team. The line on the drawing is
                the line on your wall, because the same people are responsible for both.
              </p>
            </div>

            <div className="mt-10 grid gap-6 border-t border-sand pt-8 sm:grid-cols-3">
              {[
                ["Design", "In-house studio"],
                ["Manufacture", "Our own workshop"],
                ["Delivery", "Our own site team"],
              ].map(([k, v], n) => (
                <div key={k} className="fade-up" style={{ transitionDelay: `${300 + n * 90}ms` }}>
                  <p className="t-label text-amber">{k}</p>
                  <p className="t-body mt-2 text-ink">{v}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Btn href="/about" variant="light">
                Meet the studio
              </Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
