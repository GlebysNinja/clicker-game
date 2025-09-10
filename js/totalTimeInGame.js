// Загружаем время из localStorage или устанавливаем 0
let totalTimeInGame = parseInt(localStorage.getItem('totalTimeInGame')) || 0;

// Отображение на странице
let totalTimeInGameSpan = document.querySelector('.totalTimeInGame');

// Функция форматирования времени
function formatTime(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secs = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

// Отображаем стартовое значение
totalTimeInGameSpan.textContent = `Вы на сайте: ${formatTime(totalTimeInGame)}`;

// Каждую секунду увеличиваем и сохраняем
setInterval(() => {
    totalTimeInGame++;
    totalTimeInGameSpan.textContent = `Всего времени в игре: ${formatTime(totalTimeInGame)}`;
    localStorage.setItem('totalTimeInGame', totalTimeInGame);
}, 1000);