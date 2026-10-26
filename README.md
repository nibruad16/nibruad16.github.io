# Nibru.Eval — Software Engineering Portfolio

Single-page portfolio for Nibru Kefyalew Tessema, a software engineer and AI code evaluator (RLHF / SFT, code auditing, sandboxed verification).

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- `react-simple-maps` + `world-atlas` for the collaboration map
- `lucide-react` icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — all page sections (server component)
- `components/global-contact-map.tsx` — client-only world map
- `app/globals.css` — retro design tokens (windows, bevels, keys) and breakpoints
- `public/` — icons and the downloadable resume (`resume.pdf`)

## Build

```bash
npm run build
```

The site is a static export (`out/`). Every push to `main` deploys it to https://nibruad16.github.io via `.github/workflows/deploy.yml`.
