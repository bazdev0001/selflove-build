/* Lumière Yoga — minimal, dependency-free interactions
   1. Slow reveal-on-scroll (IntersectionObserver)
   2. Hairline appears on header once scrolled
   3. Graceful newsletter confirmation
   ------------------------------------------------------- */
(function () {
  "use strict";

  /* ---- 1. Reveal on scroll ---- */
  var reveals = document.querySelectorAll("[data-reveal]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // gentle stagger for grouped elements
          var delay = entry.target.dataset.delay || 0;
          setTimeout(function () {
            entry.target.classList.add("is-visible");
          }, delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    reveals.forEach(function (el, i) {
      // subtle staggered feel within the same viewport band
      el.dataset.delay = (i % 4) * 90;
      io.observe(el);
    });
  }

  /* ---- 2. Header hairline on scroll ---- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- 3. Newsletter confirmation ---- */
  var form = document.querySelector(".newsletter__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector(".newsletter__input");
      if (!input || !input.value || input.value.indexOf("@") === -1) {
        input && input.focus();
        return;
      }
      var note = document.querySelector(".newsletter__note");
      form.style.transition = "opacity 0.6s ease";
      form.style.opacity = "0";
      setTimeout(function () {
        form.style.display = "none";
        if (note) {
          note.textContent = "Thank you. A little space is on its way.";
          note.style.color = "var(--ink)";
        }
      }, 600);
    });
  }
})();
