











//Устанавливам количество монет в хранилище и на сайт
localStorage.setItem('countMoney', 10)
let countMoney = localStorage.getItem('countMoney')
let countMoneySpan = document.querySelector('.countMoney')
countMoneySpan.textContent = countMoney;

let lvlLocation = parseInt(localStorage.getItem('lvlLocation'))

let mythologyGreece = localStorage.getItem('mythologyGreece');
let mythologyScandinavia = localStorage.getItem('mythologyScandinavia');;
let mythologyEgypt = localStorage.getItem('mythologyEgypt');;





function checkMoney() {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    if (countMoney >= 1000 && countMoney < 1_000_000) {
        countMoneySpan.textContent = (countMoney / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else if (countMoney >= 1_000_000 && countMoney < 1_000_000_000) {
        countMoneySpan.textContent = (countMoney / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (countMoney >= 1_000_000_000) {
        countMoneySpan.textContent = (countMoney / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
}


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




// //Массивы с изображениями богов,островов богов и заднего фона сайта
// let imagesGodsIslands = [
//     'images/backgroundIslandGreece.png',
//     'images/backgroundIslandScandinavia.png',
//     'images/backgroundIslandEgypt.png'
// ]



// let imagesGodsBackground = [
//     'images/backgroundGreece.png',
//     'images/backgroundScandinavia.png',
//     'images/backgroundEgypt.png'
// ]



let imagesGods = [
    // 'images/gera.png',
    // 'images/ares.png',
    // 'images/zevs.png',
    // 'images/amfitrita.png',
    // 'images/triton.png',
    // 'images/poseydon.png',
    // 'images/persefona.png',
    // 'images/tanatos.png',
    // 'images/aid.png',
    'images/freya.png',
    'images/baldr.png',
    'images/hel.png',
    'images/hemdal.png',
    'images/odin.png',
    'images/tor.png',
    'images/tur.png',
    'images/scadi.png',
    'images/vidar.png',
    // 'images/anubis.png',
    // 'images/tot.png',
    // 'images/set.png',
    // 'images/ra.png',
    // 'images/osiris.png',
    // 'images/isida.png',
    // 'images/gor.png',
    // 'images/hator.png'
]





//Включение звука на сайте
document.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    audio.muted = false;
    audio.play().catch((e) => {
        console.log("Воспроизведение не удалось:", e);
    });
}, { once: true });



let chanceFallCristalSpan = document.querySelector('.chanceFallCristal')
let chanceExtraCristalSpan = document.querySelector('.chanceExtraCristal')
let chanceExtraMoneySpan = document.querySelector('.chanceExtraMoney')




//Текущий уровень
let currentLevel = parseInt(localStorage.getItem('currentLevel'))
let currentLevelSpan = document.querySelector('.currentLevel')
currentLevelSpan.textContent = currentLevel + 1



//Уровней пройдено
let levelsCompleted = localStorage.getItem('levelsCompleted')
let levelsCompletedSpan = document.querySelector('.levelsCompleted')
levelsCompletedSpan.textContent = levelsCompleted;


//Устанавливаем количество смертей в хранилище и на сайт
localStorage.setItem('countDeaths', 0)
let countDeaths = parseInt(localStorage.getItem('countDeaths'))
let countDeathsSpan = document.querySelector('.countDeaths')
countDeathsSpan.textContent = countDeaths;
// localStorage.setItem('countMoney', 0)






//Устанавливам количество кристалов в хранилище и на сайт
localStorage.setItem('countCristal', 50)
let countCristal = localStorage.getItem('countCristal')
let countCristalSpan = document.querySelector('.countCristal')
countCristalSpan.textContent = countCristal;


















//Пассивный доход
// function earnMoneyOnline() {
//     //Получаем количество монет и пасивного дохода
//     countMoney = parseInt(localStorage.getItem('countMoney'))
//     earnCoin = parseInt(localStorage.getItem('earnCoin'))
//     //К монетам плюсуем количество пассивного дохода
//     countMoney += earnCoin; 
//     //Записываем на сайт
//     countMoneySpan.textContent = countMoney;
//     //Сохраняем
//     localStorage.setItem('countMoney', countMoney);
//     //Получаем все деньги
//     totalMoney = parseInt(localStorage.getItem('totalMoney'))
//     //К ним плюсуем количество пассивного дохода
//     totalMoney += earnCoin;
//     //Записываем на сайт
//     totalMoneySpan.textContent = totalMoney;
//     //Создраняем
//     localStorage.setItem('totalMoney', totalMoney)
// }

// setInterval(earnMoneyOnline, 3000);



//Перебираем и проверяем на выполнение достижения общих денег
localStorage.setItem('totalMoney', 0)
let totalMoney = localStorage.getItem('totalMoney')
let totalMoneySpan = document.querySelector('.totalMoney')
totalMoneySpan.textContent = totalMoney;
let taskEarnMoney = [
    { className: 'taskEarnMoney10', threshold: 10 },
    { className: 'taskEarnMoney50', threshold: 50 },
    { className: 'taskEarnMoney100', threshold: 100 },
    { className: 'taskEarnMoney500', threshold: 500 },
    { className: 'taskEarnMoney1000', threshold: 1000 }
];

taskEarnMoney.forEach(task => {
    let element = document.querySelector(`.${task.className}`);
    if (totalMoney >= task.threshold) {
        element.style.color = 'green';
    }
});



//Перебираем и переключаем улучшения
const upgrades = [
    document.querySelector('.upgrades1'),
    document.querySelector('.upgrades2'),
    document.querySelector('.upgrades3'),
    document.querySelector('.upgrades4'),
    document.querySelector('.upgrades5'),
    document.querySelector('.upgrades6'),
    document.querySelector('.upgrades7'),
    document.querySelector('.upgrades8'),
];

const tabs = [
    document.querySelector('.tab1'),
    document.querySelector('.tab2'),
    document.querySelector('.tab3'),
    document.querySelector('.tab4'),
    document.querySelector('.tab5'),
    document.querySelector('.tab6'),
    document.querySelector('.tab7'),
    document.querySelector('.tab8'),
];

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        upgrades.forEach((upgrade, i) => {
            if (i === index) {
                upgrade.classList.remove('hide');
            } else {
                upgrade.classList.add('hide');
            }
        });
    });
});















