/* ============================================================
   Villa dei Fiori — intro cinematografica + interazioni
   ============================================================ */
(function () {
  "use strict";

  const body = document.body;
  const intro = document.getElementById("intro");
  const enterBtn = document.getElementById("enterBtn");
  const skipBtn = document.getElementById("skipBtn");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Intro: entra dal portone ---- */
  let entered = false;
  function enter(e) {
    if (e) e.preventDefault();
    if (entered) return;
    entered = true;
    body.classList.remove("intro-lock");
    body.classList.add("entered");
    try { sessionStorage.setItem("vdf_entered", "1"); } catch (_) {}
    // libera l'overlay dagli eventi a transizione finita
    window.setTimeout(() => { if (intro) intro.style.pointerEvents = "none"; }, reduce ? 100 : 1600);
  }

  // se già entrati in questa sessione, salta l'intro
  let already = false;
  try { already = sessionStorage.getItem("vdf_entered") === "1"; } catch (_) {}
  if (already) {
    body.classList.remove("intro-lock");
    body.classList.add("no-intro");
  }

  if (enterBtn) enterBtn.addEventListener("click", enter);
  if (skipBtn) skipBtn.addEventListener("click", enter);
  // clic su qualsiasi punto della scena entra comunque
  if (intro) {
    const scene = intro.querySelector(".intro__scene");
    if (scene) scene.addEventListener("click", enter);
  }
  document.addEventListener("keydown", (e) => {
    if (!entered && !already && (e.key === "Enter" || e.key === " ")) {
      // evita scroll su spazio quando l'intro è attiva
      if (body.classList.contains("intro-lock")) { e.preventDefault(); enter(); }
    }
  });

  /* ---- Header: sfondo allo scroll ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  const toggle = document.querySelector(".nav__toggle");
  const closeMenu = () => body.classList.remove("menu-open");
  if (toggle) toggle.addEventListener("click", () => body.classList.toggle("menu-open"));
  document.querySelectorAll(".nav__links a").forEach((a) => a.addEventListener("click", closeMenu));
  const backdrop = document.querySelector(".menu-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---- Contatori animati ---- */
  const counters = document.querySelectorAll("[data-count]");
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const start = performance.now();
    const dur = 1700;
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("it-IT") + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = Math.round(target).toLocaleString("it-IT") + suffix;
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animate(entry.target); cio.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
  }

  /* ---- Anno corrente ---- */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
