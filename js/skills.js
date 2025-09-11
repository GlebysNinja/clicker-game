localStorage.setItem('fire', 'false')
localStorage.setItem('toxic', 'false')
localStorage.setItem('lightning', 'false')
localStorage.setItem('tornado', 'false')
localStorage.setItem('darkness', 'false')
localStorage.setItem('invisibility', 'false')
localStorage.setItem('fireDamage', 1)
localStorage.setItem('toxicDamage', 3)
localStorage.setItem('lightningDamage', 5)
localStorage.setItem('tornadoDamage', 1)
localStorage.setItem('darknessDamage', 7)

localStorage.setItem('reloadFire', 'false')
localStorage.setItem('reloadToxic', 'false')
localStorage.setItem('reloadLightning', 'false')
localStorage.setItem('reloadTornado', 'false')
localStorage.setItem('reloadDarkness', 'false')
localStorage.setItem('reloadInvisibility', 'false')
// localStorage.setItem('invisibilityDamage', 0)


let fireDamage = parseInt(localStorage.getItem('fireDamage'))
let toxicDamage = parseInt(localStorage.getItem('toxicDamage'))
let lightningDamage = parseInt(localStorage.getItem('lightningDamage'))
let tornadoDamage = parseInt(localStorage.getItem('tornadoDamage'))
let darknessDamage = parseInt(localStorage.getItem('darknessDamage'))




let fire = localStorage.getItem('fire');
let toxic = localStorage.getItem('toxic')
let lightning = localStorage.getItem('lightning')
let tornado = localStorage.getItem('tornado')
let darkness = localStorage.getItem('darkness')
let invisibility = localStorage.getItem('invisibility')

let fireDiv = document.querySelector('.fire')
let toxicDiv = document.querySelector('.toxic')
let lightningDiv = document.querySelector('.lightning')
let tornadoDiv = document.querySelector('.tornado')
let darknessDiv = document.querySelector('.darkness')
let invisibilityDiv = document.querySelector('.invisibility')


let textFire = document.querySelector('.textFire')
let textToxic = document.querySelector('.textToxic')
let textLightning = document.querySelector('.textLightning')
let textTornado = document.querySelector('.textTornado')
let textDarkness = document.querySelector('.textDarkness')
let textInvisibility = document.querySelector('.textInvisibility')

let imgFire = document.querySelector('.imgFire')
let imgToxic = document.querySelector('.imgToxic')
let imgLightning = document.querySelector('.imgLightning')
let imgTornado = document.querySelector('.imgTornado')
let imgDarkness = document.querySelector('.imgDarkness')
let imgInvisibility = document.querySelector('.imgInvisibility')

let priceFire = 200;
let priceToxic = 400;
let priceLightning = 600;
let priceTornado = 800;
let priceDarkness = 1000;
let priceInvisibility = 1200;

if (fire === 'false') {
    textFire.textContent = 'Заблокировано. Цена: 200'

} else {
    textFire.textContent = 'Навык: Огонь. Урон: 1/s. Время: 5s';
}

if (toxic === 'false') {
    textToxic.textContent = 'Заблокировано. Цена: 400'
} else {
    textToxic.textContent = 'Навык: Яд. Урон: 3/s. Время: 7s';
    imgToxic.src = '';
}

if (lightning === 'false') {
    textLightning.textContent = 'Заблокировано. Цена: 600'
} else {
    textLightning.textContent = 'Навык: Молния. Урон: 5. Время: 1s';
    imgLightning.src = '';
}

if (tornado === 'false') {
    textTornado.textContent = 'Заблокировано. Цена: 800'
} else {
    textTornado.textContent = 'Навык: Торнадо. Урон: 1/s. Время: 5s';
}

if (darkness === 'false') {
    textDarkness.textContent = 'Заблокировано. Цена: 1000'
} else {
    textDarkness.textContent = 'Навык: Тьма. Урон: 7/s. Время: 7s';
    imgDarkness.src = '';
}

if (invisibility === 'false') {
    textInvisibility.textContent = 'Заблокировано. Цена: 1200'
} else {
    textInvisibility.textContent = 'Навык: Невидимость.';
    imgInvisibility.src = '';
}


