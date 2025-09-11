//Устанавливаем количество смертей в хранилище и на сайт
localStorage.setItem('countDeaths', 0)
let countDeaths = parseInt(localStorage.getItem('countDeaths'))
let countDeathsSpan = document.querySelector('.countDeaths')
countDeathsSpan.textContent = countDeaths;
// localStorage.setItem('countMoney', 0)