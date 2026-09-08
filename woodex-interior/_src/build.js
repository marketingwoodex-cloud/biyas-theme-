#!/usr/bin/env node
/**
 * Woodex Interior — tiny static build.
 * Wraps every file in _src/pages/*.html with the shared head/header/footer partials
 * and writes the finished page to the theme root.
 *
 *   node _src/build.js          → builds all pages
 *   node _src/build.js --watch  → rebuilds on change
 *
 * Page front matter (first lines of each page file):
 *   <!--
 *   title: Page title
 *   description: Meta description
 *   bodyClass: page-about        (optional)
 *   navClass: rt-nav-wrapper-v2  (optional – light nav variant)
 *   -->
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PARTIALS = path.join(__dirname, 'partials');
const PAGES = path.join(__dirname, 'pages');

const read = (p) => fs.readFileSync(p, 'utf8');

function parseFrontMatter(src) {
  const m = src.match(/^\s*<!--([\s\S]*?)-->/);
  const data = {};
  if (!m) return { data, body: src };
  m[1].trim().split('\n').forEach((line) => {
    const i = line.indexOf(':');
    if (i > -1) data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { data, body: src.slice(m[0].length).replace(/^\s*\n/, '') };
}

function render(tpl, data) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => (data[k] !== undefined ? data[k] : ''));
}

function build() {
  const head = read(path.join(PARTIALS, 'head.html'));
  const header = read(path.join(PARTIALS, 'header.html'));
  const footer = read(path.join(PARTIALS, 'footer.html'));

  const files = fs.readdirSync(PAGES).filter((f) => f.endsWith('.html'));
  files.forEach((file) => {
    const { data, body } = parseFrontMatter(read(path.join(PAGES, file)));
    const page = {
      title: data.title || 'Woodex Interior',
      description: data.description || '',
      bodyClass: data.bodyClass || '',
      navClass: data.navClass || '',
    };
    const html =
      render(head, page) +
      '\n' +
      render(header, page) +
      '\n' +
      body.trimEnd() +
      '\n\n' +
      footer;
    fs.writeFileSync(path.join(ROOT, file), html);
    console.log('built', file, `(${(html.length / 1024).toFixed(1)} KB)`);
  });
}

build();

if (process.argv.includes('--watch')) {
  console.log('watching _src/ …');
  let t;
  fs.watch(__dirname, { recursive: true }, () => {
    clearTimeout(t);
    t = setTimeout(build, 80);
  });
}
