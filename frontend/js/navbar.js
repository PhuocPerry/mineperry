const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const nav = document.querySelector('nav');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars-staggered');
    icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-links a').forEach((link, i) => {
    link.style.transitionDelay = `${(i + 1) * 0.1}s`;
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.querySelector('i').className = 'fas fa-bars-staggered';
    });
});

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

