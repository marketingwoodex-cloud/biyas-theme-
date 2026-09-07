import type { Metadata } from "next";
import ProposalForm from "@/components/sections/ProposalForm";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import Jsonld, { breadcrumbSchema } from "@/components/seo/Jsonld";
import { contact, sla, qualifier, siteUrl, whatsappLink } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Request a Proposal | Woodex Interior" },
  description:
    "Tell us about your commercial project and receive a proposal with scope, indicative BOQ structure, programme and budget band.",
  alternates: { canonical: `${siteUrl}/request-proposal` },
  openGraph: {
    title: "Request a Proposal | Woodex Interior",
    description:
      "Tell us about your commercial project and receive a proposal with scope, indicative BOQ structure, programme and budget band.",
    url: `${siteUrl}/request-proposal`,
  },
};

const RECEIVE = [
  "A written scope of works, itemised by area",
  "The BOQ structure we will price against",
  "An indicative programme with dated milestones",
  "A budget band, with the assumptions written down",
];

export default function RequestProposalPage() {
  return (
    <>
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Request a Proposal", path: "/request-proposal" },
        ])}
      />

      <PageHero
        eyebrow="Start here"
        lines={[<span key="a">Request a</span>, <span key="b">proposal</span>]}
        sub="Tell us what you have and where you are in the process. The more you can share now, the more specific the proposal comes back."
        image="/img/svc-office.jpg"
        imageAlt="Corporate office reception in walnut and bronze, Lahore"
        crumbs={[{ name: "Request a Proposal", path: "/request-proposal" }]}
      />

      <section className="bg-bone text-ink">
        <div className="shell act">
          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-12">
            {/* Form — 60% */}
            <Reveal className="lg:col-span-7">
              <ProposalForm />
            </Reveal>

            {/* Reassurance — 40%, sticky.
                Deliberately contains no navigation. Someone on this page is
                mid-conversion; offering them an exit is the one thing this
                column must not do. */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <div className="card">
                    <h2 className="t-h4 text-ink">What happens next</h2>
                    <ol className="list-ol mt-6">
                      {sla.map((s) => (
                        <li key={s.step}>
                          <span className="block font-medium text-ink">{s.step}</span>
                          <span className="t-meta text-clay">{s.when}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="card mt-4">
                    <h2 className="t-h4 text-ink">What you receive</h2>
                    <ul className="list-ul t-body mt-6 text-clay">
                      {RECEIVE.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-oat mt-4">
                    <p className="t-body text-ink">{qualifier}</p>
                    <p className="t-meta mt-3 text-clay">
                      Residential enquiries are welcome but are handled separately, and
                      lead times differ.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-sand pt-8">
                    <p className="t-label text-clay">Rather talk first?</p>
                    <div className="mt-4 space-y-2">
                      <a
                        href={`tel:${contact.phoneHref}`}
                        className="ulink t-body block text-ink"
                        data-cursor="link"
                      >
                        {contact.phone}
                      </a>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="ulink t-body block text-ink"
                        data-cursor="link"
                      >
                        WhatsApp the studio
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="ulink t-body block text-ink"
                        data-cursor="link"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <p className="t-meta mt-4 text-clay">{contact.hours}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
