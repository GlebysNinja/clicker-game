//Перебираем и проверяем на выполнение количество убитых монстров
let tasksKillMonster = [
    { className: 'taskKillMonster10', threshold: 10 },
    { className: 'taskKillMonster50', threshold: 50 },
    { className: 'taskKillMonster100', threshold: 100 },
    { className: 'taskKillMonster500', threshold: 500 },
    { className: 'taskKillMonster1000', threshold: 1000 }
];


let countKillGods = parseInt(localStorage.getItem('countKillGods'));
let countKillGodsSpan = document.querySelector('.countKillGods');
countKillGodsSpan.textContent = countKillGods;

tasksKillMonster.forEach(task => {
    let element = document.querySelector(`.${task.className}`);
    if (countKillGods >= task.threshold) {
        element.style.color = 'green';
    }
});
