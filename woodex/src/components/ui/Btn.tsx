import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "ghost" | "light";

const VARIANT: Record<Variant, string> = {
  solid: "btn-solid",
  ghost: "btn-ghost",
  light: "btn-light",
};

function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3.5 10.5 10.5 3.5M10.5 3.5H4.9M10.5 3.5v5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
    </svg>
  );
}

/**
 * The site's only button — the live identity's pill: label on the left,
 * a filled circular arrow badge on the right.
 *
 * Two things animate on hover, and they are deliberately different:
 *  · the LABEL rolls upward to an identical copy (precision, mechanical)
 *  · the BADGE rotates 45° so the diagonal arrow points due right (release)
 * The badge is the affordance — it is the highest-contrast object in the
 * control, so it is what the eye targets and what confirms the click.
 */
export function Btn({
  href,
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

  const inner = (
    <>
      <span className="btn-roll">
        <span>{children}</span>
        <span aria-hidden>{children}</span>
      </span>
      <span className="btn-badge">
        <Arrow />
      </span>
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

/** Submit-style button, same anatomy, for forms. */
export function BtnSubmit({
  children,
  busy = false,
  variant = "light",
  className = "",
}: {
  children: ReactNode;
  busy?: boolean;
  variant?: Variant;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={busy}
      data-cursor="link"
      className={`btn ${VARIANT[variant]} disabled:opacity-50 ${className}`}
    >
      <span className="btn-roll">
        <span>{children}</span>
        <span aria-hidden>{children}</span>
      </span>
      <span className="btn-badge">
        <Arrow />
      </span>
    </button>
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

/** Small uppercase mono label with a leading amber tick. */
export function Eyebrow({
  children,
  className = "",
  tone = "amber",
}: {
  children: ReactNode;
  className?: string;
  tone?: "amber" | "clay" | "bone";
}) {
  const color =
    tone === "amber" ? "text-amber" : tone === "clay" ? "text-clay" : "text-bone/60";
  return (
    <span className={`t-label inline-flex items-center gap-2.5 ${color} ${className}`}>
      <span className="inline-block h-px w-6 bg-current opacity-70" aria-hidden />
      {children}
    </span>
  );
}
