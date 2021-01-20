// Main Navigation

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--opened');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('main-nav--opened');
});
