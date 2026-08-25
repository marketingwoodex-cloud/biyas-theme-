#!/usr/bin/env python3
"""
THEME V4 builder — assembles 37 final HTML pages from src/pages fragments.
Run:  python3 tools/build.py     (from theme-v4/)
Shared chrome (head/header/footer/mobile-nav/lightbox) lives here so every
page stays perfectly in sync — the same discipline Phase 2 uses for
Elementor header/footer templates.
"""
import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src" / "pages"
OUT = ROOT

NAV = [
    ("home", [("Home", "index.html")]),
    ("artworks", [("All Artworks", "artworks.html"), ("Collections", "collections.html"),
                   ("The Third Art", "third-art.html"), ("Archive &amp; Sold", "artworks-archived.html"),
                   ("Artists", "artists.html")]),
    ("biya", [("Biography", "biography.html"), ("Art &amp; Installations", "art.html"),
               ("Poetry &amp; Writing", "poetry.html"), ("Books &amp; Library", "books.html"),
               ("Media &amp; Interviews", "media.html")]),
    ("verha", [("About Verha", "verha-about.html"), ("Monthly Events", "verha-events.html"),
                ("Mushairas", "verha-mushairas.html"), ("Muqalma &amp; Dialogues", "verha-muqalma.html"),
                ("Video Archive", "verha-video.html"), ("Media Coverage", "verha-media.html"),
                ("Join &amp; Collaborate", "verha-join.html")]),
    ("exhibitions", [("Exhibitions &amp; Events", "exhibitions.html")]),
    ("projects", [("Projects &amp; Interiors", "projects.html")]),
    ("studio", [("Commissions", "commissions.html"), ("Trade &amp; Hospitality", "trade.html"),
                 ("Guide &amp; FAQ", "faq.html")]),
    ("press", [("Media &amp; Press", "press.html")]),
    ("visit", [("Visit / Contact", "visit.html")]),
]
TOP_LABEL = {"home": "Home", "artworks": "Artworks", "biya": "Biya Jee", "verha": "Punjabi Verha",
             "exhibitions": "Exhibitions", "projects": "Projects", "studio": "Studio", "press": "Press",
             "visit": "Visit"}
# which nav keys belong to a dropdown parent (vs direct link)
DIRECT = {"home": "index.html", "exhibitions": "exhibitions.html", "projects": "projects.html",
          "press": "press.html", "visit": "visit.html"}

def header(active):
    def link_active(href):
        return ' class="is-active"' if href == active else ""
    items = []
    for key, children in NAV:
        label = TOP_LABEL[key]
        if key in DIRECT:
            href = DIRECT[key]
            items.append(f'<a href="{href}"{link_active(href)}>{label}</a>')
        else:
            sub = "".join(f'<a href="{h}">{t}</a>' for t, h in children)
            is_act = ' is-active' if active and any(h == active for _, h in children) else ''
            items.append(
                f'<div class="nav-drop"><button class="nav-drop-toggle{is_act}" aria-haspopup="true">'
                f'{label}<span class="chev">▾</span></button><div class="nav-drop-menu">{sub}</div></div>')
    nav = "\n        ".join(items)

    groups = []
    order = [("Explore", ["artworks.html", "collections.html", "third-art.html", "artworks-archived.html", "artists.html"]),
             ("Biya Jee", ["biography.html", "art.html", "poetry.html", "books.html", "media.html"]),
             ("Punjabi Verha", ["verha-about.html", "verha-events.html", "verha-mushairas.html", "verha-muqalma.html", "verha-video.html", "verha-media.html", "verha-join.html"]),
             ("Programme", ["exhibitions.html", "projects.html"]),
             ("Studio", ["commissions.html", "trade.html", "faq.html"]),
             ("The House", ["press.html", "visit.html", "sitemap.html"])]
    lookup = {h: t for _, ch in NAV for t, h in ch}
    for name, links in order:
        rows = "".join(f'<a href="{h}">{lookup.get(h, h)}</a>' for h in links)
        groups.append(f'<div class="m-group"><p>{name}</p><div class="m-links">{rows}</div></div>')
    mgroups = "\n    ".join(groups)

    return f'''<a class="skip-link" href="#main">Skip to content</a>
<div class="grain" aria-hidden="true"></div>

<header class="site-header">
  <div class="shell hd-in">
    <a class="brand" href="index.html" aria-label="Biya's Art Gallery — home">
      <b>Biya's Art Gallery</b>
      <i>Art · Poetry · Culture · Lahore</i>
      <span class="brand-rule" aria-hidden="true"></span>
    </a>
    <nav class="main-nav" aria-label="Primary">
        {nav}
    </nav>
    <div style="display:flex;align-items:center;gap:18px">
      <a class="nav-cta" href="visit.html">Plan a Visit</a>
      <button class="nav-burger" aria-label="Open menu" aria-controls="mobileNav" aria-expanded="false">
        <span></span><span></span>
      </button>
    </div>
  </div>
</header>

<div class="m-nav" id="mobileNav" aria-label="Mobile">
  <div class="m-nav-top">
    <a class="brand" href="index.html"><b>Biya's Art Gallery</b><i>Art · Poetry · Culture · Lahore</i></a>
    <button class="m-close" aria-label="Close menu">✕</button>
  </div>
    {mgroups}
  <div class="m-foot">
    <span>Tue–Sun · 11:00–19:00</span>
    <span>Lahore, Pakistan</span>
  </div>
</div>'''

