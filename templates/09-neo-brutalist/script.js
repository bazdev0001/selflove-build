/* Lumière Yoga — light progressive enhancement.
   Everything works without JS; this only adds polish. */
(function () {
  "use strict";

  /* ---- Scroll reveal ---- */
  var revealTargets = [
    ".hero__copy", ".hero__frame",
    ".manifesto__grid", ".tenets li",
    ".offerings__intro", ".card",
    ".teacher__frame", ".teacher__copy",
    ".quote", ".join__box"
  ];
  var nodes = [];
  revealTargets.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.classList.add("reveal");
      nodes.push(el);
    });
  });

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
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

  /* ---- Newsletter (fake-submit feedback) ---- */
  var form = document.querySelector(".join__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type=email]");
      var note = form.querySelector("[data-form-note]");
      var value = (input.value || "").trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!valid) {
        note.textContent = "Please enter a valid email.";
        note.setAttribute("data-state", "err");
        input.focus();
        return;
      }
      note.textContent = "You're in. Look for a slow exhale in your inbox.";
      note.setAttribute("data-state", "ok");
      input.value = "";
      input.setAttribute("disabled", "true");
    });
  }
})();
