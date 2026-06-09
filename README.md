# Futurit — Launch Webpage

Static landing page for [Futurit](https://www.getfuturit.app/), a personal wealth simulation app by Buildit Labs.

## Features

- Responsive design with custom CSS (no build step)
- Waitlist form via [Formspree](https://formspree.io)
- Spanish / English language switcher
- Legal pages (privacy, terms) and in-page modals
- SEO: structured data, sitemap, Open Graph

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `index.css` | Styles |
| `site.js` | i18n, form, interactions |
| `legal.js` | Legal modal content (EN/ES) |
| `privacidad.html` / `terminos.html` | Standalone legal pages |
| `manifest.json` | Web app manifest |
| `sitemap.xml` | Search engine sitemap |

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

## Deploy

Hosted on **GitHub Pages** at `www.getfuturit.app` (see `CNAME`).

Push to `main` to deploy. After changes, submit the sitemap in [Google Search Console](https://search.google.com/search-console).

## Configuration

Edit `site.js`:

- `formspreeEndpoint` — your Formspree form URL
- `contactEmail` / `supportEmail` — contact address shown in errors
