# Still in the portfolio deployment

The Build and Deploy workflow checks out `logeshkannan96/still` at the commit pinned in `.github/workflows/build.yaml`. It installs dependencies, runs the engine tests, and builds with `--base=/still/` using Node 22. Built assets are copied to `public/still/` before the existing Analog build publishes `dist/analog/public` to `gh-pages`. The portfolio build invokes Vite directly with `dist/client` as its output directory: this preserves Analog's expected output while avoiding the Angular builder's missing Nx peer dependencies.

The portfolio currently uses the custom domain `logesh.space`, so the deployed app lives at `https://logesh.space/still/`. `public/CNAME` preserves that domain during deployment. Use a normal `<a href="/still/">Launch Still</a>` to open it; it is an independent app, not an Angular route. An iframe can also use `/still/`.

## Private source access

`STILL_DEPLOY_KEY` is a portfolio Actions secret containing a dedicated SSH private key. Its public key must be registered as a **read-only** deploy key on `logeshkannan96/still`. Checkout does not persist credentials. The source checkout is removed after building; only the compiled HTML, CSS, JavaScript and WASM are deployed publicly. Existing `ACCESS_TOKEN` remains responsible for publishing the portfolio.

Do not use a broad personal token for Still checkout. To rotate access, register a new read-only public key on Still, replace the portfolio secret, test a deployment, then remove the old deploy key. Never commit key material.

## Releases and rollback

Update the Still checkout `ref` to a reviewed full commit SHA, then push the portfolio's `main` branch. Alternatively rerun the pinned release from Actions → Build and Deploy → Run workflow. Pushing Still alone does not redeploy the portfolio. Roll back by restoring the previous pinned SHA and deploying again.

For local verification, build the Still checkout with `npm ci`, `npm test`, and `npm run build -- --base=/still/`. Copy the **contents** of its `dist/` to this repository's `public/still/`. Install portfolio dependencies with `npm ci --legacy-peer-deps`, then run `npm run build`. Serve `dist/analog/public` and verify `/still/`, grading, and PNG export. The generated `public/still/` and workflow checkout `_apps/` are ignored by Git.

If private checkout fails, check the deploy key and secret. If assets return 404, verify the `/still/` base and that `dist/analog/public/still/index.html` exists. If publishing fails, check the existing `ACCESS_TOKEN` and repository Pages configuration (the `gh-pages` branch).
