# Button

Primary action control for the Ricardo Torales brand. Use on both light surfaces (`primary`, `accent`, `ghost`) and the dark navy hero/contact bands (`white`, `outline`).

```jsx
<Button variant="primary" size="md">Contactarme</Button>
<Button variant="outline" href="/cv.pdf">Descargar CV</Button>
<Button variant="accent" iconRight={<Arrow />}>Agendar consultoría</Button>
```

Variants: `primary` (solid navy) · `accent` (sky blue) · `white` (on dark) · `outline` (on dark) · `ghost` (bordered, light). Sizes: `sm` · `md` · `lg`. Pass `href` to render as a link; `icon` / `iconRight` for leading/trailing glyphs.
