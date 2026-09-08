/* ==========================================================================
   WOODEX INTERIOR — app.js
   Vanilla JS (no dependencies). Recreates the Linoxa "Home Two" motion system:
   curtain page-load reveal, rotating hero, scroll-scrubbed pinned sections,
   marquees, split-text + blur reveals, magnetic cursor, plus inner-page UI.
   ========================================================================== */
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = () => window.matchMedia('(min-width: 992px)').matches;

  /* ------------------------------------------------------------------
     1. Split text (heading-title equivalent) — wraps each word in a mask
  ------------------------------------------------------------------ */
  function splitText() {
    $$('[data-split]').forEach((el) => {
      if (el.dataset.splitDone) return;
      const words = el.textContent.trim().split(/\s+/);
      el.textContent = '';
      words.forEach((w, i) => {
        const mask = document.createElement('span');
        mask.className = 'w';
        const inner = document.createElement('span');
        inner.textContent = w;
        inner.style.setProperty('--i', i);
        mask.appendChild(inner);
        el.appendChild(mask);
        if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
      });
      el.dataset.splitDone = '1';
    });
  }

  /* ------------------------------------------------------------------
     2. Scroll reveals (IntersectionObserver)
  ------------------------------------------------------------------ */
  function reveals() {
    const targets = $$('[data-reveal], [data-split], [data-line], [data-card-reveal]');
    if (!('IntersectionObserver' in window) || reduceMotion) {
      targets.forEach((t) => t.classList.add('is-in', 'is-done'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          // drop the blur filter once done so text stays crisp
          setTimeout(() => e.target.classList.add('is-done'), 1400);
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
  }

  /* ------------------------------------------------------------------
     3. Hero — curtain reveal + 3-slide rotation
  ------------------------------------------------------------------ */
  function hero() {
    const heroEl = $('.rt-hero-v4');
    if (!heroEl) return;

    const curtain = $('.rt-curtain-main-wrapper', heroEl);
    $$('.rt-sub-wrapper', curtain).forEach((p, i) => p.style.setProperty('--i', i));
    const images = $$('.rt-hero-image', heroEl);
    const masks = $$('.rt-slide-mask', heroEl);
    const total = 3;
    let current = 0;
    let timer;

    function show(idx, first = false) {
      images.forEach((img, i) => img.classList.toggle('is-active', i === idx));
      masks.forEach((mask) => {
        $$('.rt-slide', mask).forEach((s) => {
          const i = Number(s.dataset.slide);
          s.classList.remove('is-leaving');
          if (i === idx) s.classList.add('is-active');
          else if (s.classList.contains('is-active')) {
            s.classList.remove('is-active');
            if (!first) s.classList.add('is-leaving');
          }
        });
      });
    }

    function next() {
      current = (current + 1) % total;
      show(current);
    }

    function start() {
      if (reduceMotion) return;
      clearInterval(timer);
      timer = setInterval(next, 5200);
    }

    // Page-load sequence: curtains sweep in, then out, revealing the hero.
    const intro = () => {
      heroEl.classList.add('is-ready');
      show(0, true);
      start();
    };
    if (reduceMotion || sessionStorage.getItem('wx-intro')) {
      curtain.classList.add('is-reset');
      intro();
    } else {
      curtain.classList.add('is-in');
      setTimeout(() => {
        curtain.classList.remove('is-in');
        curtain.classList.add('is-out');
        intro();
        sessionStorage.setItem('wx-intro', '1');
      }, 950);
    }

    document.addEventListener('visibilitychange', () => (document.hidden ? clearInterval(timer) : start()));

    // Hero content fades/lifts as the page content slides over the pinned hero.
    return () => {
      const r = heroEl.getBoundingClientRect();
      const p = clamp(-r.top / (r.height * 0.9));
      heroEl.style.setProperty('--hp', p.toFixed(3));
    };
  }

  /* ------------------------------------------------------------------
     4. Scroll-scrubbed pinned sections
  ------------------------------------------------------------------ */
  function progressOf(el, offsetTop = 0) {
    const r = el.getBoundingClientRect();
    const scrollable = r.height - window.innerHeight;
    if (scrollable <= 0) return 1;
    return clamp((-r.top + offsetTop) / scrollable);
  }

  function pinnedSections() {
    const video = $('[data-video-section]');
    const service = $('[data-service-section]');
    const overview = $('[data-overview-section]');
    const showcase = $('[data-showcase-section]');
    const parallaxImgs = $$('.rt-cover-image.rt-parallax');
    const cards = service ? $$('[data-card]', service) : [];
    const imgs = overview ? $$('.rt-image-change', overview) : [];

    // Layout keyframes for the 4 documentation images: [left%, width%]
    const imgFrames = [
      // progress 0 → 1 : which image is expanded
      [[0, 0], [0, 0], [0, 36.89], [38.5, 57.44]],
      [[0, 0], [0, 36.89], [38.5, 57.44], [97.5, 0]],
      [[0, 36.89], [38.5, 57.44], [97.5, 0], [97.5, 0]],
      [[0, 57.44], [59, 36.89], [97.5, 0], [97.5, 0]],
    ];
    const lerp = (a, b, t) => a + (b - a) * t;

    return () => {
      const desktop = isDesktop();

      if (video && desktop) {
        const p = progressOf(video);
        // 0-0.5: masked text video stays; 0.5-1: full-bleed video scales in
        const scale = clamp((p - 0.35) / 0.45);
        $('.rt-video-scale', video).style.setProperty('--p', scale.toFixed(3));
      } else if (video) {
        $('.rt-video-scale', video).style.setProperty('--p', 1);
      }

      if (service && desktop) {
        const p = progressOf(service, window.innerHeight * 0.1);
        cards.forEach((c, i) => {
          const start = i * 0.28;
          const pc = clamp((p - start) / 0.3);
          c.style.setProperty('--pc', pc.toFixed(3));
        });
      } else {
        cards.forEach((c) => c.style.removeProperty('--pc'));
      }

      if (overview && desktop && imgs.length === 4) {
        const p = progressOf(overview, 80);
        const seg = p * (imgFrames.length - 1);
        const a = Math.floor(clamp(seg, 0, imgFrames.length - 1.0001));
        const t = seg - a;
        imgs.forEach((img, i) => {
          const from = imgFrames[a][i];
          const to = imgFrames[Math.min(a + 1, imgFrames.length - 1)][i];
          img.style.left = lerp(from[0], to[0], t).toFixed(2) + '%';
          img.style.width = lerp(from[1], to[1], t).toFixed(2) + '%';
        });
      } else {
        imgs.forEach((img, i) => {
          img.style.left = i === 0 ? '0%' : i === 1 ? '38.5%' : '0%';
          img.style.width = i === 0 ? '36.89%' : i === 1 ? '57.44%' : '0%';
        });
      }

      if (showcase && desktop) {
        const p = progressOf(showcase);
        // side images fan out from behind the main image as you scroll
        const sp = 1 - clamp(p / 0.6);
        showcase.style.setProperty('--sp', (1 - sp).toFixed(3));
        // marquee drifts with scroll
        showcase.style.setProperty('--mx', (-p * 240).toFixed(1) + 'px');
      }

      // parallax cover images
      parallaxImgs.forEach((img) => {
        const box = img.parentElement.getBoundingClientRect();
        if (box.bottom < 0 || box.top > window.innerHeight) return;
        const t = (box.top + box.height / 2 - window.innerHeight / 2) / window.innerHeight;
        img.style.transform = `translateY(${(t * -10).toFixed(2)}%)`;
      });
    };
  }

  /* ------------------------------------------------------------------
     5. Marquees (duplicate content for a seamless loop)
  ------------------------------------------------------------------ */
  function marquees() {
    $$('[data-marquee-y]').forEach((m) => {
      const items = Array.from(m.children);
      items.forEach((it) => m.appendChild(it.cloneNode(true)));
      const h = items.reduce((s, it) => s + it.getBoundingClientRect().height, 0) + items.length * 45;
      m.style.setProperty('--dur', `${Math.max(18, h / 28)}s`);
      m.classList.add('is-running');
    });
    // horizontal marquees are duplicated in markup (two trains) → CSS animation
  }

  /* ------------------------------------------------------------------
     6. Navigation — scroll state, mobile menu, dropdown, active link
  ------------------------------------------------------------------ */
  function navigation() {
    const nav = $('.rt-nav-wrapper');
    const burger = $('.rt-menu-button-main');
    const mobile = $('#mobileMenu');
    if (!nav) return () => {};

    const page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
    const key = page === '' || page === 'index' ? 'home' : page;
    $$('[data-nav]').forEach((a) => a.classList.toggle('is-current', a.dataset.nav === key));

    if (burger && mobile) {
      const toggle = (open) => {
        const isOpen = open ?? !mobile.classList.contains('is-open');
        mobile.classList.toggle('is-open', isOpen);
        burger.classList.toggle('is-open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
        burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        mobile.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      };
      burger.addEventListener('click', () => toggle());
      $$('a', mobile).forEach((a) => a.addEventListener('click', () => toggle(false)));
      document.addEventListener('keydown', (e) => e.key === 'Escape' && mobile.classList.contains('is-open') && toggle(false));
    }

    // dropdown toggles (click for touch / keyboard)
    $$('.has-dropdown').forEach((dd) => {
      const btn = $('button', dd);
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = dd.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
      });
    });
    document.addEventListener('click', () => $$('.has-dropdown.is-open').forEach((d) => {
      d.classList.remove('is-open');
      $('button', d).setAttribute('aria-expanded', 'false');
    }));

    let last = 0;
    return () => {
      const y = window.scrollY;
      nav.classList.toggle('is-scrolled', y > 40);
      last = y;
    };
  }

  /* ------------------------------------------------------------------
     7. Custom cursor (desktop, fine pointer only)
  ------------------------------------------------------------------ */
  function cursor() {
    const c = $('.rt-cursor');
    if (!c || reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
    document.documentElement.classList.add('has-cursor');
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
    const hoverables = 'a, button, [data-card], .rt-brand, summary, input, select, textarea';
    document.addEventListener('pointerover', (e) => c.classList.toggle('is-hover', !!e.target.closest(hoverables)));
    (function loop() {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      c.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ------------------------------------------------------------------
     8. Video fallbacks — if a source fails, swap to the fallback URL,
        and never let a paused autoplay leave a black box.
  ------------------------------------------------------------------ */
  function videos() {
    $$('video').forEach((v) => {
      v.muted = true;
      const tryPlay = () => v.play().catch(() => {});
      v.addEventListener('canplay', tryPlay, { once: true });
      v.addEventListener('error', () => {
        const fb = v.dataset.fallback;
        const src = $('source', v);
        if (fb && src && src.src !== fb) { src.src = fb; v.load(); }
      }, true);
      tryPlay();
    });
  }

  /* ------------------------------------------------------------------
     9. Filters (portfolio + blog)
  ------------------------------------------------------------------ */
  function filters() {
    const grid = $('[data-portfolio-grid]');
    if (!grid) return;
    const buttons = $$('.rt-filter-btn');
    const items = $$('[data-category]', grid);
    const count = $('[data-count]');
    const empty = $('.rt-portfolio-empty');

    buttons.forEach((btn) => btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      buttons.forEach((b) => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', String(b === btn)); });
      let visible = 0;
      items.forEach((it) => {
        const show = f === 'all' || it.dataset.category === f;
        it.classList.toggle('is-hidden', !show);
        if (show) {
          visible++;
          // replay the card reveal
          it.classList.remove('is-in');
          requestAnimationFrame(() => requestAnimationFrame(() => it.classList.add('is-in')));
        }
      });
      if (count) count.textContent = visible;
      if (empty) empty.hidden = visible > 0;
    }));
  }

  /* ------------------------------------------------------------------
     10. Counters (about page)
  ------------------------------------------------------------------ */
  function counters() {
    const els = $$('[data-counter]');
    if (!els.length) return;
    const run = (el) => {
      const end = Number(el.dataset.counter);
      const dur = 1600;
      const t0 = performance.now();
      const step = (t) => {
        const p = clamp((t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (reduceMotion || !('IntersectionObserver' in window)) { els.forEach((el) => (el.textContent = el.dataset.counter)); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: 0.5 });
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------
     11. Forms — client-side validation + friendly success state.
         Replace the `submit()` body with your endpoint (Formspree, Netlify,
         your own API…) when going live.
  ------------------------------------------------------------------ */
  function forms() {
    $$('form[data-form]').forEach((form) => {
      const msg = $('.rt-form-message', form);
      const fields = $$('input, select, textarea', form);
      const setMsg = (text, type) => { if (!msg) return; msg.textContent = text; msg.className = `rt-form-message is-${type}`; };

      fields.forEach((f) => f.addEventListener('input', () => f.classList.remove('is-invalid')));

      const submit = async (data) => {
        // Demo: simulate a network request. Wire up your endpoint here, e.g.
        // return fetch('https://formspree.io/f/your-id', { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        await new Promise((r) => setTimeout(r, 900));
        return { ok: true };
      };

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let valid = true;
        fields.forEach((f) => {
          if (!f.checkValidity()) { valid = false; f.classList.add('is-invalid'); }
        });
        if (!valid) { setMsg('Please complete the highlighted fields.', 'error'); return; }
        setMsg('Sending…', 'success');
        form.classList.add('is-sent');
        try {
          const res = await submit(new FormData(form));
          if (!res.ok) throw new Error();
          setMsg(form.classList.contains('rt-newsletter-form') ? 'Thank you — you are on the list.' : 'Thank you — we have received your enquiry and will reply within one working day.', 'success');
          form.reset();
        } catch {
          setMsg('Something went wrong. Please email hello@woodexinterior.com instead.', 'error');
          form.classList.remove('is-sent');
        }
      });
    });
  }

  /* ------------------------------------------------------------------
     12. FAQ — close siblings when one opens (accordion behaviour)
  ------------------------------------------------------------------ */
  function faq() {
    $$('.rt-faq-list').forEach((list) => {
      $$('details', list).forEach((d) => d.addEventListener('toggle', () => {
        if (d.open) $$('details', list).forEach((o) => o !== d && (o.open = false));
      }));
    });
  }

  /* ------------------------------------------------------------------
     Boot
  ------------------------------------------------------------------ */
  function init() {
    splitText();
    reveals();
    marquees();
    cursor();
    videos();
    filters();
    counters();
    forms();
    faq();

    const onScrollFns = [navigation(), hero(), pinnedSections()].filter(Boolean);
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScrollFns.forEach((fn) => fn()); ticking = false; });
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    onScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
