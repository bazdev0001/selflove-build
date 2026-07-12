/* Lumière Yoga — gentle scroll-reveal + progressive enhancement.
   Everything degrades gracefully: with JS off, all content is visible
   (see the prefers-reduced-motion / no-JS handling below). */
(function () {
  "use strict";

  var reveals = document.querySelectorAll(".reveal");

  // If IntersectionObserver is unavailable, just show everything.
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  reveals.forEach(function (el, i) {
    // Small stagger for a softer, sequential feel.
    el.style.transitionDelay = (Math.min(i % 4, 3) * 90) + "ms";
    io.observe(el);
  });

  // Newsletter: friendly inline confirmation, no backend.
  var form = document.querySelector(".newsletter__form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type=email]");
      var btn = form.querySelector("button");
      if (input && input.value.indexOf("@") > 0) {
        btn.textContent = "Welcome in ✨";
        btn.disabled = true;
        input.value = "";
        input.placeholder = "See you Sunday morning";
      } else if (input) {
        input.focus();
      }
    });
  }
})();
