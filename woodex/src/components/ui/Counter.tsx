"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up once, when scrolled into view. Uses easeOutExpo so the number
 * lands rather than crawls — a linear count reads like a loading bar.
 */
export function Counter({
  to,
  suffix = "",
  duration = 1600,
  className = "",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || fired.current) return;
        fired.current = true;

        // Reduced motion: land on the final value immediately. Done inside
        // the observer callback (an external event) rather than in the effect
        // body, so we never trigger a synchronous cascading render.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setN(to);
          return;
        }

        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setN(Math.round(eased * to));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}
