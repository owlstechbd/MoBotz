window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 100) {
      navbar.classList.add('sticky');
  } else {
      navbar.classList.remove('sticky');
  }
});


//animated
AOS.init();
