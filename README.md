# WriteBetter – Landing Page

Marketing website for [WriteBetter](https://github.com/Shubham0202/WriteBetter), the Chrome extension that fixes grammar and helps messages sound polite and professional.

It is a single, fully static page: hero, problem and solution, features, how it works, before and after, privacy, screenshots, FAQ and a final call to action.

## Tech stack

| Part | Built with |
|------|------------|
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4, theme tokens in `src/app/globals.css` |
| Components | shadcn/ui (`base-nova` preset on Base UI) |
| Icons | lucide-react |
| Animation | Motion (formerly Framer Motion), loaded with `LazyMotion` and reduced-motion support |

## Getting started

Requirements: Node.js 20.9 or later, and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script | What it does |
|--------|--------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build. Every route is prerendered as static content |
| `npm run start` | Serves the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type check |

## Configuration

Everything that changes between deployments is in **`src/config/site.ts`**:

| Setting | Where | Notes |
|---------|-------|-------|
| Site URL | `NEXT_PUBLIC_SITE_URL` environment variable | Used for the canonical URL, Open Graph URLs, `sitemap.xml` and `robots.txt`. Copy `.env.example` to `.env.local` and set it. On Vercel it falls back to the production domain automatically |
| Chrome Web Store link | `CHROME_WEB_STORE_URL` | `null` until the extension is published. While `null`, every install button opens the GitHub install guide and the page says the extension is not on the store yet. Set it to the listing URL and the buttons, the How It Works step and the install FAQ all switch over |
| Repository URL | `REPOSITORY_URL` | The GitHub, privacy policy, contact (issues) and license links are built from it |
| Name, title, descriptions, keywords, version, author | `SITE_CONFIG` | Used in metadata, structured data and the page |
| Navigation | `NAV_ITEMS` and `SECTION_IDS` | Section anchors used by the header, footer and sections |

## Editing content

Page copy lives in `src/content/`, one file per section, separate from the components:

| File | Section |
|------|---------|
| `features.ts` | Feature cards, each with a status: `available`, `optional` or `planned` |
| `tones.ts` | Built-in tones and AI rewrite styles, shown inside Features |
| `problems.ts` | Problem and solution rows |
| `steps.ts` | How it works |
| `examples.ts` | Hero example and the before and after examples |
| `privacy.ts` | Local processing, data flows and permissions |
| `gallery.ts` | Screenshots |
| `faq.ts` | FAQ. Also used for the FAQ structured data |

### Accuracy rules

The content was written from the extension's own README and source code. Keep it that way:

- **Planned features stay labelled.** Format Email and Improve Email do not exist in the extension yet, so they use `status: "planned"`. Change the status only once a feature ships.
- **Before and after examples.** The `builtIn` examples are the documented output of the extension's offline engines. The `ai` example and the hero example are illustrative, and the page says so.
- **Privacy statements** mirror the extension README's "Privacy and security" and "Permissions" sections. Update both together.
- **No invented social proof.** There are no ratings, user counts or testimonials, and the structured data leaves them out too.

### Replacing screenshots

1. Put the image in `src/assets/screenshots/`.
2. In `src/content/gallery.ts`, import it and set the item's `image` to `{ src, alt }`, replacing `null`.

Width and height come from the static import, and Next.js serves optimized sizes. The email formatting item stays a placeholder until that feature exists.

## Project structure

```
src/
  app/
    layout.tsx             Fonts, metadata, Open Graph, Twitter card, skip link
    page.tsx               Composes the sections and the structured data
    globals.css            Tailwind import and theme tokens (brand indigo, navy text)
    opengraph-image.tsx    Generated 1200×630 social image
    sitemap.ts, robots.ts  sitemap.xml and robots.txt
    icon.png, apple-icon.png
  assets/screenshots/      Screenshots from the extension repository
  components/
    layout/                Sticky header, mobile menu, footer
    sections/              One component per page section
    mockups/               Static replicas of the extension popup and inline UI
    shared/                Section wrapper, button link, logo, status badge, scroll reveal
    seo/                   JSON-LD structured data
    providers/             Motion provider
    ui/                    shadcn/ui components
  config/site.ts           URLs, names and install settings
  content/                 Page copy
  lib/word-diff.ts         Word-level diff used to highlight changes in Before and After
```

## SEO

- Title, description, keywords, canonical URL, Open Graph and Twitter card metadata in `src/app/layout.tsx`
- A generated Open Graph image (`/opengraph-image`), also used for X/Twitter
- `sitemap.xml` and `robots.txt`
- JSON-LD with `SoftwareApplication` and `FAQPage`
- One `h1`, a heading for every section, and descriptive `alt` text for every screenshot

## Accessibility and performance

- Skip link, landmark navigation, visible focus rings and keyboard-operable menu, tabs and FAQ
- Scroll reveals and hover effects are reduced or turned off with `prefers-reduced-motion`
- Interactive parts (mobile menu, before and after tabs, FAQ) are the only client components. The rest is server-rendered
- The word diff for Before and After runs on the server, so the browser only receives the tabs
- Fonts load through `next/font`, and images through `next/image`

## Deployment

### Vercel

1. Import the repository in Vercel. The framework preset is detected automatically.
2. Optionally set `NEXT_PUBLIC_SITE_URL` to your custom domain. Without it, the production `*.vercel.app` domain is used.
3. Deploy.

### Any Node.js host

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://your-domain.example npm run build
npm run start   # listens on port 3000; use -p to change it
```

`NEXT_PUBLIC_SITE_URL` must be set at **build** time, because the pages are prerendered.

## Troubleshooting

**Style changes do not appear in a production build.** Turbopack keeps a build cache in `.next/cache`, and it has been seen to reuse stale Tailwind output after `globals.css` changed. Delete the build folder and build again:

```bash
rm -rf .next && npm run build
```

## License

MIT, like the extension. © 2026 Shubham Chandgude.
