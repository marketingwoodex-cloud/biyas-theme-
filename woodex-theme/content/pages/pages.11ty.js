/**
 * Turns every content/pages/*.json file into a page.
 * Each JSON file = { layout, permalink, nav, headerStyle, title, seo, sections[] }.
 * Add a page: create a new .json here (or `npm run new:page <slug>`).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

export default class Pages {
  data() {
    const pages = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
      .map((f) => {
        const raw = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
        return { ...raw, slug: f.replace(/\.json$/, ""), sourceFile: `content/pages/${f}` };
      });
    return {
      pagination: { data: "pages", size: 1, alias: "pg", addAllPagesToCollections: true },
      pages,
      layout: "page.njk",
      eleventyComputed: {
        permalink: (d) => d.pg.permalink,
        title: (d) => d.pg.title,
        nav: (d) => d.pg.nav,
        headerStyle: (d) => d.pg.headerStyle || "dark",
        seo: (d) => d.pg.seo || {},
        sections: (d) => d.pg.sections || [],
        noindex: (d) => !!d.pg.noindex,
        bodyClass: (d) => d.pg.bodyClass || "",
        eleventyExcludeFromCollections: (d) => !!d.pg.eleventyExcludeFromCollections,
      },
    };
  }
  render() { return ""; }
}
