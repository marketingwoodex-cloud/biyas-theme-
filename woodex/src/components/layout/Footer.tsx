import Link from "next/link";
import { brand, contact, social, cta } from "@/lib/brand";
import { locations } from "@/lib/content/locations";
import { indexedIndustries } from "@/lib/content/industries";
import { Btn } from "@/components/ui/Btn";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";

/**
 * FOOTER — rebuilt to the live Woodex structure.
 *
 * Composition notes:
 *  · The closing CTA and the directory share one band. Splitting them (as the
 *    previous version did) made the page end twice, which dilutes the ask.
 *  · Three link columns, not four: Practice (who we are) / Explore (what we
 *    made) / Get in touch. A visitor at the bottom of a page is in one of
 *    exactly those three states.
 *  · The wordmark is OUTLINED rather than filled. At this scale a solid fill
 *    competes with the links above it; a 1px stroke reads as an embossed
 *    sign-off — present, but clearly not content.
 */

const PRACTICE = [
  { href: "/about", label: "About" },
  { href: "/about#process", label: "Process" },
  { href: "/services/craft-bespoke-joinery", label: "Woodex Craft" },
  { href: "/services/3d-visualisation-studio", label: "3D Studio" },
  { href: "/contact", label: "Careers" },
];

const EXPLORE = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/process", label: "Process" },
  { href: "/request-proposal", label: "Request a Proposal" },
  { href: "/contact", label: "Contact" },
];

/* City pages are the highest-value SEO surface on the site, so they get a
   dedicated footer column — a sitewide internal link to each. */
const CITIES = locations.map((l) => ({ href: `/${l.slug}`, label: l.city }));

const SECTORS = indexedIndustries.map((i) => ({
  href: `/industries/${i.slug}`,
  label: i.name,
}));

function Column({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="t-label text-bone">{title}</h3>
      <ul className="mt-6 space-y-3.5">
        {items.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="ulink t-body text-bone/55 hover:text-bone" data-cursor="link">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--hairline-dark)] bg-ink">
      <div className="shell-wide pt-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-x-8 gap-y-14 lg:grid-cols-12">
          {/* ---- Closing ask ---- */}
          <Reveal className="lg:col-span-4">
            <SplitLines
              as="h2"
              className="t-h2 text-bone"
              lines={[<span key="a">Stay connected</span>, <span key="b">with us</span>]}
            />
            <p className="t-body fade-up mt-5 max-w-[34ch] text-bone/55" style={{ transitionDelay: "160ms" }}>
              Have a space in mind? Tell us what you have and where you are in the process.
            </p>
            <div className="fade-up mt-8" style={{ transitionDelay: "240ms" }}>
              <Btn href="/request-proposal" variant="light">
                {cta.primary}
              </Btn>
            </div>
          </Reveal>

          {/* ---- Directory ---- */}
          <Reveal className="lg:col-span-2 lg:col-start-5">
            <Column title="Practice" items={PRACTICE} />
          </Reveal>

          <Reveal className="lg:col-span-2" delay={80}>
            <Column title="Explore" items={EXPLORE} />
            {SECTORS.length > 0 && (
              <div className="mt-10">
                <Column title="Sectors" items={SECTORS} />
              </div>
            )}
          </Reveal>

          <Reveal className="lg:col-span-2" delay={120}>
            <Column title="Cities" items={CITIES} />
          </Reveal>

          <Reveal className="lg:col-span-3" delay={160}>
            <h3 className="t-label text-bone">Get in touch</h3>
            <address className="mt-6 space-y-3.5 not-italic">
              <a
                href={`mailto:${contact.email}`}
                className="ulink t-body block text-bone/55 hover:text-bone"
                data-cursor="link"
              >
                {contact.email}
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="ulink t-body block text-bone/55 hover:text-bone"
                data-cursor="link"
              >
                WhatsApp Woodex
              </a>
              <a
                href={`tel:${contact.phoneHref}`}
                className="ulink t-body block text-bone/55 hover:text-bone"
                data-cursor="link"
              >
                Call {contact.phone}
              </a>
              <p className="t-body text-bone/55">
                {contact.street}
                <br />
                {contact.city}, {contact.country}
                <br />
                {contact.hours}
              </p>
            </address>

            <div className="mt-7 flex gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  data-cursor="link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline-dark)] text-bone/60 transition-colors duration-400 hover:border-bone hover:bg-bone hover:text-ink"
                >
                  <span className="t-meta !text-[0.625rem]">{s.short}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---- Outlined wordmark sign-off ---- */}
      <div className="shell-wide mt-16 select-none" aria-hidden>
        <div className="rule rule-dark" />
        <p
          className="t-wordmark t-wordmark-outline pt-10 text-center"
          style={{ fontSize: "clamp(3.25rem, 15vw, 13rem)" }}
        >
          Interiors
        </p>
      </div>

      <div className="shell-wide flex flex-col gap-3 pb-8 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-meta text-bone/40">
          © {year} {brand.fullName}.
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          <Link href="/services" className="ulink t-meta text-bone/40 hover:text-bone" data-cursor="link">
            Services
          </Link>
          <Link href="/portfolio" className="ulink t-meta text-bone/40 hover:text-bone" data-cursor="link">
            Portfolio
          </Link>
          <Link href="/contact" className="ulink t-meta text-bone/40 hover:text-bone" data-cursor="link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
