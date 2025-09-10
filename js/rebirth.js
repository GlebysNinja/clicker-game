let buttonRebirth = document.querySelector('.buttonRebirth')
localStorage.setItem('priceRebirth', 200)
let priceRebirth = parseInt(localStorage.getItem('priceRebirth'))
localStorage.setItem('countRebirth', 0)

// localStorage.setItem('coinsFromMobStart', 10)
// localStorage.setItem('coinsFromMobEnd', 15)

let coinsFromMobStart = parseInt(localStorage.getItem('coinsFromMobStart'))
let coinsFromMobEnd = parseInt(localStorage.getItem('coinsFromMobEnd'))

let coinsFromMobStartSpan = document.querySelector('.coinsFromMobStart')
let coinsFromMobEndSpan = document.querySelector('.coinsFromMobEnd')

coinsFromMobStartSpan.textContent = coinsFromMobStart
coinsFromMobEndSpan.textContent = coinsFromMobEnd




let clickDamageStart = parseInt(localStorage.getItem('clickDamage'))
let clickDamageEnd = parseInt(localStorage.getItem('clickDamage'))

let clickDamageStartSpan = document.querySelector('.clickDamageStart')
let clickDamageEndSpan = document.querySelector('.clickDamageEnd')

clickDamageStartSpan.textContent = clickDamageStart;
clickDamageEndSpan.textContent = clickDamageEnd + 10;




localStorage.setItem('startingCoinsStart', 0)
localStorage.setItem('startingCoinsEnd', 10)

let startingCoinsStart = parseInt(localStorage.getItem('startingCoinsStart'))
let startingCoinsEnd = parseInt(localStorage.getItem('startingCoinsEnd'))

let startingCoinsStartSpan = document.querySelector('.startingCoinsStart')
let startingCoinsEndSpan = document.querySelector('.startingCoinsEnd')

startingCoinsStartSpan.textContent = startingCoinsStart
startingCoinsEndSpan.textContent = startingCoinsEnd

