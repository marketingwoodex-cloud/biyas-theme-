import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/providers/Cursor";
import Preloader from "@/components/providers/Preloader";
import { brand, contact, siteUrl, social } from "@/lib/brand";

/* --------------------------------------------------------------------------
   TYPE — one grotesk, worked hard.
   The live Woodex identity uses a single neutral grotesk for everything from
   the 8rem hero to 11px labels. Hierarchy is carried by weight, scale and
   tracking rather than by a second typeface, which is why the pages read as
   one voice instead of a magazine spread.
   Mono is reserved for micro-type — indices, labels, specification data —
   where it reads as *measurement*, which is literally the brand's claim.

   PERFORMANCE
   Self-hosted, latin subset, woff2. Inter Tight is variable so the whole
   100–900 range costs one 44 KB file. `display: swap` plus an explicit
   size-adjust fallback keeps CLS at zero, and nothing sits on a third-party
   critical path.
   -------------------------------------------------------------------------- */

const sans = localFont({
  src: [{ path: "../fonts/inter-tight-latin-wght-normal.woff2", weight: "100 900", style: "normal" }],
  variable: "--f-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: "Arial",
});

const mono = localFont({
  src: [{ path: "../fonts/jetbrains-mono-latin-wght-normal.woff2", weight: "100 800", style: "normal" }],
  variable: "--f-mono",
  display: "swap",
  preload: false, // mono is micro-type only — never blocks first paint
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const viewport: Viewport = {
  themeColor: "#0E1A2B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.fullName} — Interior Design & Turnkey Fit-Out`,
    template: `%s | ${brand.fullName}`,
  },
  description: brand.positioning,
  applicationName: brand.fullName,
  authors: [{ name: brand.legalName }],
  creator: brand.legalName,
  keywords: [
    "interior design",
    "office interior design",
    "turnkey fit-out",
    "bespoke joinery",
    "commercial interior design",
    "residential interior design",
    "hospitality interior design",
    "interior fit-out contractor",
    `interior design ${contact.city}`,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: brand.fullName,
    url: siteUrl,
    title: `${brand.fullName} — Interior Design & Turnkey Fit-Out`,
    description: brand.positioning,
    locale: "en_US",
    images: [{ url: "/img/hero-01.jpg", width: 1376, height: 768, alt: `${brand.fullName} — fluted walnut reception` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.fullName} — Interior Design & Turnkey Fit-Out`,
    description: brand.promise,
    images: ["/img/hero-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "Interior Design",
};

/** Organisation + LocalBusiness graph, emitted once site-wide. */
const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: brand.fullName,
      legalName: brand.legalName,
      url: siteUrl,
      description: brand.positioning,
      slogan: brand.promise,
      email: contact.email,
      telephone: contact.phone,
      priceRange: "$$$",
      image: `${siteUrl}/img/hero-01.jpg`,
      logo: { "@type": "ImageObject", url: `${siteUrl}/img/hero-01.jpg` },
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.street,
        addressLocality: contact.city,
        addressRegion: contact.region,
        postalCode: contact.postal,
        addressCountry: "PK",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: social.map((s) => s.href),
      areaServed: [{ "@type": "Country", name: "Pakistan" }],
      knowsAbout: [
        "Interior architecture",
        "Turnkey fit-out",
        "Bespoke joinery",
        "Workplace design",
        "Hospitality interiors",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: brand.fullName,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Preloader />
        <SmoothScroll />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
