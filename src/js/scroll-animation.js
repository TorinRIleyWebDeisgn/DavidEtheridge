document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
        fadeIns.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const threshold = window.innerHeight * 0.9;
            if (rect.top < threshold) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    
    handleScroll();
});
