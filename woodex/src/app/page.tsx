import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Manifesto from "@/components/sections/Manifesto";
import ServicesList from "@/components/sections/ServicesList";
import MaterialSection from "@/components/sections/MaterialSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Process from "@/components/sections/Process";
import Voices from "@/components/sections/Voices";
import JournalRow from "@/components/sections/JournalRow";
import FaqBlock from "@/components/sections/FaqBlock";
import SectorBand from "@/components/sections/SectorBand";
import Documented from "@/components/sections/Documented";
import Jsonld, { faqSchema } from "@/components/seo/Jsonld";
import { homeFaqs } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Interior Design & Turnkey Fit-Out Studio",
  description:
    "Woodex Interior designs, manufactures and installs complete interiors — office, residential, hospitality and retail. One contract from first drawing to snag-free handover.",
  alternates: { canonical: "/" },
};

/**
 * HOMEPAGE — narrative order
 *
 * I   Threshold  Hero .......... Who we are, at a glance, in three rooms
 * —   Proof      TrustBar ...... Quiet credibility before any claim
 * II  Story      Manifesto ..... Why we exist (struggle → turn → resolution)
 * III Offer      ServicesList .. The six things you can actually buy
 * IV  Craft      Material ...... Proof we can make it (WebGL monolith)
 * —   Scope      SectorBand .... Coverage, in two seconds
 * V   Evidence   FeaturedWork .. Proof we already did, with numbers
 * VI  Method     Process ....... Stills → BOQ → site. Kills the risk fear
 * VII Trust      Documented .... The six artefacts you physically receive
 * VIII Voices    Voices ........ Third-party confirmation
 * —   Authority  JournalRow .... Expertise signal + SEO surface
 * —   Objections FaqBlock ...... Kills the last reasons not to enquire
 * —   Close      Footer CTA .... One low-commitment ask
 *
 * Rhythm: navy → cream → navy → navy-deep → cream → navy → oat → navy → cream.
 * No two adjacent acts share a ground, so scrolling feels like moving through
 * rooms rather than down a page.
 */
export default function HomePage() {
  return (
    <>
      <Jsonld data={faqSchema(homeFaqs)} />
      <Hero />
      <TrustBar />
      <Manifesto />
      <ServicesList />
      <MaterialSection />
      <SectorBand />
      <FeaturedWork />
      <Process />
      <Documented />
      <Voices />
      <JournalRow />
      <FaqBlock items={homeFaqs} />
    </>
  );
}
