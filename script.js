//Устанавливам количество монет в хранилище и на сайт
localStorage.setItem('countMoney', 10000000)
let countMoney = localStorage.getItem('countMoney')
let countMoneySpan = document.querySelector('.countMoney')
countMoneySpan.textContent = countMoney;

let lvlLocation = parseInt(localStorage.getItem('lvlLocation'))

let mythologyGreece = localStorage.getItem('mythologyGreece');
let mythologyScandinavia = localStorage.getItem('mythologyScandinavia')
let mythologyEgypt = localStorage.getItem('mythologyEgypt');



let clickPower = document.querySelector('.clickPower') 
clickPower.textContent = localStorage.getItem('clickDamage');


localStorage.setItem('countCristal', 1000)


//Массивы с изображениями богов,островов богов и заднего фона сайта
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
    'images/gera.png',
    'images/ares.png',
    'images/zevs.png',
    'images/amfitrita.png',
    'images/triton.png',
    'images/poseydon.png',
    'images/persefona.png',
    'images/tanatos.png',
    'images/aid.png',
    // 'images/baldr.png',
    // 'images/freya.png',
    // 'images/hel.png',
    // 'images/hemdal.png',
    // 'images/odin.png',
    // 'images/tor.png',
    // 'images/tur.png',
    // 'images/scadi.png',
    // 'images/vidar.png',
    // 'images/anubis.png',
    // 'images/tot.png',
    // 'images/set.png',
    // 'images/ra.png',
    // 'images/osiris.png',
    // 'images/isida.png',
    // 'images/gor.png',
    // 'images/hator.png'
]









let chanceFallCristalSpan = document.querySelector('.chanceFallCristal')
let chanceExtraCristalSpan = document.querySelector('.chanceExtraCristal')
let chanceExtraMoneySpan = document.querySelector('.chanceExtraMoney')



















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






// let taskKillMonster = document.querySelector('.taskKillMonster')
// let taskKillBoss = document.querySelector('.taskKillBoss')
// let taskEarnMoney = document.querySelector('.taskEarnMoney')
// let taskMakeClick = document.querySelector('.taskMakeClick')
// let taskPassLevels = document.querySelector('.taskPassLevels')



//Устанавливам количество кристалов в хранилище и на сайт
localStorage.setItem('countCristal', 5000)
let countCristal = localStorage.getItem('countCristal')
let countCristalSpan = document.querySelector('.countCristal')
countCristalSpan.textContent = countCristal;


//Получение уровня игры,хп бога
let lvlGodsIslands = parseInt(localStorage.getItem('lvlGodsIslands'));
let lvlGods = parseInt(localStorage.getItem('lvlGods'));
let godHP = 300;

//Получение тегов бога,острова,и хп
let god = document.querySelector('.god')
let godIsland = document.querySelector('.island')
let hpText = document.querySelector('.hpText')
hpText.textContent = godHP

let countExtraMoney = 1;
let countFallCristal = 1;
god.addEventListener('click', function () {
    if (Math.random() < chanceCritDamage) {
        countMoney = parseInt(localStorage.getItem('countMoney')) || 0;
        godHP -= critDamage;
        hpText.textContent = godHP + ' ';
        // localStorage.setItem('countMoney', countMoney) // если нужно
    }

    levelsCompleted = parseInt(localStorage.getItem('levelsCompleted')) || 0;
    levelsCompletedSpan.textContent = levelsCompleted;

    // currentLevelSpan.textContent = currentLevel + 1;

    numberOfClicks = parseInt(localStorage.getItem('numberOfClicks')) || 0;
    numberOfClicks++;
    localStorage.setItem('numberOfClicks', numberOfClicks);
    numberOfClicksSpan.textContent = numberOfClicks;

    tasksMakeClick.forEach(task => {
        let element = document.querySelector(`.${task.className}`);
        if (numberOfClicks >= task.threshold) {
            element.style.color = 'green';
        }
    });

    god.classList.add('scale');
    setTimeout(function () {
        god.classList.remove('scale');
    }, 100);
    clickDamage = parseInt(localStorage.getItem('clickDamage'))
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
        coinsFromMobStart = parseInt(localStorage.getItem('coinsFromMobStart'))
        countMoney += coinsFromMobStart;
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
        // currentLevel++;
        // localStorage.setItem('currentLevel', currentLevel);

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
            }
            god.src = imagesGods[lvlGods];
        }
    }
});











// let extraCristal = document.querySelector('.extraCristal')








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
        localStorage.setItem('mythologyScandinavia', 'true');
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
        window.location.href = 'egypt.html';
        localStorage.setItem('mythologyEgypt', 'true');
    }
    if (mythologyEgypt === 'true') {
        window.location.href = 'egypt.html';
    }

    mapGame.classList.toggle('hide')
    console.log('Egypt')
})


