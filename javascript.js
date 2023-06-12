const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = 'Back to top';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const contactForm = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const nameInput = document.querySelector('#name-input');
  const emailInput = document.querySelector('#email-input');
  const messageInput = document.querySelector('#message-input');
  const formMessage = document.querySelector('#form-message');

  formMessage.innerHTML = `Thank you for your message, ${nameInput.value}! We will get back to you at ${emailInput.value} as soon as possible.`;

  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});