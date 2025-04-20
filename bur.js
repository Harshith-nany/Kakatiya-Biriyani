// JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Form validation
    const reservationForm = document.querySelector('.reservation-form form');
    const contactForm = document.querySelector('.contact-form');
  
    const validateForm = (form) => {
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('error');
          isValid = false;
        } else {
          input.classList.remove('error');
        }
      });
      
      return isValid;
    };
  
    reservationForm.addEventListener('submit', (e) => {
      if (!validateForm(reservationForm)) {
        e.preventDefault();
        alert('Please fill out all required fields.');
      }
    });
  
    contactForm.addEventListener('submit', (e) => {
      if (!validateForm(contactForm)) {
        e.preventDefault();
        alert('Please fill out all required fields.');
      }
    });
  });
  