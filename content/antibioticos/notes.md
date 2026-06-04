# Antibióticos — espectro y elección empírica
*Antibiotics — coverage spectrum & empiric choice*

> **Tema / Topic:** Antibióticos · **Público:** estudiantes y residentes · **Idioma:** ES/EN
> **Versión:** 1.0 · **Nivel de evidencia:** guías (IDSA/ATS, WHO AWaRe, Sanford) — ver `sources.md`
> ⚕️ **Educativo.** La elección real depende de epidemiología y resistencias locales,
> alergias, función renal/hepática y foco. Verificar antibiograma y guía local.

Esta es la **fuente de verdad** ("backend"). De aquí salen la infografía, el deck y los mnemónicos.

---

## 1. Mapa mental: ¿cómo pensar un antibiótico? / How to reason about an antibiotic

Antes de elegir, responde 4 preguntas:

1. **¿Foco?** *(Source?)* — pulmón, vía urinaria, piel/partes blandas, abdomen, SNC…
2. **¿Bicho probable?** *(Likely bug?)* — por foco + contexto (comunitario vs nosocomial, factores de riesgo).
3. **¿Cobertura necesaria?** *(Coverage needed?)* — Gram+, Gram−, atípicos, anaerobios, ¿MRSA?, ¿Pseudomonas?
4. **¿Paciente?** *(Patient?)* — alergias, función renal/hepática, embarazo, gravedad (¿sepsis?), penetración al foco.

> **Regla de oro:** empírico amplio y precoz si está grave → **desescalar** con cultivo/antibiograma a las 48–72 h. *(Start broad if sick, de-escalate with cultures.)*

---

## 2. Matriz de cobertura por clase / Coverage matrix by class

Convención: ✅ verde = cubre/primera línea · 🟡 ámbar = variable/alternativa · ❌ rojo = no cubre.

| Clase / Class | Gram+ (S. aureus MSSA, Strep) | MRSA | Gram− entéricos | Pseudomonas | Anaerobios | Atípicos¹ |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Penicilina G / V** | 🟡 (Strep ✅, estafilo ❌) | ❌ | ❌ | ❌ | 🟡 (orales) | ❌ |
| **Amoxicilina** | ✅ Strep | ❌ | 🟡 | ❌ | ❌ | ❌ |
| **Amox-clavulánico / Amp-sulbactam** | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ |
| **Pip-tazobactam** | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| **Cefazolina (1ª G)** | ✅ MSSA | ❌ | 🟡 | ❌ | ❌ | ❌ |
| **Ceftriaxona (3ª G)** | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Ceftazidima (3ª G)** | 🟡 | ❌ | ✅ | ✅ | ❌ | ❌ |
| **Cefepime (4ª G)** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **Ceftarolina (5ª G)** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Carbapenémicos²** | ✅ | ❌ | ✅ (BLEE) | ✅ (no ertapenem) | ✅ | ❌ |
| **Aztreonam** | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **Vancomicina** | ✅ | ✅ | ❌ | ❌ | 🟡 (C. difficile VO) | ❌ |
| **Linezolid / Daptomicina³** | ✅ | ✅ | ❌ | ❌ | 🟡 | ❌ |
| **Clindamicina** | ✅ | 🟡 (comunitario) | ❌ | ❌ | ✅ (supradiafragm.) | ❌ |
| **Metronidazol** | ❌ | ❌ | ❌ | ❌ | ✅ (infradiafragm.) | ❌ |
| **Aminoglucósidos** | 🟡 (sinergia) | ❌ | ✅ | ✅ | ❌ | ❌ |
| **Fluoroquinolonas⁴** | 🟡 | ❌ | ✅ | 🟡 (cipro/levo) | ❌ | ✅ |
| **Macrólidos** | 🟡 | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Doxiciclina** | ✅ (incl. CA-MRSA) | 🟡 | 🟡 | ❌ | ❌ | ✅ |
| **TMP-SMX (cotrimoxazol)** | ✅ (incl. CA-MRSA) | 🟡 | ✅ | ❌ | ❌ | ❌ |

¹ Atípicos = *Mycoplasma, Chlamydia, Legionella.*
² Carbapenémicos: meropenem, imipenem, ertapenem (ertapenem **no** cubre Pseudomonas).
³ **Daptomicina NO sirve para neumonía** (inactivada por surfactante).
⁴ Respiratorias (levo/moxi) cubren neumococo y atípicos; moxifloxacino añade anaerobios pero **no** Pseudomonas.

---

## 3. Elección empírica por síndrome / Empiric choice by syndrome

> Solo orientativo; ajusta a guía local, gravedad y alergias. Dosis en `sources.md`/guía.

