/* Lumière Yoga — light progressive enhancement.
   Scroll-reveal + gentle newsletter feedback. No dependencies. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Scroll reveal ---- */
  var revealTargets = [
    ".about__copy", ".pillar", ".section-head",
    ".card", ".teacher__copy", ".teacher__media",
    ".quote", ".join__inner"
  ];
  var nodes = [];
  revealTargets.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) { nodes.push(el); });
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    nodes.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    nodes.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (Math.min(i % 4, 3) * 0.08) + "s";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach(function (el) { io.observe(el); });
  }

  /* ---- Newsletter feedback ---- */
  var form = document.querySelector(".join__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type=email]");
      var btn = form.querySelector("button");
      if (!input || !input.value || input.validity.typeMismatch || !input.value.includes("@")) {
        input && input.focus();
        return;
      }
      btn.textContent = "You're in ✦";
      btn.disabled = true;
      input.value = "";
      input.setAttribute("placeholder", "See you on the mat!");
    });
  }
})();
