import Link from "next/link";
import { brand, contact, social, cta } from "@/lib/brand";
import { services } from "@/lib/content/services";
import { Btn, Eyebrow } from "@/components/ui/Btn";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--hairline-dark)] bg-ink">
      {/* Closing CTA — the last conversion surface on every page. */}
      <Reveal className="shell-wide border-b border-[var(--hairline-dark)] py-[clamp(4rem,9vw,8rem)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Next step</Eyebrow>
            <SplitLines
              as="h2"
              className="t-h1 mt-6 text-bone"
              lines={[
                <>Send us a floor plan.</>,
                <>
                  We&apos;ll send back <span className="t-aside">a real number</span>.
                </>,
              ]}
            />
          </div>
          <div className="fade-up lg:col-span-5 lg:pl-8" style={{ transitionDelay: "220ms" }}>
            <p className="t-body max-w-[42ch] text-clay">
              No presentation, no pitch deck, no obligation. A banded estimate and a scope
              schedule, usually within three working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="/contact" variant="solid">
                {cta.primary}
              </Btn>
              <Btn href="/projects" variant="ghost">
                {cta.work}
              </Btn>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Directory */}
      <div className="shell-wide grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="t-h3 text-bone" data-cursor="link">
            {brand.name}
            <span className="text-brass">.</span>
          </Link>
          <p className="t-meta mt-3 text-clay">{brand.descriptor}</p>
          <p className="t-body mt-6 max-w-[30ch] text-clay">{brand.promise}</p>

          <div className="mt-8 flex gap-2">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                data-cursor="link"
                className="t-label grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline-dark)] text-clay transition-colors hover:border-brass hover:bg-brass hover:text-ink"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>

        <nav className="lg:col-span-3" aria-label="Services">
          <p className="t-label text-brass">Services</p>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="ulink t-meta text-clay hover:text-bone" data-cursor="link">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label="Studio">
          <p className="t-label text-brass">Studio</p>
          <ul className="mt-5 space-y-2.5">
            {[
              ["/about", "About"],
              ["/projects", "Projects"],
              ["/services", "Services"],
              ["/contact", "Contact"],
              ["/sitemap.xml", "Sitemap"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="ulink t-meta text-clay hover:text-bone" data-cursor="link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic lg:col-span-3">
          <p className="t-label text-brass">Studio &amp; workshop</p>
          <p className="t-meta mt-5 text-clay">
            {contact.street}
            <br />
            {contact.city} {contact.postal}
            <br />
            {contact.country}
          </p>
          <a href={`mailto:${contact.email}`} className="ulink t-meta mt-4 block text-bone" data-cursor="link">
            {contact.email}
          </a>
          <a href={`tel:${contact.phoneHref}`} className="ulink t-meta mt-1.5 block text-bone" data-cursor="link">
            {contact.phone}
          </a>
          <p className="t-meta mt-4 text-clay/70">{contact.hours}</p>
        </address>
      </div>

      {/* Oversized wordmark — the page signs off in the brand's own hand. */}
      <div className="shell-wide select-none pb-6" aria-hidden>
        <div className="rule rule-dark mb-6" />
        <p
          className="font-[family-name:var(--font-display)] leading-[0.78] tracking-[-0.05em] text-bone/[0.07]"
          style={{ fontSize: "clamp(4rem, 20vw, 22rem)" }}
        >
          {brand.fullName}
        </p>
      </div>

      <div className="shell-wide flex flex-col gap-3 border-t border-[var(--hairline-dark)] py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-meta text-clay/70">
          © {year} {brand.legalName}. All rights reserved.
        </p>
        <p className="t-meta text-clay/70">
          Design, manufacture &amp; delivery under one contract.
        </p>
      </div>
    </footer>
  );
}
