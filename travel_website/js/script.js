// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navbar = document.querySelector('.navbar');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
  });
}
document.addEventListener('DOMContentLoaded', toggleMobileMenu);

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });

      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

function checkVideoSupport() {
  const video = document.createElement('video');
  const h264 = 'video/mp4; codecs="avc1.42E01E"';
  if (video.canPlayType && video.canPlayType(h264).replace(/no/, '')) {
    return true;
  }
  return false;
}

if (!checkVideoSupport()) {
  const hero = document.querySelector('.hero');
  hero.style.backgroundImage = 'url(assets/images/hero-fallback.jpg)';
  hero.querySelector('.video-background').style.display = 'none';
}
