# -*- coding: utf-8 -*-
"""Regenera las imagenes Open Graph del sitio (assets/og-dark.png y og-light.png).

    pip install pillow
    python tools/gen_og.py            # escribe en ./assets
    python tools/gen_og.py otra/ruta

Descarga por unica vez las tipografias del sitio (Archivo e IBM Plex Mono, ambas
con licencia SIL Open Font) desde Google Fonts a tools/_fonts/.
Si cambia una cifra del proyecto, editar la lista `stats` y el titular, y volver a correr.
"""
import math, os, sys
try:
    from urllib.request import urlopen, Request
except ImportError:
    from urllib2 import urlopen, Request
import re
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
FD = os.path.join(HERE, "_fonts")
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(HERE), "assets")

FONTS = {
    "Archivo-Reg.ttf":   ("Archivo", "wght@400"),
    "Archivo-XBold.ttf": ("Archivo", "wght@800"),
    "PlexMono-Med.ttf":  ("IBM+Plex+Mono", "wght@500"),
}


def ensure_fonts():
    if not os.path.isdir(FD):
        os.makedirs(FD)
    for fname, (fam, axis) in FONTS.items():
        dest = os.path.join(FD, fname)
        if os.path.exists(dest):
            continue
        css_url = "https://fonts.googleapis.com/css2?family=%s:%s" % (fam, axis)
        req = Request(css_url, headers={"User-Agent": "Mozilla/5.0"})
        css = urlopen(req).read().decode("utf-8", "replace")
        m = re.findall(r"https://fonts\.gstatic\.com[^)]+\.ttf", css)
        if not m:
            raise SystemExit("No se pudo resolver la tipografia %s" % fam)
        open(dest, "wb").write(urlopen(Request(m[0], headers={"User-Agent": "Mozilla/5.0"})).read())
        print("descargada", fname)


ensure_fonts()

S = 2                      # supermuestreo
W, H = 1200, 630


THEMES = {
    "dark": dict(
        bg="#08121C", panel="#0F1E2D", ink="#E8EFF6", ink2="#AEC1D4",
        muted="#8399B0", brand="#6FA3E0", signal="#E0A33A", line="#22374D",
        grid="#132436", onsignal="#08121C", ringc="#2C4763",
    ),
    "light": dict(
        bg="#EDF1F5", panel="#FFFFFF", ink="#0D1B2A", ink2="#41546B",
        muted="#6B7D93", brand="#1D4E89", signal="#C67C0D", line="#D3DDE8",
        grid="#DCE4EC", onsignal="#FFFFFF", ringc="#B4C4D5",
    ),
}


def F(name, size):
    return ImageFont.truetype(os.path.join(FD, name), int(size * S))


def px(v):
    return int(round(v * S))


def tracked(d, xy, text, font, fill, track=0.0):
    """Dibuja texto con letter-spacing (PIL no lo soporta de fabrica)."""
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += d.textlength(ch, font=font) + track * S
    return x


def tracked_w(d, text, font, track=0.0):
    return sum(d.textlength(c, font=font) + track * S for c in text)


def dashed(d, pts, fill, width, on=8, off=7):
    """Polilinea discontinua sobre una lista de puntos ya muestreada."""
    rem, drawing = on * S, True
    for i in range(len(pts) - 1):
        (x0, y0), (x1, y1) = pts[i], pts[i + 1]
        seg = math.hypot(x1 - x0, y1 - y0)
        t = 0.0
        while t < seg:
            step = min(rem, seg - t)
            a = (x0 + (x1 - x0) * (t / seg), y0 + (y1 - y0) * (t / seg))
            b = (x0 + (x1 - x0) * ((t + step) / seg), y0 + (y1 - y0) * ((t + step) / seg))
            if drawing:
                d.line([a, b], fill=fill, width=width)
            t += step
            rem -= step
            if rem <= 0.001:
                drawing = not drawing
                rem = (on if drawing else off) * S


