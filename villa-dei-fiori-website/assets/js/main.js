/* ============================================================
   Villa dei Fiori — Interazioni condivise (tutte le varianti)
   Hook usati: .nav__toggle, .nav__links, body.menu-open,
   .site-header, [data-reveal], [data-count], .faq__item/.faq__q,
   .form, .form__success
   ============================================================ */
(function () {
  "use strict";

  /* ---- Header: ombra/sfondo allo scroll ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  const toggle = document.querySelector(".nav__toggle");
  const closeMenu = () => document.body.classList.remove("menu-open");
  if (toggle) {
    toggle.addEventListener("click", () =>
      document.body.classList.toggle("menu-open")
    );
  }
  document.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", closeMenu)
  );
  const backdrop = document.querySelector(".menu-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---- Contatori animati ---- */
  const counters = document.querySelectorAll("[data-count]");
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split(".")[1] || "").length;
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = (target * eased).toFixed(decimals);
      el.textContent = prefix + Number(val).toLocaleString("it-IT") + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + Number(target).toLocaleString("it-IT") + suffix;
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => cio.observe(el));
  } else {
    counters.forEach((el) => (el.textContent = el.dataset.count));
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll(".faq__q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq__item");
      const ans = item.querySelector(".faq__a");
      const isOpen = item.classList.contains("open");
      // chiudi gli altri nello stesso gruppo
      const group = item.parentElement;
      group.querySelectorAll(".faq__item.open").forEach((o) => {
        if (o !== item) {
          o.classList.remove("open");
          o.querySelector(".faq__a").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        ans.style.maxHeight = null;
      } else {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });

  /* ---- Form contatti (demo front-end) ---- */
  document.querySelectorAll(".form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = form.querySelector(".form__success");
      const fields = form.querySelector(".form__fields");
      if (success && fields) {
        fields.style.display = "none";
        success.classList.add("show");
      }
      form.reset();
    });
  });

  /* ---- Anno corrente nel footer ---- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
