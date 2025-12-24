// Mobile menu toggle
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const body = document.body;

if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    body.classList.add("show-mobile-menu");
  });
}
if (menuCloseButton) {
  menuCloseButton.addEventListener("click", () => {
    body.classList.remove("show-mobile-menu");
  });
}

// Initialize Swiper (testimonials)
const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    700: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
// Contact form handling
const contactForm = document.querySelector('.contact-form');
const formMessage = document.createElement('div');
formMessage.style.marginTop = '10px';
contactForm.appendChild(formMessage);

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.elements[0].value.trim();
  const email = contactForm.elements[1].value.trim();
  const message = contactForm.elements[2].value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill all fields.';
    formMessage.style.color = 'red';
    return;
  }

  // Simple email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  formMessage.style.color = 'green';

  contactForm.reset();

  setTimeout(() => {
    formMessage.textContent = '';
  }, 5000);
});
