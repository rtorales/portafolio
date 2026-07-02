# Ricardo Torales — Brand System

Design system for the **personal executive brand of Ricardo Torales** — Gerente / Jefe de Proyectos de Tecnología and Consultor experto en automatización, procesos e implementación de sistemas. The system exists to project authority and technical credibility across surfaces that sell his services to **both companies and individuals**: his portfolio site, consulting one-pagers, proposals, and the marketing surfaces of the solutions in his portfolio (e.g. Ekklesia, FamilyFinance).

The visual language is **executive-tech**: deep navy authority, electric-blue + cyan energy, cool slate neutrals, a serif/sans pairing (Merriweather + Inter), and restrained, professional motion.

## Sources

Everything here was derived from Ricardo's own materials. Explore these further for higher-fidelity work:

- **Portfolio site** — https://github.com/rtorales/portafolio (the definitive brand expression; all tokens, type, and the UI kit are lifted from its `index.html`). Live: https://ricardotorales.com/
- **Portfolio solutions** (separate products, each with its own UI — reference only, not folded into this system):
  - Ekklesia — church management MVP · https://ekklesia-app-kappa.vercel.app/ · repo https://github.com/rtorales/ekklesia-app
  - FamilyFinance — personal/family finance · https://familyfinance-omega.vercel.app/ · repo https://github.com/rtorales/familia-budget
- **CV** — `CV_Ricardo_Torales_Gerencia.pdf` (in the source repo; not imported here due to size — re-attach if needed).

> The two apps have their **own** distinct designs. This system is Ricardo's *personal* brand; treat the apps as portfolio pieces, not as brand surfaces to recreate here.

---

## Content Fundamentals — how copy is written

- **Language:** Spanish (es-PY), formal-professional register. English only for technology proper nouns (Dynamics 365, Azure AI, Scrum Master, PMBOK).
- **Voice:** first person, executive and outcome-oriented — "Ejecutivo tecnológico con más de 14 años…", "He dirigido equipos multidisciplinarios de más de 15 personas". Confident, never boastful; achievement framed as measurable impact ("valor medible", "alto impacto", "KPIs de impacto operacional").
- **Person:** speaks *about* himself in first person ("Actualmente me desempeño como…"); addresses the reader implicitly, not with "tú/usted" hard-sell. CTAs are invitational: "Contactarme", "Construyamos algo de alto impacto".
- **Casing:** section titles in Title Case ("Perfil Profesional", "Competencias Clave"); eyebrows and stat labels in UPPERCASE with wide tracking ("SOBRE MÍ", "AÑOS DE EXPERIENCIA"); body in sentence case.
- **Numbers as proof:** credibility is quantified — "+14 años", "9+ certificaciones", "2 maestrías", "equipos +15". Use real, specific figures; never invent stats.
- **Bold for scanning:** key phrases inside paragraphs are **bolded** (roles, platforms, institutions) so a skimming recruiter/client catches them.
- **Tone words:** transformación digital, gobernanza de TI, hiperautomatización, visión estratégica, alto impacto, ejecución rigurosa.
- **Emoji:** none. This is an executive brand — icons carry all glyph duty.

---

## Visual Foundations

