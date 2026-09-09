import fs from "node:fs";
import path from "node:path";
const file = path.resolve("content/site.json");
export default () => {
  const site = JSON.parse(fs.readFileSync(file, "utf8"));
  site.footer.copyright = (site.footer.copyright || "").replace("{year}", String(new Date().getFullYear()));
  return site;
};