let hpBar = document.querySelector('.hpBar')
let hpBarDiv = document.querySelector('.hpBarDiv')
let hpBarFon = document.querySelector('.hpBarFon')


// let taskKillMonster = document.querySelector('.taskKillMonster')
// let taskKillBoss = document.querySelector('.taskKillBoss')
// let taskEarnMoney = document.querySelector('.taskEarnMoney')
// let taskMakeClick = document.querySelector('.taskMakeClick')
// let taskPassLevels = document.querySelector('.taskPassLevels')

//Получение уровня игры,хп бога
let lvlGodsIslands = parseInt(localStorage.getItem('lvlGodsIslands'));
let lvlGods = parseInt(localStorage.getItem('lvlGods'));
let godHP = 300;

//Получение тегов бога,острова,и хп
let god = document.querySelector('.god')
let godIsland = document.querySelector('.island')
let hpText = document.querySelector('.hpText')
hpText.textContent = godHP


let defeat = document.querySelector('.defeat')
let defeatFon = document.querySelector('.defeatFon')


document.addEventListener('click', (e) => {
  if (!defeat.contains(e.target)) {
    defeat.classList.add('hide');
    defeatFon.classList.add('hide');
    hpBar.style.width = 210 + 'px';
  }
});


let countExtraMoney = 1;
let countFallCristal = 1;
let sound = document.getElementById("sound");
god.addEventListener('click', function () {
    let width = 210;        
    const step = 10; 

    hpBar.style.width = width + 'px';

    const timer = setInterval(() => {
        width -= step;
        if (width <= 0) {
            defeat.classList.toggle('hide')
            defeatFon.classList.toggle('hide')
            clearInterval(timer);
        }
        hpBar.style.width = width + 'px';
    }, 1000);
    sound.currentTime = 0; // начинать с начала
    sound.play();
    // Проверка критического урона
    if (Math.random() < chanceCritDamage) {
        countMoney = parseInt(localStorage.getItem('countMoney')) || 0;
        godHP -= critDamage;
        hpText.textContent = godHP + ' ';
        // localStorage.setItem('countMoney', countMoney) // если нужно
    }

    // Устанавливаем сколько уровней пройдено
    levelsCompleted = parseInt(localStorage.getItem('levelsCompleted')) || 0;
    levelsCompletedSpan.textContent = levelsCompleted;

    // Устанавливаем текущий уровень
    currentLevelSpan.textContent = currentLevel + 1;

    // Обновляем количество кликов
    numberOfClicks = parseInt(localStorage.getItem('numberOfClicks')) || 0;
    numberOfClicks++;
    localStorage.setItem('numberOfClicks', numberOfClicks);
    numberOfClicksSpan.textContent = numberOfClicks;

    // Проверяем задания по кликам
    tasksMakeClick.forEach(task => {
        let element = document.querySelector(`.${task.className}`);
        if (numberOfClicks >= task.threshold) {
            element.style.color = 'green';
        }
    });

    // Мини анимация получения урона
    god.classList.add('scale');
    setTimeout(function () {
        god.classList.remove('scale');
    }, 100);

    // Наносим базовый урон
    godHP -= clickDamage;

    taskCheckKillMonsterEasy--;
    document.querySelector('.taskCountKillMonsterEasy').textContent = taskCheckKillMonsterEasy;
    if (taskCheckKillMonsterEasy <= 0) {
        localStorage.setItem('taskCountKillMonsterEasy', taskKillMonsterEasy[Math.floor(Math.random() * taskKillMonsterEasy.length)])
        document.querySelector('.taskCountKillMonsterEasy').textContent = parseInt(localStorage.getItem('taskCountKillMonsterEasy'));;
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countKillMonsterForTaskEasy;
        // alert(countKillMonsterForTaskEasy)
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckKillMonsterEasy = countKillMonsterForTaskEasy = document.querySelector('.taskCountKillMonsterEasy').textContent = taskKillMonsterEasy[Math.floor(Math.random() * taskKillMonsterEasy.length)]
    }


    taskCheckKillMonsterMedium--;
    document.querySelector('.taskCountKillMonsterMedium').textContent = taskCheckKillMonsterMedium;
    if (taskCheckKillMonsterMedium <= 0) {
        localStorage.setItem('taskKillMonsterMedium', taskKillMonsterMedium[Math.floor(Math.random() * taskKillMonsterMedium.length)])
        document.querySelector('.taskCountKillMonsterMedium').textContent = parseInt(localStorage.getItem('taskCountKillMonsterMedium'));;
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countKillMonsterForTaskMedium;
        // alert(countKillMonsterForTaskMedium)
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckKillMonsterMedium = countKillMonsterForTaskMedium = document.querySelector('.taskCountKillMonsterMedium').textContent = taskKillMonsterMedium[Math.floor(Math.random() * taskKillMonsterMedium.length)];
    }


    taskCheckKillMonsterHard--;
    document.querySelector('.taskCountKillMonsterHard').textContent = taskCheckKillMonsterHard;
    if (taskCheckKillMonsterHard <= 0) {
        localStorage.setItem('taskCountKillMonsterHard', taskKillMonsterHard[Math.floor(Math.random() * taskKillMonsterHard.length)])
        document.querySelector('.taskCountKillMonsterEasy').textContent = parseInt(localStorage.getItem('taskCountKillMonsterHard'));;
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countKillMonsterForTaskHard;
        // alert(countKillMonsterForTaskHard)
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckKillMonsterHard = countKillMonsterForTaskHard = document.querySelector('.taskCountKillMonsterHard').textContent = taskKillMonsterHard[Math.floor(Math.random() * taskKillMonsterHard.length)];

    }






    //Money
    taskCheckEarnMoneyEasy -= 5;
    document.querySelector('.taskCountEarnMoneyEasy').textContent = taskCheckEarnMoneyEasy;
    if (taskCheckEarnMoneyEasy <= 0) {
        localStorage.setItem('taskCountEarnMoneyEasy', taskEarnMoneyEasy[Math.floor(Math.random() * taskEarnMoneyEasy.length)])
        document.querySelector('.taskCountEarnMoneyEasy').textContent = parseInt(localStorage.getItem('taskCountEarnMoneyEasy'));
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countEarnMoneyForTaskEasy
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckEarnMoneyEasy = countEarnMoneyForTaskEasy = document.querySelector('.taskCountEarnMoneyEasy').textContent = taskEarnMoneyEasy[Math.floor(Math.random() * taskEarnMoneyEasy.length)];
    }

    taskCheckEarnMoneyMedium -= 5;
    document.querySelector('.taskCountEarnMoneyMedium').textContent = taskCheckEarnMoneyMedium;
    if (taskCheckEarnMoneyMedium <= 0) {
        localStorage.setItem('taskCountEarnMoneyMedium', taskEarnMoneyMedium[Math.floor(Math.random() * taskEarnMoneyMedium.length)])
        document.querySelector('.taskCountEarnMoneyMedium').textContent = parseInt(localStorage.getItem('taskCountEarnMoneyMedium'));
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countEarnMoneyForTaskMedium
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckEarnMoneyMedium = countEarnMoneyForTaskMedium = document.querySelector('.taskCountEarnMoneyMedium').textContent = taskEarnMoneyMedium[Math.floor(Math.random() * taskEarnMoneyMedium.length)];
    }

    taskCheckEarnMoneyHard -= 5;
    document.querySelector('.taskCountEarnMoneyHard').textContent = taskCheckEarnMoneyHard;
    if (taskCheckEarnMoneyHard <= 0) {
        localStorage.setItem('taskCountEarnMoneyHard', taskEarnMoneyHard[Math.floor(Math.random() * taskEarnMoneyHard.length)])
        document.querySelector('.taskCountEarnMoneyHard').textContent = parseInt(localStorage.getItem('taskCountEarnMoneyHard'));
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countEarnMoneyForTaskHard
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckEarnMoneyHard = countEarnMoneyForTaskHard = document.querySelector('.taskCountEarnMoneyHard').textContent = taskEarnMoneyHard[Math.floor(Math.random() * taskEarnMoneyHard.length)];
    }





    taskCheckEarnCristalEasy--;
    document.querySelector('.taskCountEarnCristalEasy').textContent = taskCheckEarnCristalEasy;
    if (taskCheckEarnCristalEasy <= 0) {
        localStorage.setItem('taskCountEarnCristalEasy', taskEarnCristalEasy[Math.floor(Math.random() * taskEarnCristalEasy.length)])
        document.querySelector('.taskCountEarnCristalEasy').textContent = parseInt(localStorage.getItem('taskCountEarnCristalEasy'));
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countEarnCristalForTaskEasy;
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckEarnCristalEasy = countEarnCristalForTaskEasy = document.querySelector('.taskCountEarnCristalEasy').textContent = taskEarnCristalEasy[Math.floor(Math.random() * taskEarnCristalEasy.length)];
    }


    taskCheckEarnCristalMedium--;
    document.querySelector('.taskCountEarnCristalMedium').textContent = taskCheckEarnCristalMedium;
    if (taskCheckEarnCristalMedium <= 0) {
        localStorage.setItem('taskCountEarnCristalMedium', taskEarnCristalMedium[Math.floor(Math.random() * taskEarnCristalMedium.length)])
        document.querySelector('.taskCountEarnCristalMedium').textContent = parseInt(localStorage.getItem('taskCountEarnCristalMedium'));
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countEarnCristalForTaskMedium;
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckEarnCristalMedium = countEarnCristalForTaskMedium = document.querySelector('.taskCountEarnCristalMedium').textContent = taskEarnCristalMedium[Math.floor(Math.random() * taskEarnCristalMedium.length)];
    }


    taskCheckEarnCristalHard--;
    document.querySelector('.taskCountEarnCristalHard').textContent = taskCheckEarnCristalHard;
    if (taskCheckEarnCristalHard <= 0) {
        localStorage.setItem('taskCountEarnCristalHard', taskEarnCristalHard[Math.floor(Math.random() * taskEarnCristalHard.length)])
        document.querySelector('.taskCountEarnCristalHard').textContent = parseInt(localStorage.getItem('taskCountEarnCristalHard'));
        countMoney = parseInt(localStorage.getItem('countMoney'))
        //Увеличиваем
        countMoney += countEarnCristalForTaskHard;
        //Записываем на сайт
        countMoneySpan.textContent = countMoney;
        //Сохраняем
        localStorage.setItem('countMoney', countMoney)
        taskCheckEarnCristalHard = countEarnCristalForTaskHard = document.querySelector('.taskCountEarnCristalHard').textContent = taskEarnCristalHard[Math.floor(Math.random() * taskEarnCristalHard.length)];
    }


    //Делаем шанс выпадения кристалов
    if (Math.random() < chanceFallCristal) {
        countCristal = parseInt(localStorage.getItem('countCristal'))
        countCristal += countFallCristal;
        countCristalSpan.textContent = countCristal;
        localStorage.setItem('countCristal', countCristal)
    }
    //Делаем шнас выпадения доп. монет
    if (Math.random() < chanceExtraMoney) {
        countMoney = parseInt(localStorage.getItem('countMoney'))
        countMoney += countExtraMoney;
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countMoney', countMoney)
    }



    if (godHP > 0) {
        hpText.textContent = godHP + ' ';
    } else {
        godHP = parseInt(localStorage.getItem(`GodHP`));
        godHP *= 1.02;
        godHP = Math.floor(godHP);
        hpText.textContent = godHP + ' ';
        localStorage.setItem('GodHP', godHP)
        // Бог "умер"
        // Получаем текущий уровень бога
        lvlGods = parseInt(localStorage.getItem('lvlGods'));

        // Увеличиваем счетчик смертей
        countDeaths = parseInt(localStorage.getItem('countDeaths')) || 0;
        countDeaths++;
        countDeathsSpan.textContent = countDeaths;
        localStorage.setItem('countDeaths', countDeaths);

        // Увеличиваем счетчик убитых богов
        countKillGods = parseInt(localStorage.getItem('countKillGods')) || 0;
        countKillGods++;
        countKillGodsSpan.textContent = countKillGods;
        localStorage.setItem('countKillGods', countKillGods);

        // Начисляем деньги
        countMoney = parseInt(localStorage.getItem('countMoney')) || 0;
        countMoney += 100000;
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countMoney', countMoney);

        totalMoney = parseInt(localStorage.getItem('totalMoney')) || 0;
        totalMoney += 10;
        totalMoneySpan.textContent = totalMoney;
        localStorage.setItem('totalMoney', totalMoney);

        // Проверяем задания на заработок денег
        taskEarnMoney.forEach(task => {
            let element = document.querySelector(`.${task.className}`);
            if (totalMoney >= task.threshold) {
                element.style.color = 'green';
            }
        });

        // Увеличиваем количество пройденных уровней
        levelsCompleted++;
        levelsCompletedSpan.textContent = levelsCompleted;
        localStorage.setItem('levelsCompleted', levelsCompleted);

        // Проверяем задания на убийство монстров
        tasksKillMonster.forEach(task => {
            let element = document.querySelector(`.${task.className}`);
            if (countKillGods >= task.threshold) {
                element.style.color = 'green';
            }
        });

        // Увеличиваем текущий уровень
        currentLevel++;
        localStorage.setItem('currentLevel', currentLevel);

        // Проверяем, если количество смертей кратно 10 - повышаем уровень богов и обнуляем счетчик смертей
        if (countDeaths > 0 && countDeaths % 2 === 0) {
            countDeaths = 0;
            countDeathsSpan.textContent = countDeaths;
            localStorage.setItem('countDeaths', countDeaths);

            lvlGods++;
            localStorage.setItem('lvlGods', lvlGods);



            // Проверяем, достигнут ли последний уровень
            if (lvlGods === 9) {
                lvlGods = 0;
                god.src = imagesGods[lvlGods];
                localStorage.setItem('lvlGods', lvlGods);
            } else if (lvlGods === 18) {
                lvlGods = 10;
                god.src = imagesGods[lvlGods];
                localStorage.setItem('lvlGods', lvlGods);
            }
            god.src = imagesGods[lvlGods];
        }
    }
});











