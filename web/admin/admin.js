/* ClinDeck · Admin gate.
   OJO: esto es un sitio ESTÁTICO. Esta clave solo OCULTA la vista de curiosos;
   NO es seguridad real (el HTML viaja al navegador). Para privacidad de verdad,
   pon el sitio detrás de Vercel Password Protection o despliega /admin aparte.
   Cambia PASS por tu clave. */
(function () {
  var PASS = "clindeck2026";          // 🔑 cámbiala
  var KEY = "clindeck-admin-ok";

  function unlock() { document.documentElement.classList.add("admin-unlocked"); }

  if (localStorage.getItem(KEY) === "1") { unlock(); return; }

  document.addEventListener("DOMContentLoaded", function () {
    var ov = document.createElement("div");
    ov.className = "gate";
    ov.innerHTML =
      '<div class="gate-box">' +
      '<h2>🔒 ClinDeck · Admin</h2>' +
      '<p>Vista privada de tu catálogo.</p>' +
      '<input id="gpass" type="password" placeholder="Clave de acceso" autofocus>' +
      '<button id="gbtn" type="button">Entrar</button>' +
      '<p class="gate-note">Ofuscación para sitio estático, no seguridad real.</p>' +
      '</div>';
    document.body.appendChild(ov);

    function tryPass() {
      var inp = document.getElementById("gpass");
      if (inp.value === PASS) {
        localStorage.setItem(KEY, "1");
        ov.remove();
        unlock();
      } else {
        inp.value = "";
        inp.placeholder = "Clave incorrecta — reintenta";
      }
    }
    document.getElementById("gbtn").addEventListener("click", tryPass);
    document.getElementById("gpass").addEventListener("keydown", function (e) {
      if (e.key === "Enter") tryPass();
    });
  });
})();
