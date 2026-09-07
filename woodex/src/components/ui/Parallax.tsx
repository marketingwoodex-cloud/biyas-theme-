"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { useScroll, useTransform, motion, useSpring } from "motion/react";

/**
 * Parallax image frame.
 * The FRAME is fixed height; the IMAGE is 118% tall and travels within it.
 * This produces depth without ever exposing an edge, and without layout
 * shift. `distance` is the total travel in % of the overscan.
 */
export function Parallax({
  src,
  alt,
  className = "",
  imgClassName = "",
  distance = 12,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  distance?: number;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [`-${distance}%`, `${distance}%`]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={`tone ${className}`}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      </motion.div>
      {children}
    </div>
  );
}
