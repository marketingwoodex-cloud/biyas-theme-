/**
 * Woodex Theme — Eleventy configuration
 * --------------------------------------------------------------
 * Pages are defined as ordered lists of sections in content/pages/*.json.
 * Collections (projects, posts, services, team) are Markdown files.
 * Every section is one Nunjucks file in theme/sections/<name>.njk.
 */
import fs from "node:fs";
import path from "node:path";
import markdownIt from "markdown-it";

const md = markdownIt({ html: true, linkify: true, typographer: true });
const ROOT = path.dirname(new URL(import.meta.url).pathname);

export default function (eleventyConfig) {
  /* ---------- Static assets ---------- */
  eleventyConfig.addPassthroughCopy({ "theme/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "theme/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "theme/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "content/media": "media" });
  eleventyConfig.addPassthroughCopy({ "theme/assets/root": "/" });
  eleventyConfig.addWatchTarget("theme/assets/");
  eleventyConfig.addWatchTarget("content/");

  /* ---------- Dev server (works behind the Arena / any proxy) ---------- */
  eleventyConfig.setServerOptions({ port: 8080, showAllHosts: true, domDiff: false, liveReload: true });

  /* ---------- Section library metadata (for docs + scripts) ---------- */
  eleventyConfig.addGlobalData("sectionLibrary", () => {
    const dir = path.join(ROOT, "theme/sections");
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".njk"))
      .map((f) => f.replace(/\.njk$/, ""))
      .sort();
  });

  /* ---------- Filters ---------- */
  eleventyConfig.addFilter("md", (s) => (s ? md.render(String(s)) : ""));
  eleventyConfig.addFilter("mdInline", (s) => (s ? md.renderInline(String(s)) : ""));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v, null, 2));
  eleventyConfig.addFilter("slug", (s) =>
    String(s || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  );
  eleventyConfig.addFilter("date", (d, fmt = "long") => {
    const dt = d instanceof Date ? d : new Date(d);
    if (Number.isNaN(dt.getTime())) return "";
    if (fmt === "iso") return dt.toISOString().slice(0, 10);
    if (fmt === "short") return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  });
  eleventyConfig.addFilter("limit", (arr, n) => (Array.isArray(arr) ? arr.slice(0, n) : arr));
  eleventyConfig.addFilter("where", (arr, key, val) => (arr || []).filter((i) => (i.data ? i.data[key] : i[key]) === val));
  eleventyConfig.addFilter("exclude", (arr, url) => (arr || []).filter((i) => i.url !== url));
  eleventyConfig.addFilter("pad", (n) => String(n).padStart(2, "0"));
  eleventyConfig.addFilter("pluck", (arr, key) => (arr || []).map((i) => (i.data ? i.data[key] : i[key])));
  eleventyConfig.addFilter("unique", (arr) => [...new Set((arr || []).flat().filter(Boolean))]);
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = String(content || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
  });
  /** Resolve a media path: "hero-1.jpg" → "/media/hero-1.jpg"; leaves absolute/http URLs alone. */
  eleventyConfig.addFilter("media", (src) => {
    if (!src) return "";
    if (/^(https?:)?\/\//.test(src) || src.startsWith("/") || src.startsWith("data:")) return src;
    return `/media/${src}`;
  });
  /** Merge section defaults with instance data. */
  eleventyConfig.addFilter("merge", (a, b) => ({ ...(a || {}), ...(b || {}) }));

  /* ---------- Collections ---------- */
  const byDateDesc = (a, b) => (b.date || 0) - (a.date || 0);
  const byOrder = (a, b) => (a.data.order ?? 99) - (b.data.order ?? 99);
  eleventyConfig.addCollection("projects", (api) => api.getFilteredByGlob("content/projects/*.md").sort(byOrder));
  eleventyConfig.addCollection("posts", (api) => api.getFilteredByGlob("content/posts/*.md").sort(byDateDesc));
  eleventyConfig.addCollection("services", (api) => api.getFilteredByGlob("content/services/*.md").sort(byOrder));
  eleventyConfig.addCollection("team", (api) => api.getFilteredByGlob("content/team/*.md").sort(byOrder));
  eleventyConfig.addCollection("pages", (api) => api.getFilteredByGlob("content/pages/*.json"));

  /* ---------- Shortcodes ---------- */
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));
  eleventyConfig.addPairedShortcode("markdown", (content) => md.render(content));

  /* ---------- Markdown engine ---------- */
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "content",
      includes: "../theme",
      layouts: "../theme/layouts",
      data: "../theme/data",
      output: "dist",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: "/",
  };
}
