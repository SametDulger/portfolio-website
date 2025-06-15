// Toggle mobile navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('show'); // Close menu on selection (mobile)
    }
  });
});

// Contact form validation and feedback
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = 'Please fill in all required fields.';
    return;
  }

  // Basic email regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    return;
  }

  feedback.textContent = 'Message sent successfully!';
  form.reset();
});


// Show button when scrolled down 300px
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to top when button is clicked
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
