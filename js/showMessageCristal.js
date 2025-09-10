function showMessageCristal() {
    let el = document.querySelector(".notEnoughCristal");
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 1500);
}
