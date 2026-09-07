import { tokens, has } from "@/lib/siteConfig";

/**
 * PROOF PRIMITIVES
 *
 * The brief forbids inventing metrics. The safest way to honour that is to make
 * it *structurally impossible* to render one — not to rely on an author
 * remembering. So:
 *
 *  · <Stat> renders nothing at all when its token is unresolved. Not a zero,
 *    not an em dash, not "coming soon". The row simply has one fewer item.
 *  · <ProofRow> counts its resolved children and lays out to that count, so a
 *    proof bar with two verified facts still looks deliberate rather than gappy.
 *  · <Pending> is the only sanctioned way to show an unverified figure, and it
 *    labels itself as unverified.
 *
 * Resolve tokens in src/lib/siteConfig.ts once evidence exists.
 */

export function Stat({
  token,
  value,
  label,
  suffix = "",
  className = "",
}: {
  /** Key in siteConfig.tokens. When unresolved, the component renders null. */
  token?: string;
  /** A verified literal, for facts that need no token (e.g. cities served). */
  value?: string | number;
  label: string;
  suffix?: string;
  className?: string;
}) {
  const resolved = token ? (has(token) ? tokens[token] : null) : value;
  if (resolved === null || resolved === undefined || resolved === "") return null;

  return (
    <div className={className}>
      <p className="t-num text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
        {resolved}
        {suffix && <span className="text-bronze">{suffix}</span>}
      </p>
      <p className="t-meta mt-2 text-clay">{label}</p>
    </div>
  );
}

/**
 * Lays out only the children that actually rendered. A proof bar that silently
 * drops to two items should still read as a designed row, not as a mistake.
 */
export function ProofRow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const items = (Array.isArray(children) ? children : [children]).filter(Boolean);
  return (
    <div
      className={`grid gap-x-8 gap-y-8 ${
        items.length >= 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"
      } ${className}`}
    >
      {items}
    </div>
  );
}

/**
 * The only sanctioned way to display an unverified figure — and it says so.
 * Used on placeholder case studies.
 */
export function Pending({ label }: { label: string }) {
  return (
    <div>
      <p className="t-num text-[clamp(1.75rem,3vw,2.5rem)] leading-none text-clay/40">[  ]</p>
      <p className="t-meta mt-2 text-clay/60">{label}</p>
      <p className="t-meta mt-1 text-clay/40">Pending client verification</p>
    </div>
  );
}
