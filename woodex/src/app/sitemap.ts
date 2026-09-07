import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/brand";
import { services } from "@/lib/content/services";
import { projects } from "@/lib/content/projects";
import { locations } from "@/lib/content/locations";
import { industries } from "@/lib/content/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/request-proposal`, changeFrequency: "yearly" as const, priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  return [
    ...core,
    ...services.map((s) => ({
      url: `${siteUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...locations.map((l) => ({
      url: `${siteUrl}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: l.base ? 0.9 : 0.7,
    })),
    // Only indexed industries. Sector pages without a delivered project are
    // noindex and must not appear here.
    ...industries
      .filter((i) => i.indexed)
      .map((i) => ({
        url: `${siteUrl}/industries/${i.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
  ];
}
