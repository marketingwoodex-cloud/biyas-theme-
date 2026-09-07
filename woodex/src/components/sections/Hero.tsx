"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import DustField from "@/components/three/DustField";
import { Btn } from "@/components/ui/Btn";
import { cta, contact } from "@/lib/brand";

/**
 * ACT I — THE THRESHOLD
 *
 * Three slides, 6.5s each. Each is a different room and a different promise,
 * so within twenty seconds a visitor knows the studio works across workplace,
 * home and hospitality — without reading a service list.
 *
 * Motion contract:
 *  · Image crossfades with a slow Ken Burns scale (1.0 → 1.07 over the slide).
 *  · Headline lines mask out upward, then the next masks in — the type
 *    behaves like a mechanical split-flap, which suits a studio about
 *    tolerance and precision.
 *  · The whole hero parallaxes at 0.35× scroll speed and dims as the next
 *    act rises over it, so the page feels layered in Z rather than stacked.
 */

const SLIDES = [
  {
    img: "/img/hero-01.jpg",
    alt: "Fluted walnut reception wall with brass reveals and honed travertine floor, raked by afternoon light",
    eyebrow: "Workplace",
    lines: ["Rooms that", "argue your case"],
    aside: "before you speak",
    note: "Meridian Capital HQ — 11,400 sq ft, Lahore",
  },
  {
    img: "/img/hero-02.jpg",
    alt: "Luxury residential living space with oak slatted ceiling, limestone fireplace and warm cove lighting at dusk",
    eyebrow: "Residential",
    lines: ["A home that reads", "as one idea"],
    aside: "room to room",
    note: "Villa Noor — 8,200 sq ft, DHA Phase VI",
  },
  {
    img: "/img/hero-03.jpg",
    alt: "Boutique hospitality lobby with sculptural end-grain walnut reception desk and ribbed brass screen",
    eyebrow: "Hospitality",
    lines: ["Every detail", "earns its place"],
    aside: "and its cost",
    note: "The Long Room — 96 covers, MM Alam Road",
  },
];

const DURATION = 6500;

