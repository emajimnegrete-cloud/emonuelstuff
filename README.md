# ClinDeck

> Material de estudio médico con la más alta evidencia científica, hecho didáctico.
> *Evidence-based medical study material, made easy to learn.*

ClinDeck produce y distribuye **infografías, decks de flashcards, apuntes y mnemónicos**
para estudiantes, residentes, especialistas, profesionales de la salud y pacientes
interesados en su propia salud. Contenido **bilingüe (ES/EN)**, basado en guías y
evidencia de alto nivel, distribuido vía **Reddit** y monetizado vía **Gumroad**.

---

## 🧭 ¿Cómo funciona este repositorio?

Este repo es a la vez **fábrica de contenido** y **escaparate web**.

```
clindeck/
├── README.md                      # Estás aquí
├── BRAND.md                       # Identidad: nombre, paleta, voz, logo
├── STRATEGY.md                    # Playbook de Reddit + monetización Gumroad
├── prompts/
│   └── antigravity-infographic.md # Prompt reutilizable para Google Antigravity
├── content/                       # "Backend": la verdad vive en Markdown
│   └── antibioticos/
│       ├── notes.md               # Apuntes con evidencia (ES/EN)
│       ├── flashcards.md          # Deck fuente, importable a Anki/CSV
│       ├── mnemonics.md           # Mnemónicos
│       └── sources.md             # Referencias / nivel de evidencia
└── web/                           # "Frontend": lo que ve el público
    ├── index.html                 # Landing bilingüe con CTAs a Gumroad
    ├── css/styles.css
    ├── js/app.js                  # i18n toggle + demo de flashcards
    └── infographics/
        └── antibioticos.html      # Infografía HTML/SVG imprimible (A4/Reddit)
```

**Flujo de trabajo de una pieza nueva:**

1. Escribir el contenido en `content/<tema>/` (apuntes → flashcards → mnemónicos → fuentes).
2. Generar la infografía con el prompt de `prompts/antigravity-infographic.md` en
   Google Antigravity (o partir del template `web/infographics/antibioticos.html`).
3. Exportar PDF/PNG de la infografía y el deck → subir el producto a Gumroad.
4. Publicar el teaser (infografía en baja resolución o 1 carta del deck) en Reddit,
   enlazando al producto.

---

## 🚀 Uso rápido

La web no necesita build. Es HTML/CSS/JS estático (ideal para GitHub Pages).

```bash
# Previsualizar localmente
cd web
python3 -m http.server 8000
# Abrir http://localhost:8000  (landing)
# Abrir http://localhost:8000/infographics/antibioticos.html  (infografía)
```

Para publicar gratis: activar **GitHub Pages** apuntando a `/web` o mover su
contenido a la raíz / `docs/`.

---

## ⚕️ Aviso médico

Todo el material de ClinDeck es **educativo**. No sustituye el juicio clínico, las
guías locales vigentes ni la consulta con un profesional. Las dosis y elecciones
empíricas varían según epidemiología local, resistencias y el paciente. Verificar
siempre contra la fuente primaria antes de aplicar.

## 📄 Licencia y contenido

- **Código** (web, plantillas): libre para reutilizar dentro del proyecto.
- **Contenido de pago** (PDFs/decks vendidos): © ClinDeck. No redistribuir.
