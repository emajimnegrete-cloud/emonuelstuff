# Prompt para Google Antigravity — Infografías ClinDeck

Google Antigravity es un entorno agéntico: produce mejores resultados cuando le das
**rol, objetivo, datos, formato de salida y criterios de aceptación**. Abajo tienes
un **prompt maestro reutilizable** (rellena los `[CORCHETES]`) y un ejemplo ya
relleno para Antibióticos.

> Recomendación: pídele que entregue la infografía como **un único archivo HTML
> con CSS y SVG inline** (sin dependencias externas), tamaño A4 e impresión limpia.
> Así es editable, versionable en git, exportable a PDF/PNG y consistente con la marca.

---

## 🧩 PROMPT MAESTRO (copiar y rellenar)

```text
ROL
Eres diseñador de información médica para "ClinDeck", una marca de material de
estudio basado en evidencia. Tu trabajo: convertir contenido clínico en una
infografía didáctica, precisa y bella, lista para imprimir y para Reddit.

OBJETIVO
Crear UNA infografía sobre: [TEMA].
Público: [estudiantes / residentes / especialistas / pacientes].
Idioma: bilingüe ES/EN (etiqueta ES principal, EN en cursiva debajo o entre paréntesis).
Nivel de detalle: [básico / intermedio / avanzado].

CONTENIDO (usar EXACTAMENTE estos datos, no inventar):
[PEGAR AQUÍ el contenido verificado: tablas, algoritmos, listas, dosis, fuentes.
 Tomarlo de content/<tema>/notes.md de ClinDeck.]

IDENTIDAD VISUAL (obligatoria)
- Paleta: teal primario #0D9488, teal oscuro #0F766E, tinta #0F172A,
  gris #64748B, superficie #F8FAFC, ámbar acento #F59E0B, rojo alerta #DC2626,
  verde ok #16A34A.
- Convención de color clínico: verde = cubre/primera línea; ámbar = alternativa/
  precaución; rojo = no cubre/evitar. Úsala de forma consistente.
- Tipografía: Inter/Poppins títulos (semibold), Inter cuerpo, monoespaciada para dosis.
- Estilo: limpio, mucho espacio en blanco, íconos de línea simples, jerarquía clara.
  Nada decorativo sin función. Color = significado.

ESTRUCTURA
1. Encabezado: logo "ClinDeck" (texto: Clin en tinta + Deck en teal) + título del tema
   bilingüe + etiqueta de público.
2. 3–6 bloques temáticos con jerarquía visual (matrices, algoritmos, tarjetas).
3. Caja de "Perlas / Pearls" y caja de "Banderas rojas / Red flags".
4. Pie: fuentes citadas, nivel de evidencia, fecha/versión, aviso educativo,
   y "clindeck • u/ClinDeck • Gumroad".

FORMATO DE SALIDA
- UN solo archivo HTML autocontenido: CSS en <style>, gráficos en SVG inline,
  CERO dependencias ni CDNs externos, fuentes con fallback a system-ui.
- Tamaño objetivo A4 vertical (210×297mm); @media print sin sombras, fondo blanco,
  sin cortar bloques (break-inside: avoid).
- También legible en pantalla y como imagen única para subir a Reddit.
- Accesible: contraste AA, texto real (no texto dentro de imágenes), alt en SVG.

CRITERIOS DE ACEPTACIÓN
- [ ] Toda afirmación clínica proviene del contenido dado (sin alucinaciones).
- [ ] La convención de color verde/ámbar/rojo es coherente.
- [ ] Bilingüe ES/EN en todos los rótulos clave.
- [ ] Imprime en 1–2 páginas A4 sin elementos cortados.
- [ ] Incluye fuentes + aviso educativo + branding ClinDeck.
- [ ] Abre sin errores y sin recursos externos.

Entrega el archivo HTML completo. Luego sugiere 2 mejoras de diseño opcionales.
```

---

## ✅ EJEMPLO RELLENO — "Antibióticos: espectro y elección empírica"

```text
ROL
Eres diseñador de información médica para "ClinDeck"...
(igual que el prompt maestro)

OBJETIVO
Crear UNA infografía sobre: "Antibióticos — espectro de cobertura y elección empírica".
Público: estudiantes de medicina y residentes.
Idioma: bilingüe ES/EN.
Nivel de detalle: intermedio.

CONTENIDO (usar EXACTAMENTE estos datos):
- Matriz de cobertura por clase vs objetivo (Gram+, MRSA, Gram-, Pseudomonas,
  Anaerobios, Atípicos): ver tabla en content/antibioticos/notes.md §2.
- Algoritmo de elección empírica por síndrome (NAC, ITU, celulitis, intraabdominal,
  meningitis): ver §3.
- Mnemónicos: cobertura antipseudomónica, cobertura MRSA, cobertura anaerobia,
  atípicos: ver content/antibioticos/mnemonics.md.
- Perlas y banderas rojas: ver §4 y §5.
- Fuentes: IDSA/ATS CAP 2019, IDSA SSTI, Sanford Guide, WHO AWaRe: ver sources.md.

(resto: IDENTIDAD VISUAL, ESTRUCTURA, FORMATO y CRITERIOS = prompt maestro)
```

> El resultado de referencia hecho a mano está en
> `web/infographics/antibioticos.html`. Úsalo como "estilo de marca" que Antigravity
> debe igualar o superar. Si Antigravity no está disponible, ese archivo ya es una
> infografía lista para vender.
