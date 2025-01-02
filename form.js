document.addEventListener('DOMContentLoaded', function () {
    // Select the form and input fields
    const form = document.querySelector('.form-container');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const favoriteArtSelect = document.getElementById('favorite-art');
    const errorMessage = document.createElement('div'); // Element to display error messages
    form.prepend(errorMessage); // Prepend the error message at the top of the form

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous error messages
        errorMessage.innerHTML = '';
        errorMessage.style.color = 'red';

        // Validate inputs
        let errors = [];

        // Name validation
        if (nameInput.value.trim() === '') {
            errors.push('Full name is required.');
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            errors.push('Please enter a valid email address.');
        }

        // Password validation
        if (passwordInput.value.trim().length < 6) {
            errors.push('Password must be at least 6 characters long.');
        }

        // Favorite art style validation
        if (favoriteArtSelect.value === '') {
            errors.push('Please select your favorite art style.');
        }

        // Display errors if there are any
        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join('<br>');
        } else {
            // If no errors, display success message and reset the form
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Focus effect for input fields (highlight on focus)
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            input.style.borderColor = '#4CAF50'; // Green border on focus
            input.style.boxShadow = '0 0 8px rgba(76, 175, 80, 0.3)'; // Subtle glow effect
        });

        input.addEventListener('blur', function () {
            input.style.borderColor = '#ddd'; // Reset border color when not focused
            input.style.boxShadow = 'none'; // Remove the glow effect
        });
    });
});