fireDiv.addEventListener('click', function () {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    fire = localStorage.getItem('fire')
    if (fire === 'false' && countCristal >= 200) {
        imgFire.remove();
        setCristal(priceFire)
        textFire.textContent = 'Навык: Огонь. Урон: 1/s';
        localStorage.setItem('fire', 'true')
    }
    else if (fire === 'true') {
        imgFire.remove();
        let reloadFire = localStorage.getItem('reloadFire')
        if (reloadFire === 'false') {
            localStorage.setItem('reloadFire', 'true')
            reloadFire = localStorage.getItem('reloadFire')
            let secondsReloadFire = 9;
            fireDiv.style.background =
                'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("images/fire.png")';
            fireDiv.style.backgroundSize = "cover";
            fireDiv.style.backgroundPosition = "center";

            let timerReloadFire = setInterval(() => {
                fireDiv.textContent = secondsReloadFire;
                secondsReloadFire--;

                if (secondsReloadFire < 0) {
                    clearInterval(timerReloadFire);
                    fireDiv.style.background =
                        'url("images/fire.png")';
                    fireDiv.style.backgroundSize = "cover";
                    fireDiv.style.backgroundPosition = "center";
                    fireDiv.textContent = '';
                    localStorage.setItem('reloadFire', 'false')

                }
            }, 1000);
            fireDamage = parseInt(localStorage.getItem('fireDamage'))
            let secondsFire = 5;

            let timerFire = setInterval(() => {
                godHP = parseInt(localStorage.getItem(`GodHP`));
                godHP -= fireDamage;
                hpText.textContent = godHP + ' ';
                localStorage.setItem('GodHP', godHP)
                secondsFire--;
                if (secondsFire === 0) {
                    clearInterval(timerFire);

                }
            }, 1000);
        }
    }
    else if (countMoney < 100) {
        showMessageMoney()
    }
});


toxicDiv.addEventListener('click', function () {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    toxic = localStorage.getItem('toxic')
    if (toxic === 'false' && countCristal >= 400) {
        imgToxic.remove();
        setCristal(priceToxic)
        textToxic.textContent = 'Навык: Яд. Урон: 3/s';
        localStorage.setItem('toxic', 'true')
    }
    else if (toxic === 'true') {
        imgToxic.remove();
        let reloadToxic = localStorage.getItem('reloadToxic')
        if (reloadToxic === 'false') {
            localStorage.setItem('reloadToxic', 'true')
            reloadToxic = localStorage.getItem('reloadToxic')
            let secondsReloadToxic = 12;
            toxicDiv.style.background =
                'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("images/toxic.png")';
            toxicDiv.style.backgroundSize = "cover";
            toxicDiv.style.backgroundPosition = "center";

            let timerReloadToxic = setInterval(() => {
                toxicDiv.textContent = secondsReloadToxic;
                secondsReloadToxic--;

                if (secondsReloadToxic < 0) {
                    clearInterval(timerReloadToxic);
                    toxicDiv.style.background =
                        'url("images/toxic.png")';
                    toxicDiv.style.backgroundSize = "cover";
                    toxicDiv.style.backgroundPosition = "center";
                    toxicDiv.textContent = '';
                    localStorage.setItem('reloadToxic', 'false')
                }
            }, 1000);

            toxicDamage = parseInt(localStorage.getItem('toxicDamage'))
            let secondsToxic = 7;

            let timerToxic = setInterval(() => {
                godHP = parseInt(localStorage.getItem(`GodHP`));
                godHP -= toxicDamage;
                hpText.textContent = godHP + ' ';
                localStorage.setItem('GodHP', godHP)
                secondsToxic--;
                if (secondsToxic === 0) {
                    clearInterval(timerToxic);
                }
            }, 1000);
        }
    }
    else if (countMoney < 100) {
        showMessageMoney()
    }
});


lightningDiv.addEventListener('click', function () {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    lightning = localStorage.getItem('lightning')
    if (lightning === 'false' && countCristal >= 600) {
        imgLightning.remove();
        setCristal(priceLightning)
        textLightning.textContent = 'Навык: Молния. Урон: 5';
        localStorage.setItem('lightning', 'true')
    }
    else if (lightning === 'true') {
        imgLightning.remove();
        let reloadLightning = localStorage.getItem('reloadLightning')
        if (reloadLightning === 'false') {
            localStorage.setItem('reloadLightning', 'true')
            reloadLightning = localStorage.getItem('reloadLightning')
            let secondsReloadLightning = 5;
            lightningDiv.style.background =
                'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("images/lightning.png")';
            lightningDiv.style.backgroundSize = "cover";
            lightningDiv.style.backgroundPosition = "center";

            let timerReloadLightning = setInterval(() => {
                lightningDiv.textContent = secondsReloadLightning;
                secondsReloadLightning--;

                if (secondsReloadLightning < 0) {
                    clearInterval(timerReloadLightning);
                    lightningDiv.style.background =
                        'url("images/lightning.png")';
                    lightningDiv.style.backgroundSize = "cover";
                    lightningDiv.style.backgroundPosition = "center";
                    lightningDiv.textContent = '';
                    localStorage.setItem('reloadLightning', 'false')
                }
            }, 1000);

            lightningDamage = parseInt(localStorage.getItem('lightningDamage'))
            godHP = parseInt(localStorage.getItem(`GodHP`));
            godHP -= lightningDamage;
            hpText.textContent = godHP + ' ';
            localStorage.setItem('GodHP', godHP)
        }
    }
    else if (countMoney < 100) {
        showMessageMoney()
    }
});


