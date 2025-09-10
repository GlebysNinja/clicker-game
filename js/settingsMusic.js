
let windowSetings = document.querySelector('.windowSetings')
let setings = document.querySelector('.setings')

setings.addEventListener('click', function () {
    windowSetings.classList.toggle('hide')
})





let player = document.getElementById("bg-music");
let volumeControl = document.getElementById("volume");

volumeControl.addEventListener("input", function () {
    player.volume = this.value;
});



let player2 = document.getElementById("sound");
let volumeControl2 = document.getElementById("volume2");

volumeControl2.addEventListener("input", function () {
    player2.volume = this.value;
});

const slider = document.getElementById('volume');

// Функция для обновления CSS-переменной
function updateSliderBackground(slider) {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--thumb-pos', `${value}%`);
}

// Обновляем фон при загрузке страницы
window.addEventListener('load', () => {
    updateSliderBackground(slider);
});

// Обновляем фон при изменении значения
slider.addEventListener('input', () => {
    updateSliderBackground(slider);
});




const slider2 = document.getElementById('volume2');

// Функция для обновления CSS-переменной
function updateSliderBackground(slider) {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.setProperty('--thumb-pos', `${value}%`);
}

// Обновляем фон при загрузке страницы
window.addEventListener('load', () => {
    updateSliderBackground(slider2);
});

// Обновляем фон при изменении значения
slider2.addEventListener('input', () => {
    updateSliderBackground(slider2);
});