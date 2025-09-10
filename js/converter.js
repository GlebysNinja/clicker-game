
let valueConverter = document.querySelector('.valueConverter')
let inputConverter = document.querySelector('.inputConverter')

inputConverter.addEventListener('input', function() {
    let resultConvert = parseInt(inputConverter.value) * 30
    valueConverter.textContent = resultConvert
})

let buttonConvert = document.querySelector('.buttonConvert')

buttonConvert.addEventListener('click', function() {
    let resultConvert = parseInt(inputConverter.value) * 30
    let countCristalConvert = parseInt(inputConverter.value)
    console.log(countCristalConvert)
    console.log(resultConvert)
    countCristal = parseInt(localStorage.getItem('countCristal'))
    countMoney = parseInt(localStorage.getItem('countMoney'))

    if (countCristalConvert <=  countCristal) {
        countMoney += resultConvert
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countMoney', countMoney)
        countCristal -= countCristalConvert
        countCristalSpan.textContent = countCristal;
        localStorage.setItem('countCristal', countCristal)
    }
})
