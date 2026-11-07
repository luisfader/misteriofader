// Escenas que aparecen de vez en cuando en la portada:
// viento zonda, granizo, el frasco de hidromiel y el Gacel de Sergio.
// Salen de a una, en orden mezclado, con una pausa entre una y otra.
(function () {
  const capa = document.getElementById("clima");
  const hero = document.querySelector(".hero");
  if (!capa || !hero) return;
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const rnd = (a, b) => a + Math.random() * (b - a);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  };

  // ---------- Viento zonda ----------
  const HOJA = '<svg viewBox="0 0 20 12" aria-hidden="true"><path d="M1 6 C5 0 14 0 19 6 C14 12 5 12 1 6 Z" fill="currentColor"/><path d="M1 6 H17" stroke="rgba(0,0,0,.25)" stroke-width="0.8"/></svg>';
  function zonda() {
    const caja = el("div", "esc zonda");
    caja.appendChild(el("div", "zonda-velo"));
    for (let i = 0; i < 60; i++) {
      const r = el("span", "racha");
      r.style.top = rnd(5, 95).toFixed(1) + "%";
      r.style.width = rnd(60, 220).toFixed(0) + "px";
      r.style.animationDuration = rnd(0.7, 1.6).toFixed(2) + "s";
      r.style.animationDelay = rnd(0, 7).toFixed(2) + "s";
      r.style.opacity = rnd(0.35, 0.8).toFixed(2);
      caja.appendChild(r);
    }
    const colores = ["#c9a227", "#d9b13a", "#b8862b", "#e2c25b", "#9f7a2a"];
    for (let i = 0; i < 24; i++) {
      const h = el("span", "hoja", HOJA);
      h.style.top = rnd(20, 90).toFixed(1) + "%";
      h.style.color = colores[i % colores.length];
      h.style.animationDuration = rnd(2.2, 4).toFixed(2) + "s";
      h.style.animationDelay = rnd(0, 6).toFixed(2) + "s";
      caja.appendChild(h);
    }
    return { caja, dura: 9000, clase: "hay-zonda" };
  }

  // ---------- Granizo ----------
  function granizo() {
    const caja = el("div", "esc granizo");
    caja.appendChild(el("div", "granizo-velo"));
    for (let i = 0; i < 90; i++) {
      const g = el("span", "piedra");
      const s = rnd(3, 7);
      g.style.left = rnd(0, 100).toFixed(1) + "%";
      g.style.width = g.style.height = s.toFixed(1) + "px";
      g.style.animationDuration = rnd(0.55, 1.05).toFixed(2) + "s";
      g.style.animationDelay = rnd(0, 6).toFixed(2) + "s";
      caja.appendChild(g);
    }
    return { caja, dura: 8000, clase: "hay-granizo" };
  }

  // ---------- El hidromiel ----------
  const FRASCO = `<svg viewBox="0 0 60 90" aria-hidden="true">
    <defs><radialGradient id="miel" cx="45%" cy="40%" r="60%"><stop offset="0" stop-color="#fff2b8"/><stop offset=".45" stop-color="#f2b632"/><stop offset="1" stop-color="#b8650f"/></radialGradient></defs>
    <rect x="22" y="4" width="16" height="10" rx="2" fill="#8a5a2b"/>
    <path d="M24 14 H36 V30 C48 34 55 44 55 58 C55 75 44 86 30 86 C16 86 5 75 5 58 C5 44 12 34 24 30 Z" fill="rgba(255,248,230,.25)" stroke="rgba(255,248,230,.75)" stroke-width="2"/>
    <path d="M9 56 C14 52 22 54 30 52 C38 50 46 52 51 56 C51 72 42 82 30 82 C18 82 9 72 9 56 Z" fill="url(#miel)"/>
    <rect x="14" y="58" width="32" height="12" rx="2" fill="#f6ead9" opacity=".9"/>
    <text x="30" y="66.5" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="6.4" fill="#5a2a14">Hidromiel</text>
    <ellipse cx="20" cy="46" rx="3" ry="8" fill="rgba(255,255,255,.45)" transform="rotate(20 20 46)"/>
  </svg>`;
  function hidromiel() {
    const caja = el("div", "esc hidromiel");
    const frasco = el("div", "frasco", FRASCO);
    caja.appendChild(frasco);
    for (let i = 0; i < 26; i++) {
      const c = el("span", "chispa");
      c.style.animationDelay = (i * 0.32).toFixed(2) + "s";
      c.style.setProperty("--dx", rnd(-40, 40).toFixed(0) + "px");
      frasco.appendChild(c);
    }
    return { caja, dura: 10000, clase: "hay-hidromiel" };
  }

  // ---------- El Gacel de Sergio ----------
  const GACEL = `<svg viewBox="0 0 240 92" aria-hidden="true">
    <ellipse cx="120" cy="84" rx="104" ry="4" fill="#000" opacity=".35"/>
    <path d="M14 47 L17 41 L80 37 L106 15 L164 14 L194 36 L227 38 L230 43 L230 63 L208 64 A20 20 0 0 0 168 64 L77 64 A20 20 0 0 0 37 64 L14 63 Z" fill="#9ea4aa"/>
    <path d="M17 41 L80 37 L106 15 L164 14 L194 36 L227 38" fill="none" stroke="#c3c8cd" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M86 37 L107 18.5 L142 18 L142 37 Z" fill="#2b3640"/>
    <path d="M148 18 L162 18 L187 36.5 L148 37 Z" fill="#2b3640"/>
    <path d="M107 18.5 L142 18 M148 18 L162 18" stroke="#1d242a" stroke-width="1.2"/>
    <path d="M106 37 C106 32 110 30 117 30 C124 30 128 32 128 37 Z" fill="#5a3d2b"/>
    <circle cx="117" cy="25" r="6" fill="#e8c09a"/>
    <path d="M111 24 C111 18 123 18 123 24 C121 21 113 21 111 24 Z" fill="#8d8d8d"/>
    <path d="M111.5 24.5 C110 23 110.5 21 111.5 20.5 Z" fill="#8d8d8d"/>
    <path d="M111.6 27.6 C112.6 26.8 114.6 26.8 115.4 27.6" stroke="#6b6b6b" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <circle cx="113.2" cy="24" r=".8" fill="#2a1208"/>
    <path d="M82 38 V62 M145 37 V62 M196 38 V62" stroke="#7d848b" stroke-width="1.3"/>
    <rect x="132" y="42" width="9" height="2.6" rx="1.3" fill="#3c4247"/>
    <path d="M86 33 L92 33 L91 37 L85 37 Z" fill="#1e1e1e"/>
    <rect x="24" y="50" width="200" height="4" fill="#2a2a2a"/>
    <path d="M10 49 H26 V58 H11 C10 56 10 51 10 49 Z" fill="#1e1e1e"/>
    <path d="M220 48 H232 C233 51 233 56 232 58 H220 Z" fill="#1e1e1e"/>
    <rect x="14" y="42" width="11" height="5" rx="1" fill="#f3efcf"/>
    <rect x="223" y="40" width="7" height="7" rx="1" fill="#c0392b"/>
    <rect x="223" y="40" width="7" height="2.5" fill="#e3a33b"/>
    <g class="rueda r1"><circle cx="57" cy="66" r="15.5" fill="#161616"/><circle cx="57" cy="66" r="9" fill="#b7bcc1"/><circle cx="57" cy="66" r="3.2" fill="#6f767d"/><circle cx="57" cy="60.5" r="1.3" fill="#6f767d"/><circle cx="62.5" cy="66" r="1.3" fill="#6f767d"/><circle cx="57" cy="71.5" r="1.3" fill="#6f767d"/><circle cx="51.5" cy="66" r="1.3" fill="#6f767d"/></g>
    <g class="rueda r2"><circle cx="188" cy="66" r="15.5" fill="#161616"/><circle cx="188" cy="66" r="9" fill="#b7bcc1"/><circle cx="188" cy="66" r="3.2" fill="#6f767d"/><circle cx="188" cy="60.5" r="1.3" fill="#6f767d"/><circle cx="193.5" cy="66" r="1.3" fill="#6f767d"/><circle cx="188" cy="71.5" r="1.3" fill="#6f767d"/><circle cx="182.5" cy="66" r="1.3" fill="#6f767d"/></g>
  </svg>`;
  function gacel() {
    const caja = el("div", "esc gacel");
    const auto = el("div", "auto");
    auto.innerHTML = '<span class="bocina">¡Biiip!</span>' + GACEL;
    for (let i = 0; i < 6; i++) {
      const p = el("span", "polvo");
      p.style.animationDelay = (i * 0.18).toFixed(2) + "s";
      auto.appendChild(p);
    }
    caja.appendChild(auto);
    vigilarZorro(auto, 9500);
    return { caja, dura: 9500, clase: "hay-gacel" };
  }

  // Cuando el Gacel se le viene encima, el zorro se asusta y pega un salto
  function vigilarZorro(auto, dura) {
    const zorro = document.getElementById("zorro");
    if (!zorro) return;
    const fin = performance.now() + dura;
    requestAnimationFrame(function mirar(t) {
      if (t > fin) return;
      if (!auto.isConnected) return requestAnimationFrame(mirar);
      const a = auto.getBoundingClientRect(), z = zorro.getBoundingClientRect();
      const visible = z.right > 0 && z.left < innerWidth;
      if (visible && a.left < z.right + 25 && a.right > z.left) {
        zorro.classList.remove("susto");
        void zorro.offsetWidth;
        zorro.classList.add("susto");
        setTimeout(() => zorro.classList.remove("susto"), 1700);
        return;
      }
      requestAnimationFrame(mirar);
    });
  }

  // ---------- Programación ----------
  const escenas = { zonda, granizo, hidromiel, gacel };
  let mazo = [], activa = null, reloj;

  function siguiente() {
    if (!mazo.length) {
      const ultima = activa;
      mazo = Object.keys(escenas).sort(() => Math.random() - 0.5);
      if (mazo[0] === ultima) mazo.push(mazo.shift());
    }
    return mazo.shift();
  }

  function mostrar(nombre) {
    const { caja, dura, clase } = escenas[nombre]();
    activa = nombre;
    capa.appendChild(caja);
    hero.classList.add(clase);
    requestAnimationFrame(() => caja.classList.add("on"));
    setTimeout(() => {
      caja.classList.remove("on");
      hero.classList.remove(clase);
      setTimeout(() => caja.remove(), 1200);
    }, dura);
    return dura;
  }

  function programar(espera) {
    clearTimeout(reloj);
    reloj = setTimeout(() => {
      if (document.hidden) return programar(3000);
      const dura = mostrar(siguiente());
      programar(dura + rnd(9000, 16000));
    }, espera);
  }

  programar(rnd(3500, 5500));

  // Para probar desde la consola: clima("zonda"), clima("granizo"), clima("hidromiel"), clima("gacel")
  window.clima = (n) => escenas[n] && mostrar(n);
})();
