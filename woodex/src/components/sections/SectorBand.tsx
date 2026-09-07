import { Marquee } from "@/components/ui/Marquee";
import { sectors } from "@/lib/brand";

/**
 * SECTOR BAND
 * A full-bleed navy band of the six sectors, running as a slow marquee.
 * Its job is coverage, not decoration: within two seconds a visitor learns
 * Woodex works across homes, workplaces, hospitality, retail, 3D and
 * renovation — a fact that would otherwise need a paragraph nobody reads.
 *
 * Set in display weight rather than mono so it reads as a statement of scope
 * rather than as a ticker.
 */
export default function SectorBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-8 lg:py-10" aria-label="Sectors we work in">
      <Marquee speed={44}>
        {sectors.map((s) => (
          <span key={s} className="flex items-center whitespace-nowrap">
            <span className="t-h3 px-8 font-medium text-bone/80 lg:px-12">{s}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
          </span>
        ))}
      </Marquee>

      {/* Edge fades so the loop never appears to hit a wall */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink to-transparent lg:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink to-transparent lg:w-40" />
    </section>
  );
}
