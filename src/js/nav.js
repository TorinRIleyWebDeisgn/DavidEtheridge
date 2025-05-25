
document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('#main-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const header = document.querySelector('#main-header');

    // Toggle mobile menu
    function toggleNav() {
        navToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    }

    // Event listeners for navigation
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', toggleNav);
    }

    // Close menu when clicking on a nav link (for mobile)
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleNav();
            }
        });
    });

    // Header shrinking on scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize header state on page load
    handleScroll();

    // Handle resize events - close mobile menu if window is resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
            toggleNav();
        }
    });
});
