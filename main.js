const MOBILE_MAX_WIDTH = 992;

const mobileMenuButton = document.querySelector(
  '.mobile .menu-button',
);

const mobileMenu = document.querySelector(
  'div.mobile-menu',
);

const cancelMobileMenu = document.querySelector(
  '.mobile-menu .cancel',
);

const showMobileMenu = function (e) {
  if (e.currentTarget.classList.contains('menu-button')) {
    mobileMenu.setAttribute('style', 'display: block;');
    mobileMenu.setAttribute('style', 'z-index: 2;');
  }
};

const hideMobileMenu = function (e) {
  if (e.currentTarget.classList.contains('cancel')) {
    mobileMenu.setAttribute('style', 'display: none;');
    mobileMenu.setAttribute('style', 'z-index: -2;');
  }
};

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
