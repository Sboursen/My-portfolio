const mobileMenuButton = document.querySelector(
  '.mobile .menu-button',
);
const mobileList = document.querySelectorAll(
  '.mobile-list >li',
);
const mobileMenu = document.querySelector(
  'div.mobile-menu',
);

const cancelMobileMenu = document.querySelector(
  '.mobile-menu .cancel',
);

function showMobileMenu(e) {
  if (e.currentTarget.classList.contains('menu-button')) {
    mobileMenu.style.display = 'flex';
    mobileMenu.style['z-index'] = 2;
  }
}

function hideMobileMenu(e) {
  if (e.currentTarget.classList.contains('cancel')) {
    mobileMenu.style.display = 'none';
    mobileMenu.style['z-index'] = -2;
  }

  console.log(e.currentTarget);
  if (
    e.currentTarget.parentNode.classList.contains(
      'mobile-list',
    )
  ) {
    mobileMenu.style.display = 'none';
    mobileMenu.style['z-index'] = -2;
  }
}

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
mobileList.forEach((node) =>
  node.addEventListener('click', hideMobileMenu),
);