// let extraCristal = document.querySelector('.extraCristal')







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

let priceGreece = parseInt(localStorage.getItem('priceGreece'))
let priceScandinavia = parseInt(localStorage.getItem('priceScandinavia'))
let priceEgypt = parseInt(localStorage.getItem('priceEgypt'))

let map = document.querySelector('.map')
let mapGame = document.querySelector('.mapGame')

map.addEventListener('click', function () {
    mapGame.classList.toggle('hide')
})

let Greece = document.querySelector('.Greece')
let infoGreece = document.querySelector('.infoGreece')
let Scandinavia = document.querySelector('.Scandinavia')
let infoScandinavia = document.querySelector('.infoScandinavia')
let Egypt = document.querySelector('.Egypt')
let infoEgypt = document.querySelector('.infoEgypt')

Greece.addEventListener('click', function () {
    window.location.href = 'index.html';
    mapGame.classList.toggle('hide')
    console.log('Greece')
})

Scandinavia.addEventListener('click', function () {
    mythologyScandinavia = localStorage.getItem('mythologyScandinavia');
    countMoney = parseInt(localStorage.getItem('countMoney'));
    console.log(countMoney)
    console.log(priceScandinavia)
    if (countMoney >= priceScandinavia && mythologyScandinavia === 'false') {
        countMoney -= priceScandinavia;
        console.log(countMoney)
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countMoney', countMoney)
        window.location.href = 'scandinavia.html';
        // localStorage.setItem('mythologyScandinavia', 'true');
        // localStorage.setItem('lvlGods', 10)
        // lvlGods = parseInt(localStorage.getItem('lvlGods'))
        // god.src = imagesGods[lvlGods];
        // localStorage.setItem('lvlGodsIslands', 1);
        // lvlGodsIslands = parseInt(localStorage.getItem('lvlGodsIslands'))
        // godIsland.style.backgroundImage = `url(${imagesGodsIslands[lvlGodsIslands]})`;
        // document.body.style.backgroundImage = `url(${imagesGodsBackground[lvlGodsIslands]})`;
    }
    mythologyScandinavia = localStorage.getItem('mythologyScandinavia');
    if (mythologyScandinavia === 'true') {
        window.location.href = 'scandinavia.html';
    }
    mapGame.classList.toggle('hide')
})

