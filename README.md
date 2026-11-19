# Portfolio

Personal portfolio: selected projects, about, experience, tech stack and contact, in English, Spanish and Catalan.

https://anionce.github.io/portfolio/

**Stack:** Vite + React 19 + TypeScript · plain CSS · Vitest + Testing Library · GitHub Actions + GitHub Pages.

## Structure

```
src/
  components/  header, hero, projects, about, experience, tag sections, footer
  lib/         language preference and external links
  content.ts   all the text in every language, plus projects and stack
  assets/      photo and project screenshots
  test/        test setup
scripts/
  reading.mjs         pure helpers to read the Goodreads profile and update content.ts
  update-reading.mjs  fetches the currently-reading book and writes it
```

The site's text lives in `content.ts`; to add a project, add an entry to `projects.items` in each language with its screenshot in `src/assets/projects/`.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Script                   | What it does                                      |
| ------------------------ | ------------------------------------------------- |
| `npm run dev`            | Start the dev server                              |
| `npm test`               | Run the test suite once                           |
| `npm run test:watch`     | Run tests in watch mode                           |
| `npm run typecheck`      | Type-check the project                            |
| `npm run lint`           | Lint with ESLint                                  |
| `npm run format`         | Format with Prettier                              |
| `npm run build`          | Type-check and build to `dist/`                   |
| `npm run update-reading` | Update the "Reading" card from Goodreads          |

## Automation

- **Deploy:** every push to `main` builds the site and publishes it to GitHub Pages.
- **Reading:** a daily workflow runs `update-reading` and commits `content.ts` when the current book changes.

## Tests

Vitest + Testing Library on jsdom. Component tests cover the default language, switching and remembering the language, the mobile menu and safe external links; unit tests cover the language preference and the Goodreads parsing and rewriting.