### Neumonía adquirida en comunidad (NAC) / CAP
- **Ambulatorio sano:** amoxicilina (alta dosis) **o** doxiciclina. *(Macrólido si baja resistencia local.)*
- **Ambulatorio con comorbilidad:** β-lactámico (amox-clav/cefuroxima) **+** macrólido, **o** fluoroquinolona respiratoria (levo/moxi).
- **Hospitalizado (sala):** β-lactámico (ceftriaxona/ampi-sulbactam) **+** macrólido, **o** fluoroquinolona respiratoria.
- **UCI:** β-lactámico + macrólido **o** + fluoroquinolona. Añadir cobertura **MRSA/Pseudomonas** solo con factores de riesgo. *(IDSA/ATS 2019.)*

### Infección del tracto urinario / UTI
- **Cistitis no complicada:** nitrofurantoína, fosfomicina **o** TMP-SMX (según resistencia local).
- **Pielonefritis:** fluoroquinolona **o** ceftriaxona; ingreso → ceftriaxona/pip-tazo según gravedad.

### Celulitis / Infección de piel y partes blandas (SSTI)
- **No purulenta (Strep):** cefazolina / cefalexina (cubre MSSA y Strep).
- **Purulenta (sospecha MRSA):** drenaje + TMP-SMX **o** doxiciclina (ambulatorio); vancomicina (hospitalario).
- 🚩 **Necrosante:** cirugía urgente + amplio (pip-tazo o carbapenem) + **clindamicina** (efecto antitoxina) ± vancomicina/linezolid.

### Infección intraabdominal / Intra-abdominal
- Necesita **Gram− + anaerobios**: pip-tazobactam **o** carbapenem; **o** ceftriaxona/cefepime **+ metronidazol**. ± cobertura enterococo/hongos según riesgo.

### Meningitis bacteriana (adulto) / Bacterial meningitis
- **Ceftriaxona + vancomicina** (neumococo resistente). **+ ampicilina** si >50 a / inmunodeprimido (Listeria). **+ dexametasona** antes/junto a 1ª dosis (neumococo). *(Empírico — ajustar a tinción/cultivo.)*

---

## 4. Perlas clínicas / Clinical pearls

- **"El que cubre Pseudomonas casi nunca cubre MRSA"** y viceversa → en sepsis grave a veces necesitas **ambos** (p.ej. pip-tazo/cefepime **+** vancomicina).
- **Anaerobios por encima/por debajo del diafragma:** *encima* → clindamicina; *debajo* → metronidazol.
- **Daptomicina ≠ pulmón** (surfactante la inactiva).
- **Ertapenem ≠ Pseudomonas** (el único carbapenémico que no la cubre).
- **Aztreonam** es el comodín en alergia grave a β-lactámicos (sin reacción cruzada relevante con penicilina), pero solo Gram−.
- **Vancomicina oral** solo actúa en la luz intestinal → **únicamente** para *C. difficile*, no para infección sistémica.
- **Clindamicina + toxinas:** apaga producción de toxinas en *Strep*/*Staph* (necrosante, shock tóxico).
- Desescalar siempre que el cultivo lo permita: menos resistencias, menos *C. difficile*, menos costo. (WHO **AWaRe**: prioriza grupo *Access*, reserva *Watch/Reserve*.)

## 5. Banderas rojas / Red flags

- 🚩 Alergia a penicilina **real** (anafilaxia) → evita β-lactámicos de alto riesgo; aztreonam/no-β-lactámico según foco.
- 🚩 Fluoroquinolonas: tendinopatía/rotura, aneurisma aórtico, QT, disglucemia, neuropatía → no usar como 1ª línea si hay alternativa.
- 🚩 Embarazo: **evitar** fluoroquinolonas, tetraciclinas y (cerca del término) TMP-SMX y nitrofurantoína.
- 🚩 Vancomicina: requiere monitoreo (AUC/nivel), nefrotoxicidad; "síndrome del hombre rojo" por infusión rápida.
- 🚩 Aminoglucósidos: nefro/ototoxicidad → monitorizar, dosis por peso/función renal.
- 🚩 Macrólidos/fluoroquinolonas: prolongan **QT** (cuidado con otros fármacos QT).

---

## 6. Para la versión "explica-fácil" (pacientes) / Patient-friendly version

- "Los antibióticos no curan resfriados ni gripe (virus)."
- "Termina el tratamiento que te indicaron; no guardes sobras ni te automediques."
- "Cada uso innecesario crea bacterias resistentes — un problema de todos."

---

*Fuentes y nivel de evidencia → `sources.md`. Mnemónicos → `mnemonics.md`. Deck → `flashcards.md`.*