Egypt.addEventListener('click', function () {
    mythologyEgypt = localStorage.getItem('mythologyEgypt');
    countMoney = parseInt(localStorage.getItem('countMoney'));
    console.log(countMoney)
    console.log(mythologyEgypt)
    if (countMoney >= priceEgypt && mythologyEgypt === 'false') {
        countMoney -= priceEgypt;
        console.log(countMoney)
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countMoney', countMoney)
        localStorage.setItem('mythologyEgypt', 'true');
        window.location.href = 'egypt.html';
    }
    if (mythologyEgypt === 'true') {
        window.location.href = 'egypt.html';
    }
    if (godIsland.style.backgroundImage === 'url("images/backgroundIslandEgypt.png")') {

    }

    mapGame.classList.toggle('hide')
    console.log('Egypt')
})


function showMessageRebirth() {
    let el = document.querySelector(".alertRebirth");
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 1500);
}


function showMessageMoney() {
    let el = document.querySelector(".notEnoughCoins");
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 1500);
}

function showMessageCristal() {
    let el = document.querySelector(".notEnoughCristal");
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 1500);
}

















let i = document.querySelector('.i')
let divInfo = document.querySelector('.divInfo')

i.addEventListener('click', function () {
    divInfo.classList.toggle('hide')
})


let iconGreece = document.querySelector('.iconGreece')
let divEggGreece = document.querySelector('.divEggGreece')
let buttonBuyEgg = document.querySelector('.buttonBuyEgg')

