// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const body = document.body;
const nav = document.querySelector('nav');

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';

// Initialize theme on page load
function initializeTheme() {
    if (savedTheme === 'light') {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

function enableLightMode() {
    html.classList.add('light-mode');
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    nav.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
}

function enableDarkMode() {
    html.classList.remove('light-mode');
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    nav.classList.remove('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('light-mode')) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

// Initialize theme on page load
initializeTheme();
