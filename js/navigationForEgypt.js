
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
        localStorage.setItem('lvlGods', 10)
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
        window.location.href = 'egypt.html';
        localStorage.setItem('countMoney', countMoney)
        localStorage.setItem('mythologyEgypt', 'true');
    }
    if (mythologyEgypt === 'true') {
        window.location.href = 'egypt.html';
    }
    if (godIsland.style.backgroundImage === 'url("images/backgroundIslandEgypt.png")') {

    }

    mapGame.classList.toggle('hide')
    console.log('Egypt')
})
