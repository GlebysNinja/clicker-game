localStorage.setItem('taskEarnCristalEasy', 5)
localStorage.setItem('taskEarnCristalMedium', 40)
localStorage.setItem('taskEarnCristalHard', 100)


let taskEarnCristalEasy = [5, 10, 15];
let taskEarnCristalMedium = [40, 50, 60];
let taskEarnCristalHard = [100, 125, 150];

let countEarnCristalForTaskEasy = parseInt(localStorage.getItem('taskEarnCristalEasy'));
let countEarnCristalForTaskMedium = parseInt(localStorage.getItem('taskEarnCristalMedium'));
let countEarnCristalForTaskHard = parseInt(localStorage.getItem('taskEarnCristalHard'));


document.querySelector('.taskCountEarnCristalEasy').textContent = countEarnCristalForTaskEasy;
document.querySelector('.taskCountEarnCristalMedium').textContent = countEarnCristalForTaskMedium;
document.querySelector('.taskCountEarnCristalHard').textContent = countEarnCristalForTaskHard;


let taskCheckEarnCristalEasy = parseInt(localStorage.getItem('taskEarnCristalEasy'))
let taskCheckEarnCristalMedium = parseInt(localStorage.getItem('taskEarnCristalMedium'))
let taskCheckEarnCristalHard = parseInt(localStorage.getItem('taskEarnCristalHard'))