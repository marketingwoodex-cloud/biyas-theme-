/* ============================================================
   BIYA'S ART GALLERY — THEME V4 · vanilla JS engine
   No dependencies. Elementor Phase 2 replaces with native
   widget behaviours; this file only powers the static build.
   ============================================================ */
(function () {
  'use strict';
  var motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- header solid state ---------- */
  var header = document.querySelector('.site-header');
  var forceSolid = document.body.classList.contains('hd-solid');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-solid', forceSolid || window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- cinema hero: staged entrance ---------- */
  var cinema = document.querySelector('.cinema');
  if (cinema) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { cinema.classList.add('loaded'); });
    });
  }

  /* ---------- mobile drawer ---------- */
  var burger = document.querySelector('.nav-burger');
  var drawer = document.getElementById('mobileNav');
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    document.body.classList.remove('no-scroll');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      document.body.classList.toggle('no-scroll', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    var mClose = drawer.querySelector('.m-close');
    if (mClose) mClose.addEventListener('click', closeDrawer);
  }

  /* ---------- Escape closes overlays; dropdown a11y ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDrawer();
      var lb = document.querySelector('.lightbox.show');
      if (lb) lb.classList.remove('show');
      document.querySelectorAll('.nav-drop:focus-within').forEach(function (d) {
        d.querySelector('.nav-drop-toggle').blur();
      });
    }
  });
  document.querySelectorAll('.nav-drop-toggle').forEach(function (t) {
    t.setAttribute('aria-expanded', 'false');
    t.parentElement.addEventListener('mouseenter', function(){ t.setAttribute('aria-expanded','true'); });
    t.parentElement.addEventListener('mouseleave', function(){ t.setAttribute('aria-expanded','false'); });
  });

  /* ---------- reveal on scroll (staggered) ---------- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-r, .clip-reveal');
  if (motionOK && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var d = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { el.classList.add('in'); }, d);
        io.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- gentle parallax drift ---------- */
  if (motionOK && 'IntersectionObserver' in window) {
    var pxEls = document.querySelectorAll('[data-parallax]');
    var po = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { po.unobserve(en.target); });
    });
    pxEls.forEach(function (el) {
      po.observe(el);
      window.addEventListener('scroll', function () {
        var r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.06;
        var y = (r.top + r.height / 2 - window.innerHeight / 2) * speed;
        el.style.transform = 'translateY(' + y.toFixed(1) + 'px)';
      }, { passive: true });
    });
  }

  /* ---------- counters ---------- */
  var counters = document.querySelectorAll('[data-count]');
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1600, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCounter(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  } else counters.forEach(runCounter);

  /* ---------- filter chips (artworks / video) ---------- */
  var grids = document.querySelectorAll('[data-filter-grid]');
  if (grids.length) {
    var chips = document.querySelectorAll('.chip[data-filter]');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('is-on'); });
        chip.classList.add('is-on');
        var f = chip.getAttribute('data-filter');
        grids.forEach(function (grid) {
          grid.querySelectorAll('[data-cat]').forEach(function (it) {
            var show = f === '*' || (it.getAttribute('data-cat') || '').indexOf(f) > -1;
            it.style.display = show ? '' : 'none';
            if (show) { it.classList.remove('in'); void it.offsetWidth; it.classList.add('in'); }
          });
        });
      });
    });
  }

  /* ---------- tabs ---------- */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var btns = group.querySelectorAll('.tab-btn');
    var panes = document.querySelectorAll(group.getAttribute('data-tabs'));
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.classList.remove('is-on'); });
        b.classList.add('is-on');
        panes.forEach(function (p) { p.classList.remove('is-on'); });
        if (panes[i]) panes[i].classList.add('is-on');
      });
    });
  });

  /* ---------- lightbox ---------- */
  var lb = document.querySelector('.lightbox');
  function openLB(src, cap) {
    if (!lb) return;
    lb.querySelector('img').src = src;
    lb.querySelector('img').alt = cap || 'Artwork';
    lb.querySelector('figcaption').textContent = cap || '';
    lb.classList.add('show');
    document.body.classList.add('no-scroll');
    var c = lb.querySelector('.lb-close'); if (c) c.focus();
  }
  function closeLB() { if (lb) lb.classList.remove('show'); document.body.classList.remove('no-scroll'); }
  document.querySelectorAll('[data-lightbox]').forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      var img = t.querySelector('img') || t.parentElement.querySelector('img');
      var cap = t.getAttribute('data-lightbox') || (img ? img.alt : '');
      if (img) openLB(img.src, cap);
    });
  });
  if (lb) {
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLB(); });
    var c = lb.querySelector('.lb-close'); if (c) c.addEventListener('click', closeLB);
  }

  /* ---------- static forms (Phase 1 theatre only) ---------- */
  document.querySelectorAll('form[data-static]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note') || document.querySelector('.form-note[data-for="' + form.id + '"]');
      if (note) {
        note.textContent = 'Thank you — this demo form is static. It will be connected when the site moves to WordPress.';
        note.style.color = 'var(--gold)';
      }
    });
  });

  /* ---------- commission prefill (?work=) ---------- */
  try {
    var ref = new URLSearchParams(window.location.search).get('work');
    if (ref) {
      var ta = document.querySelector('form[data-static] textarea');
      if (ta && !ta.value) ta.value = 'I would like to inquire about: ' + ref + '.';
    }
  } catch (err) { /* noop */ }

  /* ---------- footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
