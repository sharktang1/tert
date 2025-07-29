document.addEventListener('DOMContentLoaded', () => {
  // Toggle heart favorite buttons
  const heartButtons = document.querySelectorAll('.heart-btn');

  heartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isPressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!isPressed));
    });
  });

  // Open button alert
  const openBtn = document.querySelector('.open-btn');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      alert('Open product details clicked');
    });
  }

  // Subscription form validation
  const form = document.getElementById('subscribe-form');
  const emailInput = form.querySelector('input[type="email"]');
  const submitButton = form.querySelector('button[type="submit"]');
  const errorMessage = form.querySelector('.error-message');

  // Enable/disable submit button based on valid email input
  emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
      submitButton.disabled = false;
      errorMessage.textContent = '';
    } else {
      submitButton.disabled = true;
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
      alert('Subscription successful!');
      form.reset();
      submitButton.disabled = true;
    } else {
      errorMessage.textContent = 'Please enter a valid email address.';
    }
  });

  function validateEmail(email) {
    // Simple email regex validation
    return /\S+@\S+\.\S+/.test(email);
  }


  // Placeholder handlers for carousel arrows (functionality can be expanded)
  const leftArrow = document.querySelector('.carousel-arrow.left');
  const rightArrow = document.querySelector('.carousel-arrow.right');

  leftArrow.addEventListener('click', () => {
    alert('Previous deal clicked');
  });

  rightArrow.addEventListener('click', () => {
    alert('Next deal clicked');
  });
});
