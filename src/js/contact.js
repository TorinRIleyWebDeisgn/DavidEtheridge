document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('form-response');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                responseMessage.classList.remove('hidden');
                responseMessage.textContent = "Thank you for your message! We'll get back to you soon.";
                form.reset();
                setTimeout(() => {
                    responseMessage.classList.add('hidden');
                }, 5000);
            } else {
                responseMessage.classList.remove('hidden');
                responseMessage.textContent =
                    'Oops! There was a problem submitting your form. Please try again.';
                setTimeout(() => {
                    responseMessage.classList.add('hidden');
                }, 5000);
            }
        } catch (error) {
            responseMessage.classList.remove('hidden');
            responseMessage.textContent =
                'An error occurred while submitting your message. Please try again later.';
            setTimeout(() => {
                responseMessage.classList.add('hidden');
            }, 5000);
        }
    });
});