iconGreece.addEventListener('click', function () {
    divEggGreece.classList.toggle('hide')
    buttonBuyEgg.classList.toggle('hide')
})

localStorage.setItem('buyEgg', 'true')

let buyEgg = localStorage.getItem('buyEgg')


buttonBuyEgg.addEventListener('click', function () {
    buyEgg = localStorage.getItem('buyEgg')
    if (buyEgg === 'true') {
        buttonBuyEgg.classList.add('hide')
    }
})

localStorage.setItem('clickEgg', 0)
let eggGreece = document.querySelector('.eggGreece')
let clickEgg = parseInt(localStorage.getItem('clickEgg'))
let reward = document.querySelector('.reward')

eggGreece.addEventListener('click', function () {
    buyEgg = localStorage.getItem('buyEgg')
    if (buyEgg === 'true' && clickEgg < 9) {
        clickEgg += 1;
        eggGreece.classList.add('scales');
        setTimeout(function () {
            eggGreece.classList.remove('scales');
        }, 75);
        console.log(clickEgg)
    }
    else {
        divEggGreece.classList.add('hide')
        buttonBuyEgg.classList.add('hide')
        reward.classList.remove('hide')
        getReward()
        clickEgg = 0;
        localStorage.setItem('clickEgg', clickEgg)
    }

})

