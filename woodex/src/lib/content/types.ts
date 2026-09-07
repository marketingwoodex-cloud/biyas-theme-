export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  kicker: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  lede: string;
  body: string[];
  deliverables: { t: string; d: string }[];
  outcomes: string[];
  faqs: FAQ[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  sector: string;
  serviceSlug: string;
  year: string;
  location: string;
  area: string;
  duration: string;
  image: string;
  gallery: string[];
  summary: string;
  brief: string;
  approach: string[];
  materials: string[];
  /** `verified` gates whether the figure may be shown as fact. */
  result: { value: string; label: string; verified?: boolean }[];
  quote?: { text: string; who: string; role: string };
};

export type Journal = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  body: string[];
};
