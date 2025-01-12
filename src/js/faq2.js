document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach(i => i.classList.remove('open')); // Close all others
            if (!isOpen) {
                item.classList.add('open'); // Open the clicked one
            }
        });
    });
});
