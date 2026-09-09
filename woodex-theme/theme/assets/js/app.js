/* ==========================================================================
   WOODEX THEME — app.js
   Attribute-driven behaviour. Nothing here is page-specific: add the data-*
   hook in a section template and the behaviour follows.

   Modules: reveals · heroSlider · pinnedOverview · marquees · navigation ·
            cursor · videos · filters · counters · forms · faq · lightbox · parallax
   Config:  window.WX (set in <head>) → { forms: { provider, endpoint, accessKey, ... } }
   ========================================================================== */
(() => {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const CFG = window.WX || {};

  /* ---------- helpers ---------- */
  const splitWords = (el) => {
    if (el.dataset.splitDone) return;
    const html = el.innerHTML.trim();
    // Preserve inline tags (em/strong/br) by splitting on text nodes only.
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    let i = 0;
    const walk = (node) => {
      Array.from(node.childNodes).forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span"); w.className = "w";
            const inner = document.createElement("span"); inner.textContent = part; inner.style.setProperty("--i", i++);
            w.appendChild(inner); frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    };
    walk(tmp);
    el.innerHTML = tmp.innerHTML;
    el.dataset.splitDone = "1";
  };
  const onIntersect = (els, cb, opts = { threshold: 0.18 }) => {
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) { els.forEach((el) => cb(el)); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { cb(e.target); io.unobserve(e.target); } });
    }, opts);
    els.forEach((el) => io.observe(el));
  };

  /* ---------- 1. Reveals ---------- */
  function reveals() {
    $$("[data-split], [data-split-hero]").forEach(splitWords);
    const els = $$("[data-reveal], [data-split], [data-card-reveal], [data-line]");
    onIntersect(els, (el) => {
      el.classList.add("is-in");
      el.addEventListener("transitionend", () => el.classList.add("is-done"), { once: true });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  }

  /* ---------- 2. Hero slider (hero-slider section) ---------- */
  function heroSlider() {
    const hero = $("[data-hero]");
    if (!hero) return;
    const slides = $$(".rt-hero-slide", hero);
    const images = $$(".rt-hero-v4-image", hero);
    const dots = $$(".rt-hero-dot", hero);
    const counter = $("[data-hero-current]", hero);
    const curtains = $(".rt-curtains", hero);
    const autoplay = parseInt(hero.dataset.autoplay || "5200", 10);
    hero.style.setProperty("--autoplay", `${autoplay}ms`);
    let current = 0, timer = null;

    const go = (n) => {
      if (slides.length < 2) return;
      const next = (n + slides.length) % slides.length;
      if (next === current) return;
      slides[current].classList.add("is-leaving"); slides[current].classList.remove("is-active");
      images[current].classList.remove("is-active"); dots[current]?.classList.remove("is-active");
      const prev = current; current = next;
      setTimeout(() => slides[prev].classList.remove("is-leaving"), 900);
      slides[current].classList.add("is-active"); images[current].classList.add("is-active"); dots[current]?.classList.add("is-active");
      if (counter) counter.textContent = String(current + 1).padStart(2, "0");
      restart();
    };
    const restart = () => { clearInterval(timer); if (!reduceMotion && slides.length > 1) timer = setInterval(() => go(current + 1), autoplay); };
    dots.forEach((d) => d.addEventListener("click", () => go(parseInt(d.dataset.goto, 10))));
    document.addEventListener("visibilitychange", () => (document.hidden ? clearInterval(timer) : restart()));

    // intro curtain — once per session
    const start = () => { hero.classList.add("is-ready"); restart(); };
    const seen = sessionStorage.getItem("wx-intro");
    if (curtains && !seen && !reduceMotion) {
      $$(".rt-curtain", curtains).forEach((c, i) => c.style.setProperty("--i", i));
      curtains.classList.add("is-in");
      setTimeout(() => { curtains.classList.remove("is-in"); curtains.classList.add("is-out"); start(); }, 900);
      setTimeout(() => curtains.classList.add("is-reset"), 1900);
      sessionStorage.setItem("wx-intro", "1");
    } else { if (curtains) curtains.classList.add("is-reset"); start(); }

    // fade content as user scrolls past
    const onScroll = () => { const p = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.7))); hero.style.setProperty("--hp", p.toFixed(3)); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- 3. Pinned overview (overview section) ---------- */
  function pinnedOverview() {
    $$("[data-pin]").forEach((sec) => {
      const items = $$("[data-overview-item]", sec);
      const imgs = $$("[data-overview-img]", sec);
      if (!items.length) return;
      const activate = (i) => {
        items.forEach((it, k) => it.classList.toggle("is-active", k === i));
        imgs.forEach((im, k) => im.classList.toggle("is-active", k === i));
      };
      items.forEach((it, i) => { it.addEventListener("mouseenter", () => activate(i)); it.addEventListener("click", () => activate(i)); });
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => { if (e.isIntersecting) activate(parseInt(e.target.dataset.overviewItem, 10)); });
        }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
        items.forEach((it) => io.observe(it));
      }
    });
  }

  /* ---------- 4. Marquees ---------- */
  function marquees() {
    $$("[data-marquee-y]").forEach((m) => {
      const inner = m.querySelector(".rt-marquee-v2-inner, .rt-brands-list");
      if (!inner || inner.dataset.cloned) return;
      const w = inner.scrollWidth;
      const clone = inner.cloneNode(true); clone.setAttribute("aria-hidden", "true");
      // duplicate until at least 2× viewport
      const html = inner.innerHTML;
      let copies = Math.max(1, Math.ceil((window.innerWidth * 2) / Math.max(w, 1)));
      inner.innerHTML = html.repeat(copies + 1);
      inner.dataset.cloned = "1";
      const speed = parseFloat(m.dataset.speed || "30");
      inner.style.setProperty("--dur", `${(inner.scrollWidth / 2 / (speed * 4)).toFixed(1)}s`);
      m.classList.add("is-running");
    });
  }

  /* ---------- 5. Navigation ---------- */
  function navigation() {
    const header = $("[data-header]");
    if (!header) return;
    const btn = $("[data-menu-toggle]", header);
    const menu = $("#mobileMenu");
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 40);
      // hide on scroll down, show on scroll up (only when sticky & not open)
      if (header.classList.contains("is-sticky") && !header.classList.contains("is-menu-open")) {
        header.classList.toggle("is-hidden", y > lastY && y > 300);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    const setOpen = (open) => {
      header.classList.toggle("is-menu-open", open);
      btn?.classList.toggle("is-open", open);
      btn?.setAttribute("aria-expanded", String(open));
      btn?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu?.classList.toggle("is-open", open);
      menu?.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("is-locked", open);
    };
    btn?.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { setOpen(false); $$(".has-dropdown.is-open").forEach((d) => d.classList.remove("is-open")); } });
    $$(".rt-mobile-expand", menu || header).forEach((b) => b.addEventListener("click", () => {
      const li = b.closest(".rt-mobile-item"); const open = li.classList.toggle("is-open"); b.setAttribute("aria-expanded", String(open));
    }));
    // dropdown: click/tap toggles (hover handled by CSS); close on outside click
    $$(".has-dropdown > .rt-nav-toggle", header).forEach((t) => {
      t.addEventListener("click", (e) => {
        if (window.matchMedia("(hover: none)").matches || e.detail === 0) { e.preventDefault(); }
        const li = t.parentElement; const open = !li.classList.contains("is-open");
        $$(".has-dropdown.is-open", header).forEach((d) => d !== li && d.classList.remove("is-open"));
        li.classList.toggle("is-open", open); t.setAttribute("aria-expanded", String(open));
      });
    });
    document.addEventListener("click", (e) => { if (!e.target.closest(".has-dropdown")) $$(".has-dropdown.is-open", header).forEach((d) => d.classList.remove("is-open")); });
    window.matchMedia("(min-width: 992px)").addEventListener?.("change", (e) => e.matches && setOpen(false));
  }

  /* ---------- 6. Custom cursor ---------- */
  function cursor() {
    const c = $(".rt-cursor");
    if (!c || !window.matchMedia("(pointer: fine)").matches || reduceMotion) return;
    document.documentElement.classList.add("has-cursor");
    let x = 0, y = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
    const loop = () => { cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; c.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`; requestAnimationFrame(loop); };
    loop();
    document.addEventListener("mouseover", (e) => c.classList.toggle("is-hover", !!e.target.closest("a, button, [data-cursor]")));
  }

  /* ---------- 7. Videos: fallback + lazy play ---------- */
  function videos() {
    $$("video").forEach((v) => {
      const fb = v.dataset.fallback;
      if (fb) v.addEventListener("error", () => { if (v.dataset.fbDone) return; v.dataset.fbDone = "1"; v.querySelector("source").src = fb; v.load(); v.play().catch(() => {}); }, true);
      if ("IntersectionObserver" in window && v.hasAttribute("autoplay")) {
        new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause())), { threshold: 0.1 }).observe(v);
      }
    });
  }

  /* ---------- 8. Filters (portfolio / blog) ---------- */
  function filters() {
    $$(".rt-filters").forEach((bar) => {
      const section = bar.closest("section");
      const grid = $("[data-portfolio-grid]", section);
      const empty = $(".rt-portfolio-empty", section);
      const count = $("[data-count]", bar);
      if (!grid) return;
      const cards = $$("[data-category]", grid);
      bar.addEventListener("click", (e) => {
        const b = e.target.closest("[data-filter]"); if (!b) return;
        $$("[data-filter]", bar).forEach((x) => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", String(x === b)); });
        const f = b.dataset.filter; let shown = 0;
        cards.forEach((c) => { const hit = f === "all" || c.dataset.category === f; c.classList.toggle("is-hidden", !hit); if (hit) shown++; });
        if (empty) empty.hidden = shown > 0;
        if (count) count.textContent = f === "all" ? cards.length : shown;
      });
    });
  }

  /* ---------- 9. Counters ---------- */
  function counters() {
    onIntersect($$("[data-counter]"), (el) => {
      const target = parseFloat(el.dataset.counter); const dur = 1600; const t0 = performance.now();
      const step = (t) => { const p = Math.min(1, (t - t0) / dur); const e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(target * e).toLocaleString(); if (p < 1) requestAnimationFrame(step); };
      reduceMotion ? (el.textContent = target.toLocaleString()) : requestAnimationFrame(step);
    }, { threshold: 0.5 });
  }

  /* ---------- 10. Forms ---------- */
  function forms() {
    const f = CFG.forms || { provider: "demo" };
    const send = async (form, data) => {
      switch (f.provider) {
        case "web3forms":
          data.append("access_key", f.accessKey);
          return fetch("https://api.web3forms.com/submit", { method: "POST", body: data, headers: { Accept: "application/json" } });
        case "formspree":
          return fetch(f.endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        case "php":
          return fetch(f.endpoint || "/mail.php", { method: "POST", body: data });
        case "custom":
          return fetch(f.endpoint, { method: "POST", body: data });
        default: // demo
          await new Promise((r) => setTimeout(r, 900)); return { ok: true };
      }
    };
    $$("form[data-form]").forEach((form) => {
      const msg = $(".rt-form-message", form);
      const fields = $$("input, select, textarea", form).filter((x) => x.name !== "_honey");
      const setMsg = (t, type) => { if (msg) { msg.textContent = t; msg.className = `rt-form-message is-${type}`; } };
      fields.forEach((x) => x.addEventListener("input", () => x.classList.remove("is-invalid")));
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (form.querySelector('[name="_honey"]')?.value) return; // bot
        let ok = true;
        fields.forEach((x) => { if (!x.checkValidity()) { ok = false; x.classList.add("is-invalid"); } });
        if (!ok) { setMsg("Please complete the highlighted fields.", "error"); fields.find((x) => x.classList.contains("is-invalid"))?.focus(); return; }
        setMsg("Sending…", "success"); form.classList.add("is-sent");
        try {
          const data = new FormData(form); data.append("subject", `New enquiry — ${document.title}`); data.append("page", location.href);
          const res = await send(form, data);
          if (!res.ok) throw new Error("Request failed");
          const isNews = form.classList.contains("rt-newsletter-form") || !form.dataset.formKind;
          setMsg(isNews && form.classList.contains("rt-newsletter-form") ? (f.newsletterSuccess || "Thank you — you are on the list.") : (f.successMessage || "Thank you — we will be in touch shortly."), "success");
          form.reset();
        } catch {
          setMsg(`Something went wrong. Please email ${f.fallbackEmail || "us"} instead.`, "error");
        } finally { form.classList.remove("is-sent"); }
      });
    });
  }

  /* ---------- 11. FAQ (one open at a time) ---------- */
  function faq() {
    $$("[data-accordion]").forEach((list) => {
      list.addEventListener("toggle", (e) => { if (e.target.open) $$("details[open]", list).forEach((d) => d !== e.target && (d.open = false)); }, true);
    });
  }

  /* ---------- 12. Lightbox (gallery) ---------- */
  function lightbox() {
    const galleries = $$("[data-lightbox]");
    if (!galleries.length) return;
    const box = document.createElement("div");
    box.className = "rt-lightbox"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Image viewer");
    box.innerHTML = `<button class="rt-lightbox-close" aria-label="Close"><svg><use href="#i-close"/></svg></button><button class="rt-lightbox-prev" aria-label="Previous"><svg><use href="#i-arrow-right"/></svg></button><img alt=""><button class="rt-lightbox-next" aria-label="Next"><svg><use href="#i-arrow-right"/></svg></button><p class="rt-lightbox-caption"></p>`;
    document.body.appendChild(box);
    const img = $("img", box), cap = $(".rt-lightbox-caption", box);
    let items = [], idx = 0, lastFocus = null;
    const show = (i) => { idx = (i + items.length) % items.length; img.src = items[idx].href; img.alt = items[idx].querySelector("img")?.alt || ""; cap.textContent = items[idx].dataset.caption || ""; };
    const open = (list, i) => { items = list; lastFocus = document.activeElement; show(i); box.classList.add("is-open"); document.body.classList.add("is-locked"); $(".rt-lightbox-close", box).focus(); };
    const close = () => { box.classList.remove("is-open"); document.body.classList.remove("is-locked"); lastFocus?.focus(); };
    galleries.forEach((g) => { const list = $$(".rt-gallery-item", g); list.forEach((a, i) => a.addEventListener("click", (e) => { e.preventDefault(); open(list, i); })); });
    $(".rt-lightbox-close", box).addEventListener("click", close);
    $(".rt-lightbox-prev", box).addEventListener("click", () => show(idx - 1));
    $(".rt-lightbox-next", box).addEventListener("click", () => show(idx + 1));
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    document.addEventListener("keydown", (e) => { if (!box.classList.contains("is-open")) return; if (e.key === "Escape") close(); if (e.key === "ArrowRight") show(idx + 1); if (e.key === "ArrowLeft") show(idx - 1); });
  }

  /* ---------- 13. Parallax (image-strip etc.) ---------- */
  function parallax() {
    const els = $$("[data-parallax]");
    if (!els.length || reduceMotion) return;
    const tick = () => {
      const vh = window.innerHeight;
      els.forEach((el) => { const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; const p = (r.top + r.height / 2 - vh / 2) / vh; el.style.transform = `translateY(${(-p * parseFloat(el.dataset.parallax) * 100).toFixed(1)}px)`; });
    };
    window.addEventListener("scroll", tick, { passive: true }); tick();
  }

  /* ---------- boot ---------- */
  const boot = () => { reveals(); heroSlider(); pinnedOverview(); marquees(); navigation(); cursor(); videos(); filters(); counters(); forms(); faq(); lightbox(); parallax(); };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
  window.addEventListener("resize", () => { /* marquee durations are width-based; recompute lazily */ }, { passive: true });
})();
