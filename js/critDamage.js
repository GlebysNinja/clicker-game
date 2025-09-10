//Устанавливаем данные в бд
localStorage.setItem('critDamage', 1)
localStorage.setItem('buyUpgradesCritDamage', 10)

//Получаем данные с бд
let critDamage = parseInt(localStorage.getItem('critDamage'))
let buyUpgradesCritDamage = parseInt(localStorage.getItem('buyUpgradesCritDamage'))

//Получаем теги с сайта
let buyUpgradesCritDamageSpan = document.querySelector('.buyUpgradesCritDamageSpan')
let buyUpgradesCountCritDamageSpan = document.querySelector('.buyUpgradesCountCritDamageSpan')
let countCritDamageStart = document.querySelector('.countCritDamageStart')
let countCritDamageEnd = document.querySelector('.countCritDamageEnd')

//Устанавливаем значение на сайт
countCritDamageStart.textContent = critDamage;
countCritDamageEnd.textContent = critDamage+2;


buyUpgradesCritDamageSpan.addEventListener('click', function() {
    //Получаем стоимость улучшения
    buyUpgradesCritDamage = parseInt(localStorage.getItem('buyUpgradesCritDamage'))
    //Получаем количество денег
    countMoney = parseInt(localStorage.getItem('countMoney'))
    //Проверяем что бы денег было больше,чем стоимость улучшения
    if (countMoney >= buyUpgradesCritDamage) {
        //Отнимаем от денег стоимость улучшения
        // countMoney -= buyUpgradesCritDamage;
        // //Записываем на сайт
        // countMoneySpan.textContent = countMoney;
        // //Сохраняем
        // localStorage.setItem('countMoney', countMoney)
        //Увеличиваем стоимость улучшения
        setMoney(buyUpgradesCritDamage)
        buyUpgradesCritDamage += 10;
        //Пишем на сайт
        buyUpgradesCountCritDamageSpan.textContent = buyUpgradesCritDamage;
        //Сохраняем
        localStorage.setItem('buyUpgradesCritDamage', buyUpgradesCritDamage)
        //Получаем критический урон
        critDamage = parseInt(localStorage.getItem('critDamage'))
        //Прибавляем
        critDamage += 2;
        //Записываем
        countCritDamageStart.textContent = critDamage;
        countCritDamageEnd.textContent = critDamage+2;
        //Сохраняем
        localStorage.setItem('critDamage', critDamage)
    } else {
        showMessageMoney();
    }
})

