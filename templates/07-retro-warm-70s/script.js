/* Lumière Yoga — gentle scroll reveals + form nicety */
(function () {
  "use strict";

  // --- Scroll reveal via IntersectionObserver ---
  var targets = [
    ".about-copy", ".about-media", ".section-head",
    ".offer-card", ".teacher-photo", ".teacher-copy",
    ".voice-card", ".newsletter-inner"
  ];
  var nodes = document.querySelectorAll(targets.join(","));

  if ("IntersectionObserver" in window && nodes.length) {
    nodes.forEach(function (n, i) {
      n.classList.add("reveal");
      n.style.transitionDelay = (i % 3) * 90 + "ms";
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    nodes.forEach(function (n) { io.observe(n); });
  }

  // --- Newsletter: friendly inline confirmation (no backend) ---
  var form = document.querySelector(".news-form");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var input = form.querySelector("input[type=email]");
      var btn = form.querySelector("button");
      if (!input.value || !input.checkValidity()) {
        input.focus();
        return;
      }
      btn.textContent = "Welcome, sunshine ☀";
      btn.disabled = true;
      input.value = "";
      input.setAttribute("placeholder", "See you on the mat ✦");
    });
  }
})();
