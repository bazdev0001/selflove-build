/* Lumière Yoga — minimal progressive enhancement.
   1. Scroll-reveal for sections (IntersectionObserver).
   2. Newsletter form: inline success state, no backend.
   Everything degrades gracefully with JS off. */

(function () {
  "use strict";

  /* ---- 1. Scroll reveal ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(
    ".section-head, .manifesto__statement, .manifesto__columns, .offer, " +
    ".teacher__figure, .teacher__body, .voice--lead, .voice-grid, " +
    ".newsletter__head, .newsletter__body"
  );

  if (!reduce && "IntersectionObserver" in window) {
    targets.forEach(function (el) { el.classList.add("will-reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---- 2. Newsletter form ---- */
  var form = document.querySelector(".signup");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector(".signup__input");
      var note = form.querySelector(".signup__note");
      if (!input.value || !/.+@.+\..+/.test(input.value)) {
        input.focus();
        if (note) note.textContent = "Please enter a valid email.";
        return;
      }
      var row = form.querySelector(".signup__row");
      if (row) row.style.display = "none";
      if (note) note.textContent = "Thank you — a first letter is on its way.";
      var label = form.querySelector(".signup__label");
      if (label) label.textContent = "You're in.";
    });
  }
})();
