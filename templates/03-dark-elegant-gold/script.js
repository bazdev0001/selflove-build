/* Lumière Yoga — small, dependency-free interactions */
(function () {
  "use strict";

  /* ---- Header: add solid background once scrolled ---- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Scroll reveal via IntersectionObserver ---- */
  var reveals = document.querySelectorAll(".reveal");

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  reveals.forEach(function (el, i) {
    // gentle stagger for siblings sharing a parent
    el.style.transitionDelay = Math.min(i % 6, 5) * 70 + "ms";
    io.observe(el);
  });

  /* ---- Newsletter: graceful inline confirmation ---- */
  var form = document.querySelector(".cta__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type=email]");
      if (!input || !input.value || input.validity.typeMismatch || !input.value.includes("@")) {
        input && input.focus();
        return;
      }
      var btn = form.querySelector("button");
      if (btn) { btn.textContent = "Welcome, love ✦"; btn.disabled = true; }
      input.value = "";
      input.placeholder = "Check your inbox for the light.";
    });
  }
})();
