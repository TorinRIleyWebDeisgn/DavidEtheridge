document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;
    let isTransitioning = false;

    function showImage(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        // Remove active class from current image
        const currentImage = carousel.querySelector('.carousel-image.active');
        if (currentImage) {
            currentImage.classList.remove('active');
        }

        // Add active class to new image
        images[index].classList.add('active');

        // Reset transition flag after animation completes
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Add click event listeners
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    });

    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    }

    // Auto advance every 5 seconds
    let autoAdvance = setInterval(nextImage, 5000);

    // Pause auto-advance when user interacts with carousel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });

    carousel.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextImage, 5000);
    });

    // Show first image
    showImage(currentIndex);
});