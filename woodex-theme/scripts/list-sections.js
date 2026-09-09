#!/usr/bin/env node
/** npm run list:sections — prints every section with its doc comment. */
import fs from "node:fs"; import path from "node:path";
import { ROOT } from "./_util.js";
const dir = path.join(ROOT, "theme/sections");
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".njk")).sort()) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  const m = src.match(/\{#([\s\S]*?)#\}/);
  const doc = m ? m[1].trim().split("\n").map((l) => "    " + l.trim()).join("\n") : "    (no docs)";
  console.log(`\n${f.replace(".njk", "")}\n${doc}`);
}