export default function Hero() {
  const [i, setI] = useState(0);
  const [progress, setProgress] = useState(0);
  const paused = useRef(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const veil = useTransform(scrollYProgress, [0, 1], [0, 0.75]);

  useEffect(() => {
    let start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (paused.current) {
        start = now - progress * DURATION;
        return;
      }
      const t = (now - start) / DURATION;
      if (t >= 1) {
        start = now;
        setI((v) => (v + 1) % SLIDES.length);
        setProgress(0);
      } else setProgress(t);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  const go = (n: number) => {
    setI(n);
    setProgress(0);
  };

  const s = SLIDES[i];

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-roledescription="carousel"
      aria-label="Featured work"
    >
      {/* ---- Layer 1: photography ---- */}
      <motion.div style={{ y }} className="absolute inset-0 -top-[8%] h-[116%]">
        {SLIDES.map((sl, n) => (
          <div
            key={sl.img}
            className="absolute inset-0"
            style={{
              opacity: n === i ? 1 : 0,
              transition: "opacity 1.4s cubic-bezier(0.76,0,0.24,1)",
            }}
          >
            <Image
              src={sl.img}
              alt={sl.alt}
              fill
              priority={n === 0}
              quality={82}
              sizes="100vw"
              className="object-cover"
              style={{
                transform: n === i ? "scale(1.07)" : "scale(1)",
                transition: n === i ? `transform ${DURATION + 1400}ms linear` : "none",
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* ---- Layer 2: grade. Two gradients, not one: a bottom-weighted
             scrim for legibility and a left wash so the copy column always
             sits on the darkest part of the frame. ---- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,10,8,.92) 0%, rgba(11,10,8,.62) 38%, rgba(11,10,8,.12) 72%, rgba(11,10,8,.4) 100%), linear-gradient(0deg, rgba(11,10,8,.92) 0%, rgba(11,10,8,.15) 48%, rgba(11,10,8,.55) 100%)",
        }}
      />
      <motion.div className="absolute inset-0 bg-ink" style={{ opacity: veil }} />

      {/* ---- Layer 3: WebGL dust ---- */}
      <DustField className="pointer-events-none absolute inset-0 mix-blend-screen" />

      {/* ---- Layer 4: copy ---- */}
      <motion.div
        style={{ y: copyY, opacity: fade }}
        className="shell-wide relative flex h-full flex-col justify-end pb-[clamp(5rem,11vh,8rem)]"
      >
        <div className="max-w-[min(62rem,88vw)]">
          {/* Eyebrow swaps with a short vertical roll */}
          <div className="relative mb-6 h-4 overflow-hidden">
            {SLIDES.map((sl, n) => (
              <span
                key={sl.eyebrow}
                className="t-label absolute inset-x-0 flex items-center gap-2.5 text-brass"
                style={{
                  transform: `translateY(${(n - i) * 120}%)`,
                  opacity: n === i ? 1 : 0,
                  transition: "transform .8s cubic-bezier(0.16,1,0.3,1), opacity .5s ease",
                }}
              >
                <span className="inline-block h-px w-7 bg-current" aria-hidden />
                {sl.eyebrow}
              </span>
            ))}
          </div>

          <h1 className="t-display text-bone">
            <span className="sr-only">
              {s.lines.join(" ")} {s.aside}
            </span>
            {[0, 1].map((li) => (
              <span key={li} className="block overflow-hidden">
                <span
                  className="block"
                  style={{
                    transform: "translateY(0)",
                    animation: `heroIn .95s cubic-bezier(0.16,1,0.3,1) ${li * 0.09}s both`,
                  }}
                  key={`${i}-${li}`}
                  aria-hidden
                >
                  {s.lines[li]}
                </span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <span
                className="t-aside block"
                key={`${i}-a`}
                style={{ animation: "heroIn .95s cubic-bezier(0.16,1,0.3,1) .18s both" }}
                aria-hidden
              >
                {s.aside}
              </span>
            </span>
          </h1>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Btn href="/contact" variant="solid">
              {cta.primary}
            </Btn>
            <Btn href="/projects" variant="ghost">
              {cta.work}
            </Btn>
          </div>
        </div>

        {/* ---- Slide controls ---- */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--hairline-dark)] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            {SLIDES.map((sl, n) => (
              <button
                key={sl.eyebrow}
                onClick={() => go(n)}
                data-cursor="link"
                aria-label={`Show ${sl.eyebrow}`}
                aria-current={n === i}
                className="group flex items-center gap-3"
              >
                <span className="t-meta text-clay transition-colors group-hover:text-bone" style={{ color: n === i ? "var(--color-bone)" : undefined }}>
                  0{n + 1}
                </span>
                <span className="relative block h-px w-10 bg-[var(--hairline-dark)] sm:w-16">
                  <span
                    className="absolute inset-y-0 left-0 bg-brass"
                    style={{
                      width: n === i ? `${progress * 100}%` : n < i ? "100%" : "0%",
                      opacity: n === i ? 1 : 0.25,
                    }}
                  />
                </span>
              </button>
            ))}
          </div>

          <p className="t-meta text-clay">{s.note}</p>
        </div>
      </motion.div>

      {/* ---- Scroll cue ---- */}
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute bottom-6 right-[var(--gutter)] hidden items-center gap-3 lg:flex"
      >
        <span className="t-label text-clay">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-[var(--hairline-dark)]">
          <span className="absolute inset-x-0 h-4 bg-brass" style={{ animation: "cue 2.2s cubic-bezier(0.76,0,0.24,1) infinite" }} />
        </span>
      </motion.div>

      {/* Vertical location stamp */}
      <div className="pointer-events-none absolute left-[calc(var(--gutter)-0.5rem)] top-1/2 hidden -translate-y-1/2 xl:block">
        <p className="t-label rotate-180 text-clay/60 [writing-mode:vertical-rl]">
          {contact.city} · Est. 2007
        </p>
      </div>

      <style>{`
        @keyframes heroIn { from { transform: translateY(105%); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes cue { 0% { transform: translateY(-100%) } 60%,100% { transform: translateY(1000%) } }
        @media (prefers-reduced-motion: reduce) {
          @keyframes heroIn { from { transform: none; opacity: 1 } to { transform: none; opacity: 1 } }
          @keyframes cue { from { transform: none } to { transform: none } }
        }
      `}</style>
    </section>
  );
}
