// Minimal JS: year + mobile menu toggle
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var menuBtn = document.querySelector('.menu-btn');
  var mobile = document.querySelector('.mobile-nav');
  if (menuBtn && mobile) {
    menuBtn.addEventListener('click', () => {
      mobile.style.display = (mobile.style.display === 'flex') ? 'none' : 'flex';
    });
  }
})();
