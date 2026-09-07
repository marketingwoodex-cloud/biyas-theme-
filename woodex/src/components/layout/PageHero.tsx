import Link from "next/link";
import Image from "next/image";
import { SplitLines } from "@/components/ui/SplitLines";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Btn";
import type { ReactNode } from "react";

/**
 * Inner-page opener. Shorter than the home hero (68svh) so secondary pages
 * get to their content fast, but tall enough to keep the cinematic register.
 * The image sits at 55% opacity behind an ink wash — inner pages are about
 * reading, so photography supports rather than competes.
 */
export default function PageHero({
  eyebrow,
  lines,
  sub,
  image,
  imageAlt,
  crumbs,
  meta,
}: {
  eyebrow: string;
  lines: ReactNode[];
  sub?: string;
  image: string;
  imageAlt: string;
  crumbs: { name: string; path: string }[];
  meta?: { k: string; v: string }[];
}) {
  return (
    <section className="relative flex min-h-[68svh] flex-col justify-end overflow-hidden bg-ink pb-14 pt-40 lg:min-h-[74svh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover opacity-[0.55]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(11,10,8,.96) 0%, rgba(11,10,8,.55) 45%, rgba(11,10,8,.8) 100%)",
        }}
      />

      <Reveal className="shell-wide relative">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-2">
                {i > 0 && <span className="t-meta text-clay/40" aria-hidden>/</span>}
                {i === crumbs.length - 1 ? (
                  <span className="t-meta text-clay" aria-current="page">{c.name}</span>
                ) : (
                  <Link href={c.path} className="ulink t-meta text-clay hover:text-bone" data-cursor="link">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Eyebrow>{eyebrow}</Eyebrow>

        <SplitLines as="h1" className="t-h1 mt-6 max-w-[18ch] text-bone" lines={lines} base={120} />

        {sub && (
          <p className="fade-up t-lede mt-8 max-w-[58ch] text-clay" style={{ transitionDelay: "420ms" }}>
            {sub}
          </p>
        )}

        {meta && (
          <dl className="fade-up mt-12 grid grid-cols-2 gap-6 border-t border-[var(--hairline-dark)] pt-7 sm:grid-cols-4" style={{ transitionDelay: "520ms" }}>
            {meta.map((m) => (
              <div key={m.k}>
                <dt className="t-label text-brass">{m.k}</dt>
                <dd className="t-body mt-2 text-bone">{m.v}</dd>
              </div>
            ))}
          </dl>
        )}
      </Reveal>
    </section>
  );
}
