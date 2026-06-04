# ClinDeck · Study Bot para Notion (n8n)

Workflow de **n8n** que automatiza, sobre tus bases de **Notion**:

- 🗓️ **Cuenta regresiva de exámenes** — calcula y escribe los "días restantes" de cada examen.
- 🃏 **Generación de mazos** — si un examen está a ≤14 días y no tienes un mazo *Listo*
  de esa materia, crea la tarea "Crear mazo".
- 🔔 **Recordatorios inteligentes** — a 30/14/7/3/1 días del examen crea recordatorios
  de estudio, y el día del examen avisa "🚨 HOY".
- 📅 **Agenda integrada** — todo cae en una base que verás como **calendario** en Notion.
- 📧 **Resumen diario** — te manda por Gmail (o donde quieras) tu agenda cada mañana.

Archivo a importar: **`clindeck-study-bot.n8n.json`**

---

## 1. Crea 3 bases de datos en Notion

> El bot lee y escribe estas propiedades **por su nombre exacto**. Si cambias un
> nombre, edítalo también en el nodo **Planificar** (objeto `PROP`) y en los nodos
> *Notion · …* del workflow.

### 📝 Base 1 — `Exámenes`
| Propiedad | Tipo | Notas |
|---|---|---|
| **Examen** | Title | Nombre del examen (p.ej. "Parcial Infecto") |
| **Fecha** | Date | Fecha del examen |
| **Materia** | Select / Text | Tema (debe coincidir con la materia del mazo) |
| **Días restantes** | Number | *Lo escribe el bot* (déjalo vacío) |

### 🃏 Base 2 — `Mazos`
| Propiedad | Tipo | Notas |
|---|---|---|
| **Mazo** | Title | Nombre del mazo |
| **Materia** | Select / Text | Debe coincidir con la materia del examen |
| **Estado** | Select | Opciones: `Por crear`, `En progreso`, `Listo` |
| **Tipo** | Select | `Flashcards`, `Infografía`, `Apuntes`, `Mnemónicos` (opcional) |

### 🔔 Base 3 — `Recordatorios` (tu agenda / calendario)
| Propiedad | Tipo | Notas |
|---|---|---|
| **Tarea** | Title | *La escribe el bot* |
| **Fecha** | Date | *La escribe el bot* → úsala para la vista Calendario |
| **Tipo** | Select | `Estudiar`, `Crear mazo`, `Examen`, `Repaso` |
| **Estado** | Select | `Pendiente`, `Hecho` |

> **Vista de calendario:** en la base `Recordatorios` añade una **vista tipo Calendario**
> agrupada por `Fecha`. Esa es la "agenda" que ve el usuario. Repite en `Exámenes` si
> quieres ver los exámenes en el calendario también.

### Conecta tu integración a las bases
1. Crea una **Notion Integration** en https://www.notion.so/my-integrations → copia el *Internal Token*.
2. En **cada** base: menú `•••` → **Connections** → añade tu integración (sin esto, la API no las ve).
3. Copia el **ID de cada base** (de su URL: `notion.so/<workspace>/<ESTE_ID>?v=...`, 32 hex).

---

## 2. Importa y configura el workflow en n8n

1. n8n → **Workflows → Import from File** → elige `clindeck-study-bot.n8n.json`.
2. Crea credenciales:
   - **Notion API** (tipo *Notion API*, pega tu Internal Token). Asígnala a los 5 nodos `Notion · …`.
   - **Gmail OAuth2** (o cambia el nodo `Email · Agenda diaria` por Telegram/Slack/Notion comment).
3. Abre el nodo **`Config`** y rellena:
   - `EXAMS_DB`, `DECKS_DB`, `REMINDERS_DB` → los 3 IDs de tus bases.
   - `EMAIL_TO` → a dónde llega el resumen.
4. (Opcional) Ajusta la hora en **`Cada día 7:00`** y la zona horaria en *Settings → Timezone*.
5. **Ejecuta una vez** (botón *Test workflow*) para verificar, luego **actívalo** (toggle *Active*).

---

## 3. Cómo funciona (flujo)

```
[Cada día 7:00]
   → [Config]  (IDs + email)
   → [Notion · Exámenes]      query: Fecha ≥ hoy
   → [Notion · Mazos]         query: Estado ≠ Listo
   → [Notion · Recordatorios] query: para dedupe
   → [Planificar]  (Code: días restantes, decide tareas, arma resumen)
        ├─→ [Email · Agenda diaria]          (1 correo resumen)
        ├─→ [Expandir · actualizaciones] → [Notion · Actualizar días]   (PATCH días restantes)
        └─→ [Expandir · tareas]          → [Notion · Crear recordatorio] (POST nuevas tareas)
```

**Lógica clave (nodo `Planificar`):**
- `thresholds = [30, 14, 7, 3, 1]` → edítalos a tu gusto.
- Dedupe por título: no crea dos veces el mismo recordatorio.
- "Crear mazo" solo si la **Materia** no tiene un mazo en estado **Listo**.

---

## 4. Ideas para extender

- 🔁 **Repaso espaciado:** al marcar un mazo `Listo`, crear repasos a +1/+3/+7/+21 días.
- 💬 **Canal:** cambia Gmail por **Telegram/WhatsApp/Slack** (botón "Hecho" interactivo).
- 🤖 **Auto-generación real de mazos:** un segundo workflow que, al crear la tarea
  "Crear mazo", llame a la API de Claude con el contenido de `content/<tema>/` y
  devuelva las flashcards a una base de Notion.
- 🛒 **Post-venta Gumroad:** webhook de compra → alta de email + entrega del bundle.

---

⚕️ Recuerda: este bot organiza tu estudio; el contenido clínico sigue las fuentes de
`content/<tema>/sources.md`. Material educativo.
