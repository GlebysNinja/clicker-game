let Greece = document.querySelector('.Greece')
let Scandinavia = document.querySelector('.Scandinavia')
let Egypt = document.querySelector('.Egypt')


let infoGreece = document.querySelector('.infoGreece')
let infoScandinavia = document.querySelector('.infoScandinavia')
let infoEgypt = document.querySelector('.infoEgypt')



Greece.addEventListener('click', function() {
    infoGreece.classList.toggle('hide')
    alert(2)
})

Scandinavia.addEventListener('click', function() {
    infoScandinavia.classList.toggle('hide')
})

Egypt.addEventListener('click', function() {
    infoEgypt.classList.toggle('hide')
})








