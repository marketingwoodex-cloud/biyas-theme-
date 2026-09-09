# CLAUDE.md

Read and follow `AGENTS.md` in this directory — it is the single source of truth for how this
theme is structured, the commands to run, and the rules for changing content vs. theme files.

Quick start for a task:
1. `cd woodex-theme && npm install` (first time)
2. `npm run dev` to preview (http://localhost:8080)
3. Make changes in `content/` (copy, pages, sections order) or `theme/` (markup, CSS, JS)
4. `npm run build && npm run check` — must pass before you finish. Run `npm run smoke` if you touched JS.

Key references: `docs/SECTIONS.md` (every section's data shape), `docs/THEME-GUIDE.md`, `docs/CONTENT.md`, `docs/DEPLOY.md`.
