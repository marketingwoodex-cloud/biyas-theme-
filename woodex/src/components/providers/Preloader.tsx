"use client";

import { useEffect, useState } from "react";

const WORDS = ["Drawn", "Documented", "Built"];

/**
 * Loading sequence — 2.4s maximum, and it earns the time.
 * A counter runs 00→100 while three brand words cross-fade, then two
 * horizontal panels split apart to reveal the hero already in motion.
 * Session-flagged: returning within a session skips straight to the site.
 */
export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"load" | "open" | "done">("load");
  const [word, setWord] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem("wx-intro");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    const DUR = 1750;

    let raf = 0;

    /* Everything — including the "skip" branch — resolves inside the rAF
       loop. State is therefore only ever set from an external callback,
       never synchronously in the effect body, so React never has to run a
       cascading re-render on mount. */
    const tick = (now: number) => {
      if (seen || reduce) {
        setPhase("done");
        document.documentElement.dataset.intro = "done";
        return;
      }

      const t = Math.min(1, (now - start) / DUR);
      // easeOutQuart: fast to 70, deliberate crawl to 100 — feels like real work.
      const eased = 1 - Math.pow(1 - t, 4);
      setPct(Math.round(eased * 100));
      setWord(Math.min(2, Math.floor(t * 3)));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }

      setPhase("open");
      sessionStorage.setItem("wx-intro", "1");
      window.setTimeout(() => {
        setPhase("done");
        document.documentElement.dataset.intro = "done";
      }, 1150);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  if (phase === "done") return null;

  const opening = phase === "open";

  return (
    <div className="preloader fixed inset-0 z-[100] pointer-events-none" aria-hidden>
      {/* Two panels split vertically — a curtain, not a fade. */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 bg-ink"
        style={{
          transform: opening ? "translateY(-101%)" : "none",
          transition: "transform 1.05s cubic-bezier(0.76,0,0.24,1)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-ink"
        style={{
          transform: opening ? "translateY(101%)" : "none",
          transition: "transform 1.05s cubic-bezier(0.76,0,0.24,1)",
        }}
      />

      {/* Hairline that draws across the seam as loading completes. */}
      <div className="absolute inset-x-0 top-1/2 h-px overflow-hidden">
        <div
          className="h-full bg-amber origin-left"
          style={{
            transform: `scaleX(${opening ? 1 : pct / 100})`,
            opacity: opening ? 0 : 1,
            transition: "transform .15s linear, opacity .5s ease",
          }}
        />
      </div>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-6"
        style={{
          opacity: opening ? 0 : 1,
          transition: "opacity .4s ease",
        }}
      >
        <div className="relative h-8 overflow-hidden">
          {WORDS.map((w, i) => (
            <div
              key={w}
              className="t-h3 text-bone absolute inset-x-0 text-center"
              style={{
                transform: `translateY(${(i - word) * 100}%)`,
                opacity: i === word ? 1 : 0,
                transition: "transform .6s cubic-bezier(0.16,1,0.3,1), opacity .6s ease",
              }}
            >
              {w}
            </div>
          ))}
        </div>
        <div className="t-label text-amber tabular-nums">
          {String(pct).padStart(3, "0")}
        </div>
      </div>
    </div>
  );
}
