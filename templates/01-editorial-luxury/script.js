/* Lumière Yoga — micro-interactions (vanilla, no dependencies) */
(function () {
  "use strict";

  /* 1. Scroll-reveal via IntersectionObserver ------------------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el, i) {
      // subtle stagger for grouped siblings
      el.style.transitionDelay = (i % 3) * 90 + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* 2. Header border on scroll ---------------------------------------- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 3. Newsletter form (graceful, no backend) ------------------------- */
  var form = document.querySelector(".signup");
  if (form) {
    var input = form.querySelector("input[type='email']");
    var note = form.querySelector(".signup__note");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var value = (input.value || "").trim();
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!ok) {
        note.textContent = "Please enter a valid email address.";
        input.focus();
        return;
      }
      note.style.color = "var(--accent-deep)";
      note.textContent = "Thank you — your first letter arrives this Sunday.";
      form.reset();
    });
  }
})();
