# Vender ClinDeck como activo web — Prospecto / Sale Prospectus

> Objetivo: convertir ClinDeck en un **activo web vendible** y posicionarlo hacia una
> valoración de **$10.000 USD**. Este documento es honesto sobre cómo se llega ahí.

---

## 1. La verdad sobre el precio (léela primero)

Una web se valora casi siempre por su **beneficio**, no por el código. El estándar del
mercado de compraventa de sitios:

> **Precio ≈ 24–40× el beneficio neto MENSUAL** (≈ 2–3,5× el beneficio anual).

| Estado del activo | Lo que paga el mercado |
|---|---|
| Web + contenido + automatizaciones, **$0 de ingresos, sin tráfico** | "Starter site": **$100–$1.000** (se vende por el trabajo hecho, no por el negocio) |
| **~$150/mes** de beneficio probado (2–3 meses de historial) | ~**$3.600–$6.000** |
| **~$300–$400/mes** de beneficio probado | ~**$8.000–$12.000** ✅ *(aquí está tu meta de $10k)* |

**Conclusión:** el código ya lo tienes. Lo que falta para los $10k es **demostrar ~$300–400/mes
de ganancia durante 2–3 meses**. La buena noticia: con el embudo ya montado (Reddit → Gumroad)
es alcanzable, y este repo es exactamente lo que un comprador quiere recibir.

---

## 2. Qué se vende (el paquete del comprador)

Un comprador de ClinDeck recibe un negocio **llave en mano**:

- **Marca + identidad** (`BRAND.md`): nombre, logo, paleta, voz.
- **Web profesional** (carpeta `web/`): landing bilingüe + galería de infografías, estática,
  **cero mantenimiento**, desplegable gratis en GitHub Pages/Netlify.
- **Motor de contenido** (`content/`): 2 temas completos (Antibióticos, ECG) con apuntes,
  flashcards (Anki), mnemónicos y fuentes — y el **prompt de Antigravity** + el **generador
  de mazos con IA** para producir más temas casi sin esfuerzo.
- **Automatizaciones n8n** (`automation/`): Study Bot, generador de mazos (Claude→Notion) y
  post-venta de Gumroad (email + CRM). Esto es lo que sube el valor: **el negocio se opera solo**.
- **Estrategia de crecimiento y monetización** (`STRATEGY.md`, `marketing/`): playbook de Reddit
  y textos de Gumroad listos.
- **Activos transferibles** (al cerrar): dominio, cuenta Gumroad, perfil Reddit, lista de correo/CRM.

**Pitch de una línea:** *"Negocio de material médico de estudio, basado en evidencia, con web
lista, 2 temas publicados, automatización completa de producción y post-venta, y un playbook de
captación en Reddit. Listo para escalar a más temas."*

---

## 3. Stack técnico (argumento de venta: cero deuda técnica)

- **Frontend:** HTML/CSS/JS estático puro. Sin build, sin framework, sin base de datos.
  Hosting **gratis** (GitHub Pages — ya incluido el workflow `.github/workflows/pages.yml`).
- **Contenido:** Markdown versionado en git (portable, sin lock-in).
- **Automatización:** n8n (auto-hospedable gratis) + API de Claude (pago por uso, centavos).
- **Pagos:** Gumroad (sin backend propio que mantener).
- Resultado: **un comprador no técnico puede operarlo**. Eso amplía el mercado de compradores.

---

## 4. Plan de 90 días para llegar a la valoración de $10k

| Semanas | Acción | Meta |
|---|---|---|
| 1–2 | Publicar web (GitHub Pages) + montar Gumroad con bundles de Antibióticos y ECG | Tienda viva |
| 1–8 | Ejecutar `STRATEGY.md`: 1 infografía gratis/semana en Reddit (regla 9:1) | 5–10k visitas/mes al perfil |
| 3–10 | Lanzar 2–3 temas más con el generador de mazos (Gasometría, EKG avanzado, líquidos) | Catálogo de 4–5 temas |
| 4–12 | Optimizar conversión (PWYW para captar emails, bundles, código `REDDIT20`) | **$300–400/mes neto** |
| 10–13 | Recopilar 2–3 meses de capturas de Gumroad (ingresos) + Google Analytics | **Prueba de ingresos** |
| 13 | Listar a la venta con el historial de ingresos | **Listado a ~$10k** |

> Sin este historial de ingresos, no listes esperando $10k: rebajará tu credibilidad. Con él,
> $10k es una valoración defendible (≈30× mensual).

---

## 5. Dónde venderla

| Plataforma | Para qué sirve | Umbral / nota |
|---|---|---|
| **Flippa** | El mayor mercado; sirve para starter sites y negocios pequeños | Sin mínimo; comisión por venta |
| **Acquire.com** | Startups/SaaS y micro-negocios | Mejor con algo de ingreso |
| **Motion Invest / IndieMaker** | Sitios de contenido pequeños | Compra rápida, valoraciones modestas |
| **Empire Flippers** | Premium | Suele exigir historial de ingresos (~$1k+/mes) |
| **Venta directa** | A creadores de contenido médico, academias, edu-influencers | Mayor margen, requiere outreach |

Recomendado: si tienes ingresos → **Flippa o venta directa**; si es activo sin ingresos →
**Motion Invest / Flippa starter** (espera cientos, no miles) o sigue el plan de 90 días primero.

---

## 6. Checklist de traspaso al comprador / Handover

- [ ] Transferir el **repositorio** (o entregar copia) con todo el contenido y automatizaciones.
- [ ] Transferir el **dominio** (registrador) y reconfigurar DNS/Pages a su cuenta.
- [ ] Transferir o recrear la **cuenta de Gumroad** y los productos.
- [ ] Entregar **credenciales/instrucciones** de n8n (sin tus secretos: el comprador pone los suyos).
- [ ] Entregar el **perfil de Reddit** (o documentar la estrategia para que cree el suyo).
- [ ] Exportar la **lista de correo / CRM de Notion** (con consentimiento de datos).
- [ ] **Documentación de operación** (este repo: README, STRATEGY, automation/READMEs).
- [ ] Acuerdo de **soporte de 30 días** post-venta (sube el valor percibido).

---

## 7. Texto de listado (listo para pegar)

**Título:** *ClinDeck — Negocio de material médico de estudio (evidencia + IA), llave en mano*

> Vendo **ClinDeck**, un negocio de contenido médico educativo basado en evidencia:
> infografías, flashcards (Anki), apuntes y mnemónicos, bilingües ES/EN.
> **Incluye:** web profesional estática (hosting gratis), 2 temas completos publicados
> (Antibióticos y ECG) y un sistema para producir más con IA en minutos; automatización n8n
> de producción y post-venta (email + CRM); marca, identidad y playbook de captación en Reddit.
> **Stack sin mantenimiento** (HTML estático + Markdown + Gumroad), operable por no-técnicos.
> Ideal para creadores de contenido médico, academias de preparación de exámenes (USMLE/ENARM/
> residentado) o inversores de sitios de contenido. Se incluye soporte de traspaso.

---

⚕️ Nota: el contenido es **educativo**. En la venta, transfiere también la responsabilidad de
mantener el material actualizado contra las guías vigentes (ver `content/<tema>/sources.md`).
