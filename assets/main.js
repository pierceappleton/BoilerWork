// Minimal JS: year + improved mobile menu toggle (works on iPhone)
(function () {
  // Set footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var menuBtn = document.querySelector('.menu-btn');
  var mobile = document.querySelector('.mobile-nav');

  if (menuBtn && mobile) {
    var isOpen = false;

    var toggleMenu = function () {
      isOpen = !isOpen;
      mobile.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    };

    // Click/tap support for all devices
    menuBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });

    // Close the menu when any link is tapped
    mobile.addEventListener('click', function (e) {
      if (e.target.tagName.toLowerCase() === 'a') {
        isOpen = false;
        mobile.classList.remove('open');
        document.body.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        isOpen = false;
        mobile.classList.remove('open');
        document.body.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
