//Устанавливаем стоимость улучшения и количество монет в бд
localStorage.setItem('buyUpgradesEarnCoin', 10)
localStorage.setItem('earnCoin', 1)

//Получем даные с бд
let buyUpgradesEarnCoin = parseInt(localStorage.getItem('buyUpgradesEarnCoin'))
let earnCoin = parseInt(localStorage.getItem('earnCoin'))

//Подучаем теги с сайта
let buyUpgradesEarnCoinSpan = document.querySelector('.buyUpgradesEarnCoinSpan')
let buyUpgradesCountEarnCoinSpan = document.querySelector('.buyUpgradesCountEarnCoinSpan')
let earnCoinSpan = document.querySelector('.earnCoinSpan')
let countEarnCoinSpanStart = document.querySelector('.countEarnCoinSpanStart')
let countEarnCoinSpanEnd = document.querySelector('.countEarnCoinSpanEnd')
let offlineEarnings = document.querySelector('.ofllineEarnings')
offlineEarnings.textContent = earnCoin;



//Устанавливаем значение на сайт
countEarnCoinSpanStart.textContent = earnCoin;
countEarnCoinSpanEnd.textContent = earnCoin+1;

buyUpgradesEarnCoinSpan.addEventListener('click' , function() {
    //Получаем количество денег с бд
    countMoney = parseInt(localStorage.getItem('countMoney'))

    buyUpgradesEarnCoin = parseInt(localStorage.getItem('buyUpgradesEarnCoin'))
    //Проверяем количество денег,что бы их было больше,чем стоит улучшение
    if (countMoney >= buyUpgradesEarnCoin) {
        // //Отнимаем от денег стоимость улучшения
        // countMoney -= buyUpgradesEarnCoin;
        // //Записываем
        // countMoneySpan.textContent = countMoney;
        // //Сохраняем
        // localStorage.setItem('countMoney', countMoney)
        setMoney(buyUpgradesEarnCoin)
        //Увеличиваем стоимость улучшеения
        buyUpgradesEarnCoin += 5
        //Записіваем на сайт
        buyUpgradesCountEarnCoinSpan.textContent = buyUpgradesEarnCoin;
        //Сохзраняем в бд
        localStorage.setItem('buyUpgradesEarnCoin', buyUpgradesEarnCoin)
        // localStorage.setItem('buyUpgradesEarnCoin', buyUpgradesEarnCoin)
        //Получаем количество пассивного дохода
        earnCoin = parseInt(localStorage.getItem('earnCoin'))
        //Увеличиваем
        earnCoin++;
        //Записываем
        countEarnCoinSpanStart.textContent = earnCoin;
        countEarnCoinSpanEnd.textContent = earnCoin+1;
        offlineEarnings = document.querySelector('.ofllineEarnings')
        offlineEarnings.textContent = earnCoin
        //Сохраняем
        localStorage.setItem('earnCoin', earnCoin)
    } else {
        showMessageMoney();
    }
})
