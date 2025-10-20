window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});
document.querySelectorAll('.navbar-nav .nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 90; // height of your fixed header
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close mobile menu after click
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    bsCollapse.hide();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    });
  });
});




//animated
AOS.init();
