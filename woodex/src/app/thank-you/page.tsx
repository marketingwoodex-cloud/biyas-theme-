import type { Metadata } from "next";
import Link from "next/link";
import { Btn } from "@/components/ui/Btn";
import Reveal from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { sla, contact, whatsappLink } from "@/lib/siteConfig";

/**
 * A real URL rather than a state flag, so the conversion is trackable in GA4
 * and can carry a Google Ads / Meta conversion tag. Noindexed — it has no
 * search value and would leak into sitemaps otherwise.
 */
export const metadata: Metadata = {
  title: { absolute: "Thank You | Woodex Interior" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ink text-bone">
      <div className="shell act">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="t-label text-bronze">Request received</p>
            <SplitLines
              as="h1"
              className="t-h1 mt-6"
              lines={[<span key="a">Thank you.</span>, <span key="b">We have your brief.</span>]}
            />
            <p className="t-lede fade-up mt-8 max-w-[46ch] text-bone/60" style={{ transitionDelay: "180ms" }}>
              A member of the studio will be in touch. Nothing else is required from you
              right now.
            </p>

            <div className="fade-up mt-10 flex flex-wrap gap-3" style={{ transitionDelay: "260ms" }}>
              <Btn href="/portfolio" variant="ghost">
                View our work
              </Btn>
              <Btn href="/process" variant="ghost">
                See how we work
              </Btn>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={140}>
            <div className="card-dark">
              <h2 className="t-h4 text-bone">What happens next</h2>
              <ol className="list-ol mt-6">
                {sla.map((s) => (
                  <li key={s.step}>
                    <span className="block font-medium text-bone">{s.step}</span>
                    <span className="t-meta text-bone/50">{s.when}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 border-t border-[var(--hairline-dark)] pt-6">
              <p className="t-meta text-bone/50">
                Something urgent, or a detail you forgot to add?
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                <a href={`tel:${contact.phoneHref}`} className="ulink t-body text-bone" data-cursor="link">
                  {contact.phone}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="ulink t-body text-bone"
                  data-cursor="link"
                >
                  WhatsApp
                </a>
                <Link href="/contact" className="ulink t-body text-bone" data-cursor="link">
                  Contact
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
