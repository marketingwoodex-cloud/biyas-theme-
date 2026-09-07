import { Fragment, type ElementType, type ReactNode } from "react";

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
        <Fragment key={i}>
          <span className="line-mask">
            <span style={{ transitionDelay: `${base + i * stagger}ms` }}>{line}</span>
          </span>
          {/* Each line is its own overflow-hidden block, so textContent and the
              clipboard butt them together — "Six services you" + "can actually
              buy" reads as "youcan". A raw text node between the blocks is
              always present in the text layer and collapses visually, which an
              sr-only span does not reliably do across extractors. */}
          {i < lines.length - 1 && " "}
        </Fragment>
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
