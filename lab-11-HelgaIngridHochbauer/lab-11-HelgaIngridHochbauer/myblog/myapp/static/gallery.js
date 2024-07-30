let currentSlideIndex = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');
    if (n >= slides.length) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = 'none');
    slides[currentSlideIndex].style.display = 'block';
}

function nextSlide() {
    showSlide(++currentSlideIndex);
}

function prevSlide() {
    showSlide(--currentSlideIndex);
}

showSlide(currentSlideIndex);
