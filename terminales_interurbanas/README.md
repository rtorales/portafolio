# Sitio web del proyecto — Terminales Interurbanas de Asunción

Sitio estático de divulgación del Proyecto de Titulación de la Maestría en Gestión de Proyectos
(Universidad Americana, Paraguay), de **Ricardo Torales Ozorio** y **Fernando González Vargas**.

**En línea:** <https://ricardotorales.com/terminales_interurbanas/>

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página completa (una sola página con navegación por anclas) |
| `styles.css` | Hoja de estilos: tokens de color, tema claro/oscuro, layout |
| `app.js` | Datos del proyecto + render de mapa, gráficos, matrices e interacciones |
| `assets/og-dark.png` · `og-light.png` | Imágenes de vista previa para redes, 1200 × 630 |
| `assets/favicon.svg` | Icono que se adapta solo al tema claro u oscuro del navegador |
| `assets/favicon-32.png` · `favicon-192.png` · `apple-touch-icon.png` | Iconos de respaldo |
| `tools/gen_og.py` | Regenera las imágenes OG si cambia una cifra |

No hay dependencias, ni build, ni framework. Las únicas cargas externas son las tipografías de
Google Fonts (Archivo, Source Serif 4, IBM Plex Mono); si no cargan, el sitio cae a tipografías
del sistema sin romperse.

## Cómo publicarlo

Subir los archivos manteniendo la estructura de carpetas: `index.html`, `styles.css` y `app.js`
en la raíz, y `assets/` como subcarpeta. Nombres exactos y en minúsculas — en Linux las mayúsculas
importan. Servir por **HTTPS**; no hace falta PHP, base de datos ni configuración de servidor.

### Comprobación rápida en local

```bash
python -m http.server 8099 --directory 11_SITIO_WEB
```

Luego abrir `http://localhost:8099`. Abrir el `index.html` con doble clic también funciona, pero
algunos navegadores bloquean la carga del CSS y el JS desde `file://`.

## Sobre la URL

El sitio está en una **subcarpeta** de `ricardotorales.com`, no en un subdominio. GitHub Pages sirve
la misma página en tres direcciones —`/terminales_interurbanas/`, `/index` e `/index.html`—, lo que
para un buscador es contenido duplicado. Por eso el `<head>` declara una canónica:

```html
<link rel="canonical" href="https://ricardotorales.com/terminales_interurbanas/">
```

**Compartir siempre la forma con barra final** (`/terminales_interurbanas/`): es la canónica, la que
está en `og:url` y la que aparece impresa en la imagen de vista previa.

Conviene además agregar esa URL al `sitemap.xml` de la raíz del sitio.

## Vista previa en redes (Open Graph)

Las etiquetas ya están en el `<head>` de `index.html`. Hay dos imágenes, oscura y clara, pero
**una tarjeta OG no cambia con el tema del visitante**: las redes cachean una sola imagen por URL.
Por defecto se usa la oscura, que resiste mejor sobre los fondos claros de LinkedIn, WhatsApp y X.
Para usar la clara, reemplazar `og-dark.png` por `og-light.png` en las cuatro etiquetas que la
mencionan (`og:image`, `og:image:secure_url`, `twitter:image` y el `image` del JSON-LD).

Lo que **sí** cambia con el tema del navegador es el icono del sitio (`favicon.svg`) y el color de
la barra del navegador (`theme-color`), que tienen versión clara y oscura.

Tras cambiar la imagen hay que forzar el recacheo en cada red:

- LinkedIn — <https://www.linkedin.com/post-inspector/>
- Facebook y WhatsApp — <https://developers.facebook.com/tools/debug/>
- X — <https://cards-dev.twitter.com/validator>
- Telegram — escribirle `/revalidate <url>` a @WebpageBot

### Regenerar las imágenes

```bash
python tools/gen_og.py
```

Requiere `pillow`. La primera vez descarga las tipografías del sitio a `tools/_fonts/`
(ignorada por git). Las cifras y el titular están al principio de la función `build()`.

## Cómo editar el contenido

Casi todo el contenido vive en **`app.js`**, en constantes en mayúsculas al principio del archivo.
Para actualizar una cifra o un texto, se edita ahí y se vuelve a subir el archivo:

- `CORREDORES` — los 5 corredores del mapa interactivo (nombre, municipios, geometría, descripción)
- `DIAGNOSTICO` — las 6 cifras del diagnóstico, con su fuente
- `PROBLEMA` — causas y efectos del árbol de problemas
- `ALTERNATIVAS` — las 5 alternativas evaluadas
- `MDR` — los 4 resultados de la Matriz de Resultados
- `PRESUPUESTO` / `FINANCIACION` — composición de los USD 27,2 M y el esquema 50-30-20
- `FASES` / `HITOS` — cronograma y Gantt
- `CURVA_S` / `EVM` / `EVM_KPI` — gráficos de control
- `RIESGOS`, `INTERESADOS`, `QFD_REQ`, `QFD_TEC`, `EDT`, `ADQUISICIONES`, `COMUNICACIONES`, `RACI` — matrices
- `FAQ` — las preguntas y respuestas
- `REFS` — referencias bibliográficas

Los títulos de sección, el hero y los textos de introducción están en `index.html`.

Si cambia un dato del **canon del proyecto** (presupuesto, alcance, cronograma, metas), actualícelo
en cuatro lugares para que no queden cifras divergentes: la tesis, los anexos, `app.js` y la imagen
OG (`tools/gen_og.py`).

## Framing del contenido — no quitar

El sitio declara de forma explícita, en el hero y en el pie, que se trata de una **propuesta
académica** y no de un programa gubernamental en ejecución: no hay obra adjudicada, financiación
comprometida ni decisión administrativa tomada, y las instituciones mencionadas (MOPC, SETAMA, BID,
municipios) son los actores que el proyecto identifica, no entidades que lo respalden.

Por la misma razón el sitio **no usa logotipos institucionales** ni publica datos personales
(números de cédula, correos, teléfonos). Conviene mantenerlo así: es lo que separa una divulgación
académica correcta de algo que podría leerse como un anuncio oficial.

Esa misma precisión está en la descripción de Open Graph, que es lo que se lee en la tarjeta antes
de abrir el enlace.

## Tema claro y oscuro

Tres estados, no dos:

1. Sin elección del visitante, manda `prefers-color-scheme` del sistema operativo.
2. El botón de la barra superior fuerza uno y lo recuerda en `localStorage`.
3. Un script mínimo en el `<head>` (entre los marcadores `TEMA:INICIO` y `TEMA:FIN`) aplica esa
   elección **antes del primer pintado**, para que al recargar no haya un destello del tema contrario.

Todos los colores son variables CSS declaradas tres veces —`:root`, la consulta
`prefers-color-scheme: dark` y `:root[data-theme="dark"]`— para que los tres estados resuelvan bien.
Al agregar un color nuevo hay que declararlo en los tres bloques.

## Accesibilidad y rendimiento

- HTML de 37 KB que viaja en ~11 KB comprimido; sin imágenes en la página, sin librerías.
- Navegable por teclado, con enlace de salto al contenido y foco visible.
- El mapa de corredores es operable con teclado (tabulación y Enter sobre cada corredor).
- Tablas anchas con desplazamiento horizontal propio; la página nunca se desborda de lado.
- Respeta `prefers-reduced-motion`.
- Probado a 400 px de ancho (móvil) y en escritorio.
