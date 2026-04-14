# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start development server (Vite HMR)
yarn build      # Production build → dist/
yarn preview    # Preview production build locally
yarn lint       # Run ESLint
```

Use `yarn` (not npm) — `yarn.lock` is the lock file.

## Tech Stack

- **React 19 + Vite** — SPA, no SSR
- **React Router DOM 7** — client-side routing (3 pages: home, projects, blogs)
- **Tailwind CSS 4 + Shadcn UI** — dark theme, yellow accent (`yellow-400`)
- **Framer Motion** — animations
- **Google Gemini (`gemini-2.0-flash`)** — AI chatbot via `@google/generative-ai`
- **EmailJS** — contact form (no backend needed)

## Architecture

### Routing (`src/App.jsx`)
Three routes: `/` (HomePage), `/projects` (ProjectsPage), `/blogs` (BlogsPage). Within `HomePage`, sections are anchor-navigated (`#about`, `#skills`, `#education`, `#contact`).

### Component layout
- `src/components/` — all UI components (sections + chatbot + header/footer)
- `src/pages/` — thin page wrappers that compose section components
- `src/components/ui/` — Shadcn UI primitives (button, card, dialog, avatar, textarea)
- `src/lib/utils.js` — `cn()` utility (clsx + tailwind-merge)
- `src/assets/` — images used in project cards

### AI Chatbot (`src/components/chat.js` + `ChatBot.jsx` + `ChatBotPopup.jsx`)
- `chat.js` initializes the Gemini model with a hardcoded system prompt about Dinesh
- `ChatBot.jsx` renders the chat dialog (message history, typing indicator, scroll-to-bottom)
- `ChatBotPopup.jsx` is the floating trigger button (fixed bottom-right)
- Config: `maxOutputTokens: 1000`, `temperature: 0.7`

### Data
Project data is hardcoded directly in `src/components/Projects.jsx` — no external data source or CMS.

## Environment Variables

Required in `.env` (Vite prefix `VITE_` exposes them to the browser):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_GEMINI_API_KEY=...
```

## Path Aliases

`@/` maps to `src/` (configured in `vite.config.js` and `jsconfig.json`). Use `@/components/...`, `@/lib/utils`, etc.

## Deployment

Deployed to Vercel. `vercel.json` sets the build output to `dist/` and rewrites all routes to `/index.html` for SPA routing.

## Shadcn UI

Configured in `components.json` (New York style, JSX not TSX, no TypeScript). To add new components: `npx shadcn@latest add <component>` — they land in `src/components/ui/`.
