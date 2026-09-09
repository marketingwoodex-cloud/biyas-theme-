# Deploy: GitHub → Hostinger

The site is static, so hosting needs nothing but files in `public_html`. The workflow
`deploy/github-workflows/deploy.yml` (copy it to `.github/workflows/` once — see `deploy/README.md`) builds, validates and uploads on every push to `main`.

## One-time setup

1. **FTP account** — hPanel → Websites → Manage → Files → *FTP Accounts*. Note host, username, password
   (create a dedicated account limited to `public_html` if you prefer).
2. **GitHub secrets** — repo → Settings → *Secrets and variables* → Actions → *New repository secret*:
   * `FTP_SERVER` (e.g. `ftp.yourdomain.com` or the IP shown in hPanel)
   * `FTP_USERNAME`
   * `FTP_PASSWORD`
   Optional variable `FTP_DIR` if the site is not at `/public_html/` (e.g. a subdomain folder).
3. **First deploy** — Actions tab → *Deploy to Hostinger* → *Run workflow*. Subsequent pushes to `main`
   deploy automatically; pull requests only run the *Check* workflow.

The action uploads only changed files (it keeps a state file on the server) — deploys take seconds.

## Alternative: hPanel Git integration (no FTP secrets)

Hostinger can pull a branch but does not run `npm`. If you prefer that route, change the workflow's
last step to commit `dist/` to a `deploy` branch (e.g. with `peaceiris/actions-gh-pages` using
`publish_branch: deploy`) and connect that branch in hPanel → Advanced → Git with a webhook.

## Domain & HTTPS

Point the domain at Hostinger, enable the free SSL in hPanel, and keep `.htaccess` (copied from
`theme/assets/root/`) — it forces HTTPS, maps 404s to `/404.html` and sets cache headers.
Update `seo.siteUrl` in `content/site.json` to the live URL (used for canonical, OG and sitemap).

## Forms in production

Choose one in `content/site.json → forms.provider`:

| Provider | Setup |
|---|---|
| `web3forms` | free key from web3forms.com → `accessKey` |
| `formspree` | form endpoint URL → `endpoint` |
| `php` | edit `$to` in `theme/assets/root/mail.php`; Hostinger's PHP `mail()` works out of the box (`endpoint` can stay empty → `/mail.php`) |
| `custom` | any POST endpoint that returns 2xx |

## Staging

Create a subdomain (e.g. `staging.yourdomain.com`) in hPanel, add a second FTP account for its folder,
duplicate `deploy.yml` as `deploy-staging.yml` triggered on a `staging` branch with its own secrets.

## Troubleshooting

* **Build fails on `check`** — read the list: broken link, missing image, unknown section type. Fix in `content/`.
* **FTP "530 Login incorrect"** — username must be the full FTP username from hPanel, not the hPanel login.
* **Pages 404 after deploy** — confirm `FTP_DIR` matches the domain's document root.
* **Fonts/videos blocked** — external Nohemi fallback or Pexels videos are hot-linked; self-host if needed.
