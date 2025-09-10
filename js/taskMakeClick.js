//Перебираем и проверяем на выполнение достижения на количество кликов
let tasksMakeClick = [
    { className: 'taskMakeClick10', threshold : 10 },
    { className: 'taskMakeClick50', threshold : 50 },
    { className: 'taskMakeClick100', threshold : 100 },
    { className: 'taskMakeClick500', threshold : 500 },
    { className: 'taskMakeClick1000', threshold : 1000 },
]

let numberOfClicks = parseInt(localStorage.getItem('numberOfClicks'));
let numberOfClicksSpan = document.querySelector('.numberOfClicks');
numberOfClicksSpan.textContent = numberOfClicks;

tasksMakeClick.forEach(task => {
    let element = document.querySelector(`.${task.className}`)
    if (numberOfClicks >= task.threshold) {
        element.style.color = 'green'
    }
})