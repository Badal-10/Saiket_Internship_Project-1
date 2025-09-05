const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let valid = true;

  // Name validation
  const nameInput = form.name;
  if (!nameInput.value.trim()) {
    nameInput.classList.add('is-invalid');
    valid = false;
  } else {
    nameInput.classList.remove('is-invalid');
  }

  // Email validation (basic regex)
  const emailInput = form.email;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
    emailInput.classList.add('is-invalid');
    valid = false;
  } else {
    emailInput.classList.remove('is-invalid');
  }

  // Message validation
  const messageInput = form.message;
  if (!messageInput.value.trim()) {
    messageInput.classList.add('is-invalid');
    valid = false;
  } else {
    messageInput.classList.remove('is-invalid');
  }

  if (valid) {
    formMessage.textContent = 'Thank you for contacting me. I will get back to you soon!';
    formMessage.style.color = 'green';
    form.reset();
  } else {
    formMessage.textContent = '';
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' from all nav links
    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
    // Add 'active' to the clicked link
    this.classList.add('active');
  });
});

