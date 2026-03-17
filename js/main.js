document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
// Hero staggered animation
const heroItems = document.querySelectorAll('.hero-content h1, .hero-content h2, .hero-content p');

if (heroItems.length > 0) {
  // ابدأ الأنيميشن بعد تحميل بسيط
  setTimeout(() => {
    heroItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, 400 + index * 350); // تأخير متتالي (0.4 ثانية + 0.35 لكل عنصر)
    });
  }, 300); // تأخير بسيط بعد التحميل
}


  // Fade-in for cards & sections
  const fadeElements = document.querySelectorAll('.custom-card, .fade-in-section');
  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach(el => fadeObserver.observe(el));

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = navbar ? navbar.offsetHeight + 20 : 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - offset,
          behavior: 'smooth'
        });
      }
    });
  });
  
// Back to Top Button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {  // يظهر لما تسكرول أكتر من 300px
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

  console.log('موقع مبارده بصمه دعم من برمحه محمد عبدالتواب');
});