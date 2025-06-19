// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Ripple Effect
document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
    circle.classList.add('ripple-circle');
    this.appendChild(circle);
    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});

// Scroll Fade-In Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('#features, #carousel, #parallax, #stats, #testimonials, #contact').forEach(el => observer.observe(el));

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Parallax Effect
window.addEventListener('scroll', () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  parallaxElements.forEach(el => {
    let offset = window.pageYOffset;
    el.style.backgroundPositionY = offset * 0.5 + 'px';
  });
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .ripple').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// Dynamic color scheme based on carousel image
const colorThief = new ColorThief();
const carousel = document.getElementById('mainCarousel');
const body = document.body;

function updateColors() {
  const activeItem = carousel.querySelector('.carousel-item.active img');
  if (activeItem && activeItem.complete) {
    const colors = colorThief.getPalette(activeItem, 3);
    if (colors) {
      const [primary, secondary, accent] = colors;
      body.style.setProperty('--primary-color', `rgb(${primary.join(',')})`);
      body.style.setProperty('--secondary-color', `rgb(${secondary.join(',')})`);
      body.style.setProperty('--accent-color', `rgb(${accent.join(',')})`);
    }
  }
}

carousel.addEventListener('slid.bs.carousel', updateColors);
window.addEventListener('load', updateColors);

// Enhanced parallax zoom effect
const parallaxSection = document.getElementById('parallax');
window.addEventListener('scroll', () => {
  if (!parallaxSection) return;
  const offset = window.pageYOffset;
  // Zoom effect on container
  const container = parallaxSection.querySelector('.container');
  if (container) {
    const scale = 1 + offset * 0.0005;
    container.style.transform = `scale(${scale})`;
  }
  // Smooth background position change
  parallaxSection.style.backgroundPositionY = offset * 0.5 + 'px';
});

