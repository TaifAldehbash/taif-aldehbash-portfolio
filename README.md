# Taif Aldehbash · Portfolio

Personal portfolio built with React, TypeScript and Vite.

## Run it

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`, and `npm run lint` runs oxlint.

## Deploy

The site is hosted on [Vercel](https://vercel.com), which builds and publishes `main` on every push and
creates a preview link for every pull request. Vercel detects the Vite setup on its own: build command
`npm run build`, output directory `dist`.

Files in `public/` are referenced through `asset()` in `src/data/profile.ts` (or
`import.meta.env.BASE_URL`) rather than with a leading `/`, so the site also works from a sub-path.
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) can still publish to GitHub Pages at
`/taif-aldehbash-portfolio/`: it runs only when started by hand and builds with `BASE_PATH` set.

## Search engines and link previews

- `npm run build` pre-renders the page into `dist/index.html` ([`scripts/prerender.mjs`](scripts/prerender.mjs)
  renders [`src/entry-server.tsx`](src/entry-server.tsx)), so crawlers and link previews see the full content
  without running JavaScript. The browser then hydrates it.
- `index.html` holds the title, description, canonical URL, Open Graph and X tags, and the
  `ProfilePage` structured data. `public/robots.txt` and `public/sitemap.xml` point crawlers at the site.
- The share image is `public/og-image.jpg` (1200x630). Its source is [`scripts/og-card.html`](scripts/og-card.html):
  render it with headless Chrome, then convert it to JPEG to keep it under WhatsApp's ~300 KB limit:

  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --hide-scrollbars --window-size=1200,630 --force-device-scale-factor=1 --virtual-time-budget=3000 --allow-file-access-from-files --screenshot=og.png "file://$PWD/scripts/og-card.html"
  sips -s format jpeg -s formatOptions 86 og.png --out public/og-image.jpg && rm og.png
  ```

- The site URL is written out in `index.html`, `public/robots.txt`, `public/sitemap.xml` and `siteUrl` in
  `src/data/profile.ts`. Update all four if the domain changes, and bump `<lastmod>` in the sitemap after big
  content changes.

## Editing content

Everything on the page (bio, links, projects, case studies, skills, journey) lives in
[`src/data/profile.ts`](src/data/profile.ts).

- **New project:** add an entry to `projects`. `tracks` decides which filter it shows under
  (`mobile`, `web`, `backend`). `status` is `Shipped` (released to users), `Built` (finished
  but not released), `Building` or `Planned`. `cover` takes an accent colour plus either app
  icons (256px PNGs in `public/logos/`) or a two-letter `monogram`. `links` is optional.
- **New Behance case study:** add an entry to `caseStudies`, using the project's cover image URL.
- **CV button:** `resumeUrl` points at `public/Taif-Aldehbash-CV.pdf`. Replace that file to update the CV, or empty `resumeUrl` to hide the buttons.
- **Photo:** put an image in `public/` and swap the `TA` avatar in
  [`src/components/About.tsx`](src/components/About.tsx).

## Structure

```
src/
  data/profile.ts        content
  styles/global.css      design tokens, reset, buttons, chips
  components/            one component + CSS module per section
  hooks/                 scroll reveal and active-section tracking
```
