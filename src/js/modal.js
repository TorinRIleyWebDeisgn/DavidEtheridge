document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const modal = document.getElementById('modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const closeModal = document.querySelector('.close-modal');

    const serviceDetails = {
        brass: {
            title: 'Brass Instrument Repair',
            description: 'Specialized services include dent removal, valve alignment, and tone adjustments for trumpets, trombones, and tubas.',
        },
        woodwind: {
            title: 'Woodwind Instrument Repair',
            description: 'Services include re-padding, key adjustments, bore cleaning, and restoration for flutes, clarinets, and saxophones.',
        },
        percussion: {
            title: 'Percussion Maintenance',
            description: 'Expert tuning, head replacement, and hardware adjustments for drums, timpani, and other percussion instruments.',
        },
    };

    learnMoreButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const service = button.dataset.service;
            modalTitle.textContent = serviceDetails[service].title;
            modalDescription.textContent = serviceDetails[service].description;
            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});