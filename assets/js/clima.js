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
  const GACEL = `<svg viewBox="0 0 220 84" aria-hidden="true">
    <ellipse cx="112" cy="78" rx="96" ry="4" fill="#000" opacity=".35"/>
    <path d="M10 56 L14 42 C16 38 20 37 26 37 L58 36 L80 16 C83 13 86 12 90 12 L150 12 C154 12 157 13 159 16 L176 36 L204 38 C209 39 212 42 212 47 L212 58 C212 62 209 64 205 64 L16 64 C12 64 10 61 10 56 Z" fill="#ddd2b8"/>
    <path d="M10 52 H212" stroke="#b9ad92" stroke-width="2"/>
    <path d="M66 36 L84 18 C86 16 88 15 91 15 L117 15 L117 36 Z" fill="#3b4a55"/>
    <path d="M122 15 L148 15 C151 15 153 16 155 18 L170 36 L122 36 Z" fill="#3b4a55"/>
    <rect x="118" y="15" width="4" height="22" fill="#ddd2b8"/>
    <path d="M90 22 C93 21 97 22 99 25 L101 36 L92 36 Z" fill="#f2c9a0"/>
    <path d="M88 20 C92 16 98 17 100 21 L99 24 C96 21 91 21 88 23 Z" fill="#6b6b6b"/>
    <rect x="10" y="44" width="10" height="6" rx="2" fill="#fff6c9"/>
    <rect x="204" y="44" width="8" height="6" rx="2" fill="#c0392b"/>
    <path d="M100 40 V60 M140 40 V60" stroke="#b9ad92" stroke-width="1.5"/>
    <rect x="104" y="43" width="8" height="2.5" rx="1.2" fill="#8a8170"/>
    <g class="rueda r1"><circle cx="50" cy="64" r="15" fill="#1b1b1b"/><circle cx="50" cy="64" r="7" fill="#a9a9a9"/><path d="M50 57 V71 M43 64 H57" stroke="#6d6d6d" stroke-width="2"/></g>
    <g class="rueda r2"><circle cx="172" cy="64" r="15" fill="#1b1b1b"/><circle cx="172" cy="64" r="7" fill="#a9a9a9"/><path d="M172 57 V71 M165 64 H179" stroke="#6d6d6d" stroke-width="2"/></g>
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
    return { caja, dura: 9500, clase: "hay-gacel" };
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
