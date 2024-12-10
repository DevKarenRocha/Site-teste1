let currentIndex = 0; // Índice do slide atual
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Vai para o próximo slide ou volta ao primeiro
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Muda automaticamente a cada 10 segundos
setInterval(showNextSlide, 10000);
