# Still in the portfolio deployment

The Build and Deploy workflow checks out `logeshkannan96/still` at the commit pinned in `.github/workflows/build.yaml`. It installs dependencies, runs the engine tests, and builds with `--base=/projects/preview/still/` using Node 22. Built assets are copied to `public/projects/preview/still/` before the Analog build produces `dist/analog/public`. Official GitHub Pages actions upload and deploy that directory; no branch push or personal access token is used. The portfolio build invokes Vite directly with `dist/client` as its output directory: this preserves Analog's expected output while avoiding the Angular builder's missing Nx peer dependencies.

The portfolio uses the custom domain `logesh.space`. `/projects` lists projects, `/projects/still` describes Still, and `/projects/preview/still/` opens the actual app. The first two pages are prerendered Analog routes. The preview is a separate static entry point; use a normal `<a href="/projects/preview/still/">Try Still</a>`, not Angular's routerLink. `public/CNAME` preserves the custom domain during deployment. The trailing slash on the preview lets GitHub Pages serve its directory index.

## Private source access

`STILL_DEPLOY_KEY` is a portfolio Actions secret containing a dedicated SSH private key. Its public key must be registered as a **read-only** deploy key on `logeshkannan96/still`. Checkout does not persist credentials. The source checkout is removed after building; only the compiled HTML, CSS, JavaScript and WASM are deployed publicly. Publishing uses the workflow's short-lived `GITHUB_TOKEN` and OIDC identity. `ACCESS_TOKEN` is no longer referenced; it need not be renewed for this workflow.

Repository Settings → Pages → Build and deployment → Source must be **GitHub Actions**. The build job has read-only repository permissions. Only the separate deployment job receives `pages: write` and `id-token: write`, and only runs on `main`. Manual runs on feature branches build and upload an artifact without publishing. Keep the `github-pages` environment's deployment policy restricted to `main`.

Do not use a broad personal token for Still checkout. To rotate access, register a new read-only public key on Still, replace the portfolio secret, test a deployment, then remove the old deploy key. Never commit key material.

## Releases and rollback

Update the Still checkout `ref` to a reviewed full commit SHA, then push the portfolio's `main` branch. Alternatively rerun the pinned release from Actions → Build and Deploy → Run workflow. Pushing Still alone does not redeploy the portfolio. Roll back by restoring the previous pinned SHA and deploying again.

For local verification, build the Still checkout with `npm ci`, `npm test`, and `npm run build -- --base=/projects/preview/still/`. Copy the **contents** of its `dist/` to this repository's `public/projects/preview/still/`. Install portfolio dependencies with `npm ci --legacy-peer-deps`, then run `npm run build` and `npm run test:site`. Serve `dist/analog/public` and verify the listing, details, and nested preview, including grading and PNG export. The generated preview and workflow checkout `_apps/` are ignored by Git. `public/projects/still-preview.png` is a screenshot of the real app with its illustrated samples; refresh it when the interface materially changes.

If private checkout fails, check the deploy key and secret. If assets return 404, verify the `/projects/preview/still/` base and that `dist/analog/public/projects/preview/still/index.html` exists. If publishing fails, check that Pages uses GitHub Actions, the deployment job has both required permissions, and the `github-pages` environment permits `main`. The legacy `gh-pages` branch is no longer the publishing source; no force-push is needed.
