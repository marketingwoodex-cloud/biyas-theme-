"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content/services";
import { Eyebrow, Btn } from "@/components/ui/Btn";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { cta } from "@/lib/brand";

/**
 * ACT III — THE OFFER
 *
 * Rebuilt to the Linoxa card language and the original Woodex layout:
 * a large rounded image panel on the LEFT that swaps to the hovered service,
 * and the six services as rows inside a single rounded card on the RIGHT.
 *
 * Why this beats the previous version:
 *  · The image leads. Interiors are bought with the eyes; a text index made
 *    the visitor work before it gave them anything to look at.
 *  · One card, six dividers — not six cards. Six separate cards would ask for
 *    six equal-weight decisions; rows inside one container read as a menu you
 *    scan top to bottom, which is how people actually choose a service.
 *  · The active row is marked by an bronze rail and a brightened title, so at
 *    any moment exactly one thing is selected. No ambiguity, no hover fog.
 *  · Every row is a real link with its own focus state, so the whole thing
 *    works on keyboard and on touch, where hover does not exist.
 */
export default function ServicesList() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section className="relative bg-ink" id="services">
      <div className="shell-wide act">
        {/* ---- Section head ---- */}
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>What we do</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6 text-bone"
              lines={[
                <span key="a">Six services you</span>,
                <span key="b">
                  can <span className="t-aside">actually buy</span>.
                </span>,
              ]}
            />
          </div>
          <div className="fade-up lg:col-span-4 lg:col-start-9" style={{ transitionDelay: "240ms" }}>
            <p className="t-body text-bone/60">
              Not capabilities. Not disciplines. Six things you can point at, price and
              commission — each one drawn in 3D before it is built.
            </p>
            <Link
              href="/services"
              className="ulink t-label mt-6 inline-block text-bone"
              data-cursor="link"
            >
              All services
            </Link>
          </div>
        </Reveal>

        {/* ---- Panel + menu ---- */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Image panel */}
          <Reveal className="lg:col-span-5">
            <div className="tone tone-flat relative aspect-[4/5] w-full overflow-hidden lg:sticky lg:top-28">
              {services.map((sv, i) => (
                <Image
                  key={sv.slug}
                  src={sv.image}
                  alt={`${sv.title} — Woodex Interior`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={78}
                  className="object-cover"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? "scale(1)" : "scale(1.05)",
                    transition:
                      "opacity .8s cubic-bezier(0.76,0,0.24,1), transform 1.5s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
              ))}

              {/* Bottom scrim so the caption never sits on a bright plate */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(14,26,43,.92) 0%, rgba(14,26,43,.28) 34%, transparent 62%)",
                }}
              />

              {/* Caption chip — the identity's rounded-card motif, at small scale */}
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <div className="rounded-[var(--r-md)] bg-ink/55 p-5 backdrop-blur-md sm:p-6">
                  <p className="t-label text-bronze">{s.kicker}</p>
                  <p className="t-h4 mt-2.5 text-bone">{s.headline}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="ulink t-label mt-4 inline-block text-bone/70"
                    data-cursor="link"
                  >
                    View {s.title}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Menu card */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overflow-hidden rounded-[var(--r-lg)] border border-[var(--hairline-dark)] bg-char/40">
                {services.map((sv, i) => {
                  const on = i === active;
                  return (
                    <Link
                      key={sv.slug}
                      href={`/services/${sv.slug}`}
                      data-cursor="link"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      aria-current={on}
                      className={`group relative flex items-start gap-5 border-b border-[var(--hairline-dark)] px-6 py-7 last:border-b-0 sm:gap-7 sm:px-8 sm:py-8 ${
                        on ? "bg-bone/[0.035]" : ""
                      }`}
                      style={{ transition: "background .5s cubic-bezier(0.16,1,0.3,1)" }}
                    >
                      {/* Active rail */}
                      <span
                        aria-hidden
                        className="absolute inset-y-0 left-0 w-[2px] origin-top bg-bronze"
                        style={{
                          transform: `scaleY(${on ? 1 : 0})`,
                          transition: "transform .6s cubic-bezier(0.16,1,0.3,1)",
                        }}
                      />

                      <span
                        className="t-meta w-7 shrink-0 pt-1"
                        style={{
                          color: on ? "var(--color-bronze)" : "var(--color-clay)",
                          transition: "color .4s ease",
                        }}
                      >
                        {sv.index}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className="t-h4 block"
                          style={{
                            color: on ? "var(--color-bone)" : "color-mix(in oklab, var(--color-bone) 72%, transparent)",
                            transition: "color .4s ease",
                          }}
                        >
                          {sv.title}
                        </span>
                        <span className="t-sub mt-1.5 block max-w-[48ch] text-bone/45">
                          {sv.short === sv.title ? sv.kicker : sv.short} · {sv.deliverables.length} deliverables
                        </span>
                      </span>

                      {/* Arrow badge — matches the button anatomy site-wide */}
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full"
                        style={{
                          background: on ? "var(--color-bone)" : "color-mix(in oklab, var(--color-bone) 9%, transparent)",
                          color: on ? "var(--color-ink)" : "var(--color-bone)",
                          transform: on ? "rotate(45deg)" : "none",
                          transition:
                            "background .45s cubic-bezier(0.16,1,0.3,1), color .45s ease, transform .55s cubic-bezier(0.16,1,0.3,1)",
                        }}
                        aria-hidden
                      >
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M3.5 10.5 10.5 3.5M10.5 3.5H4.9M10.5 3.5v5.6"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="square"
                          />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </Reveal>

            {/* Closing row — a service list should always end in an action */}
            <Reveal delay={140}>
              <div className="fade-up mt-6 flex flex-wrap items-center justify-between gap-6 rounded-[var(--r-lg)] border border-[var(--hairline-dark)] px-6 py-6 sm:px-8">
                <p className="t-h5 max-w-[30ch] text-bone">
                  Not sure which one you need? <span className="text-bone/55">Send a floor plan.</span>
                </p>
                <Btn href="/contact" variant="ghost">
                  {cta.estimate}
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
