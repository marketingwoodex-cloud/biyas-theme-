/**
 * Computed data available to every template.
 * - `site` is loaded from content/site.json (Eleventy global data via theme/data/site.js)
 * - `pageTitle` / `pageDescription` fall back to site defaults
 */
export default {
  pageTitle: (data) => {
    const t = data.title || data.seo?.title;
    if (!t) return data.site.seo.defaultTitle;
    return data.site.seo.titleTemplate.replace("%s", t);
  },
  pageDescription: (data) => data.seo?.description || data.description || data.excerpt || data.site.seo.defaultDescription,
  ogImage: (data) => data.seo?.image || data.image || data.hero?.image || data.site.seo.ogImage,
  navKey: (data) => data.nav || (data.page?.filePathStem || "").split("/")[1] || "",
};