let exitReward = document.querySelector('.exitReward')
let textReward = document.querySelector('.textReward')
let imgReward = document.querySelector('.imgReward')

exitReward.addEventListener('click', function () {
    reward.classList.add('hide')
})


function getReward() {
    let random = Math.random() * 100;

    if (random < 50) {
        textReward.textContent = '30';
        imgReward.src = 'images/money.png'
        countMoney = parseInt(localStorage.getItem('countMoney'))
        countMoney += 30;
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countMoney', countMoney)
    } else if (random < 90) {
        countCristal = parseInt(localStorage.getItem('countCristal'))
        countCristal += 3;
        countCristalSpan.textContent = countCristal;
        localStorage.setItem('countCristal', countCristal)
        textReward.textContent = '3';
        imgReward.src = 'images/cristal.png'
    } else if (random < 99) {
        textReward.textContent = '50';
        imgReward.src = 'images/damage.png'
        godHP = parseInt(localStorage.getItem(`GodHP`))
        console.log(godHP)
        godHP -= 50;
        hpText.textContent = godHP + ' ';
        localStorage.setItem(`GodHP`, godHP)
    } else {
        textReward.textContent = '';
        imgReward.src = 'images/tornado.png'
    }
}



















// // localStorage.setItem('streak1', 'notReady')
// let streak1Check = localStorage.getItem('streak1')
// let textStreak1 = document.querySelector('.textStreak1');
// let streak1 = document.querySelector('.streak1');
// let streak1Img = document.querySelector('.streakImg');

