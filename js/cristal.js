function setCristal(variable) {
    countCristal = parseInt(localStorage.getItem('countCristal'))
    countCristal -= variable
    countCristalSpan.textContent = countCristal;
    localStorage.setItem('countCristal', countCristal)
}