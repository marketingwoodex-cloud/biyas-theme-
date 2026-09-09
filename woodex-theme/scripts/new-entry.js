#!/usr/bin/env node
/** npm run new:project|new:post|new:service -- "Title" [--category=Residential] [--image=file.jpg] */
import path from "node:path";
import { ROOT, slugify, writeIfMissing, args } from "./_util.js";
const { pos, flags } = args();
const kind = pos[0]; const title = pos.slice(1).join(" ");
if (!["project", "post", "service"].includes(kind) || !title) { console.log('Usage: npm run new:project -- "Project title" [--category=Residential] [--image=hero-1.jpg]'); process.exit(1); }
const slug = slugify(title); const today = new Date().toISOString().slice(0, 10);
const tpl = {
  project: `---
title: "${title}"
order: 99
category: ${flags.category || "Residential"}
location: "${flags.location || "Lahore"}"
year: ${new Date().getFullYear()}
scope: "Full interior"
size: ""
image: ${flags.image || "portfolio-1.jpg"}
imageWide: ${flags.imageWide || flags.image || "hero-1.jpg"}
featured: false
excerpt: "One-sentence summary shown on cards."
gallery:
  - { src: room-1.jpg, alt: "" }
client: "Private client"
services: ["Residential interiors"]
---
## Brief

## Approach

## Result
`,
  post: `---
title: "${title}"
date: ${today}
category: ${flags.category || "Design"}
image: ${flags.image || "room-1.jpg"}
author: "${flags.author || "Woodex Studio"}"
excerpt: "One-sentence summary shown on cards and in search results."
---
Write the article in Markdown. Headings start at ## .
`,
  service: `---
title: "${title}"
order: 99
icon: ${flags.icon || "interior"}
image: ${flags.image || "service-1.jpg"}
labels: ["Label one", "Label two"]
excerpt: "One-sentence summary shown on cards and in the mega menu."
deliverables:
  - Deliverable one
  - Deliverable two
process:
  - { title: "Discovery", text: "" }
  - { title: "Concept", text: "" }
  - { title: "Design development", text: "" }
  - { title: "Delivery", text: "" }
faq:
  - { q: "Question?", a: "Answer." }
---
## Overview

## What you receive

## Typical scope
`,
};
const dir = { project: "projects", post: "posts", service: "services" }[kind];
writeIfMissing(path.join(ROOT, "content", dir, `${slug}.md`), tpl[kind], !!flags.force);
if (kind === "service") console.log("→ Add it to the mega menu: content/site.json → header.menu → Services → children");
