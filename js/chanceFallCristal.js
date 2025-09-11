
//Записываем данные в бд
localStorage.setItem('buyUpgradesCrystalFall', 10)
localStorage.setItem('chanceFallCristal', 1)

//Получаем данные с бд
let buyUpgradesCrystalFall = parseInt(localStorage.getItem('buyUpgradesCrystalFall'))
let chanceFallCristal = parseFloat(localStorage.getItem('chanceFallCristal'))


//Получаем теги с сайта
let buyUpgradesCrystalFallSpan = document.querySelector('.buyUpgradesCrystalFallSpan')
let buyUpgradesCountCrystalFall = document.querySelector('.buyUpgradesCountCrystalFall')
let countCrystalFallSpanStart = document.querySelector('.countCrystalFallSpanStart')
let countCrystalFallSpanEnd = document.querySelector('.countCrystalFallSpanEnd')


//Записываем данные на сайт
countCrystalFallSpanStart.textContent = chanceFallCristal*100 + '%'
countCrystalFallSpanEnd.textContent = (chanceFallCristal+0.01)*100 + '%'


buyUpgradesCrystalFallSpan.addEventListener('click', function() {
    //Получаем стоимость улучшения 
    buyUpgradesCrystalFall = parseInt(localStorage.getItem('buyUpgradesCrystalFall'))
    //Получаем количество монет
    countMoney = parseInt(localStorage.getItem('countMoney'))
    //Проверяем что бы денег было больше,чем стоимость улучшения
    if (countMoney >= buyUpgradesCrystalFall) {
        // //Отнимает от денег стоимость улучшения
        // countMoney -= buyUpgradesCrystalFall;
        // //Записываем на сайт
        // countMoneySpan.textContent = countMoney;
        // //Сохраняем данные
        // localStorage.setItem('countMoney', countMoney)
        setMoney(buyUpgradesCrystalFall)
        //Увеличиваем стоимость улучшения
        buyUpgradesCrystalFall += 10;
        //Записываем на сайт
        buyUpgradesCountCrystalFall.textContent = buyUpgradesCrystalFall;
        //Сохраняем в бд
        localStorage.setItem('buyUpgradesCrystalFall', buyUpgradesCrystalFall)
        //Увеличиваем шанс
        chanceFallCristal += 0.01;
        chanceFallCristalSpan.textContent = Math.floor(chanceFallCristal*100) + '%';
        //Записываем на сайт
        countCrystalFallSpanStart.textContent = Math.floor(chanceFallCristal*100) + '%'
        countCrystalFallSpanEnd.textContent = Math.floor((chanceFallCristal+0.01)*100) + '%'
        let percent = Math.floor(chanceFallCristal * 100);
        // alert(`Шанс выпадения кристалла: ${percent}%`);
    } else {
        showMessageMoney();
    }
})


//Устанавливаем данные доп. кристалов
let crystalFall = document.querySelector('.crystalFall')




chanceFallCristalSpan.textContent = chanceFallCristal*100 + '%';
