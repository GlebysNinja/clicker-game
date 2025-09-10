function showMessageMoney() {
    let el = document.querySelector(".notEnoughCoins");
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 1500);
}
