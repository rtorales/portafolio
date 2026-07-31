#!/usr/bin/env python3
"""
Regenera los assets de marca para buscadores y redes sociales:

  favicon.ico          16/32/48 px  -> icono en resultados de Google y pestanas
  favicon-48.png       48x48        -> tamano base que pide Google
  favicon-96.png       96x96
  favicon-192.png      192x192      -> Android / PWA
  favicon-512.png      512x512      -> PWA
  apple-touch-icon.png 180x180      -> iOS
  img/og-image.jpg     1200x630     -> vista previa al compartir (WhatsApp, LinkedIn, X)

Ejecutar desde la raiz del repositorio cada vez que cambie el retrato o el cargo:
    python generate-brand-images.py

Requiere Pillow (pip install Pillow).
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

ROOT = os.path.dirname(os.path.abspath(__file__))

# --- Identidad (mantener sincronizado con index.html y cv.html) -------------
NOMBRE = "Ricardo Torales"
CARGO = "Gerente de Proyectos de Tecnología"
SUB = "PMO & Business Transformation  \u00b7  Asunci\u00f3n, Paraguay"
DOMINIO = "RICARDOTORALES.COM"
RETRATO = os.path.join(ROOT, "img", "ricardo-torales.jpeg")

# Recorte cuadrado del retrato centrado en el rostro (origen 1600x1200)
CROP = (360, 60, 1200, 900)

# --- Paleta de marca (tokens del sitio) ------------------------------------
INK_950 = (14, 14, 17)
INK_900 = (22, 22, 27)
INK_HI = (36, 36, 44)
INK_LO = (8, 8, 10)
BLANCO = (255, 255, 255)

FONTS = "C:/Windows/Fonts/"
F_BOLD = FONTS + "segoeuib.ttf"
F_REG = FONTS + "segoeui.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def texto_espaciado(draw, xy, txt, fnt, fill, tracking=0):
    """Dibuja texto aplicando letter-spacing manual (Pillow no lo soporta)."""
    x, y = xy
    for ch in txt:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x


def ancho_espaciado(draw, txt, fnt, tracking=0):
    return sum(draw.textlength(c, font=fnt) + tracking for c in txt) - tracking


def fondo_degradado(w, h):
    """Degradado radial oscuro, igual que las portadas del blog."""
    base = Image.new("RGB", (w, h), INK_LO)
    px = base.load()
    cx, cy = w * 0.30, h * 0.10
    maxd = (w**2 + h**2) ** 0.5
    for y in range(h):
        for x in range(w):
            d = (((x - cx) ** 2 + (y - cy) ** 2) ** 0.5) / maxd
            t = min(1.0, d * 1.45)
            if t < 0.55:
                k = t / 0.55
                c = tuple(int(INK_HI[i] + (INK_950[i] - INK_HI[i]) * k) for i in range(3))
            else:
                k = (t - 0.55) / 0.45
                c = tuple(int(INK_950[i] + (INK_LO[i] - INK_950[i]) * k) for i in range(3))
            px[x, y] = c
    return base


def patron_puntos(img, paso=28, alpha=13):
    capa = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(capa)
    for y in range(0, img.size[1], paso):
        for x in range(0, img.size[0], paso):
            d.ellipse([x, y, x + 3, y + 3], fill=(255, 255, 255, alpha))
    return Image.alpha_composite(img.convert("RGBA"), capa).convert("RGB")


# ---------------------------------------------------------------------------
# 1. Favicon: monograma RT
# ---------------------------------------------------------------------------
def crear_icono(size):
    """Renderiza a 512 y reduce con LANCZOS para bordes nitidos."""
    S = 512
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = int(S * 0.22)
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=r, fill=INK_950 + (255,))
    d.rounded_rectangle([8, 8, S - 9, S - 9], radius=r - 8, outline=(255, 255, 255, 46), width=16)

    f = font(F_BOLD, int(S * 0.42))
    txt = "RT"
    tr = -int(S * 0.02)
    w = ancho_espaciado(d, txt, f, tr)
    bbox = d.textbbox((0, 0), txt, font=f)
    x = (S - w) / 2
    y = (S - (bbox[3] - bbox[1])) / 2 - bbox[1]
    texto_espaciado(d, (x, y), txt, f, BLANCO + (255,), tr)

    return img.resize((size, size), Image.LANCZOS)


# ---------------------------------------------------------------------------
# 2. Imagen Open Graph 1200x630
# ---------------------------------------------------------------------------
def crear_og():
    W, H = 1200, 630
    img = patron_puntos(fondo_degradado(W, H))
    d = ImageDraw.Draw(img)

    # --- Retrato circular a la derecha ---
    if os.path.exists(RETRATO):
        foto = Image.open(RETRATO).convert("RGB").crop(CROP)
        D = 392
        foto = foto.resize((D, D), Image.LANCZOS)

        mask = Image.new("L", (D * 4, D * 4), 0)
        ImageDraw.Draw(mask).ellipse([0, 0, D * 4 - 1, D * 4 - 1], fill=255)
        mask = mask.resize((D, D), Image.LANCZOS)

        cx, cy = 946, H // 2
        pos = (cx - D // 2, cy - D // 2)

        # halo suave detras del retrato
        halo = Image.new("RGBA", img.size, (0, 0, 0, 0))
        hd = ImageDraw.Draw(halo)
        hd.ellipse([pos[0] - 26, pos[1] - 26, pos[0] + D + 26, pos[1] + D + 26],
                   fill=(255, 255, 255, 20))
        halo = halo.filter(ImageFilter.GaussianBlur(18))
        img = Image.alpha_composite(img.convert("RGBA"), halo).convert("RGB")
        d = ImageDraw.Draw(img)

        img.paste(foto, pos, mask)

        # anillo perimetral
        ring = Image.new("RGBA", (D * 4, D * 4), (0, 0, 0, 0))
        ImageDraw.Draw(ring).ellipse([6, 6, D * 4 - 7, D * 4 - 7],
                                     outline=(255, 255, 255, 64), width=12)
        img.paste(Image.new("RGB", (D, D), BLANCO), pos,
                  ring.resize((D, D), Image.LANCZOS).split()[3])

    d = ImageDraw.Draw(img)

    # --- Bloque de texto a la izquierda ---
    x0 = 78

    f_eyebrow = font(F_BOLD, 21)
    texto_espaciado(d, (x0, 138), DOMINIO, f_eyebrow, (255, 255, 255, 255), 4.2)
    d.rectangle([x0, 178, x0 + 54, 181], fill=(255, 255, 255))

    f_nom = font(F_BOLD, 74)
    d.text((x0 - 4, 214), NOMBRE, font=f_nom, fill=BLANCO)

    f_cargo = font(F_REG, 37)
    d.text((x0 - 2, 316), CARGO, font=f_cargo, fill=(214, 214, 221))

    f_sub = font(F_REG, 25)
    d.text((x0 - 1, 378), SUB, font=f_sub, fill=(150, 150, 160))

    # regla + claim
    d.rectangle([x0, 442, x0 + 620, 443], fill=(255, 255, 255, 40))
    f_claim = font(F_REG, 24)
    d.text((x0 - 1, 466), "Transformaci\u00f3n digital  \u00b7  IA  \u00b7  Gobernanza de TI",
           font=f_claim, fill=(126, 126, 136))

    return img


# ---------------------------------------------------------------------------
def main():
    print("Generando iconos...")
    ico = os.path.join(ROOT, "favicon.ico")
    crear_icono(256).save(ico, sizes=[(16, 16), (32, 32), (48, 48)])
    print("  favicon.ico (16/32/48)")

    for s in (48, 96, 192, 512):
        p = os.path.join(ROOT, f"favicon-{s}.png")
        crear_icono(s).save(p)
        print(f"  favicon-{s}.png")

    p = os.path.join(ROOT, "apple-touch-icon.png")
    fondo = Image.new("RGB", (180, 180), INK_950)
    fondo.paste(crear_icono(180), (0, 0), crear_icono(180).split()[3])
    fondo.save(p)
    print("  apple-touch-icon.png (180)")

    print("Generando imagen Open Graph...")
    og = os.path.join(ROOT, "img", "og-image.jpg")
    crear_og().save(og, "JPEG", quality=88, optimize=True, progressive=True)
    kb = os.path.getsize(og) // 1024
    print(f"  img/og-image.jpg (1200x630, {kb} KB)")
    if kb > 300:
        print("  AVISO: >300 KB puede fallar la vista previa en WhatsApp")


if __name__ == "__main__":
    main()
