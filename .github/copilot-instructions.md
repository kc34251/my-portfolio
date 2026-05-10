# Copilot / AI Agent Instructions — my-portfolio

## Quick overview ✅
- Minimal React + Vite portfolio scaffold (React 19, Vite with a rolldown override).
- Single-page app: `index.html` → `src/main.jsx` → `src/App.jsx`.
- Styling: global CSS in `src/index.css` (imports Tailwind via `@import "tailwindcss"`) and component CSS in `src/App.css`.
- Key tools: Vite (dev/build/preview), ESLint (config in `eslint.config.js`), Tailwind plugin (`@tailwindcss/vite`).

## Primary workflows (concrete commands) 🔧
- Dev: `npm run dev` — starts Vite dev server with HMR (default port 5173).
- Build: `npm run build` — static production bundle via Vite.
- Preview: `npm run preview` — serve the built app locally.
- Lint: `npm run lint` — runs `eslint .` using `eslint.config.js`.

Tip: when validating a PR, run `npm run lint` and `npm run build` locally.

## Architecture & conventions (what matters here) 🧭
- Entry points:
  - `index.html` mounts `<div id="root">`.
  - `src/main.jsx` uses `createRoot` and `StrictMode` to render `App`.
  - `src/App.jsx` is the primary component — a good starting place for quick fixes or HMR tests.
- Asset imports:
  - Local assets: `import reactLogo from './assets/react.svg'`.
  - Root imports (static in `public/` or repo root): `import viteLogo from '/vite.svg'`.
- CSS + Tailwind:
  - `src/index.css` should include the Tailwind directives (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`) — the project previously used `@import "tailwindcss"`, which we replace with the directives for clarity.
  - To scaffold a config and PostCSS setup, run `npx tailwindcss init -p` which creates `tailwind.config.cjs` and `postcss.config.cjs`. Ensure `tailwind.config.cjs` has `content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}']` and `darkMode: 'media'` if you rely on `prefers-color-scheme`.
  - Note: Tailwind v4 uses a PostCSS adapter — install `@tailwindcss/postcss` and in `postcss.config.cjs` use the key `'@tailwindcss/postcss'` instead of `tailwindcss`.
- ESLint:
  - Config: `eslint.config.js` (JS config export). It targets `**/*.{js,jsx}` and ignores `dist`.
  - A notable rule: `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]` — variables starting with an uppercase letter or underscore are ignored for unused-var checks (e.g., React components or certain constants).

## Implementation patterns / small examples 💡
- HMR quick test: edit `src/App.jsx` (change text or the `count` button) and save — the dev server updates in-place.
- Adding an asset: place file in `src/assets/` and import like `import logo from './assets/logo.svg'`.
- To add global styles or Tailwind utilities, edit `src/index.css`.

## Integration and gotchas ⚠️
- package.json overrides `vite` to `npm:rolldown-vite@7.2.5` — this can change behavior relative to upstream Vite; check `node_modules/rolldown-vite` or release notes if a plugin behaves oddly.
- No test framework configured — there are no test scripts or config files present.
- No CI or workflow files detected — automated checks are not discoverable in this repo.

## When making changes (PR checklist) ✅
- Run `npm run lint` and fix reported issues (see `eslint.config.js`).
- Run `npm run build` to ensure build succeeds (rolldown-vite may surface different errors than canonical Vite).
- Keep edits small and focused; this repo is intentionally minimal.

## Questions the agent should ask the author before major changes 📝
- Do you want to add a `tailwind.config.js` (custom themes / purge paths)?
- Which package manager is preferred (npm/pnpm/yarn) for CI instructions?
- Should we add tests and a CI workflow? If yes, which frameworks/CI provider?

---
If anything here is unclear or you'd like more specific examples (e.g., adding a component, wiring Tailwind config, or proposing a CI template), tell me which area to expand and I’ll update this file. 🔧