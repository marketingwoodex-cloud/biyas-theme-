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
   TYPE PAIRING
   Display — Instrument Serif: high-contrast, slightly literary. It carries
   the "architecture as authorship" idea without the dated luxury-serif cliche.
   Sans   — Inter Tight: a neutral grotesk with tight defaults, so UI text
   sits quietly beside a very loud display face.
   Mono   — JetBrains Mono: labels, indices and specification data. Mono reads
   as *measurement*, which is exactly the brand's claim.

   PERFORMANCE
   Self-hosted, latin subset only, woff2, ~128 KB total for four faces.
   Two are variable, so the whole weight range costs one file. `display: swap`
   plus an explicit size-adjust fallback keeps CLS at zero — no third-party
   request sits on the critical path.
   -------------------------------------------------------------------------- */

const display = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--f-display",
  display: "swap",
  preload: true,
  fallback: ["Times New Roman", "Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

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
  themeColor: "#0B0A08",
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
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
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
