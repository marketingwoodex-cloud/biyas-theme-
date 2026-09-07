"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Eyebrow } from "@/components/ui/Btn";
import type { FAQ } from "@/lib/content/types";

/**
 * FAQ — two jobs at once.
 * For users: it answers the objections that stop a form submission (cost,
 * timeline, disruption, who is accountable) at the exact moment they arise.
 * For search: it emits FAQPage structured data and gives long-tail queries
 * a literal, quotable answer.
 */
export default function FaqBlock({
  items,
  title = "Before you ask",
  lines,
  tone = "dark",
}: {
  items: readonly FAQ[];
  title?: string;
  lines?: React.ReactNode[];
  tone?: "dark" | "light";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const light = tone === "light";

  return (
    <section className={light ? "bg-oat text-ink" : "bg-soot text-bone"}>
      <div className="shell-wide act">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow tone={light ? "clay" : "brass"}>{title}</Eyebrow>
              <SplitLines
                as="h2"
                className="t-h2 mt-6"
                lines={lines ?? [<span key="a">Straight answers,</span>, <span key="b">no <span className="t-aside">brochure voice</span>.</span>]}
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <dl>
              {items.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 60}>
                    <div
                      className={`fade-up border-b ${light ? "border-sand" : "border-[var(--hairline-dark)]"}`}
                    >
                      <dt>
                        <button
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          data-cursor="link"
                          className="flex w-full items-start justify-between gap-6 py-6 text-left"
                        >
                          <span className="t-h3 !text-[clamp(1.125rem,1.7vw,1.5rem)]">{f.q}</span>
                          <span
                            className={`relative mt-1.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors duration-500 ${
                              isOpen
                                ? "border-brass bg-brass text-ink"
                                : light
                                  ? "border-sand text-ink"
                                  : "border-[var(--hairline-dark)] text-bone"
                            }`}
                            aria-hidden
                          >
                            <span className="absolute h-px w-3 bg-current" />
                            <span
                              className="absolute h-3 w-px bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                              style={{ transform: isOpen ? "rotate(90deg) scaleX(0)" : "none" }}
                            />
                          </span>
                        </button>
                      </dt>
                      <dd
                        className="grid transition-[grid-template-rows] duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                      >
                        <div className="overflow-hidden">
                          <p
                            className={`t-body max-w-[62ch] pb-7 pr-10 ${light ? "text-clay" : "text-clay"}`}
                            style={{
                              opacity: isOpen ? 1 : 0,
                              transition: "opacity .5s ease",
                            }}
                          >
                            {f.a}
                          </p>
                        </div>
                      </dd>
                    </div>
                  </Reveal>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
