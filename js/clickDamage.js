
//Устанавливам количество кристалов в хранилище
localStorage.setItem('buyUpgradesDamage', 10)
//Получаем все елементы с хранилища 
let buyUpgradesDamage = parseInt(localStorage.getItem('buyUpgradesDamage'))
let clickDamage = parseInt(localStorage.getItem('clickDamage'))

//Получаем все елементы с сайта 
let buyUpgradesDamageSpan = document.querySelector('.buyUpgradesDamageSpan')
let buyUpgradesCountDamageSpan = document.querySelector('.buyUpgradesCountDamageSpan')
let clickDamageSpan = document.querySelector('.clickDamageSpan')
let countDamageSpanStart = document.querySelector('.countDamageSpanStart')
let countDamageSpanEnd = document.querySelector('.countDamageSpanEnd')

//Устанавливаем на сайт
buyUpgradesCountDamageSpan.textContent = buyUpgradesDamage;
countDamageSpanStart.textContent = clickDamage;
countDamageSpanEnd.textContent = clickDamage+10;

buyUpgradesDamageSpan.addEventListener('click', function() {
    //Получаем количество денег из бд
    countMoney = parseInt(localStorage.getItem('countMoney'))
    //Приверяем что бы улучшение сработало,если денег на счету больше,чем стоит улучшение
    if (countMoney >= buyUpgradesDamage) {
        //После проверки отнимаем от денег стоимость улучшения
        // countMoney -= buyUpgradesDamage; 

        //  countMoneySpan.textContent = countMoney;
        // //Сохраняем деньги в бд
        // localStorage.setItem('countMoney', countMoney);
        setMoney(buyUpgradesDamage)
        //Записываем оставшиеся деньги на сайт
        checkMoney();
        //Получаем из бд цену улучшения урона
        buyUpgradesDamage = parseInt(localStorage.getItem('buyUpgradesDamage'))
        //Увеличиваем
        buyUpgradesDamage += 10;
        //Записываем на сайт
        buyUpgradesCountDamageSpan.textContent = buyUpgradesDamage;
        //Сохраняем в бд
        localStorage.setItem('buyUpgradesDamage', buyUpgradesDamage)
        //Получаем силу клика из бд
        clickDamage = parseInt(localStorage.getItem('clickDamage'))
        //Увеличиваем
        clickDamage += 10;
        //Записываем на сайт
        countDamageSpanStart.textContent = clickDamage;
        countDamageSpanEnd.textContent = clickDamage+10;
        //Сохраняем
        localStorage.setItem('clickDamage', clickDamage)
    } else {
        showMessageMoney();
    }
})
