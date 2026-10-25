# Taif Aldehbash · Portfolio

Personal portfolio built with React, TypeScript and Vite.

## Run it

```bash
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`, and `npm run lint` runs oxlint.

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
