document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        // Remove active class from all images
        images.forEach(img => img.classList.remove('active'));
        
        // Add active class to current image
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Add event listeners to buttons
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Optional: Auto-advance the carousel every 5 seconds
    setInterval(nextImage, 5000);
}); 