# Self-hosted fonts

Headings use **Nohemi** (commercial — https://www.behance.net/gallery/157309425/Nohemi-Typeface). The theme does not ship the files.

To use it:

1. Buy/download the licence and copy `Nohemi-Regular.woff2`, `Nohemi-Medium.woff2`, `Nohemi-SemiBold.woff2` into this folder (they are copied to `/assets/fonts/` at build time).
2. In `theme/assets/css/theme.css` change the three `@font-face` `src:` lines to  
   `src: local("Nohemi Regular"), url("/assets/fonts/Nohemi-Regular.woff2") format("woff2");` (and Medium / SemiBold).

Prefer a free alternative? Set `theme.fonts.heading` in `content/site.json` to a Google font (e.g. `"Outfit"` or `"Manrope"`) and add it to `theme.fonts.googleFonts`, e.g. `"Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600"`.
