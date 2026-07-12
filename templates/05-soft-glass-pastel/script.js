/* Lumière Yoga — gentle scroll reveal + graceful form handling */
(function () {
  'use strict';

  // Scroll reveal with IntersectionObserver
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Newsletter: soft, no-backend confirmation
  var form = document.querySelector('.newsletter__form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var btn = form.querySelector('button');
      if (input && input.value.trim() && input.checkValidity()) {
        btn.textContent = 'Welcome, softly ✿';
        btn.disabled = true;
        input.value = '';
        input.setAttribute('placeholder', 'You\'re on the list ♡');
      } else {
        input && input.focus();
      }
    });
  }

  // Subtle parallax on decorative blobs (respect reduced motion)
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    var blobs = document.querySelectorAll('.deco-blob');
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      blobs.forEach(function (b, i) {
        b.style.transform = 'translateY(' + (y * (0.04 + i * 0.02)) + 'px)';
      });
    }, { passive: true });
  }
})();
