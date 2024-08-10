const images = document.querySelectorAll('.slider-images img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const counterDisplay = document.getElementById('counter');

let currentIndex = 0;

// Функция для обновления слайдера и счетчика
function updateSlider() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
    counterDisplay.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

// Обработчики событий для кнопок
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Зацикливание
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Зацикливание
    updateSlider();
});

// Инициализация
updateSlider();