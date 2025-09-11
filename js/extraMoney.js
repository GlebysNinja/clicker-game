
//Устанавливаем данные в бд
localStorage.setItem('buyUpgradesExtraMoney', 10)
localStorage.setItem('chanceExtraMoney', 0.01)

//Получаем данные с бд
let chanceExtraMoney = parseFloat(localStorage.getItem('chanceExtraMoney'))
let buyUpgradesExtraMoney = parseInt(localStorage.getItem('buyUpgradesExtraMoney'))

//Получаем теги с сайта
let buyUpgradesExtraMoneySpan = document.querySelector('.buyUpgradesExtraMoneySpan')
let buyUpgradesCountExtraMoneySpan = document.querySelector('.buyUpgradesCountExtraMoneySpan')
let countExtraMoneySpanStart = document.querySelector('.countExtraMoneySpanStart')
let countExtraMoneySpanEnd = document.querySelector('.countExtraMoneySpanEnd')

//Устанавливаем данные на сайт
countExtraMoneySpanStart.textContent = Math.floor(chanceExtraMoney*100) + '%';
countExtraMoneySpanEnd.textContent = Math.floor((chanceExtraMoney+0.01)*100) + '%';

buyUpgradesExtraMoneySpan.addEventListener('click', function() {
    //Получам стоимость улучшения
    buyUpgradesExtraMoney = parseInt(localStorage.getItem('buyUpgradesExtraMoney'))
    //Получаем количество денег с бд
    countMoney = parseInt(localStorage.getItem('countMoney'))
    //Проверяем количество денег,что бы их было больше,чем стоит улучшение
    if (countMoney >= buyUpgradesExtraMoney) {
        // //Отнимаем от денег стоимость улучшения
        // countMoney -= buyUpgradesExtraMoney;
        // //Записываем
        // countMoneySpan.textContent = countMoney;
        // //Сохраняем 
        // localStorage.setItem('countMoney', countMoney)
        setMoney(buyUpgradesExtraMoney)
        //Добавляем к стоимости улучшения
        buyUpgradesExtraMoney += 10;
        //Записываем
        buyUpgradesCountExtraMoneySpan.textContent = buyUpgradesExtraMoney;
        //Сохраняем
        localStorage.setItem('buyUpgradesExtraMoney', buyUpgradesExtraMoney)
        //Доьавляем шанс на доп монеты
        chanceExtraMoney += 0.01;
        chanceExtraMoneySpan.textContent = Math.floor(chanceExtraMoney *100) + '%';
        countExtraMoneySpanStart.textContent = Math.floor(chanceExtraMoney*100) + '%';
        countExtraMoneySpanEnd.textContent = Math.floor((chanceExtraMoney+0.01)*100) + '%';
        //Выводим текущий шанс
        let percent = Math.floor(chanceExtraMoney * 100);
        // alert(`Шанс выпадения доп монет: ${percent}%`);
    } else {
        showMessageMoney();
    }
})


//Устанавливаем данные доп. денег
let extraMoney = document.querySelector('.extraMoney')
chanceExtraMoneySpan.textContent = chanceExtraMoney*100 + '%';