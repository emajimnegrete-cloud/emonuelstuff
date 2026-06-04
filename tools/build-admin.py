#!/usr/bin/env python3
"""Genera la vista admin (web/admin/) renderizando content/<tema>/*.md a HTML.

Uso:  python3 tools/build-admin.py
Requiere:  pip install markdown
Vuelve a ejecutarlo cada vez que añadas o edites un tema en content/.
"""
import os, glob, html
import markdown

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
ADMIN = os.path.join(ROOT, "web", "admin")
INFOG = os.path.join(ROOT, "web", "infographics")
os.makedirs(ADMIN, exist_ok=True)

MD_EXT = ["tables", "fenced_code", "sane_lists", "attr_list"]
SECTIONS = [  # (archivo, id, etiqueta)
    ("notes.md",      "apuntes",    "📝 Apuntes"),
    ("mnemonics.md",  "mnemonicos", "🧠 Mnemónicos"),
    ("flashcards.md", "flashcards", "🃏 Flashcards"),
    ("sources.md",    "fuentes",    "📚 Fuentes"),
]

def md2html(path):
    with open(path, encoding="utf-8") as f:
        return markdown.markdown(f.read(), extensions=MD_EXT)

def topbar(title, extra_links=""):
    return (
        '<div class="topbar"><div class="topbar-inner">'
        '<a class="logo" href="index.html"><span class="mark">CD</span>'
        '<span><span style="color:#0F172A">Clin</span><span style="color:#0D9488">Deck</span></span></a>'
        '<span class="adm-tag">ADMIN</span>'
        '<div class="links">'
        '<a href="index.html">Catálogo admin</a>'
        '<a href="../index.html" target="_blank">Web pública ↗</a>'
        + extra_links + '</div></div></div>'
    )

PAGE = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex, nofollow" />
<title>ClinDeck · Admin — {title}</title>
<link rel="stylesheet" href="admin.css" />
<script defer src="admin.js"></script>
</head>
<body>
{topbar}
<div class="admin-main">
  <div class="subnav"><div class="subnav-inner">{subnav}</div></div>
  <div class="wrap">
    <div class="notice">👁️ Vista privada — así se ve TODO lo que ofreces en este tema. Los compradores reciben esto (PDF/Anki); aquí lo revisas tú.</div>
    {sections}
  </div>
  <footer class="adm">ClinDeck · vista admin · generado desde <code>content/{slug}/</code></footer>
</div>
</body>
</html>
"""

def build_topic(slug):
    folder = os.path.join(CONTENT, slug)
    subnav, sections = [], []
    infog = os.path.join(INFOG, slug + ".html")
    if os.path.exists(infog):
        subnav.append(f'<a href="../infographics/{slug}.html" target="_blank">🖼️ Infografía ↗</a>')
    for fname, sid, label in SECTIONS:
        fpath = os.path.join(folder, fname)
        if not os.path.exists(fpath):
            continue
        subnav.append(f'<a href="#{sid}">{label}</a>')
        sections.append(f'<section id="{sid}" class="md">{md2html(fpath)}</section>')
    title = slug.replace("-", " ").title()
    out = PAGE.format(title=html.escape(title), topbar=topbar(title),
                      subnav=" ".join(subnav), sections="\n".join(sections), slug=slug)
    with open(os.path.join(ADMIN, slug + ".html"), "w", encoding="utf-8") as f:
        f.write(out)
    # info para el índice
    present = {sid: os.path.exists(os.path.join(folder, fn)) for fn, sid, _ in SECTIONS}
    present["infografia"] = os.path.exists(infog)
    return title, present

def build_index(topics):
    cards = []
    for slug, (title, present) in topics.items():
        def row(ok, label):
            return f'<li class="{"ok" if ok else "no"}">{"✓" if ok else "○"} {label}</li>'
        assets = (
            row(present["apuntes"], "Apuntes") + row(present["mnemonicos"], "Mnemónicos") +
            row(present["flashcards"], "Flashcards") + row(present["fuentes"], "Fuentes") +
            row(present["infografia"], "Infografía")
        )
        infog_btn = (f'<a class="btn btn-g" target="_blank" href="../infographics/{slug}.html">Infografía</a>'
                     if present["infografia"] else "")
        cards.append(
            f'<div class="cat"><h3>{html.escape(title)}</h3>'
            f'<ul class="assets">{assets}</ul>'
            f'<div class="actions"><a class="btn btn-p" href="{slug}.html">Abrir tema</a>{infog_btn}</div></div>'
        )
    out = f"""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex, nofollow" />
<title>ClinDeck · Admin — Catálogo</title>
<link rel="stylesheet" href="admin.css" />
<script defer src="admin.js"></script>
</head>
<body>
{topbar('Catálogo')}
<div class="admin-main">
  <div class="wrap">
    <h1 style="font-family:'Poppins',sans-serif;margin:22px 0 4px">Catálogo (vista admin)</h1>
    <p style="color:#64748B;margin:0 0 6px">Todo el material que estás ofreciendo, renderizado para tu revisión.</p>
    <div class="notice">🔒 Página privada y <code>noindex</code> — no está enlazada desde la web pública. Cambia la clave en <code>admin.js</code>.</div>
    <div class="cat-grid">{''.join(cards)}</div>
  </div>
  <footer class="adm">ClinDeck · vista admin · regenera con <code>python3 tools/build-admin.py</code></footer>
</div>
</body>
</html>
"""
    with open(os.path.join(ADMIN, "index.html"), "w", encoding="utf-8") as f:
        f.write(out)

def main():
    slugs = sorted(d for d in os.listdir(CONTENT) if os.path.isdir(os.path.join(CONTENT, d)))
    topics = {s: build_topic(s) for s in slugs}
    build_index(topics)
    print("Temas:", ", ".join(slugs))
    print("Generado en web/admin/:", ", ".join(["index.html"] + [s + ".html" for s in slugs]))

if __name__ == "__main__":
    main()