- **Color:** an **executive-premium, monochrome (b/n)** system. **Ink** near-blacks (`--ink-900 #0E0E11`) carry the hero, portfolio, and contact bands; **zinc** neutrals (`--zinc-50 #FAFAFA` page, `--zinc-600 #52525B` body) carry the light reading sections. The accent is monochrome — **ink on light, white glow on dark** (`--color-glow rgba(255,255,255,.92)`). Chromatic tokens survive only as restrained functional signals: green success ("Activo"/available), refined taupe gold (distinction), neutral info (period pills). At most 2 background colors in play at once: `--zinc-50` page and `--white` cards, alternating with the dark ink bands.
- **Type:** **Space Grotesk** (500–700) for display — hero name, section titles, big stat numbers — a geometric-modern grotesque. **Hanken Grotesk** (300–700) for everything else — UI, body, tags — cohesive with the display face. JetBrains Mono for technical specimens. Display letter-spacing is tight (`-0.035em`); eyebrows are `+0.14em` uppercase. Body is 16px / 1.7.
- **Backgrounds:** solid zinc/white on content; the hero and contact bands use `--gradient-hero` (radial ink) with animated white **glow blobs**, a faint white grid texture, and a radial mask. No photographic or illustrated backgrounds. The only imagery is the **portrait** in the hero.
- **Spacing & layout:** 1060px max container, 24px gutters, 72px section padding (88px hero). Content is grid-based — 2-col perfil (text + sidebar), 2-col skills, single-rail timeline.
- **Corner radii:** 6px chips · 8px buttons · **12px cards** (the signature) · 100px pills · 50% avatar.
- **Cards:** white/zinc surface, 1px `--zinc-200` hairline border, 12–16px radius, **no** default shadow. Elevation appears only on **hover** (`--shadow-md`) with a −2/−4px `translateY` lift. A special "highlight box" card uses a subtle zinc fill + 3px left ink border for emphasized statements. Project cases add a diagonal ↗ arrow that nudges on hover.
- **Shadows:** soft, cool, layered (never harsh black). `sm` at rest is rare; `md` on hover; `lg` for pop. The portrait ring uses a deep `--shadow-photo`.
- **Borders:** hairline `--zinc-200` everywhere; on dark, `rgba(255,255,255,.14)`. Timeline rail is a 2px ink→border gradient.
- **Hover states:** cards lift + gain `--shadow-md`; buttons darken/translate −1px; links shift from ink to zinc; translucent contact cards brighten (`.06 → .15` white). Transitions ~0.2s ease.
- **Press states:** subtle — rely on the −1/−2px translate; no aggressive scale-down.
- **Motion:** measured and dignified. A 2.4s opacity **pulse** on availability/status dots and the hero badge. A `fade-up` **scroll reveal** (IntersectionObserver) on sections. Slow-drifting white glow blobs on dark bands. No bounces.
- **Transparency & blur:** the sticky nav is `rgba(255,255,255,.92)` + 10px backdrop-blur. On dark bands, chips/cards are white at 8–15% opacity. Blur is used *only* for the nav.
- **Imagery vibe:** the single portrait is warm-neutral, professional headshot, cropped top-center in a circular cyan→blue gradient ring.

---

## Iconography

- **System:** **Heroicons (outline)** — 24×24 viewBox, `stroke="currentColor"`, `stroke-width="2"`, round caps/joins. This matches the inline SVGs in the source portfolio exactly. Brand/social glyphs (LinkedIn, WhatsApp) are **filled** brand marks at `fill="currentColor"`.
- **Delivery:** icons are inline SVG (no icon font, no PNG sprites). The UI kit centralizes them in `ui_kits/portfolio/icons.jsx` — reuse that map. For new work, pull matching glyphs from Heroicons (https://heroicons.com) outline set; use the filled brand marks for social.
- **Color:** icons inherit text color — accent blue inside gradient tiles, white on dark, muted slate in lists.
- **Emoji / unicode:** no emoji. One unicode glyph is used deliberately — the `▸` triangle as a timeline bullet marker in `--accent-600`.
- **Logo:** "RT" monogram (Merriweather 700, navy rounded square) + "Ricardo **Torales**" wordmark (Torales in accent blue). See `assets/favicon.svg` and the Brand cards.

> **Substitution flag:** the brand uses **Google Fonts** (Merriweather + Inter) loaded via CDN — the same source the portfolio site uses, so these are authentic, not substitutes. No local font binaries are shipped; if you need offline/embedded fonts, ask Ricardo for licensed files.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (import-only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` (resets + keyframes).
- `assets/` — `ricardo-torales.jpeg` (portrait), `favicon.svg` (RT monogram).
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

**Components** (`window.RicardoToralesBrandSystem_e0aacc.*`)
- `components/core/` — **Button**, **Tag**, **Badge**, **SectionLabel**, **Card**
- `components/profile/` — **StatItem**, **SkillCard**, **TimelineItem**, **ContactCard**, **LangBar**, **Avatar**

**UI Kit**
- `ui_kits/portfolio/` — full personal-brand landing recreation (`index.html` + `sections.jsx` + `icons.jsx`).

**Template**
- `templates/personal-brand/` — `PersonalBrand.dc.html`: hero + stats + contact CTA starter for consuming projects.

**Foundation cards** — Colors (4), Type (3), Spacing (3), Brand (2), Components (2), Portfolio (1) in the Design System tab.
