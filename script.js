let currentIndex = 0; // Índice do slide atual
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Vai para o próximo slide ou volta ao primeiro
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Muda automaticamente a cada 10 segundos
setInterval(showNextSlide, 10000);

// Obtém o botão
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Quando o usuário rolar para baixo 100px, mostre o botão
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Quando o usuário clicar no botão, rolar para o topo da página
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};