FOOTER = '''<footer class="site-footer">
  <div class="shell">
    <div class="f-grid">
      <div>
        <a class="brand" href="index.html" style="color:var(--gold-2)">
          <b>Biya's Art Gallery</b><i style="color:#E9E0CC">Art · Poetry · Culture · Lahore</i>
          <span class="brand-rule"></span>
        </a>
        <p class="f-about" style="margin-top:18px">An artist-led home for original works, The Third Art of thread, Punjabi Verha poetry and evenings that gather people — founded by Biya Jee in Lahore, Pakistan.</p>
        <div class="stamp" style="margin-top:26px" aria-hidden="true">
          <svg viewBox="0 0 100 100"><defs><path id="cir" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/></defs>
          <text style="font:600 9.5px var(--mono);letter-spacing:.26em;fill:currentColor"><textPath href="#cir">ART · POETRY · CULTURE · LAHORE ·</textPath></text></svg>
          <span class="stamp-core">بیا</span>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="artworks.html">All Artworks</a></li>
          <li><a href="collections.html">Collections</a></li>
          <li><a href="third-art.html">The Third Art</a></li>
          <li><a href="artworks-archived.html">Archive &amp; Sold</a></li>
          <li><a href="artists.html">Artists</a></li>
          <li><a href="exhibitions.html">Exhibitions</a></li>
        </ul>
      </div>
      <div>
        <h4>Biya Jee</h4>
        <ul>
          <li><a href="biography.html">Biography</a></li>
          <li><a href="art.html">Art</a></li>
          <li><a href="poetry.html">Poetry</a></li>
          <li><a href="books.html">Books</a></li>
          <li><a href="media.html">Media</a></li>
        </ul>
      </div>
      <div>
        <h4>Verha &amp; Studio</h4>
        <ul>
          <li><a href="verha-about.html">Punjabi Verha</a></li>
          <li><a href="verha-events.html">Monthly Events</a></li>
          <li><a href="commissions.html">Commissions</a></li>
          <li><a href="trade.html">Trade &amp; Hospitality</a></li>
          <li><a href="press.html">Press</a></li>
          <li><a href="faq.html">Guide &amp; FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4>Visit the House</h4>
        <ul>
          <li class="f-about">House No. · Street · Lahore<br>(address on confirmation)</li>
          <li class="f-about">Tue–Sun · 11:00–19:00<br>Monday by appointment</li>
          <li><a href="mailto:hello@biyasartgallery.com">hello@biyasartgallery.com</a></li>
        </ul>
        <form data-static style="margin-top:18px;display:flex;gap:0" aria-label="Newsletter (demo)">
          <div class="field" style="flex:1"><label for="nl-email">Letter of the month</label>
          <input id="nl-email" type="email" placeholder="Your email" required></div>
          <button class="btn btn-gold" type="submit" aria-label="Subscribe" style="padding:10px 14px">→</button>
        </form>
        <p class="form-note" style="margin-top:8px">Demo form — connected in WordPress.</p>
      </div>
    </div>
    <div class="f-bottom">
      <small>© <span data-year>2026</span> Biya's Art Gallery — all works &amp; words reserved.</small>
      <nav aria-label="Legal">
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="sitemap.html">Sitemap</a>
      </nav>
    </div>
  </div>
</footer>
<script src="assets/js/app.js"></script>
</body>
</html>'''

LIGHTBOX = '''<div class="lightbox" role="dialog" aria-modal="true" aria-label="Artwork viewer">
  <button class="lb-close" aria-label="Close viewer">✕</button>
  <figure><img src="assets/img/studio-01.jpg" alt="Artwork"><figcaption></figcaption></figure>
</div>'''

def head(meta):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{meta['title']}</title>
<meta name="description" content="{meta['desc']}">
<meta property="og:title" content="{meta['title']}">
<meta property="og:description" content="{meta['desc']}">
<meta property="og:type" content="website">
<link rel="icon" href="assets/img/biya-gallery-brand-hero.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {{
  theme: {{
    extend: {{
      colors: {{ paper:'#F7F1E4', paper2:'#EFE6D3', ink:'#17120B', ink2:'#221B11',
        gold:'#C2A061', gold2:'#E5CF9B', pine:'#1C4A3C', pine2:'#143629',
        rust:'#A3512A', line:'#D9CDB0', muted:'#6F6350' }},
      fontFamily: {{ serif:['Fraunces','Georgia','serif'], sans:['Manrope','sans-serif'],
        mono:['"IBM Plex Mono"','monospace'], nastaliq:['"Noto Nastaliq Urdu"','serif'] }}
    }}
  }}
}}
</script>
<link rel="stylesheet" href="assets/css/theme.css">
</head>
<body class="{meta.get('body','')}{' hd-solid' if meta.get('solid') else ''}">'''

PAGE_PATHS = {h for _, ch in NAV for _, h in ch} | {"index.html"} | {
    "artwork-single.html", "collection-single.html", "book-single.html", "poetry-single.html",
    "verha-event-single.html", "exhibition-single.html", "project-single.html", "privacy.html",
    "terms.html", "sitemap.html", "404.html", "elements.html"}

def build():
    count = 0
    for frag in sorted(SRC.glob("*.html")):
        raw = frag.read_text(encoding="utf-8")
        m = re.match(r"\s*<!--META\s*(\{.*?\})\s*-->\s*(.*)", raw, re.S)
        if not m:
            print(f"!! {frag.name}: missing META line — skipped"); continue
        meta = json.loads(m.group(1))
        body = m.group(2)
        page = head(meta) + "\n" + header(meta.get("page", "")) + f'\n\n<main id="main">\n{body}\n</main>\n\n'
        if meta.get("lightbox"):
            page += LIGHTBOX + "\n"
        page += FOOTER
        # auto-activate the right dropdown by page filename
        page = page.replace('data-active-hint', '')
        (OUT / frag.name).write_text(page, encoding="utf-8")
        count += 1
        print(f"✓ {frag.name}")
    print(f"— {count} pages built into {OUT}")

if __name__ == "__main__":
    build()