// if (streak1Check === 'Completed') {
//     textStreak1.textContent = '10';
//     streak1Img.src = 'images/money.png'
// }

// function startDailyTimer() {
//   // проверяем, есть ли сохранённое время старта
//   let startTime = localStorage.getItem('dailyTimerStart');

//   if (!startTime) {
//     // если нет — сохраняем текущее время
//     startTime = Date.now();
//     localStorage.setItem('dailyTimerStart', startTime);
//   } else {
//     startTime = Number(startTime);
//   }

//   let endTime = startTime + 24 * 60 * 60 * 1000; // 24 часа

//   let timer = setInterval(() => {
//     let now = Date.now();
//     let timeLeft = endTime - now;

//     if (timeLeft <= 0) {
//       console.log("✅ Прошли сутки!");

//       // обнуляем и запускаем новый цикл
//       startTime = Date.now();
//       endTime = startTime + 24 * 60 * 60 * 1000;
//       localStorage.setItem('dailyTimerStart', startTime);
//     }

//     let hrs = Math.floor(timeLeft / (1000 * 60 * 60));
//     let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     console.log(
//       `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
//     );
//   }, 1000);
// }

// startDailyTimer();



// streak1.addEventListener('click', function() {
//     streak1Check = localStorage.getItem('streak1')
//     if (streak1Check === 'Ready') {
//         textStreak1.textContent = '10';
//         streak1Img.src = 'images/money.png'
//         countMoney = parseInt(localStorage.getItem('countMoney'))
//         countMoney += 10;
//         countMoneySpan.textContent = countMoney;
//         localStorage.setItem('countMoney', countMoney)
//         localStorage.setItem('streak1', 'Completed')
//     }
// })

// let hours, minutes, seconds, hLeft, mLeft, sLeft;

// // таймер каждую секунду пересчитывает
// setInterval(() => {
//   let now = new Date();

//   hours = now.getHours();
//   minutes = now.getMinutes();
//   seconds = now.getSeconds();

//   // оставшееся время до конца суток
//   hLeft = 23 - hours;
//   mLeft = 59 - minutes;
//   sLeft = 59 - seconds;

// }, 1000);

// а здесь — выводим каждые 2 секунды (пример, "снаружи")


// setInterval(function() {
//     timer();
//     check();
//     }, 1000);

// let textStreak1 = document.querySelector('.textStreak1');
// let streak1 = document.querySelector('.streak1');
// let textStreak1Check = false;
// let timerId = null; // id для setInterval

// streak1.addEventListener('click', function() {
//     if (!textStreak1Check) {
//         textStreak1Check = true;
//         console.log('start');

//         // запускаем таймер
//         timerId = setInterval(() => {
//             textStreak1.textContent =
//               `${String(hLeft).padStart(2, '0')}:${String(mLeft).padStart(2, '0')}:${String(sLeft).padStart(2, '0')}`;
//         }, 1000);

//     } else {
//         textStreak1Check = false;
//         console.log('stop');

//         // останавливаем таймер
//         clearInterval(timerId);
//         timerId = null;

//         // возвращаем текст
//         textStreak1.textContent = '1';
//     }
// });




