tornadoDiv.addEventListener('click', function () {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    tornado = localStorage.getItem('tornado')
    if (tornado === 'false' && countCristal >= 800) {
        imgTornado.remove();
        setCristal(priceTornado)
        textTornado.textContent = 'Навык: Торнадо. Урон: 4/s';
        localStorage.setItem('tornado', 'true')
    }
    else if (tornado === 'true') {
        imgTornado.remove();
        let reloadTornado = localStorage.getItem('reloadTornado')
        if (reloadTornado === 'false') {
            localStorage.setItem('reloadTornado', 'true')
            reloadTornado = localStorage.getItem('reloadTornado')
            let secondsReloadTornado = 8;
            tornadoDiv.style.background =
                'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("images/tornado.png")';
            tornadoDiv.style.backgroundSize = "cover";
            tornadoDiv.style.backgroundPosition = "center";

            let timerReloadTornado = setInterval(() => {
                tornadoDiv.textContent = secondsReloadTornado;
                secondsReloadTornado--;

                if (secondsReloadTornado < 0) {
                    clearInterval(timerReloadTornado);
                    tornadoDiv.style.background =
                        'url("images/tornado.png")';
                    tornadoDiv.style.backgroundSize = "cover";
                    tornadoDiv.style.backgroundPosition = "center";
                    tornadoDiv.textContent = '';
                    localStorage.setItem('reloadTornado', 'false')
                }
            }, 1000);

            tornadoDamage = parseInt(localStorage.getItem('tornadoDamage'))
            let secondsTornado = 15;

            let timerTornado = setInterval(() => {
                godHP = parseInt(localStorage.getItem(`GodHP`));
                godHP -= tornadoDamage;
                hpText.textContent = godHP + ' ';
                localStorage.setItem('GodHP', godHP)
                secondsTornado--;
                if (secondsTornado === 0) {
                    clearInterval(timerTornado);
                }
            }, 300);
        }
    }

    else if (countMoney < 100) {
        showMessageMoney()
    }
});




darknessDiv.addEventListener('click', function () {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    darkness = localStorage.getItem('darkness')
    if (darkness === 'false' && countCristal >= 1000) {
        imgDarkness.remove();
        setCristal(priceDarkness)
        textDarkness.textContent = 'Навык: Тьма. Урон: 7/s';
        localStorage.setItem('darkness', 'true')
    }
    else if (darkness === 'true') {
        imgDarkness.remove();
        let reloadDarkness = localStorage.getItem('reloadDarkness')
        if (reloadDarkness === 'false') {
            localStorage.setItem('reloadDarkness', 'true')
            reloadDarkness = localStorage.getItem('reloadDarkness')
            let secondsReloadDarkness = 15;
            darknessDiv.style.background =
                'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("images/darkness.png")';
            darknessDiv.style.backgroundSize = "cover";
            darknessDiv.style.backgroundPosition = "center";

            let timerReloadDarkness = setInterval(() => {
                darknessDiv.textContent = secondsReloadDarkness;
                secondsReloadDarkness--;

                if (secondsReloadDarkness < 0) {
                    clearInterval(timerReloadDarkness);
                    darknessDiv.style.background =
                        'url("images/darkness.png")';
                    darknessDiv.style.backgroundSize = "cover";
                    darknessDiv.style.backgroundPosition = "center";
                    darknessDiv.textContent = '';
                    localStorage.setItem('reloadDarkness', 'false')
                }
            }, 1000);

            darknessDamage = parseInt(localStorage.getItem('darknessDamage'))
            let secondsToxic = 7;

            let timerDarkness = setInterval(() => {
                godHP = parseInt(localStorage.getItem(`GodHP`));
                godHP -= darknessDamage;
                hpText.textContent = godHP + ' ';
                localStorage.setItem('GodHP', godHP)
                secondsToxic--;
                if (secondsToxic === 0) {
                    clearInterval(timerDarkness);
                }
            }, 1000);
        }
    }
    else if (countMoney < 100) {
        showMessageMoney()
    }
});


invisibilityDiv.addEventListener('click', function () {
    countMoney = parseInt(localStorage.getItem('countMoney'))
    invisibility = localStorage.getItem('invisibility')
    if (invisibility === 'false' && countCristal >= 1200) {
        imgInvisibility.remove();
        setCristal(priceInvisibility)
        textInvisibility.textContent = 'Навык: Невидимость. Урон: 4/s';
        localStorage.setItem('invisibility', 'true')
    }
    else if (countMoney < 100) {
        showMessageMoney()
    }
});


