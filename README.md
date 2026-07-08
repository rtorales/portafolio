# Ricardo Torales — Portafolio Profesional

Sitio personal de **Ricardo Torales**, Gerente de Proyectos de Tecnología y Consultor en transformación digital, IA y automatización de procesos (Asunción, Paraguay).

🔗 **Live:** [www.ricardotorales.com](https://www.ricardotorales.com/)

## Stack

- HTML/CSS/JS estático, sin dependencias ni build — un solo `index.html`.
- Sistema de diseño propio (`ricardo-torales-brand-system/`), generado con Claude Design: paleta monocroma ejecutiva (ink/zinc), tipografías Space Grotesk + Hanken Grotesk + JetBrains Mono.
- SEO: metadatos Open Graph/Twitter, JSON-LD (`Person` + `WebSite`), `sitemap.xml`, `robots.txt`, URL canónica.
- Accesibilidad: HTML semántico, `prefers-reduced-motion`, contraste AA.

## Estructura

| Ruta | Descripción |
|---|---|
| `index.html` | Sitio completo (estilos y scripts inline) |
| `img/` | Retrato e imágenes |
| `favicon.svg` | Monograma RT |
| `cv.html` | CV imprimible — fuente del PDF |
| `CV_Ricardo_Torales.pdf` | CV descargable, generado desde `cv.html` |
| `generate-cv.ps1` | Regenera el PDF con Edge headless tras actualizar el contenido |
| `ricardo-torales-brand-system/` | Design system de referencia (no se publica como página) |

> **Flujo del CV:** el PDF no se edita a mano. Al actualizar el sitio, reflejar los cambios en `cv.html` y ejecutar `.\generate-cv.ps1`.

## Contacto

- ✉️ ricardotorales@outlook.com
- 💼 [linkedin.com/in/ricardo-torales](https://linkedin.com/in/ricardo-torales)
