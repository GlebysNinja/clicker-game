// localStorage.setItem('taskKillMonsterEasy', 5)
// localStorage.setItem('taskKillMonsterMedium', 40)
// localStorage.setItem('taskKillMonsterHard', 100)

let taskKillMonsterEasy = [5, 10, 15];
let taskKillMonsterMedium = [40, 50, 60];
let taskKillMonsterHard = [100, 125, 150];

let countKillMonsterForTaskEasy = parseInt(localStorage.getItem('taskKillMonsterEasy'));
let countKillMonsterForTaskMedium = parseInt(localStorage.getItem('taskKillMonsterMedium'));
let countKillMonsterForTaskHard = parseInt(localStorage.getItem('taskKillMonsterHard'));


document.querySelector('.taskCountKillMonsterEasy').textContent = countKillMonsterForTaskEasy;
document.querySelector('.taskCountKillMonsterMedium').textContent = countKillMonsterForTaskMedium;
document.querySelector('.taskCountKillMonsterHard').textContent = countKillMonsterForTaskHard;

let taskCheckKillMonsterEasy = parseInt(localStorage.getItem('taskKillMonsterEasy'))
let taskCheckKillMonsterMedium = parseInt(localStorage.getItem('taskKillMonsterMedium'))
let taskCheckKillMonsterHard = parseInt(localStorage.getItem('taskKillMonsterHard'))

