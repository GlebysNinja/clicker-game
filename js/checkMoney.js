
function checkMoney() {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    if (countMoney >= 1000 && countMoney < 1_000_000) {
        countMoneySpan.textContent = (countMoney / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else if (countMoney >= 1_000_000 && countMoney < 1_000_000_000) {
        countMoneySpan.textContent = (countMoney / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (countMoney >= 1_000_000_000) {
        countMoneySpan.textContent = (countMoney / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
}