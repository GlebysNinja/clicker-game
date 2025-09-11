
//Уровней пройдено
let levelsCompleted = localStorage.getItem('levelsCompleted')
let levelsCompletedSpan = document.querySelector('.levelsCompleted')
levelsCompletedSpan.textContent = levelsCompleted;