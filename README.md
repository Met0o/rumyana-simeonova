# Rumyana Simeonova — Astro site

This repository contains the marketing and information site for Rumyana Simeonova’s psychotherapy practice. The project is built with [Astro](https://astro.build/) and deploys to GitHub Pages.

## Getting started

```bash
npm install
npm run dev
```

The site will be available at http://localhost:4321. Edit files under `src/` and the browser will hot-reload.

## Project structure

- `src/layouts/` – Shared layouts including the global navigation shell.
- `src/pages/` – Route-based pages for the site. Blog posts live under `src/pages/blog/`.
- `public/` – Static assets such as the favicon, CNAME, and robots.txt.
- `.github/workflows/` – Continuous deployment workflow for GitHub Pages.

## Available commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the local development server.      |
| `npm run build`   | Create a production build in `dist/`.    |
| `npm run preview` | Preview the production build locally.    |
| `npm run check`   | Run Astro’s type and integration checks. |
| `npm run format`  | Format files with Prettier.              |

## Content editing

Pages use the shared `Base` layout so titles and descriptions are defined in each page’s frontmatter. To add or update content:

1. Create or edit `.astro` files in `src/pages/`.
2. Export `title` and `description` constants to control the `<title>` tag and meta description.
3. Use semantic HTML elements (`<section>`, `<article>`, `<h1>`…) for accessibility.

### Blog posts

Blog posts currently live alongside other pages under `src/pages/blog/slug.astro`. To publish a new article:

1. Duplicate `src/pages/blog/welcome.astro`.
2. Update the `title`, `description`, and `published` fields in the frontmatter.
3. Replace the article body with your content. Use headings, lists, and links as needed.
4. Add an entry to `src/pages/blog/index.astro` (and optionally the homepage list) so the post appears in navigation.

Future enhancements could migrate posts to Astro content collections for automatic indexing.

### Booking & contact configuration

- **Calendly:** Update the `CALENDLY_URL` constant in `src/pages/booking.astro` once the final scheduling link is available.
- **Formspree:** Replace `https://formspree.io/f/your-form-id` in `src/pages/contact.astro` with your form ID after creating it in Formspree.

### Deployment

Deployment is automated via GitHub Actions and GitHub Pages.

1. Push changes to the `main` branch.
2. The workflow defined in `.github/workflows/deploy.yml` installs dependencies, builds the site, and publishes the `dist/` output to GitHub Pages.
3. Ensure the repository’s Pages settings point to GitHub Actions as the deployment source.

The `public/CNAME` file configures the custom domain `rumyanasimeonova.com`. DNS should direct `www` to the GitHub Pages hostname, with the apex redirecting to `www` or using CNAME flattening.

### Maintenance checklist

- Review copy and availability details at least once per quarter.
- Keep dependencies updated (Astro, integrations, npm packages).
- Re-run Lighthouse audits after major design or content updates.
- Confirm Calendly and Formspree credentials remain valid when rotating API keys or email addresses.

For future improvements consider Tailwind CSS for faster styling, JSON-LD schema enhancements, and Bulgarian language localisation.
