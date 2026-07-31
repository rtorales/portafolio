# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio + blog for **Ricardo Torales** (executive IT / project-management brand, Asunción, Paraguay), served at **https://www.ricardotorales.com**. It is a **static HTML/CSS/JS site with no build step and no dependencies** — no `package.json`, no bundler, no framework. Do not introduce npm/Node tooling; a `npx <pkg>` here has nothing to operate on. All site content and copy is in **Spanish**; keep that voice (executive, "sin humo, con criterio de negocio", governance/business lens for IT leaders in Paraguay/LatAm).

## Deploy model (important)

- Hosted on **GitHub Pages** from the **`main` branch root** (default Pages builder — there is no `.github/workflows`). **Pushing to `main` publishes the live site** in ~1–2 minutes. There is no staging.
- Custom domain is pinned by the **`CNAME`** file (`ricardotorales.com`) — never delete it; losing it breaks the domain on the next deploy.
- Confirm a deploy finished before claiming success — poll the Actions API, e.g.:
  ```bash
  curl -s "https://api.github.com/repos/rtorales/portafolio/actions/runs?per_page=1" | python -c "import sys,json;r=json.load(sys.stdin)['workflow_runs'][0];print(r['run_number'],r['status'],r['conclusion'])"
  ```
- **DNS / TLS gotcha:** the apex + `www` currently resolve **directly to GitHub Pages (DNS-only / grey cloud in Cloudflare)** so GitHub can issue the Let's Encrypt cert. Do **not** re-enable Cloudflare's orange-cloud proxy until GitHub's "Enforce HTTPS" is checked — re-proxying hides GitHub's own IPs and breaks cert issuance (this caused recurring "not secure" outages). Cloudflare proxy-layer features (Always Use HTTPS, HSTS, WAF) do not apply while grey-clouded.

## Preview & verification

- Dev server is defined in `.claude/launch.json`: **`python -m http.server 4321`**. Use `preview_start {name: "portafolio"}`, then navigate to `http://localhost:4321/...`.
- **This environment's preview browser does not composite frames — `computer{screenshot}` times out.** Verify with text tools instead: `read_page`, `javascript_tool` (measure `getBoundingClientRect`, computed styles), and `read_console_messages`. Set an explicit viewport (`resize_window {width, height}`) or `document.documentElement.clientWidth` reads 0.
- Validate structured data / assets before publishing (this is how correctness is checked here, since there are no tests):
  ```bash
  # JSON-LD in a page
  python -c "import re,json,sys;[json.loads(b) for b in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>',open(sys.argv[1],encoding='utf-8').read(),re.S)];print('JSON-LD OK')" blog/<slug>/index.html
  # sitemap / SVG well-formedness
  python -c "import xml.dom.minidom as m;m.parse('sitemap.xml');print('XML OK')"
  ```

## CV flow (keep three artifacts in sync)

The downloadable **`CV_Ricardo_Torales.pdf` is generated, never hand-edited.** Source of truth is **`cv.html`**. When experience/titles change in `index.html`, mirror them in `cv.html`, then regenerate:
```powershell
.\generate-cv.ps1   # renders cv.html to PDF via headless Edge
```
Job titles/dates must stay consistent across **`index.html` (timeline + Person schema)**, **`cv.html`**, and the PDF.

## Brand images for search & social (generated, never hand-edited)

`favicon.ico` (16/32/48), `favicon-{48,96,192,512}.png`, `apple-touch-icon.png` and `img/og-image.jpg` are all produced by **`python generate-brand-images.py`** (Pillow). Edit the `NOMBRE`/`CARGO`/`SUB`/`CROP` constants at the top of that script — not the images — and re-run it when the portrait or job title changes.

- **Favicon must be `/favicon.ico` at the root with absolute paths in every page.** Google looks for it there; a relative `href="favicon.svg"` alone made Search show the generic globe icon.
- **`og:image` must be a raster 1200×630 JPEG/PNG under ~300 KB** — WhatsApp/LinkedIn/X do not render SVG previews and crop non-1.91:1 images badly. Every page points at `img/og-image.jpg`; keep `og:image:width/height/type` in sync with the actual file.
- After changing an OG image, previews stay stale until each platform re-scrapes: force it via LinkedIn Post Inspector and Facebook Sharing Debugger.

## Architecture

