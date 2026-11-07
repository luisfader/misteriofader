(function () {
  const list = window.CANCIONES || [];
  const $ = (id) => document.getElementById(id);
  const audio = $("audio");
  let current = -1;

  const fmt = (s) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60), r = Math.floor(s % 60);
    return m + ":" + String(r).padStart(2, "0");
  };
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Uvas que brillan y suben mientras suena la música
  const grapes = $("grapes");
  for (let i = 0; i < 22; i++) {
    const g = document.createElement("span");
    const size = 6 + Math.random() * 10;
    g.style.left = (Math.random() * 100).toFixed(1) + "%";
    g.style.width = g.style.height = size.toFixed(1) + "px";
    g.style.animationDuration = (9 + Math.random() * 10).toFixed(1) + "s";
    g.style.animationDelay = (-Math.random() * 18).toFixed(1) + "s";
    grapes.appendChild(g);
  }

  // Lista de canciones
  $("tracks").innerHTML = list.map((c, i) => `
    <li class="track" data-i="${i}">
      <button class="tplay" type="button" aria-label="Escuchar ${esc(c.titulo)}">▶</button>
      <div class="tmeta">
        <span class="ttitle">${esc(c.titulo)}${c.original ? ` <span class="torig" lang="ru">${esc(c.original)}</span>` : ""}</span>
        <span class="tscene">${esc(c.escena)} · <span class="tchap">${esc(c.capitulo)}</span></span>
      </div>
      <span class="tdur">${c.audio === false ? "pronto" : esc(c.duracion || "")}</span>
    </li>`).join("");

  // El capítulo: resumen y frase de un personaje
  function showChapter(i) {
    const c = list[i];
    const li = document.querySelector('.track[data-i="' + i + '"]');
    if (li) li.appendChild($("chapter"));
    $("chapter").hidden = false;
    $("chapterLabel").textContent = "En la novela" + (c.autoria ? " · " + c.autoria : "");
    $("chapterTitle").innerHTML = esc(c.titulo) + (c.original ? ` <span class="torig" lang="ru">${esc(c.original)}</span>` : "");
    $("chapterSummary").textContent = c.resumen || "";
    $("chapterQuote").hidden = !c.frase;
    $("quoteText").textContent = c.frase ? "«" + c.frase + "»" : "";
    $("quoteWho").textContent = c.quien || "";
  }

  function play(i) {
    if (i < 0 || i >= list.length) return;
    if (list[i].audio === false) {
      if (!audio.paused) audio.pause();
      current = i;
      audio.removeAttribute("src");
      showChapter(i);
      $("player").hidden = false;
      $("nowTitle").textContent = list[i].titulo + " — grabación pronto";
      sync();
      return;
    }
    if (i !== current) {
      current = i;
      audio.src = "audio/" + list[i].id + ".mp3";
      showChapter(i);
    }
    audio.play();
    $("player").hidden = false;
    $("nowTitle").textContent = list[i].titulo;
  }

  function sync() {
    const playing = !audio.paused;
    document.body.classList.toggle("is-playing", playing);
    $("toggle").textContent = playing ? "⏸" : "▶";
    $("toggle").setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
    document.querySelectorAll(".track").forEach((el) => {
      const on = Number(el.dataset.i) === current;
      el.classList.toggle("active", on);
      el.querySelector(".tplay").textContent = on && playing ? "⏸" : "▶";
    });
  }

  const nextPlayable = (n) => {
    while (n < list.length && list[n].audio === false) n++;
    return n;
  };

  $("tracks").addEventListener("click", (e) => {
    if (e.target.closest(".chapter")) return;
    const li = e.target.closest(".track");
    if (!li) return;
    const i = Number(li.dataset.i);
    if (i === current && !audio.paused) audio.pause(); else play(i);
  });
  $("playAll").addEventListener("click", () => play(0));
  $("toggle").addEventListener("click", () => (audio.paused ? play(current < 0 ? 0 : current) : audio.pause()));
  $("prev").addEventListener("click", () => (audio.currentTime > 3 ? (audio.currentTime = 0) : play(Math.max(0, current - 1))));
  $("next").addEventListener("click", () => play(nextPlayable(current + 1)));

  audio.addEventListener("play", sync);
  audio.addEventListener("pause", sync);
  audio.addEventListener("ended", () => {
    const n = nextPlayable(current + 1);
    if (n < list.length) play(n); else sync();
  });
  audio.addEventListener("timeupdate", () => {
    $("time").textContent = fmt(audio.currentTime);
    if (audio.duration) $("seek").value = (audio.currentTime / audio.duration) * 100;
  });
  $("seek").addEventListener("input", (e) => {
    if (audio.duration) audio.currentTime = (e.target.value / 100) * audio.duration;
  });
})();
