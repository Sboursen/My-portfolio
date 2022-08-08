import projectsData from './projects.js';

// |||Render Projects in the works section

const worksSection = document.getElementById('works-section');

function renderProject(title, image, technologies, projectId) {
  return `<div class="project-card">
            <div class="project-image" style="background-image: url('${image}');"></div>
            <div class="project-info">
              <h3 class="project-title">${title}
              </h3>
              <ul class="project-languages">
              ${technologies.map((tech) => `<li>${tech}</li>`).join('\n')}
              </ul>
              <button id='${projectId}' class="project-button button" type="button">See
                Project</button>
            </div>
          </div>`;
}

const projectsKeys = Object.keys(projectsData);

projectsKeys.forEach((projectKey) => {
  const { title, featuredImage, technologies } = projectsData[projectKey];
  const template = renderProject(title, featuredImage, technologies, projectKey);
  worksSection.innerHTML += `\n${template}`;
});

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

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
window.addEventListener('scroll', hideMobileMenuOnScroll);
mobileMenuList.forEach((node) => node.addEventListener('click', hideMobileMenu));

// |||Scroll spy
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
        node.style.backgroundColor = 'rgb(117, 239, 198)';
      } else {
        node.style.backgroundColor = 'transparent';
      }
    });
  }
}

function updateSectionsHeight() {
  sum = 0;
  sectionHeights = projectSections.map((section) => {
    sum += Number(
      getComputedStyle(section).height.slice(0, -2),
    );
    return sum;
  });
  spyOnScroll();
}

window.addEventListener('scroll', spyOnScroll);
window.addEventListener('resize', updateSectionsHeight);

// |||Dynamic project details generation
const projectsDetailsData = projectsData;

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

  projectDetails.querySelector('.project-title').innerHTML = projectsDetailsData[projectId].title;

  projectDetails.querySelector('.project-image img').src = projectsDetailsData[projectId].featuredImage;

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
  ).textContent = projectsDetailsData[projectId].description;

  projectDetails.querySelector('.live-button').href = projectsDetailsData[projectId].liveLink;

  projectDetails.querySelector('.source-button').href = projectsDetailsData[projectId].sourceLink;

  projectDetails.style.display = 'block';
}

function hideProjectDetails() {
  projectDetails.style.display = 'none';
}

seeProjectButtons.forEach((button) => button.addEventListener('click', showProjectDetails));

projectDetailsCancelButton.addEventListener(
  'click',
  hideProjectDetails,
);

// |||Validate contact form
const isRequired = (value) => value !== '';
const isBetween = (length, min, max) => !(length < min || length > max);
const isEmailValid = (email) => {
  const pattern = /^[a-z0-9._%+-]{3,}@[a-z0-9.-]{3,}(?:\.[a-z]{3,}){1,2}$/;
  return pattern.test(email);
};
const isNameValid = (name) => {
  const pattern = /^[A-Za-z]{3,}(?:\s[A-Za-z]{3,})*$/;
  return pattern.test(name);
};
const contactForm = document.querySelector('form.form');
const inputs = contactForm.querySelectorAll('input');
const textarea = contactForm.querySelector('textarea');
const [nameField, emailField, messageField] = contactForm.children;

function showError(field, message) {
  field.classList.remove('success');
  field.classList.add('error');
  const error = field.querySelector('small');
  error.textContent = message;
}

function showSuccess(field) {
  field.classList.remove('error');
  field.classList.add('success');
  const error = field.querySelector('small');
  error.textContent = '';
}

function checkUsername() {
  let valid = false;
  const min = 3;
  const max = 30;
  const nameInput = nameField.querySelector('#name');
  const name = nameInput.value.trim();

  if (!isRequired(name)) {
    showError(nameField, 'Username cannot be blank.');
  } else if (!isBetween(name.length, min, max)) {
    showError(
      nameField,
      `Your full name must be between ${min} and ${max} characters.`,
    );
  } else if (!isNameValid(name)) {
    showError(nameField, 'Name is not valid.');
  } else {
    showSuccess(nameField);
    valid = true;
  }
  return valid;
}

function checkEmail() {
  let valid = false;
  const emailInput = emailField.querySelector('#mail');
  const mail = emailInput.value.trim();
  if (!isRequired(mail)) {
    showError(emailField, 'Email cannot be blank.');
  } else if (!isEmailValid(mail)) {
    showError(emailField, 'Email is not valid.');
  } else {
    showSuccess(emailField);
    valid = true;
  }
  return valid;
}

function checkMessage() {
  let valid = false;
  const min = 3;
  const max = 500;
  const messageTextArea = messageField.querySelector('#message');
  const message = messageTextArea.value.trim();
  if (!isRequired(message)) {
    showError(messageField, 'Message cannot be blank.');
  } else if (!isBetween(message.length, min, max)) {
    showError(
      messageField,
      `Your message must be between ${min} and ${max} characters.`,
    );
  } else {
    showSuccess(messageField);
    valid = true;
  }
  return valid;
}

function validateContactForm(e) {
  e.preventDefault();

  const isUsernameValid = checkUsername();
  const isEmailValid = checkEmail();
  const isMessageValid = checkMessage();

  const isFormValid = isUsernameValid && isEmailValid && isMessageValid;

  if (isFormValid) {
    contactForm.submit();
  }
}

function checkFields(e) {
  switch (e.currentTarget) {
    case nameField:
      return checkUsername();
    case emailField:
      return checkEmail();
    case messageField:
      return checkMessage();
    default:
      return false;
  }
}

contactForm.addEventListener('input', checkFields);
contactForm.addEventListener('submit', validateContactForm);
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    const { id } = e.target;
    if (id === 'name') checkUsername();
    else if (id === 'mail') checkEmail();
  });
});
textarea.addEventListener('keyup', checkMessage);

// |||Floating button to-the-top
const toTheTopButton = document.querySelector(
  '.to-the-top-button',
);
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    toTheTopButton.style.display = 'block';
  } else toTheTopButton.style.display = 'none';
});

// |||desktop navbar blurred after scrolling
const desktopNavBar = document.querySelector(
  'nav.desktop ul',
);

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    desktopNavBar.classList.add(
      'nav-border-bottom-blurred-bg',
    );
  } else {
    desktopNavBar.classList.remove(
      'nav-border-bottom-blurred-bg',
    );
  }
});

// |||Add localstorage to contact form inputs and textarea

function IsStorageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error) {
    return (
      error instanceof DOMException
      && (error.code === 22
        || error.code === 1014
        || error.name === 'QuotaExceededError'
        || error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

function implementLocalStorage() {
  if (IsStorageAvailable('localStorage')) {
    const getItems = () => {
      if (localStorage.length) {
        inputs.forEach((input) => Object.keys(localStorage).forEach((key) => {
          if (key === input.id) {
            input.value = localStorage[key];
          }
        }));
      }
    };
    const storeItems = (e) => {
      const isFieldValid = checkFields(e);
      if (isFieldValid) {
        localStorage.setItem(
          e.currentTarget.querySelector('input').id,
          e.currentTarget.querySelector('input').value,
        );
      }
    };

    inputs.forEach((input) => {
      input.parentNode.addEventListener(
        'keyup',
        storeItems,
      );
    });
    window.addEventListener('load', getItems);
  }
}

implementLocalStorage();
