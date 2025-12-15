
document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle functionality
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('#main-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const header = document.querySelector('#main-header');
    let lastScrollY = window.scrollY;

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
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        const scrollingDown = currentScroll > lastScrollY;
        const shouldHide = scrollingDown && currentScroll > 120 && !document.body.classList.contains('nav-open');

        if (shouldHide) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScroll;
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
