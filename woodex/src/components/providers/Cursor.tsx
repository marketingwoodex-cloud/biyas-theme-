"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: a hard brass dot that tracks 1:1 (so clicking feels precise)
 * and a lagging ring that interpolates (so movement feels weighted).
 * The ring changes state from `data-cursor` attributes anywhere in the tree.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const d = dot.current!;
    const r = ring.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        rx = mx;
        ry = my;
        d.style.opacity = "1";
        r.style.opacity = "1";
      }
      d.style.transform = `translate3d(${mx}px, ${my}px, 0)`;

      const t = e.target as HTMLElement;
      const host = t?.closest?.("[data-cursor]") as HTMLElement | null;
      r.dataset.state = host?.dataset.cursor ?? "";
      const label = host?.dataset.cursorLabel ?? "";
      r.textContent = label;
    };

    const onLeave = () => {
      visible = false;
      d.style.opacity = "0";
      r.style.opacity = "0";
    };

    // 0.16 lerp ≈ 120ms visual lag: reads as mass, not as lag.
    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{ opacity: 0 }} aria-hidden />
      <div
        ref={ring}
        className="cursor-ring t-label grid place-items-center text-ink"
        style={{ opacity: 0 }}
        aria-hidden
      />
    </>
  );
}
