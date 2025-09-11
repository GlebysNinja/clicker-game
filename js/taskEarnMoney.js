localStorage.setItem('taskEarnMoneyEasy', 5)
localStorage.setItem('taskEarnMoneyMedium', 40)
localStorage.setItem('taskEarnMoneyHard', 100)


let taskEarnMoneyEasy = [5, 10, 15];
let taskEarnMoneyMedium = [40, 50, 60];
let taskEarnMoneyHard = [100, 125, 150];

let countEarnMoneyForTaskEasy = parseInt(localStorage.getItem('taskEarnMoneyEasy'));
let countEarnMoneyForTaskMedium = parseInt(localStorage.getItem('taskEarnMoneyMedium'));
let countEarnMoneyForTaskHard = parseInt(localStorage.getItem('taskEarnMoneyHard'));;

document.querySelector('.taskCountEarnMoneyEasy').textContent = countEarnMoneyForTaskEasy;
document.querySelector('.taskCountEarnMoneyMedium').textContent = countEarnMoneyForTaskMedium;
document.querySelector('.taskCountEarnMoneyHard').textContent = countEarnMoneyForTaskHard;

let taskCheckEarnMoneyEasy = parseInt(localStorage.getItem('taskEarnMoneyEasy'))
let taskCheckEarnMoneyMedium = parseInt(localStorage.getItem('taskEarnMoneyMedium'))
let taskCheckEarnMoneyHard = parseInt(localStorage.getItem('taskEarnMoneyHard'))
