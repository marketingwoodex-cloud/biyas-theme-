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
                alt="Woodex studio: drawings and finish samples under review before a commercial fit-out"
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
                <p className="t-label text-bronze">Standard</p>
                <p className="num mt-3 text-ink">0</p>
                <p className="t-meta mt-2 text-clay">
                  Items executed without priced scope and written approval.
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
                <span key="a">Almost right</span>,
                <span key="b">
                  is <span className="t-aside">wrong</span>.
                </span>,
              ]}
            />

            <div className="mt-9 max-w-[54ch] space-y-5">
              <p className="t-lede text-ink/80">
                Commercial fit-outs rarely fail on one big mistake. They fail on a run of
                small compromises — each of them defensible, each of them almost right —
                until the space feels off, the budget has drifted and handover is a
                negotiation.
              </p>
              <p className="t-body text-clay">
                A long-lead item ordered a week late. A services clash found after the
                ceiling grid is closed. A finish substituted because the original was
                unavailable and nobody was asked. Individually none of it is anyone&rsquo;s
                fault. Together it is how sixteen weeks becomes twenty-two.
              </p>
              <p className="t-body text-clay">
                So we removed the places those compromises hide. Everything is drawn in 3D
                before it is priced, priced line by line before it is ordered, and nothing
                is executed without a written approval against it. Not clever — just
                documented.
              </p>
            </div>

            <div className="mt-10 grid gap-6 border-t border-sand pt-8 sm:grid-cols-3">
              {[
                ["Draw", "3D before spend"],
                ["Document", "Line-item BOQ"],
                ["Deliver", "Coordinated & reported"],
              ].map(([k, v], n) => (
                <div key={k} className="fade-up" style={{ transitionDelay: `${300 + n * 90}ms` }}>
                  <p className="t-label text-bronze">{k}</p>
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
