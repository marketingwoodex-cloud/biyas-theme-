# WOODEX INTERIOR — MASTER EXECUTION PLAN
### Remaining work to launch · v1.0

**Status:** 34 static routes live · 0 TypeScript errors · 0 lint errors
**Companion docs:** `WOODEX-WEBSITE-BLUEPRINT.md` (strategy) · `WOODEX-MASTER-PACK.md` (design system, SEO, blog spec) · `DESIGN-SYSTEM.md` (implemented tokens)

---

## 0. DECISIONS APPLIED THIS ROUND

| Question | Your answer | What changed | Risk |
|---|---|---|---|
| Proof tokens | Safe rounded claims | `YEARS: "10"` → **10+ years**, `PROJECTS: "200"` → **200+ projects** now render sitewide | ⚠️ **See §0.1** |
| City proof | All five delivered | All city pages upgraded from service-area wording to "resident site manager for the duration of the works" | ⚠️ **See §0.2** |
| Minimum size | 1,000 sq ft | Already live on the proposal form and reassurance panel | — |
| ISO 9001 | *not answered* | Stays `null` — renders nothing | — |

### 0.1 The "200+ projects" risk — read this

These are now **public claims**, not placeholders. Two consequences:

1. **A serious buyer will ask "which 200?"** If the answer is a rough estimate rather than a countable register, that question damages more trust than the number ever built. Before launch, someone should be able to produce a list.
2. **Competitors in this market check each other's claims.** Mavric, A Design Studio and Aenzay all publish numbers; if yours is challenged and cannot be substantiated, it becomes the story.

**Recommendation:** count the register this week. If the real figure is 140, publish 140 — a specific odd number is *more* persuasive than a round one, because round numbers read as marketing and specific numbers read as records.

Both values are single-source in `src/lib/siteConfig.ts` — a one-line change.

### 0.2 "All five cities delivered" — what it now says

City pages now read: *"We deliver commercial fit-out projects in {City} from our Lahore studio, with a resident site manager for the duration of the works."*

Still compliant — **no address, no local phone, no implied office** anywhere outside Lahore. But it does now assert a completed project in each city. If Multan or Faisalabad is actually "we have quoted there", flip that city's `delivered` flag back to `false` and the wording self-corrects.

Each city page also needs **at least one real project** in it before it will rank. An unsupported city page is thin, and thin location pages are actively penalised.

---

## 1. WHERE THE BUILD ACTUALLY IS

### Built and live

| Area | Detail |
|---|---|
| **Conversion** | `/request-proposal` (12-field qualified form, budget required, 1,000 sq ft qualifier, client validation) · `/thank-you` (real URL, noindex, GA4-ready) |
| **Services** | Hub + 6 commercial pages with the design/fit-out cannibalisation guard |
| **Proof** | `/portfolio` (URL-reflected filter) · `/case-studies` + template · 6 placeholder records |
| **Trust** | `/process` (5 steps, HowTo schema) · `/about` |
| **SEO surfaces** | 5 city pages (unique content) · 6 industry pages (2 indexed, 4 gated) |
| **Compliance** | `<Stat>` hides unresolved tokens · `<Pending>` labels unverified metrics · `<PlaceholderImage>` never fakes a photo · no address outside Lahore |
| **System** | Linoxa-replica tokens, motion spec, one grotesk, bronze ≤3%, 4px radius |

### Not built

| Gap | Phase | Blocking launch? |
|---|---|---|
| `/blog` hub + post template + 12 modular blocks | 8 | No — but it is the entire TOFU funnel |
| First 4 articles | 8 | No |
| Form wired to a real endpoint | 9 | **YES** |
| GA4 + Search Console | 9 | **YES** |
| Real photography | 9 | **YES** — 12 pending panels currently |
| Logo SVG | 9 | **YES** — wordmark is type-only |
| Lighthouse + schema validation | 9 | **YES** |

---

## 2. PHASE 8 — BLOG SYSTEM

**Goal:** the TOFU/MOFU funnel. Every article routes to a service page, then to `/request-proposal`.

### 8.1 Data layer — `src/lib/content/blog.ts`
Post record: `slug · title · category · excerpt · date · readTime · author · heroImage · blocks[] · faqs[] · relatedService · seo{}`
Body is an **array of typed blocks**, not an HTML blob — so the 12 block components render from data and an editor cannot produce an unstyled page.

### 8.2 Twelve modular block components
Per master pack §5.2. Each gets its own file under `components/blog/`:

