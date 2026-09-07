import type { ElementType, ReactNode } from "react";

/**
 * Line-masked text. Each line sits in an overflow-hidden box and slides up
 * from below on reveal — the type appears to rise out of the page rather
 * than fading in. Staggered by line, never by character: character stagger
 * on display type reads as a gimmick and hurts legibility.
 */
export function SplitLines({
  lines,
  as: Tag = "h2",
  className = "",
  stagger = 90,
  base = 0,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  stagger?: number;
  base?: number;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span style={{ transitionDelay: `${base + i * stagger}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Single-line variant for short headings and labels. */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`line-mask ${className}`}>
      <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
    </span>
  );
}
