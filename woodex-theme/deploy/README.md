# Deploy templates

GitHub blocks automated tools from creating workflow files, so the two workflows live here as
templates. Activate them once, from your own machine or the GitHub web UI:

```bash
mkdir -p .github/workflows
cp woodex-theme/deploy/github-workflows/*.yml .github/workflows/
git add .github && git commit -m "Enable CI + Hostinger deploy" && git push
```

Then add the FTP secrets described in `docs/DEPLOY.md` (Settings → Secrets → Actions):
`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (optional variable `FTP_DIR`).

* `check.yml` — runs build + check + smoke on every pull request / non-main push.
* `deploy.yml` — on push to `main`: build → check → FTP upload of `woodex-theme/dist/` to Hostinger.