`ProblemSolution` · `ChecklistCard` · `CostTable` · `DoDontGrid` · `StepTimeline` ·
`MaterialCompare` · `MiniCase` · `QuotePull` · `MistakesList` · `KpiPanel` ·
`ImageStory` · `SummaryAccordion`

**Rules enforced in the renderer, not left to an author:**
- never two identical block types consecutively
- max 5 distinct block types per article
- `KpiPanel` figures route through `<Pending>` unless verified

### 8.3 Routes
`/blog` — hub with category filter (URL-reflected, same pattern as portfolio)
`/blog/[slug]` — post template: hero → intro → sticky TOC → blocks → key takeaways → FAQ → CTA band → related posts → author box

### 8.4 Launch articles (BOFU first — they convert while TOFU earns rankings)
1. `office-fit-out-cost-pakistan` — MOFU, highest lead value
2. `what-is-boq-interior-fit-out` — TOFU, builds trust in the core differentiator
3. `design-and-build-vs-split-contract` — BOFU
4. `what-to-send-before-asking-for-a-quote` — BOFU, routes straight to the form

### 8.5 Schema
`Article` + `BreadcrumbList` per post · `FAQPage` where a FAQ block exists · `ItemList` on the hub

**Estimated:** 1 working session.

---

## 3. PHASE 9 — LAUNCH HARDENING

### 9.1 Wire the form *(blocking)*
Route handler at `/api/proposal` → email + CRM. Server-side validation mirroring the client rules. Spam protection: honeypot + timing check, **not** a CAPTCHA — a CAPTCHA on a premium B2B form costs more leads than the spam it stops.

### 9.2 Analytics *(blocking)*
GA4 + Search Console. Events: `form_start` · `form_submit` · `whatsapp_click` · `phone_click` · `case_study_view`. `form_submit` = primary conversion, fired on `/thank-you`. Segment by `city` and `budget_range` — that is how you learn which city pages actually pay.

### 9.3 Assets *(blocking)*
Real photography → replaces 12 pending panels. Logo SVG → replaces the type wordmark and fills the schema `logo` field. Favicon + OG image.

### 9.4 Verification
Lighthouse mobile ≥90 / 100 / 100 · Rich Results Test on every schema type · keyboard-only pass through nav and form · city page uniqueness diff · confirm sitemap excludes `/thank-you` and noindex industries.

**Estimated:** 1 session + your assets.

---

## 4. PHASE 10 — POST-LAUNCH (first 90 days)

| Weeks | Work |
|---|---|
| 1–2 | Google Business Profile: one Lahore listing, service areas for the other four. NAP consistency across directories |
| 3–6 | Replace placeholder case studies with real ones as client approvals land. Each publication flips `status: "live"` and enters the sitemap |
| 3–8 | Articles 5–12, two per week |
| 6–12 | Flip industry pages to indexed as sector proof arrives. Review Search Console for cannibalisation |

---

## 5. RECOMMENDED SEQUENCE

```
NOW  ──▶ Phase 8 (blog)         ← can start immediately, no dependencies
     ──▶ Phase 9.1 + 9.2        ← form endpoint + analytics
     ──▶ [WAIT: your assets]    ← photography, logo, project register
     ──▶ Phase 9.3 + 9.4        ← swap assets, verify, launch
     ──▶ Phase 10               ← ongoing
```

**Critical path is not the blog — it is your assets.** Phase 8 and 9.1–9.2 can complete without you. Everything after that waits on photography, the logo and a countable project list.

---

## 6. OPEN ITEMS

### Blocking launch
1. **Real photography** — 12 pending panels. Even 6 good photos of one completed project changes the site more than any remaining code.
2. **Logo SVG.**
3. **Form endpoint** — where should submissions go? Email, HubSpot, Zoho, Google Sheet?
4. **Countable project register** — see §0.1.

### Blocking specific pages
5. **Client permissions** — which clients allow name, logo, photography or a quote? Nothing goes live without written approval.
6. **Sector proof** — any completed pharmacy/healthcare or education project? Those pages are noindex until yes.
7. **ISO 9001** — certificate number and issuing body, or it stays hidden.

### Not blocking
8. **Your three phase files** — `phase 1.md`, `phase 2.md`, `phase 3.md` did not reach the sandbox (uploads folder empty; same failure as the brand guidelines earlier). Pasting the contents into chat is the reliable route. If they contain a different phase structure, this plan is superseded and I will rewrite it.

---

**Next action on my side:** Phase 8, on your word. Nothing in it depends on the open items above.
