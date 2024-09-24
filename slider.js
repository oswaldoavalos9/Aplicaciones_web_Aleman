let slides = document.querySelectorAll('.slider');
let currentSlide = 0;

// Función para cambiar imagen
function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

slides[currentSlide].classList.add('active');

setInterval(changeSlide, 3000);