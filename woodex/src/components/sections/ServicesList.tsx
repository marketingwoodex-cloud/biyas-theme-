"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content/services";
import { Eyebrow } from "@/components/ui/Btn";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";

/**
 * ACT III — THE OFFER
 *
 * A typeset index, not a grid of cards. Cards force seven equal-weight
 * decisions; a list lets the eye scan titles at speed and commit only when
 * something matches. The hovered row summons its own image into a fixed
 * frame on the right — so browsing feels like flipping a portfolio, and the
 * page stays quiet until the user asks for imagery.
 */
export default function ServicesList() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-ink" id="services">
      <div className="shell-wide act">
        <Reveal className="grid gap-8 border-b border-[var(--hairline-dark)] pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Full-suite capability</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6 text-bone"
              lines={[
                <>Seven disciplines.</>,
                <>
                  One <span className="t-aside">contract</span>.
                </>,
              ]}
            />
          </div>
          <div className="fade-up lg:col-span-4 lg:col-start-9" style={{ transitionDelay: "240ms" }}>
            <p className="t-body text-clay">
              Most studios design and hand off. We hold the whole chain — which is why the
              detail you approve is the detail that gets installed.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-12 lg:grid-cols-12">
          {/* Index */}
          <div className="lg:col-span-7" onMouseLeave={() => setActive(0)}>
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 55}>
                <Link
                  href={`/services/${s.slug}`}
                  data-cursor="link"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative flex items-center gap-5 border-b border-[var(--hairline-dark)] py-7 transition-[padding-left] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-4 sm:gap-8 sm:py-9"
                >
                  {/* Brass wash that wipes in from the left on hover */}
                  <span
                    className="pointer-events-none absolute inset-y-0 left-0 -z-0 w-full origin-left scale-x-0 bg-gradient-to-r from-brass/[0.09] to-transparent transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    aria-hidden
                  />
                  <span className="t-meta relative w-7 shrink-0 text-brass/70">{s.index}</span>
                  <span className="relative flex-1">
                    <span className="t-h3 block text-bone transition-colors duration-500 group-hover:text-brass-light">
                      {s.title}
                    </span>
                    <span className="t-meta mt-1.5 block max-w-[46ch] text-clay">{s.headline}</span>
                  </span>
                  <span className="relative hidden shrink-0 items-center gap-4 sm:flex">
                    <span className="t-label text-clay opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {s.kicker}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline-dark)] text-bone transition-all duration-500 group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
                      <svg width="14" height="9" viewBox="0 0 16 10" fill="none" aria-hidden>
                        <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Sticky preview — desktop only. On mobile the list is enough. */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 mt-10">
              <div className="tone relative aspect-[4/5] w-full">
                {services.map((s, i) => (
                  <Image
                    key={s.slug}
                    src={s.image}
                    alt={`${s.title} — Woodex Interior`}
                    fill
                    sizes="40vw"
                    quality={78}
                    className="object-cover"
                    style={{
                      opacity: i === active ? 1 : 0,
                      transform: i === active ? "scale(1)" : "scale(1.06)",
                      transition: "opacity .9s cubic-bezier(0.76,0,0.24,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  />
                ))}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-7">
                  <p className="t-label text-brass-light">{services[active].kicker}</p>
                  <p className="t-h3 mt-2 text-bone">{services[active].title}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="t-meta text-clay">
                  {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
                <div className="relative h-px flex-1 mx-6 bg-[var(--hairline-dark)]">
                  <span
                    className="absolute inset-y-0 left-0 bg-brass transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ width: `${((active + 1) / services.length) * 100}%` }}
                  />
                </div>
                <p className="t-meta text-clay">Hover to preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
