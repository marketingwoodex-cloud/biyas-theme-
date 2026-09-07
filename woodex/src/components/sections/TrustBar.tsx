import { Marquee } from "@/components/ui/Marquee";
import { clients } from "@/lib/content/site";

/**
 * A thin band of proof directly under the hero. Deliberately quiet: names
 * at 12px in mono, not logos at 80px. Logo walls read as borrowed authority;
 * a typeset list reads as a client roster.
 */
export default function TrustBar() {
  return (
    <section className="relative border-y border-[var(--hairline-dark)] bg-soot py-5" aria-label="Selected clients">
      <Marquee speed={52}>
        {clients.map((c) => (
          <span key={c} className="flex items-center whitespace-nowrap">
            <span className="t-meta px-8 text-clay">{c}</span>
            <span className="h-1 w-1 rounded-full bg-amber/50" aria-hidden />
          </span>
        ))}
      </Marquee>
      {/* Edge fades so the loop never appears to hit a wall. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-soot to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-soot to-transparent" />
    </section>
  );
}
