const projectSections = [
  document.getElementById('hello-section'),
  document.getElementById('works-section'),
  document.getElementById('about-section'),
  document.getElementById('contact-section'),
];
let sum = 0;
let sectionHeights = projectSections.map((section) => {
  sum += Number(
    getComputedStyle(section).height.slice(0, -2),
  );
  return sum;
});
const desktopMenu = document.querySelector('.desktop');
const desktopMenuList = document.querySelectorAll('.desktop li');
const mobileMenuButton = document.querySelector(
  '.mobile .menu-button',
);
const mobileMenuList = document.querySelectorAll(
  '.mobile-list > li',
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
  if (
    e.currentTarget.classList.contains('cancel')
    || e.currentTarget.parentNode.classList.contains(
      'mobile-list',
    )
  ) {
    mobileMenu.style.display = 'none';
    mobileMenu.style['z-index'] = -2;
  }
}

function hideMobileMenuOnScroll() {
  if (mobileMenu.style.display !== 'none') {
    mobileMenu.style.display = 'none';
    mobileMenu.style['z-index'] = -2;
  }
}

function updateSectionsHeight() {
  sum = 0;
  sectionHeights = projectSections.map((section) => {
    sum += getComputedStyle(section).height;
    return sum;
  });
}

function spyOnScroll() {
  if (getComputedStyle(desktopMenu).display === 'flex') {
    let sectionIndex = 0;
    for (let i = 0; i < sectionHeights.length; i += 1) {
      if (window.scrollY >= sectionHeights[i]) {
        sectionIndex = i;
      }
    }

    desktopMenuList.forEach((node, index) => {
      if (index === sectionIndex) {
        node.style.borderBottom = 'thick solid #0000FF';
      } else {
        node.style.borderBottom = 'none';
      }
    });
  }
}

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
mobileMenuList.forEach((node) => node.addEventListener('click', hideMobileMenu));
window.addEventListener('scroll', hideMobileMenuOnScroll);
window.addEventListener('scroll', spyOnScroll);
window.addEventListener('resize', updateSectionsHeight);
