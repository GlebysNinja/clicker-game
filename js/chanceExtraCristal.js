

//Записываем данные в бд
localStorage.setItem('buyUpgradesExtraCristal', 10)
localStorage.setItem('chanceExtraCristal', 0.01)

//Получаем данные с бд
let buyUpgradesExtraCristal = parseInt(localStorage.getItem('buyUpgradesExtraCristal'))
let chanceExtraCristal = parseFloat(localStorage.getItem('chanceExtraCristal'))


//Получаем теги с сайта
let buyUpgradesExtraCristalSpan = document.querySelector('.buyUpgradesExtraCristalSpan')
let buyUpgradesCountExtraCristalSpan = document.querySelector('.buyUpgradesCountExtraCristalSpan')
let countExtraCristalSpanStart = document.querySelector('.countExtraCristalSpanStart')
let countExtraCristalSpanEnd = document.querySelector('.countExtraCristalSpanEnd')

//Записываем на сайт
countExtraCristalSpanStart.textContent = chanceExtraCristal*100 + '%';
countExtraCristalSpanEnd.textContent = (chanceExtraCristal+0.01)*100 + '%';

buyUpgradesExtraCristalSpan.addEventListener('click', function() {
    //Получаем стоимость улучшения
    buyUpgradesExtraCristal = parseInt(localStorage.getItem('buyUpgradesExtraCristal'))
    //Получаем количество денег
    countMoney = parseInt(localStorage.getItem('countMoney'))
    //Проверяем что бы денег было больше,чем стоимость улучшения
    if (countMoney >= buyUpgradesExtraCristal) {
        // //От денег отнимаем стоимость улучшения
        // countMoney -= buyUpgradesExtraCristal;
        // buyUpgradesExtraCristal += 10;
        // //Записываем на сайт
        // countMoneySpan.textContent = countMoney;
        // //Сохраняем в бд
        // localStorage.setItem('countMoney', countMoney)
        setMoney(buyUpgradesExtraCristal)
        buyUpgradesCountExtraCristalSpan.textContent = buyUpgradesExtraCristal;
        localStorage.setItem('buyUpgradesExtraCristal', buyUpgradesExtraCristal)
        //Увеличиваем стоимость улучшения
        buyUpgradesExtraMoney += 10;
        //Записываем на сайт
        buyUpgradesCountExtraCristalSpan.textContent = buyUpgradesExtraCristal;
        //Записываем в бд
        localStorage.setItem('buyUpgradesExtraCristal', buyUpgradesExtraCristal)
        //Улучшаем шанс
        chanceExtraCristal += 0.01;
        chanceExtraCristalSpan.textContent = Math.floor(chanceExtraCristal * 100) + '%'
        //Записываем на сайт
        countExtraCristalSpanStart.textContent = Math.floor(chanceExtraCristal*100) + '%';
        countExtraCristalSpanEnd.textContent = Math.floor((chanceExtraCristal+0.01)*100) + '%';
        //Выводим шанс
        let percent = Math.floor(chanceExtraCristal * 100);
        // alert(`Шанс выпадения кристалла: ${percent}%`);
    } else {
        showMessageMoney();
    }
})


chanceExtraCristalSpan.textContent = chanceExtraCristal * 100 + '%'