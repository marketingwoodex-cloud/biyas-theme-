import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { Eyebrow } from "@/components/ui/Btn";
import ContactForm from "@/components/sections/ContactForm";
import Jsonld, { breadcrumbSchema, faqSchema } from "@/components/seo/Jsonld";
import { contact, siteUrl, social } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact — Get a Fit-Out Estimate",
  description:
    "Send a floor plan and get a banded fit-out estimate with a scope schedule, usually within three working days. Woodex Interior studio and workshop, Lahore.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Woodex Interior",
    description: "Send a floor plan. We'll send back a real number.",
    url: `${siteUrl}/contact`,
    images: [{ url: "/img/hero-03.jpg", width: 1376, height: 768 }],
  },
};

const faqs = [
  {
    q: "What should I send with my enquiry?",
    a: "A floor plan in any format — CAD, PDF, or a photograph of a sketch — plus a sentence about what is not working. That is enough for a banded estimate. Budget and target date help us tell you quickly whether we are the right studio.",
  },
  {
    q: "How quickly will I hear back?",
    a: "A human reply within one working day, and a banded estimate with a scope schedule within three, provided we have a plan to work from.",
  },
  {
    q: "Is the estimate free?",
    a: "Yes, and it is not a hook. It is an honest range with the assumptions written down, so you can compare it against anyone else's number on the same basis.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Jsonld data={faqSchema(faqs)} />
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${siteUrl}/contact`,
          mainEntity: { "@id": `${siteUrl}/#organization` },
        }}
      />

      <PageHero
        eyebrow="Contact"
        lines={[<>Send us a</>, <>floor plan.</>]}
        sub="No presentation, no pitch deck, no obligation. We'll come back with a banded estimate and a scope schedule — usually within three working days."
        image="/img/hero-03.jpg"
        imageAlt="Boutique hospitality lobby with sculptural walnut reception desk and brass screen"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="bg-bone text-ink">
        <div className="shell-wide act">
          <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12">
            {/* Details */}
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow tone="clay">Studio &amp; workshop</Eyebrow>

                <address className="mt-7 not-italic">
                  <p className="t-lede max-w-[22ch] text-ink">
                    {contact.street}
                    <br />
                    {contact.city} {contact.postal}
                    <br />
                    {contact.country}
                  </p>
                </address>

                <dl className="mt-9 space-y-5 border-t border-sand pt-7">
                  {[
                    ["Email", contact.email, `mailto:${contact.email}`],
                    ["Phone", contact.phone, `tel:${contact.phoneHref}`],
                    ["WhatsApp", contact.whatsapp, `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`],
                  ].map(([k, v, href]) => (
                    <div key={k}>
                      <dt className="t-label text-clay/70">{k}</dt>
                      <dd className="mt-1.5">
                        <a href={href} className="ulink t-body text-ink" data-cursor="link">
                          {v}
                        </a>
                      </dd>
                    </div>
                  ))}
                  <div>
                    <dt className="t-label text-clay/70">Hours</dt>
                    <dd className="t-body mt-1.5 text-ink">{contact.hours}</dd>
                  </div>
                </dl>

                <div className="mt-9 flex gap-2 border-t border-sand pt-7">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      data-cursor="link"
                      className="t-label grid h-10 w-10 place-items-center rounded-full border border-sand text-clay transition-colors hover:border-ink hover:bg-ink hover:text-bone"
                    >
                      {s.short}
                    </a>
                  ))}
                </div>

                {/* Reassurance stack — reduces perceived commitment right at
                    the point of highest hesitation. */}
                <ul className="mt-9 space-y-3 border-t border-sand pt-7">
                  {[
                    "Reply from a human within one working day",
                    "Banded estimate, assumptions written down",
                    "No retainer required to get a number",
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="mt-1.5 shrink-0" aria-hidden>
                        <path d="M1 5.5 5 9.5 13 1" stroke="var(--color-brass)" strokeWidth="1.4" />
                      </svg>
                      <span className="t-meta text-clay">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal className="lg:col-span-7 lg:col-start-6">
              <SplitLines
                as="h2"
                className="t-h2"
                lines={[<>Tell us what&apos;s</>, <>not <span className="t-aside !text-brass">working</span>.</>]}
              />
              <p className="t-body mt-5 max-w-[46ch] text-clay">
                Four fields are required. Everything else helps us give you a tighter number.
              </p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map placeholder band */}
      <section className="relative h-[42vh] min-h-[300px] overflow-hidden bg-soot">
        <iframe
          title={`Map — ${contact.street}, ${contact.city}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
          className="h-full w-full grayscale-[0.9] contrast-[1.1] invert-[0.92] sepia-[0.2]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
