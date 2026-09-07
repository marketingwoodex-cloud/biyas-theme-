import type { ReactNode } from "react";

/**
 * CSS-only infinite marquee. The track holds two identical halves and
 * translates -50%, so the loop is seamless with zero JS and zero jank.
 * Pauses on hover so users can actually read it — a marquee that cannot be
 * stopped is decoration, not content.
 */
export function Marquee({
  children,
  speed = 38,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee-host overflow-hidden ${className}`}>
      <div
        className={`marquee ${reverse ? "marquee-rev" : ""}`}
        style={{ ["--speed" as string]: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
