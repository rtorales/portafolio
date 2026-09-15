# Sitio web del proyecto — Terminales Interurbanas de Asunción

Sitio estático de divulgación del Proyecto de Titulación de la Maestría en Gestión de Proyectos
(Universidad Americana, Paraguay), de **Ricardo Torales Ozorio** y **Fernando González Vargas**.

## Archivos

| Archivo      | Qué es |
|--------------|--------|
| `index.html` | La página completa (una sola página con navegación por anclas) |
| `styles.css` | Hoja de estilos: tokens de color, tema claro/oscuro, layout |
| `app.js`     | Datos del proyecto + render de mapa, gráficos, matrices e interacciones |

No hay dependencias, ni build, ni framework. Las únicas cargas externas son las tipografías de
Google Fonts (Archivo, Source Serif 4, IBM Plex Mono); si no cargan, el sitio cae a tipografías
del sistema sin romperse.

## Cómo publicarlo en un subdominio

1. Cree el subdominio en su panel de hosting (por ejemplo `terminales.sudominio.com`) y anote la
   carpeta que le asigna, normalmente `public_html/terminales/`.
2. Suba **los tres archivos** (`index.html`, `styles.css`, `app.js`) a la raíz de esa carpeta, con
   esos nombres exactos y en minúsculas. En Linux las mayúsculas importan.
3. Listo. Sirva por **HTTPS**; no hace falta PHP, base de datos ni configuración de servidor.

Alternativas sin hosting propio: Netlify Drop, Cloudflare Pages o GitHub Pages aceptan la carpeta
tal cual y permiten apuntar el subdominio por CNAME.

### Comprobación rápida en local

```bash
python -m http.server 8099 --directory 11_SITIO_WEB
```

Luego abrir `http://localhost:8099`. Abrir el `index.html` con doble clic también funciona, pero
algunos navegadores bloquean la carga del CSS y el JS desde `file://`.

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
también en la tesis y en los anexos para que no queden cifras divergentes entre documentos.

## Framing del contenido — no quitar

El sitio declara de forma explícita, en el hero y en el pie, que se trata de una **propuesta
académica** y no de un programa gubernamental en ejecución: no hay obra adjudicada, financiación
comprometida ni decisión administrativa tomada, y las instituciones mencionadas (MOPC, SETAMA, BID,
municipios) son los actores que el proyecto identifica, no entidades que lo respalden.

Por la misma razón el sitio **no usa logotipos institucionales** ni publica datos personales
(números de cédula, correos, teléfonos). Conviene mantenerlo así: es lo que separa una divulgación
académica correcta de algo que podría leerse como un anuncio oficial.

## Accesibilidad y compatibilidad

- Tema claro y oscuro: sigue la preferencia del sistema y permite forzar uno con el botón de la
  barra superior (se recuerda en el navegador del visitante).
- Navegable por teclado, con enlace de salto al contenido y foco visible.
- Tablas anchas con desplazamiento horizontal propio; la página nunca se desborda de lado.
- Respeta `prefers-reduced-motion`.
- Probado a 400 px de ancho (móvil) y en escritorio.