- **`index.html`** is the entire homepage — ~2800 lines with **all CSS and JS inline** (no external CSS/JS except Google Fonts). A `:root` design-token system drives everything: `--ink-950/900/800` (dark surfaces), `--zinc-50…600` (neutrals), `--reading-max: 720px`, `--ease-out`, font vars (Space Grotesk / Hanken Grotesk / JetBrains Mono). Palette is deliberately **monochrome**; reuse these tokens rather than hard-coding colors.
- **`ricardo-torales-brand-system/`** is a reference design system, **not published** (blocked in `robots.txt`).
- **Animations:** elements with class `rt-reveal` fade in via an `IntersectionObserver` at the bottom of each page; the homepage also has a one-time **preloader orb** (`#rt-loader`) gated by `sessionStorage` with CSS+JS failsafes so it can never trap content, plus `img.rt-fade` progressive image loading. Respect `prefers-reduced-motion` (already wired).

### Blog subsystem (`blog/`)

- **`blog/index.html`** is the hub: a card grid **plus** a `Blog` JSON-LD whose `blogPost[]` array lists every post. **`blog/assets/blog.css`** is the shared stylesheet for the hub and all posts.
- Each post is **`blog/<slug>/index.html`** — a self-contained page that **clones the same template**. Use an existing recent post as the structural template (e.g. `blog/harness-ia-agentes-openclaw-hermes/index.html`; `blog/carrera-ia-2026-kimi-gpt-claude/index.html` also shows the inline-SVG data-chart pattern).
- **Cache-busting convention:** posts link the stylesheet as `/blog/assets/blog.css?v=N`. If you change `blog.css` in a way existing pages depend on, bump `N` across the pages that need it.
- **Cover images** are per-post branded SVGs in `blog/assets/img/cover-*.svg` (monochrome, dark radial-gradient bg + dot pattern + geometric motif, `viewBox="0 0 1200 600"`). Referenced two ways: as the hub card's `--cover: url(...)` and as the article hero `<figure class="article-hero">`. **Hero `<img>` must set `height:auto` in CSS** — the raw `width/height` attributes otherwise override the `aspect-ratio` and distort it (a bug fixed once already).
- **Do not embed screenshots or images from copyrighted third-party sites.** Recreate data as your own on-brand SVG with a `<figcaption>` citing the source + link (facts aren't copyrightable; their chart images are).

### Adding a blog post — the four touchpoints

A new post is only "integrated" when all of these are updated together:
1. `blog/<slug>/index.html` — the post (BlogPosting + BreadcrumbList JSON-LD; `author`/`publisher` reference `@id https://www.ricardotorales.com/#person`; `datePublished`/`dateModified` = real date; accurate `wordCount`; 1–2 internal links to related posts).
2. `blog/index.html` — add a card (first in `.posts-grid`) **and** a first entry in the schema `blogPost[]`.
3. `sitemap.xml` — add the post `<url>`; bump `<lastmod>` on `/` and `/blog/`.
4. `llms.txt` — add a bullet (first item under `## Blog`).

## SEO / brand-entity conventions

- The homepage `Person` node (`@id .../#person`) is the canonical brand entity: `sameAs`, `memberOf`/`award` (MITIC designation), `knowsAbout`, `hasCredential`, `nationality`. Only add `sameAs` URLs that resolve (verify with a request first). Keep site titles consistent with the user's LinkedIn to reinforce the entity.
- `robots.txt` disallows `/ricardo-torales-brand-system/`; `llms.txt` is the AI-crawler summary and lists posts.

## Encrypted client subsites (e.g. `auditoriaproquitec/`)

Client deliverables are published as **client-side AES-256-GCM encrypted** mini-sites: content ships as opaque `seg/*.enc` blobs, decrypted in the browser (WebCrypto) behind a passphrase gate. Only the salt + iteration count live in the HTML (not secret); the master key is never in the repo or transmitted. `.gitignore` is hardened to keep keys, plaintext, and source docs (`*.docx/*.pptx/*.xlsx`, `CLAVE_MAESTRA*`, etc.) out of the repo — **never commit a key or unencrypted client material**, and never weaken those ignore rules. These pages carry `noindex` and stay out of `sitemap.xml`/`llms.txt`.

## External automation to be aware of

A **scheduled cloud agent on claude.ai auto-generates and publishes a new blog post every Tuesday 08:00 (America/Asunción)** — so posts may appear on `main` that this session didn't create. It follows the four-touchpoints flow above and, by design, **falls back to a `post-borrador-<date>` branch + PR instead of publishing** if it can't verify facts or the site fails validation. If you see an unexpected `[REVISAR]` PR or a new post, that's its output.
