
const projects = [{
  id: 'project-1',
  name: 'Tonic',
  featured_image: 'images/lg-Image1.png',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Ruby', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-2',
  name: 'Multi-Post Stories',
  featured_image: 'images/image_4.png',
  technologies: ['HTML', 'CSS', 'javascript'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-3',
  name: 'Facebook 360',
  featured_image: 'images/Images_1.png',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Ruby', 'Bootsrap', 'Node.js'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
{
  id: 'project-4',
  name: 'Uber Navigation',
  featured_image: 'images/availability.png',
  technologies: ['HTML', 'CSS', 'javascript', 'Github', 'Bootsrap'],
  live_link: '',
  source_link: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
},
];
//modal integeration
let projectButtons=[]
let buttons=document.querySelectorAll('button')
buttons.forEach(button=>{
  let [id]=button.id.split('-')
  if(id==='project') projectButtons.push(button)
})

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
