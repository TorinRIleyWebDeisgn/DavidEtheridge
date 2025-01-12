document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const afterImage = document.querySelector('.image.after');

    // Adjust the clip-path of the after image based on the slider value
    slider.addEventListener('input', () => {
        const sliderValue = slider.value;
        afterImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
    });
});
