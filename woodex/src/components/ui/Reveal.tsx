"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Fraction of the element that must be visible before firing. */
  threshold?: number;
  /** Fires this many px before the element reaches the viewport edge. */
  rootMargin?: string;
  delay?: number;
  once?: boolean;
};

/**
 * The single reveal primitive for the whole site.
 * It only toggles `.is-in` — all timing lives in CSS, so reduced-motion and
 * no-JS states are handled by the stylesheet rather than by branching here.
 * Default rootMargin fires slightly BEFORE the element is visible so content
 * is already settled by the time the eye arrives (avoids "pop" on fast scroll).
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  delay = 0,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) window.setTimeout(() => el.classList.add("is-in"), delay);
          else el.classList.add("is-in");
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove("is-in");
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, delay, once]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
