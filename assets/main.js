// Minimal JS: year + robust mobile menu toggle (iPhone-safe)
(function () {
  // footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var btn = document.querySelector('.menu-btn');
  var mobile = document.querySelector('.mobile-nav');
  if (!btn || !mobile) return;

  var open = function () {
    mobile.classList.add('open');
    document.body.classList.add('nav-open');
    btn.setAttribute('aria-expanded', 'true');
  };
  var close = function () {
    mobile.classList.remove('open');
    document.body.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
  };
  var toggle = function (e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    mobile.classList.contains('open') ? close() : open();
  };

  // Click + touch (iOS) + pointer events
  ['click', 'touchstart', 'pointerdown'].forEach(function (evt) {
    btn.addEventListener(evt, toggle, { passive: false });
  });

  // Close when a menu link is tapped
  mobile.addEventListener('click', function (e) {
    if (e.target.closest('a')) close();
  });

  // Close when tapping outside the menu
  document.addEventListener('click', function (e) {
    if (!mobile.classList.contains('open')) return;
    if (e.target.closest('.menu-btn') || e.target.closest('.mobile-nav')) return;
    close();
  });

  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
