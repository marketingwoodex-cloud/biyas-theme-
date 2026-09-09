/* npm run smoke — runs app.js against every built page in a simulated DOM and reports runtime errors. */
const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs'); const path = require('path');
const DIST = path.resolve(__dirname, '../dist');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const pages = walk(DIST).filter((f) => f.endsWith('.html')).map((f) => path.relative(DIST, f)).sort();
(async () => {
  let bad = 0;
  for (const p of pages) {
    const html = fs.readFileSync(path.join(DIST, p), 'utf8');
    const errors = [];
    const vc = new VirtualConsole();
    vc.on('jsdomError', (e) => { if (!/Could not load|not implemented/i.test(e.message)) errors.push(e.message.split('\n')[0]); });
    const dom = new JSDOM(html, { url: 'http://localhost/' + p, runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: vc });
    const w = dom.window;
    w.IntersectionObserver = class { constructor(cb) { this.cb = cb; } observe(el) { this.cb([{ isIntersecting: true, target: el, intersectionRatio: 1 }], this); } unobserve() {} disconnect() {} };
    w.HTMLMediaElement.prototype.play = () => Promise.resolve(); w.HTMLMediaElement.prototype.pause = () => {}; w.HTMLMediaElement.prototype.load = () => {};
    w.matchMedia = (q) => ({ matches: /pointer:\s*fine/.test(q), media: q, addEventListener() {}, addListener() {} });
    w.requestAnimationFrame = (cb) => setTimeout(() => cb(performance.now()), 16);
    w.sessionStorage.clear();
    try {
      [...w.document.querySelectorAll('script:not([src])')].map((s) => s.textContent).filter((t) => /window\.WX/.test(t)).forEach((t) => w.eval(t));
      w.eval(fs.readFileSync(path.resolve(__dirname, '../theme/assets/js/app.js'), 'utf8'));
      w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
      w.dispatchEvent(new w.Event('scroll'));
      const click = (sel) => { const el = w.document.querySelector(sel); if (el) el.click(); return !!el; };
      click('[data-menu-toggle]'); click('[data-menu-toggle]'); click('.has-dropdown > .rt-nav-toggle'); click('.rt-mobile-expand');
      click('[data-filter]:not([data-filter="all"])'); click('[data-goto="1"]'); click('[data-overview-item="1"]');
      const form = w.document.querySelector('form[data-form]'); if (form) form.dispatchEvent(new w.Event('submit', { cancelable: true }));
      if (click('.rt-gallery-item')) w.document.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape' }));
      await new Promise((r) => setTimeout(r, 1000));
    } catch (e) { errors.push('THROW: ' + e.message); }
    const cur = w.document.querySelector('.rt-nav-toggle.is-current');
    const info = `nav=${cur ? cur.dataset.nav : '-'} words=${w.document.querySelectorAll('[data-split] .w').length} hidden=${w.document.querySelectorAll('.is-hidden').length} invalid=${w.document.querySelectorAll('.is-invalid').length}`;
    if (errors.length) bad++;
    console.log(`${errors.length ? '✖' : '✔'} ${p.padEnd(52)} ${info}`); errors.slice(0, 3).forEach((e) => console.log('      ', e));
    w.close();
  }
  console.log(bad ? `\n✖ ${bad} page(s) with JS errors` : `\n✔ ${pages.length} pages, no runtime errors`);
  process.exit(bad ? 1 : 0);
})();
