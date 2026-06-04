/* ClinDeck landing — i18n toggle + flashcard demo. Sin dependencias. */
(function () {
  "use strict";

  /* ---------------- i18n (ES/EN) ---------------- */
  var STORAGE_KEY = "clindeck-lang";

  function applyLang(lang) {
    document.documentElement.lang = lang;
    // Texto de elementos con data-es / data-en
    document.querySelectorAll("[data-es][data-en]").forEach(function (el) {
      var val = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-es");
      if (val === null) return;
      if (el.tagName === "META") {
        el.setAttribute("content", val);
      } else {
        el.textContent = val;
      }
    });
    // Estado visual del toggle
    var es = document.getElementById("lang-es");
    var en = document.getElementById("lang-en");
    if (es && en) {
      es.classList.toggle("active", lang !== "en");
      en.classList.toggle("active", lang === "en");
    }
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    renderCard(); // refrescar la carta en el idioma activo
  }

  function initLang() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = saved || (navigator.language && navigator.language.slice(0, 2) === "en" ? "en" : "es");
    var es = document.getElementById("lang-es");
    var en = document.getElementById("lang-en");
    if (es) es.addEventListener("click", function () { applyLang("es"); });
    if (en) en.addEventListener("click", function () { applyLang("en"); });
    applyLang(lang);
  }

  /* ---------------- Flashcard demo ---------------- */
  // Muestra real tomada de content/antibioticos/flashcards.md
  var CARDS = [
    {
      q_es: "¿Qué clases cubren Pseudomonas aeruginosa?",
      a_es: "Ceftazidima, cefepime, pip-tazobactam, carbapenémicos (NO ertapenem), aztreonam, fluoroquinolonas y aminoglucósidos.",
      q_en: "Which classes cover Pseudomonas aeruginosa?",
      a_en: "Ceftazidime, cefepime, pip-tazobactam, carbapenems (NOT ertapenem), aztreonam, fluoroquinolones, aminoglycosides."
    },
    {
      q_es: "¿Por qué la daptomicina NO sirve para neumonía?",
      a_es: "Es inactivada por el surfactante pulmonar.",
      q_en: "Why is daptomycin useless in pneumonia?",
      a_en: "It is inactivated by pulmonary surfactant."
    },
    {
      q_es: "Anaerobios: ¿clindamicina o metronidazol según localización?",
      a_es: "Clindamicina por ENCIMA del diafragma; metronidazol por DEBAJO.",
      q_en: "Anaerobes: clindamycin vs metronidazole by site?",
      a_en: "Clindamycin ABOVE the diaphragm; metronidazole BELOW."
    },
    {
      q_es: "¿Cuál es la única cefalosporina con cobertura anti-MRSA?",
      a_es: "Ceftarolina (5ª generación).",
      q_en: "Only cephalosporin with anti-MRSA activity?",
      a_en: "Ceftaroline (5th generation)."
    },
    {
      q_es: "¿Para qué sirve la vancomicina ORAL?",
      a_es: "Solo para C. difficile (actúa en la luz intestinal); no trata infección sistémica.",
      q_en: "What is oral vancomycin used for?",
      a_en: "C. difficile only (acts in the gut lumen); no systemic effect."
    }
  ];

  var idx = 0;
  var card = document.getElementById("flashcard");
  var qEl = document.getElementById("card-q");
  var aEl = document.getElementById("card-a");
  var counter = document.getElementById("counter");

  function renderCard() {
    if (!qEl || !aEl) return;
    var c = CARDS[idx];
    var lang = document.documentElement.lang === "en" ? "en" : "es";
    qEl.textContent = lang === "en" ? c.q_en : c.q_es;
    aEl.textContent = lang === "en" ? c.a_en : c.a_es;
    if (counter) counter.textContent = (idx + 1) + " / " + CARDS.length;
  }

  function flip() { if (card) card.classList.toggle("flipped"); }
  function unflip() { if (card) card.classList.remove("flipped"); }

  function go(delta) {
    idx = (idx + delta + CARDS.length) % CARDS.length;
    unflip();
    renderCard();
  }

  if (card) {
    card.addEventListener("click", flip);
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    if (prev) prev.addEventListener("click", function (e) { e.stopPropagation(); go(-1); });
    if (next) next.addEventListener("click", function (e) { e.stopPropagation(); go(1); });
  }

  /* ---------------- init ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    renderCard();
  });
})();
