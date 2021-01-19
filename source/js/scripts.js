// Main Navigation

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--opened');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--opened');
});