def qbez(p0, p1, p2, n=44):
    out = []
    for i in range(n + 1):
        t = i / n
        u = 1 - t
        out.append((u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
                    u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]))
    return out


def wrap(d, text, font, maxw):
    words, lines, cur = text.split(), [], ""
    for w in words:
        probe = (cur + " " + w).strip()
        if d.textlength(probe, font=font) <= maxw * S or not cur:
            cur = probe
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def build(theme_name):
    c = THEMES[theme_name]
    img = Image.new("RGB", (W * S, H * S), c["bg"])
    d = ImageDraw.Draw(img)

    f_eyebrow = F("PlexMono-Med.ttf", 14)
    f_word    = F("PlexMono-Med.ttf", 15)
    f_h1      = F("Archivo-XBold.ttf", 55)
    f_sub     = F("Archivo-Reg.ttf", 21)
    f_statv   = F("Archivo-XBold.ttf", 31)
    f_statk   = F("PlexMono-Med.ttf", 12)
    f_foot    = F("PlexMono-Med.ttf", 13)
    f_node    = F("Archivo-XBold.ttf", 16)
    f_cap     = F("PlexMono-Med.ttf", 12)

    # --- reticula de plano ---
    for x in range(0, W + 1, 30):
        d.line([(px(x), 0), (px(x), px(H))], fill=c["grid"], width=max(1, S // 2))
    for y in range(0, H + 1, 30):
        d.line([(0, px(y)), (px(W), px(y))], fill=c["grid"], width=max(1, S // 2))

    M = 62

    # --- marca ---
    cx, cy, r = M + 15, 52, 15
    d.ellipse([px(cx - r), px(cy - r), px(cx + r), px(cy + r)], outline=c["line"], width=px(1.6))
    for ang in (-52, -128, 40, 128):
        a = math.radians(ang)
        d.line([(px(cx), px(cy)),
                (px(cx + r * 1.02 * math.cos(a)), px(cy + r * 1.02 * math.sin(a)))],
               fill=c["muted"], width=px(1.6))
    d.ellipse([px(cx - 4.6), px(cy - 4.6), px(cx + 4.6), px(cy + 4.6)], fill=c["signal"])
    tracked(d, (px(M + 40), px(cy - 9)), "TERMINALES INTERURBANAS", f_word, c["ink"], 1.1)

    d.line([(px(M), px(88)), (px(M + 616), px(88))], fill=c["line"], width=px(1))

    # --- eyebrow ---
    tracked(d, (px(M), px(112)),
            "PROYECTO DE TITULACIÓN · MGP · UNIVERSIDAD AMERICANA (PARAGUAY)",
            f_eyebrow, c["brand"], 1.5)

    # --- titular ---
    COL = 616
    lines = wrap(d, "Cinco terminales Park and Ride en los accesos de Asunción", f_h1, COL)
    y = 152
    for ln in lines:
        d.text((px(M), px(y)), ln, font=f_h1, fill=c["ink"])
        y += 62

    # --- bajada ---
    y += 14
    for ln in wrap(d, "Formulación completa del proyecto: diagnóstico, matrices de "
                      "gestión, plan de ejecución y tablero de control.", f_sub, COL):
        d.text((px(M), px(y)), ln, font=f_sub, fill=c["ink2"])
        y += 30

    # --- franja de cifras (ancho completo) ---
    stats = [("USD 27,2 M", "INVERSIÓN TOTAL"), ("5 + 30", "TERMINALES Y BUSES"),
             ("24 MESES", "JUL 2027 – JUN 2029"), ("−20 %", "VEHÍCULOS DE INGRESO")]
    sy = 478
    FULL = W - 2 * M
    d.line([(px(M), px(462)), (px(W - M), px(462))], fill=c["line"], width=px(1))
    colw = FULL / 4.0
    for i, (v, k) in enumerate(stats):
        x = M + i * colw
        if i:
            d.line([(px(x - 18), px(sy - 2)), (px(x - 18), px(sy + 56))],
                   fill=c["line"], width=px(1))
        d.text((px(x), px(sy)), v, font=f_statv,
               fill=c["signal"] if i == 3 else c["ink"])
        tracked(d, (px(x), px(sy + 44)), k, f_statk, c["muted"], 1.0)

    # --- pie ---
    fy = 576
    d.line([(px(M), px(fy - 16)), (px(W - M), px(fy - 16))], fill=c["line"], width=px(1))
    tracked(d, (px(M), px(fy)), "ricardotorales.com/terminales_interurbanas",
            f_foot, c["brand"], 0.6)
    rt = "TORALES OZORIO · GONZÁLEZ VARGAS"
    tracked(d, (px(W - M) - tracked_w(d, rt, f_foot, 0.6), px(fy)),
            rt, f_foot, c["muted"], 0.6)

    # --- esquema radial de corredores ---
    ox, oy = 930, 258
    city_r = 40
    d.ellipse([px(ox - city_r), px(oy - city_r), px(ox + city_r), px(oy + city_r)],
              fill=c["panel"], outline=c["line"], width=px(1.8))
    tw = tracked_w(d, "ASU", f_cap, 1.2)
    tracked(d, (px(ox) - tw / 2, px(oy - 7)), "ASU", f_cap, c["ink2"], 1.2)

    R = 122
    angs = [-78, -39, 0, 39, 78]
    ring = [(ox + R * math.cos(math.radians(a)), oy + R * math.sin(math.radians(a)))
            for a in range(-92, 93, 2)]
    dashed(d, [(px(p[0]), px(p[1])) for p in ring], c["ringc"], px(1.4), on=6, off=6)

    for i, a in enumerate(angs):
        ar = math.radians(a)
        nx, ny = ox + R * math.cos(ar), oy + R * math.sin(ar)
        sx, sy2 = ox + city_r * math.cos(ar), oy + city_r * math.sin(ar)
        mx = ox + (R * 0.62) * math.cos(ar) + 16 * math.sin(ar)
        my = oy + (R * 0.62) * math.sin(ar) - 16 * math.cos(ar)
        pts = [(px(p[0]), px(p[1])) for p in qbez((sx, sy2), (mx, my), (nx, ny))]
        d.line(pts, fill=c["muted"], width=px(3.2), joint="curve")

        ex, ey = ox + (R + 44) * math.cos(ar), oy + (R + 44) * math.sin(ar)
        dashed(d, [(px(nx), px(ny)), (px(ex), px(ey))], c["line"], px(2.2), on=6, off=5)

        nr = 16
        d.ellipse([px(nx - nr), px(ny - nr), px(nx + nr), px(ny + nr)],
                  fill=c["signal"], outline=c["bg"], width=px(2.4))
        lab = str(i + 1)
        lw = d.textlength(lab, font=f_node)
        d.text((px(nx) - lw / 2, px(ny - 11)), lab, font=f_node, fill=c["onsignal"])

    cap = "5 CORREDORES DE ACCESO"
    cw = tracked_w(d, cap, f_cap, 1.4)
    tracked(d, (px(ox) - cw / 2, px(oy + 176)), cap, f_cap, c["muted"], 1.4)

    return img.resize((W, H), Image.LANCZOS)


if not os.path.isdir(OUT):
    os.makedirs(OUT)

for name in ("dark", "light"):
    im = build(name)
    # Paleta de 256 colores: ~60 % menos de peso, sin diferencia visible en
    # una imagen de colores planos y texto antialiasado.
    im = im.convert("RGB").quantize(colors=256, method=Image.MEDIANCUT,
                                    dither=Image.FLOYDSTEINBERG)
    p = os.path.join(OUT, "og-%s.png" % name)
    im.save(p, optimize=True)
    print("%s  %dx%d  %.0f KB" % (p, im.width, im.height, os.path.getsize(p) / 1024.0))
