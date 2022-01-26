// |||Mobile menu
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
    e.currentTarget.classList.contains('cancel') ||
    e.currentTarget.parentNode.classList.contains(
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

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
window.addEventListener('scroll', hideMobileMenuOnScroll);
mobileMenuList.forEach((node) =>
  node.addEventListener('click', hideMobileMenu),
);

// ||Scroll spy
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

const desktopMenuList =
  document.querySelectorAll('.desktop li');
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

window.addEventListener('scroll', spyOnScroll);
window.addEventListener('resize', updateSectionsHeight);

// ||Dynamic project details generation
const projectsDetailsData = {
  'project-1': {
    title: 'Tonic',
    featuredImage: './resources/project-image1.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Github',
      'Ruby',
      'Bootsrap',
    ],
    liveLink: '',
    sourceLink: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  'project-2': {
    title: 'Multi-Post Stories',
    featuredImage: './resources/project-image2.png',
    technologies: ['HTML', 'CSS', 'javascript'],
    liveLink: '',
    sourceLink: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  'project-3': {
    title: 'Facebook 360',
    featuredImage: './resources/project-image3.png',
    technologies: [
      'HTML',
      'CSS',
      'javascript',
      'Github',
      'Ruby',
      'Bootsrap',
      'Node.js',
    ],
    liveLink: '',
    sourceLink: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  'project-4': {
    title: 'Uber Navigation',
    featuredImage: './resources/project-image4.png',
    technologies: [
      'HTML',
      'CSS',
      'javascript',
      'Github',
      'Bootsrap',
    ],
    liveLink: '',
    sourceLink: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  'project-5': {
    title: 'Uber Navigation',
    featuredImage: './resources/project-image5.png',
    technologies: [
      'HTML',
      'CSS',
      'javascript',
      'Github',
      'Bootsrap',
    ],
    liveLink: '',
    sourceLink: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  'project-6': {
    title: 'Uber Navigation',
    featuredImage: './resources/project-image6.png',
    technologies: [
      'HTML',
      'CSS',
      'javascript',
      'Github',
      'Bootsrap',
    ],
    liveLink: '',
    sourceLink: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
};

const seeProjectButtons = Array.from(
  document.querySelectorAll('[id^="project-"]'),
);

const projectDetails = document.querySelector(
  '.project-details',
);

const projectDetailsCancelButton = document.querySelector(
  '.project-details .cancel',
);

function showProjectDetails(e) {
  const projectId = e.currentTarget.id;

  projectDetails.querySelector('.project-title').innerHTML =
    projectsDetailsData[projectId].title;

  projectDetails.querySelector('.project-image img').src =
    projectsDetailsData[projectId].featuredImage;

  projectDetails.querySelector(
    '.project-languages',
  ).innerHTML = '';

  projectsDetailsData[projectId].technologies.forEach(
    (tech) => {
      const li = document.createElement('li');
      li.textContent = tech;
      projectDetails
        .querySelector('.project-languages')
        .appendChild(li);
    },
  );

  projectDetails.querySelector(
    '.project-description',
  ).textContent =
    projectsDetailsData[projectId].description;

  projectDetails.style.display = 'block';
}

function hideProjectDetails() {
  projectDetails.style.display = 'none';
}

seeProjectButtons.forEach((button) =>
  button.addEventListener('click', showProjectDetails),
);

projectDetailsCancelButton.addEventListener(
  'click',
  hideProjectDetails,
);

// |||Validate contact form
const isRequired = (value) => (value === '' ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;
const isEmailValid = (email) => {
  const pattern =
    /^[a-z0-9._%+-]{3,}@[a-z0-9.-]{3,}(?:\.[a-z]{3,}){1,2}$/;
  return pattern.test(email);
};
const contactForm = document.querySelector('form.form');
const [nameField, emailField, messageField, submitButton] =
  contactForm.children;
console.log([
  nameField,
  emailField,
  messageField,
  submitButton,
]);

const showError = (field, message) => {
  field.classList.remove('success');
  field.classList.add('error');
  const error = field.getElementsByTagName('small');
  console.log(error);
  error.textContent = message;
};

showError(nameField, 'test');

function validateContactForm(e) {
  e.preventDefault();
}

submitButton.addEventListener(
  'submit',
  validateContactForm,
);
