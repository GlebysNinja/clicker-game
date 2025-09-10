
//Перебираем и переключаем улучшения
const upgrades = [
    document.querySelector('.upgrades1'),
    document.querySelector('.upgrades2'),
    document.querySelector('.upgrades3'),
    document.querySelector('.upgrades4'),
    document.querySelector('.upgrades5'),
    document.querySelector('.upgrades6'),
    document.querySelector('.upgrades7'),
];

const tabs = [
    document.querySelector('.tab1'),
    document.querySelector('.tab2'),
    document.querySelector('.tab3'),
    document.querySelector('.tab4'),
    document.querySelector('.tab5'),
    document.querySelector('.tab6'),
    document.querySelector('.tab7'),
];

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        upgrades.forEach((upgrade, i) => {
            if (i === index) {
                upgrade.classList.remove('hide');
            } else {
                upgrade.classList.add('hide');
            }
        });
    });
});