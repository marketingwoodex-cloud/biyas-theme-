"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, contact, cta } from "@/lib/brand";
import { services } from "@/lib/content/services";
import { Btn } from "@/components/ui/Btn";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", mega: true },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  /* Menu state is keyed to the pathname rather than reset in an effect.
     When the route changes the key stops matching, so both menus close
     automatically — including on browser back/forward. */
  const [openOn, setOpenOn] = useState<string | null>(null);
  const [megaOn, setMegaOn] = useState<string | null>(null);
  const open = openOn === path;
  const mega = megaOn === path;

  const setOpen = (v: boolean | ((p: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(open) : v;
    setOpenOn(next ? path : null);
  };
  const setMega = (v: boolean) => setMegaOn(v ? path : null);

  /* Header hides on scroll-down, returns on scroll-up: keeps the CTA one
     gesture away without stealing 80px of a cinematic viewport. */
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 420 && y > last && !mega);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mega]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        setMegaOn(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a href="#main" className="skip t-label">
        Skip to content
      </a>

      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          transform: hidden ? "translateY(-101%)" : "none",
          transition: "transform .6s cubic-bezier(0.16,1,0.3,1)",
        }}
        onMouseLeave={() => setMega(false)}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: scrolled || mega ? "color-mix(in oklab, var(--color-ink) 88%, transparent)" : "transparent",
            backdropFilter: scrolled || mega ? "blur(18px) saturate(1.2)" : "none",
            borderBottom: `1px solid ${scrolled || mega ? "var(--hairline-dark)" : "transparent"}`,
            transition: "background .45s ease, backdrop-filter .45s ease, border-color .45s ease",
          }}
        />

        <div className="shell-wide flex items-center justify-between py-5 lg:py-6">
          {/* Wordmark */}
          <Link href="/" className="group flex items-baseline gap-3" aria-label={`${brand.fullName} — home`} data-cursor="link">
            <span className="t-h3 leading-none tracking-[-0.03em] text-bone">
              {brand.name}
              <span className="text-brass">.</span>
            </span>
            <span className="t-label hidden text-clay sm:block">Interior</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV.map((n) => {
              const active = n.href === "/" ? path === "/" : path.startsWith(n.href);
              return (
                <div key={n.href} onMouseEnter={() => setMega(!!n.mega)}>
                  <Link
                    href={n.href}
                    data-cursor="link"
                    data-active={active}
                    aria-current={active ? "page" : undefined}
                    className="ulink t-label text-bone/75 transition-colors hover:text-bone"
                  >
                    {n.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={`tel:${contact.phoneHref}`} className="t-meta text-clay transition-colors hover:text-brass" data-cursor="link">
              {contact.phone}
            </a>
            <Btn href="/contact" variant="solid" className="!py-3 !px-6">
              {cta.primary}
            </Btn>
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className="block h-px w-6 bg-bone"
              style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none", transition: "transform .4s cubic-bezier(0.76,0,0.24,1)" }}
            />
            <span
              className="block h-px w-6 bg-bone"
              style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none", transition: "transform .4s cubic-bezier(0.76,0,0.24,1)" }}
            />
          </button>
        </div>

        {/* Services mega menu */}
        <div
          className="pointer-events-none absolute inset-x-0 top-full hidden overflow-hidden lg:block"
          style={{
            maxHeight: mega ? 420 : 0,
            transition: "max-height .6s cubic-bezier(0.76,0,0.24,1)",
          }}
        >
          <div
            className="pointer-events-auto border-b border-[var(--hairline-dark)] bg-[color-mix(in_oklab,var(--color-ink)_96%,transparent)] backdrop-blur-xl"
            onMouseEnter={() => setMega(true)}
          >
            <div className="shell-wide grid grid-cols-4 gap-x-8 gap-y-1 py-9">
              <div className="col-span-1 pr-8">
                <p className="t-label text-brass">What we do</p>
                <p className="t-body mt-4 max-w-[22ch] text-clay">
                  Seven disciplines, one contract. Design, manufacture and site — never subcontracted apart.
                </p>
                <Link href="/services" className="ulink t-label mt-6 inline-block text-bone" data-cursor="link">
                  All services →
                </Link>
              </div>
              <div className="col-span-3 grid grid-cols-2 gap-x-8">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    data-cursor="link"
                    className="group flex items-baseline gap-4 border-b border-[var(--hairline-dark)] py-3.5 transition-[padding] duration-500 hover:pl-2"
                  >
                    <span className="t-meta w-6 shrink-0 text-brass/70">{s.index}</span>
                    <span className="flex-1 font-[family-name:var(--font-display)] text-lg text-bone transition-colors group-hover:text-brass-light">
                      {s.title}
                    </span>
                    <span className="t-meta text-clay opacity-0 transition-opacity group-hover:opacity-100">{s.kicker}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 bg-ink lg:hidden"
        style={{
          clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: "clip-path .7s cubic-bezier(0.76,0,0.24,1)",
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col justify-between px-[var(--gutter)] pb-10 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                className="t-h2 border-b border-[var(--hairline-dark)] py-4 text-bone"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(24px)",
                  transition: `opacity .5s ease ${140 + i * 60}ms, transform .6s cubic-bezier(0.16,1,0.3,1) ${140 + i * 60}ms`,
                }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-2">
              {services.slice(0, 6).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="t-meta text-clay">
                  {s.short}
                </Link>
              ))}
            </div>
            <div className="rule rule-dark" />
            <a href={`tel:${contact.phoneHref}`} className="t-meta text-bone">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="t-meta text-clay">
              {contact.email}
            </a>
            <Btn href="/contact" variant="solid" className="mt-2 w-full justify-between">
              {cta.primary}
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
}
