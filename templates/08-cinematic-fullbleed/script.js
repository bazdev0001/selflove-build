/* Lumière Yoga — cinematic interactions
   Vanilla JS · progressive enhancement (site works without it) */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Nav background on scroll ---------- */
  var nav = document.getElementById('nav');
  function onScrollNav() {
    if (window.scrollY > 60) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  onScrollNav();

  /* ---------- 2. Scroll reveal via IntersectionObserver ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 3. Parallax (rAF-throttled) ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var ticking = false;

  function applyParallax() {
    var vh = window.innerHeight;
    parallaxEls.forEach(function (el) {
      var speed = parseFloat(el.getAttribute('data-parallax')) || 0.15;
      var rect = el.getBoundingClientRect();
      // only compute when roughly in view
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      var offsetFromCenter = (rect.top + rect.height / 2) - vh / 2;
      var shift = -offsetFromCenter * speed;
      el.style.transform = 'translate3d(0,' + shift.toFixed(2) + 'px,0)';
    });
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(applyParallax);
      ticking = true;
    }
  }

  function onScroll() {
    onScrollNav();
    if (!reduceMotion) requestTick();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { if (!reduceMotion) requestTick(); }, { passive: true });
  if (!reduceMotion) applyParallax();

  /* ---------- 4. Newsletter form (graceful, no backend) ---------- */
  var form = document.querySelector('.join__form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var btn = form.querySelector('button');
      if (!input.value || input.validity.typeMismatch || !input.validity.valid) {
        input.focus();
        return;
      }
      btn.textContent = 'Welcome, love ✽';
      btn.disabled = true;
      input.value = '';
      input.setAttribute('placeholder', 'You’re on the list — check your inbox');
    });
  }
})();
