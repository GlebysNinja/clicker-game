
//Записываем данные в бд
localStorage.setItem('buyUpgradesChanceCritDamage', 10)
localStorage.setItem('chanceCritDamage', 0.01)

//Получаем данные с бд
let chanceCritDamage = parseFloat(localStorage.getItem('chanceCritDamage'))
let buyUpgradesChanceCritDamage = parseFloat(localStorage.getItem('buyUpgradesChanceCritDamage')) 

//Получаем теги с сайта
let buyUpgradesChanceCritDamageSpan = document.querySelector('.buyUpgradesChanceCritDamageSpan')
let buyUpgradesCountChanceCritDamageSpan = document.querySelector('.buyUpgradesCountChanceCritDamageSpan')
let countChanceCritDamageStart = document.querySelector('.countChanceCritDamageStart')
let countChanceCritDamageEnd = document.querySelector('.countChanceCritDamageEnd')



let percent = Math.floor(chanceCritDamage * 100);
let criticalDamageChance = document.querySelector('.criticalDamageChance')
criticalDamageChance.textContent = percent + '%';

//Записываем на сайт
countChanceCritDamageStart.textContent = chanceCritDamage * 100 + '%';
countChanceCritDamageEnd.textContent = (chanceCritDamage + 0.01) * 100 + '%';

buyUpgradesChanceCritDamageSpan.addEventListener('click', function() {
    //Подучаем стоимость улучшения
    buyUpgradesChanceCritDamage = parseFloat(localStorage.getItem('buyUpgradesChanceCritDamage')) 
    //Получаем количество денег
    countMoney = parseInt(localStorage.getItem('countMoney'))
    //Проверяем,что бы денег было больше,чем стоимость улучшения
    if (countMoney >= buyUpgradesChanceCritDamage) {
        //От денег отнимаем стоимость улучшения
        // countMoney -= buyUpgradesChanceCritDamage;
        // //Записываем на сайт
        // countMoneySpan.textContent = countMoney;
        // //Сохраняем
        // localStorage.setItem('countMoney', countMoney)
        setMoney(buyUpgradesChanceCritDamage)
        //Увеличиваем стоимость улучшения
        buyUpgradesChanceCritDamage += 10;
        //Записываем на сайт
        buyUpgradesCountChanceCritDamageSpan.textContent = buyUpgradesChanceCritDamage;
        //Сохраняем
        localStorage.setItem('buyUpgradesChanceCritDamage', buyUpgradesChanceCritDamage)
        //Получаем шанс критического урона
        chanceCritDamage = parseFloat(localStorage.getItem('chanceCritDamage'))
        //Улучшаем
        chanceCritDamage += 0.01;
        //Записываем на сайт
        countChanceCritDamageStart.textContent = Math.floor(chanceCritDamage * 100) + '%';
        countChanceCritDamageEnd.textContent = Math.floor((chanceCritDamage + 0.01) * 100) + '%';
        //Сохраняем
        criticalDamageChance = document.querySelector('.criticalDamageChance')
        criticalDamageChance.textContent = percent + '%';

        localStorage.setItem('chanceCritDamage', chanceCritDamage)
        // alert(`Шанс крит. урона: ${percent}%`);
    } else {
        showMessageMoney();
    }
})