buttonRebirth.addEventListener('click', function() {
    let countRebirth = parseInt(localStorage.getItem('countRebirth'))
    countMoney = parseInt(localStorage.getItem('countMoney'))
    priceRebirth = parseInt(localStorage.getItem('priceRebirth'))
    console.log(countMoney)
    if (countMoney >= priceRebirth) {
        localStorage.setItem('priceRebirth', priceRebirth + 200)
        priceRebirth = parseInt(localStorage.getItem('priceRebirth'))
        console.log(priceRebirth)
        console.log('Rebirth')
        localStorage.setItem('countMoney', 0)
        countMoney = localStorage.getItem('countMoney')
        countMoneySpan = document.querySelector('.countMoney')
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countCristal', 0)
        countCristal = localStorage.getItem('countCristal')
        countCristalSpan = document.querySelector('.countCristal')
        countCristalSpan.textContent = countCristal;
        showMessageRebirth()
        countRebirth += 1;
        localStorage.setItem('countRebirth', countRebirth)


        
        clickDamageStart = (parseInt(localStorage.getItem('clickDamage')) + 10)
        clickDamageEnd = parseInt(localStorage.getItem('clickDamage'))

        clickDamageStartSpan = document.querySelector('.clickDamageStart')
        clickDamageEndSpan = document.querySelector('.clickDamageEnd')

        clickDamageStartSpan.textContent = clickDamageStart;
        clickDamageEndSpan.textContent = clickDamageEnd + 20;

        localStorage.setItem('clickDamage', clickDamageStart)




        
        
        startingCoinsStart = parseInt(localStorage.getItem('startingCoinsStart'))
        startingCoinsEnd = parseInt(localStorage.getItem('startingCoinsEnd'))
        
        startingCoinsStart += 10;
        startingCoinsEnd += 10;
        
        startingCoinsStartSpan.textContent = startingCoinsStart
        startingCoinsEndSpan.textContent = startingCoinsEnd
        
        countMoney = parseInt(localStorage.getItem('countMoney'));
        countMoney += startingCoinsStart;
        countMoneySpan.textContent = countMoney;
        localStorage.setItem('countMoney', countMoney);
        
        localStorage.setItem('startingCoinsStart', startingCoinsStart)
        localStorage.setItem('startingCoinsEnd', startingCoinsEnd)
        
        
        coinsFromMobStart = parseInt(localStorage.getItem('coinsFromMobStart'))
        coinsFromMobEnd = parseInt(localStorage.getItem('coinsFromMobEnd'))
        
        coinsFromMobStart += 5;
        coinsFromMobEnd += 5;
        
        coinsFromMobStartSpan.textContent = coinsFromMobStart
        coinsFromMobEndSpan.textContent = coinsFromMobEnd   
        
        localStorage.setItem('coinsFromMobStart', coinsFromMobStart)
        localStorage.setItem('coinsFromMobEnd', coinsFromMobEnd)
        
        
        
        
        
        
        // localStorage.setItem('clickDamage', 1)
        localStorage.setItem('buyUpgradesDamage', 10)
        

        buyUpgradesDamage = parseInt(localStorage.getItem('buyUpgradesDamage'))
        let clickDamage = parseInt(localStorage.getItem('clickDamage'))
        
        
        countDamageSpanStart = document.querySelector('.countDamageSpanStart')
        countDamageSpanEnd = document.querySelector('.countDamageSpanEnd')
        buyUpgradesCountDamageSpan = document.querySelector('.buyUpgradesCountDamageSpan')
        

        buyUpgradesCountDamageSpan.textContent = buyUpgradesDamage;
        countDamageSpanStart.textContent = clickDamage;
        countDamageSpanEnd.textContent = clickDamage+1;





        localStorage.setItem('earnCoin', 1)
        localStorage.setItem('buyUpgradesEarnCoin', 10)

        
        buyUpgradesEarnCoin = parseInt(localStorage.getItem('buyUpgradesEarnCoin'))
        earnCoin = parseInt(localStorage.getItem('earnCoin'))


        countEarnCoinSpanStart = document.querySelector('.countEarnCoinSpanStart')
        countEarnCoinSpanEnd = document.querySelector('.countEarnCoinSpanEnd')


        countEarnCoinSpanStart.textContent = earnCoin;
        countEarnCoinSpanEnd.textContent = earnCoin+1;

        buyUpgradesCountEarnCoinSpan = document.querySelector('.buyUpgradesCountEarnCoinSpan')
        buyUpgradesCountEarnCoinSpan.textContent = buyUpgradesEarnCoin





        localStorage.setItem('chanceCritDamage', 0.01)
        localStorage.setItem('buyUpgradesChanceCritDamage', 10)


        chanceCritDamage = parseFloat(localStorage.getItem('chanceCritDamage'))
        buyUpgradesChanceCritDamage = parseFloat(localStorage.getItem('buyUpgradesChanceCritDamage')) 


        countChanceCritDamageStart = document.querySelector('.countChanceCritDamageStart')
        countChanceCritDamageEnd = document.querySelector('.countChanceCritDamageEnd')
        buyUpgradesCountChanceCritDamageSpan = document.querySelector('.buyUpgradesCountChanceCritDamageSpan')


        countChanceCritDamageStart.textContent = chanceCritDamage * 100 + '%';
        countChanceCritDamageEnd.textContent = (chanceCritDamage + 0.01) * 100 + '%';
        buyUpgradesCountChanceCritDamageSpan.textContent = buyUpgradesChanceCritDamage

        
        localStorage.setItem('chanceExtraCristal', 0.01)
        localStorage.setItem('buyUpgradesExtraCristal', 10)
        
        
        chanceExtraCristal = parseFloat(localStorage.getItem('chanceExtraCristal'))
        buyUpgradesExtraCristal = parseInt(localStorage.getItem('buyUpgradesExtraCristal'))
        

        countExtraCristalSpanStart = document.querySelector('.countExtraCristalSpanStart')
        countExtraCristalSpanEnd = document.querySelector('.countExtraCristalSpanEnd')


        countExtraCristalSpanStart.textContent = chanceExtraCristal*100 + '%';
        countExtraCristalSpanEnd.textContent = (chanceExtraCristal+0.01)*100 + '%';
        buyUpgradesCountExtraCristalSpan = document.querySelector('.buyUpgradesCountExtraCristalSpan')
        buyUpgradesCountExtraCristalSpan.textContent = buyUpgradesExtraCristal;





        countCrystalFallSpanStart = document.querySelector('.countCrystalFallSpanStart')
        countCrystalFallSpanEnd = document.querySelector('.countCrystalFallSpanEnd')


        localStorage.setItem('chanceFallCristal', 1)
        localStorage.setItem('buyUpgradesCrystalFall', 10)


        chanceFallCristal = parseFloat(localStorage.getItem('chanceFallCristal'))
        buyUpgradesCrystalFall = parseInt(localStorage.getItem('buyUpgradesCrystalFall'))


        countCrystalFallSpanStart.textContent = chanceFallCristal*100 + '%'
        countCrystalFallSpanEnd.textContent = (chanceFallCristal+0.01)*100 + '%'
        buyUpgradesCountCrystalFall = document.querySelector('.buyUpgradesCountCrystalFall')
        buyUpgradesCountCrystalFall.textContent = buyUpgradesCrystalFall;
        


        
        
        localStorage.setItem('chanceExtraMoney', 0.01)
        localStorage.setItem('buyUpgradesExtraMoney', 10)
        
        
        chanceExtraMoney = parseFloat(localStorage.getItem('chanceExtraMoney'))
        buyUpgradesExtraMoney = parseInt(localStorage.getItem('buyUpgradesExtraMoney'))

        
        countExtraMoneySpanStart = document.querySelector('.countExtraMoneySpanStart')
        countExtraMoneySpanEnd = document.querySelector('.countExtraMoneySpanEnd')
        buyUpgradesCountExtraMoneySpan = document.querySelector('.buyUpgradesCountExtraMoneySpan')
        buyUpgradesCountExtraMoneySpan.textContent = buyUpgradesExtraMoney


        countExtraMoneySpanStart.textContent = Math.floor(chanceExtraMoney*100) + '%';
        countExtraMoneySpanEnd.textContent = Math.floor((chanceExtraMoney+0.01)*100) + '%';





        localStorage.setItem('critDamage', 1)
        localStorage.setItem('buyUpgradesCritDamage', 10)

        
        critDamage = parseInt(localStorage.getItem('critDamage'))
        buyUpgradesCritDamage = parseInt(localStorage.getItem('buyUpgradesCritDamage'))
        
          
        countCritDamageStart = document.querySelector('.countCritDamageStart')
        countCritDamageEnd = document.querySelector('.countCritDamageEnd')
        buyUpgradesCountCritDamageSpan = document.querySelector('.buyUpgradesCountCritDamageSpan')
        buyUpgradesCountCritDamageSpan.textContent = buyUpgradesCritDamage;


        countCritDamageStart.textContent = critDamage;
        countCritDamageEnd.textContent = critDamage+2;



    }
    else {
        showMessageMoney()
    }
})










