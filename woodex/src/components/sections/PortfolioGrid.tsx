"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import { portfolio, CATEGORIES, type PortfolioCategory } from "@/lib/content/portfolio";

/**
 * Filterable portfolio grid.
 *
 * The filter writes to the URL (`/portfolio?type=office`) rather than living in
 * component state alone. Three reasons that matters:
 *   · a filtered view is shareable and bookmarkable
 *   · the back button behaves the way a user expects
 *   · it gives us a real analytics signal on which sectors get browsed
 *
 * `scroll: false` on the router push keeps the page from jumping to the top
 * when a filter is tapped — the grid updates under a stationary filter row.
 */
export default function PortfolioGrid() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("type");

  const items = useMemo(() => {
    if (!active) return portfolio;
    const match = CATEGORIES.find((c) => c.toLowerCase() === active.toLowerCase());
    return match ? portfolio.filter((p) => p.category === match) : portfolio;
  }, [active]);

  const setFilter = (c: PortfolioCategory | null) => {
    const q = c ? `?type=${c.toLowerCase()}` : "";
    router.push(`/portfolio${q}`, { scroll: false });
  };

  const isOn = (c: PortfolioCategory | null) =>
    c === null ? !active : active?.toLowerCase() === c.toLowerCase();

  return (
    <>
      {/* Filter row */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
        <button
          type="button"
          onClick={() => setFilter(null)}
          aria-pressed={isOn(null)}
          data-cursor="link"
          className="chip"
        >
          All
        </button>
        {CATEGORIES.map((c) => {
          const count = portfolio.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={isOn(c)}
              disabled={count === 0}
              data-cursor="link"
              className="chip disabled:cursor-not-allowed disabled:opacity-35"
            >
              {c}
              <span className="ml-2 opacity-50">{count}</span>
            </button>
          );
        })}
      </div>

      <p className="t-meta mt-5 text-clay" aria-live="polite">
        {items.length} {items.length === 1 ? "project" : "projects"}
        {active ? ` in ${active}` : ""}
      </p>

      {/* Grid */}
      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => {
          const href = p.hasCaseStudy ? `/case-studies/${p.slug}` : `/portfolio/${p.slug}`;
          return (
            <Reveal key={p.id} delay={Math.min(i, 5) * 70}>
              <Link href={href} className="group block" data-cursor="view" data-cursor-label="View">
                <PlaceholderImage
                  src={p.thumbnail.src}
                  alt={p.thumbnail.alt}
                  pending={p.thumbnail.pending}
                  ratio="4:3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="wipe"
                />

                <div className="mt-5">
                  <div className="flex items-center gap-3">
                    <span className="t-num text-sm text-bronze">{p.index}</span>
                    <span className="t-meta text-clay">
                      {p.category} · {p.city}
                    </span>
                  </div>
                  <h3 className="t-h5 mt-2 text-ink transition-colors duration-500 group-hover:text-bronze">
                    {p.name}
                  </h3>
                  <p className="t-meta mt-1 text-clay">{p.size}</p>

                  {p.status === "placeholder" && (
                    <span className="mt-3 inline-block rounded-full border border-sand px-3 py-1 text-[0.75rem] leading-none text-clay">
                      Project details pending
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      {items.length === 0 && (
        <p className="t-lede mt-16 text-clay">
          No projects in this sector yet.{" "}
          <button onClick={() => setFilter(null)} className="ulink text-ink">
            Show all
          </button>
        </p>
      )}
    </>
  );
}
