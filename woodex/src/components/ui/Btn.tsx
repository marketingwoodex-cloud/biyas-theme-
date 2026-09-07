import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "ghost" | "light";

const VARIANT: Record<Variant, string> = {
  solid: "btn-solid",
  ghost: "btn-ghost",
  light: "btn-light",
};

/**
 * The site's only button. The label rolls upward on hover, revealing an
 * identical copy — a small promise that the interface responds precisely.
 */
export function Btn({
  href,
  children,
  variant = "solid",
  className = "",
  arrow = true,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const inner = (
    <>
      <span className="btn-roll">
        <span>{children}</span>
        <span aria-hidden>{children}</span>
      </span>
      {arrow && (
        <svg
          className="btn-arrow shrink-0"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          aria-hidden
        >
          <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
    </>
  );

  const cls = `btn ${VARIANT[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} data-cursor="link">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} data-cursor="link" {...rest}>
      {inner}
    </Link>
  );
}

/** Text link with a directional underline sweep. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`ulink t-label ${className}`} data-cursor="link">
      {children}
    </Link>
  );
}

/** Small uppercase mono label with a leading brass tick. */
export function Eyebrow({
  children,
  className = "",
  tone = "brass",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brass" | "clay" | "bone";
}) {
  const color =
    tone === "brass" ? "text-brass" : tone === "clay" ? "text-clay" : "text-bone/60";
  return (
    <span className={`t-label inline-flex items-center gap-2.5 ${color} ${className}`}>
      <span className="inline-block h-px w-6 bg-current opacity-60" aria-hidden />
      {children}
    </span>
  );
}
