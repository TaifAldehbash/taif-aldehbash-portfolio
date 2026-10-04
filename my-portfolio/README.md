# Taif Aldehbash, portfolio

Single-page portfolio for Taif Aldehbash, software engineer in Riyadh (native iOS, Flutter, web front-end). Built with React 19, TypeScript, Vite 7 and Tailwind CSS v4. No UI libraries, no animation libraries, no analytics.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve dist/ locally
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Name, intro, email, links, availability | `src/content/profile.ts` |
| Featured and smaller projects | `src/content/projects.ts` |
| Fact plates shown beside each project | `src/content/plates.ts` |
| Jobs, dates and bullets (drives the timeline) | `src/content/experience.ts` |
| Skill groups | `src/content/skills.ts` |
| Which projects prove each skill (derived) | `src/content/evidence.ts` |
| Behance case studies | `src/content/caseStudies.ts` |
| Degree and certificates | `src/content/education.ts` |
| Colour tokens, type, base styles | `src/index.css` |
| Print stylesheet | `src/styles/print.css` |
| Self-hosted fonts | `public/fonts/`, declared in `src/styles/fonts.css` |
| Sections | `src/components/*.tsx` |

Everything the visitor reads comes from `src/content`. The timeline, the "Used in" lines under each skill and the overlap bracket are computed from those files, so a date changed in one place changes everywhere.

## Things to fill in

- **Behance URL** in `profile.ts`. Every Behance link stays hidden while the URL is the placeholder `https://www.behance.net/`.
- **Arabic name** in `profile.ts` (`arabicName`). The line under the heading renders only when it is non-empty.
- **Screens.** Add a `screens` array to any project in `projects.ts` (`{ src, alt, caption, device: 'phone' | 'tablet' }`) and the slots appear above its fact plate. Export iPhone screens without a device frame; iPad screens in landscape.
- **Case-study links.** Add `url` to an entry in `caseStudies.ts` to turn its name into a link.

## The colour system

Hue means platform and nothing else: iOS is peach, Flutter is teal, Web is pink, Design is plum. The four values are sampled from the Nahaj and FastWay app icons in `src/assets/projects`. Each project shows the mark with only its own platforms lit. Dark is the default scheme. Light and system-following are explicit choices in the footer control. Both palettes are CSS custom properties at the top of `src/index.css`.

## Deploying

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages on every push to `main`. Enable Pages in the repository settings with **Source: GitHub Actions**. The workflow sets the Vite base path to `/<repository-name>/`; on a custom domain, or on Vercel or Netlify, leave `VITE_BASE_PATH` unset so the base is `/`.
