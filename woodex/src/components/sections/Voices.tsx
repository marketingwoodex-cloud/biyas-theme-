import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Btn";
import { testimonials } from "@/lib/content/site";
import { Marquee } from "@/components/ui/Marquee";
import { brand } from "@/lib/brand";

/**
 * ACT VII — THE VOICES
 *
 * Three quotes, all specific, none adjectival. A testimonial that says
 * "amazing team" is worthless; one that says "the joinery matched the sample
 * panel we signed four months earlier" is a verifiable claim.
 * Behind them, the brand promise runs as a kinetic band — the one line we
 * want retained after the visit.
 */
export default function Voices() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Kinetic band */}
      <div className="border-y border-[var(--hairline-dark)] py-6 select-none" aria-hidden>
        <Marquee speed={46}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="t-h2 px-8 text-bone/[0.13]">{brand.promise}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brass/40" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="shell-wide act">
        <Reveal className="mb-14">
          <Eyebrow>In their words</Eyebrow>
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.who} delay={i * 110}>
              <figure className="fade-up flex h-full flex-col border-t border-[var(--hairline-dark)] pt-7">
                <span className="t-label text-brass">{t.sector}</span>
                <blockquote className="mt-5 flex-1">
                  <p className="font-[family-name:var(--font-display)] text-[clamp(1.35rem,2vw,1.75rem)] leading-[1.25] tracking-[-0.02em] text-bone">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-7">
                  <p className="t-body text-bone">{t.who}</p>
                  <p className="t-meta text-clay">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
