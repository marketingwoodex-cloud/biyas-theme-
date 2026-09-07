import Monolith from "@/components/three/Monolith";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Eyebrow } from "@/components/ui/Btn";
import { materials } from "@/lib/content/site";

/**
 * ACT IV — THE MATERIAL
 *
 * The page changes state here: dark walnut ground, a real 3D object, and a
 * specification list. This is the "proof of craft" beat — after the offer,
 * before the evidence. Scroll rotates the column three-quarters of a turn,
 * so the section is a reason to keep scrolling rather than a wall of text.
 */
export default function MaterialSection() {
  return (
    <section className="relative overflow-hidden bg-moss text-bone">
      {/* Vignette so the WebGL object sits in a lit volume, not on a flat fill */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 45%, rgba(192,138,62,.14) 0%, transparent 70%), radial-gradient(120% 100% at 50% 100%, rgba(11,10,8,.7) 0%, transparent 60%)",
        }}
      />

      <div className="shell-wide act relative">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-12">
          {/* Copy */}
          <Reveal className="lg:col-span-4">
            <Eyebrow>Palette</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6"
              lines={[
                <>Six materials.</>,
                <>
                  Used <span className="t-aside">everywhere</span>.
                </>,
              ]}
            />
            <p className="t-body mt-7 max-w-[40ch] text-bone/65">
              A restricted palette is not a limitation, it is the reason a building reads as
              one idea. We specify from a fixed set and detail it obsessively — so an office
              and a villa built four years apart still feel like the same hand.
            </p>
            <p className="t-meta mt-8 text-brass-light">
              Drag or scroll to turn the column →
            </p>
          </Reveal>

          {/* The object */}
          <div className="relative lg:col-span-4">
            <Monolith className="mx-auto h-[54vh] min-h-[380px] w-full max-w-[30rem] lg:h-[78vh]" />
            {/* Static fallback caption — also carries the meaning if WebGL fails */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center">
              <p className="t-label text-bone/45">
                Fluted walnut · brass band · travertine base
              </p>
            </div>
          </div>

          {/* Spec list */}
          <Reveal className="lg:col-span-4">
            <div className="lg:pt-24">
              {materials.map((m, i) => (
                <div
                  key={m.name}
                  className="fade-up group border-b border-[var(--hairline-dark)] py-5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-[family-name:var(--font-display)] text-xl leading-tight">
                      {m.name}
                    </p>
                    <p className="t-meta shrink-0 text-brass/80">{String(i + 1).padStart(2, "0")}</p>
                  </div>
                  <p className="t-meta mt-1.5 text-bone/50">{m.spec}</p>
                  <p className="t-body mt-2 max-w-[34ch] text-bone/70">{m.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
