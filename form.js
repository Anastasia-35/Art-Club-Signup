// -----------------------------
// Hero Image Slider (with hover pause)
// -----------------------------
let heroImages = document.querySelectorAll('.hero-images img'); 
let currentHero = 0;
let heroInterval = null;

function showHeroImage(index) {
    heroImages.forEach(img => img.classList.remove('active'));
    heroImages[index].classList.add('active');
}

// Advance the hero slider
function nextHeroImage() {
    currentHero = (currentHero + 1) % heroImages.length;
    showHeroImage(currentHero);
}

// Start automatic sliding
function startHeroSlider() {
    heroInterval = setInterval(nextHeroImage, 4000);
}

// Pause slider on hover
heroImages.forEach(img => {
    img.addEventListener('mouseenter', () => clearInterval(heroInterval));
    img.addEventListener('mouseleave', () => startHeroSlider());
});

// Initial setup
showHeroImage(currentHero);
startHeroSlider();


// -----------------------------
// Gallery Slider (loop + pause)
// -----------------------------
let slides = document.querySelectorAll('.gallery-container .gallery-slide');
let currentSlide = 0;

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let galleryInterval = null;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startGallerySlider() {
    galleryInterval = setInterval(nextSlide, 5000); // 5 seconds per slide
}

function pauseGallerySlider() {
    clearInterval(galleryInterval);
}

// Button controls
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        nextSlide();
        pauseGallerySlider();
        startGallerySlider(); // restart timer
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        pauseGallerySlider();
        startGallerySlider(); // restart timer
    });

    // Pause on hover
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.addEventListener('mouseenter', pauseGallerySlider);
    galleryContainer.addEventListener('mouseleave', startGallerySlider);

    // Initial display
    showSlide(currentSlide);
    startGallerySlider();
}


// -----------------------------
// Form Validation
// -----------------------------
const form = document.querySelector('.form-container');
if (form) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');
    const phoneInput = form.querySelector('#phone');
    const favoriteArtSelect = form.querySelector('#favorite-art');

    let errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    errorMessage.style.marginBottom = '15px';
    form.prepend(errorMessage);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessage.innerHTML = '';

        let errors = [];

        if (nameInput && nameInput.value.trim() === '') errors.push('Full name is required.');
        if (emailInput) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(emailInput.value.trim())) errors.push('Valid email is required.');
        }
        if (passwordInput && passwordInput.value.trim().length < 6) errors.push('Password must be 6+ characters.');
        if (phoneInput && phoneInput.value.trim() === '') errors.push('Phone number is required.');
        if (favoriteArtSelect && favoriteArtSelect.value === '') errors.push('Select your favorite art style.');

        if (errors.length > 0) {
            errorMessage.innerHTML = errors.join('<br>');
            errorMessage.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
}
