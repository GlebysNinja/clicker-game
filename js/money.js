function setMoney(variable) {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    countMoney -= variable
    countMoneySpan.textContent = countMoney;
    localStorage.setItem('countMoney', countMoney)
}