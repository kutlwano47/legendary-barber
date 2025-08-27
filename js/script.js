/* assets/script.js - small utilities for nav and forms */

// Activate current nav link based on pathname
document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelectorAll('nav.site-links a');
  navLinks.forEach(a=>{
    try {
      const url = new URL(a.href, window.location.href);
      if (url.pathname === window.location.pathname || url.pathname.endsWith(window.location.pathname.split('/').pop()))
        a.classList.add('active');
    } catch(e){
      // fallback: compare href last segment
      const href = a.getAttribute('href').split('/').pop();
      const current = window.location.pathname.split('/').pop() || 'index.html';
      if (href === current) a.classList.add('active');
    }
  });

  // Simple appointment form validation on any page that has form.book-form
  const bookForm = document.querySelector('form.book-form');
  if (bookForm){
    bookForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.querySelector('[name="name"]').value.trim();
      const email = this.querySelector('[name="email"]').value.trim();
      const service = this.querySelector('[name="service"]').value;
      const date = this.querySelector('[name="date"]').value;
      if (!name || !email || !service || !date) {
        alert('Please fill name, email, service and date.');
        return;
      }
      alert('Thanks! Your booking request has been received (demo). We will contact you.');
      this.reset();
    });
  }
});

  