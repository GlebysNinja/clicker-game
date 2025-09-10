
function showMessageRebirth() {
    let el = document.querySelector(".alertRebirth");
    el.classList.add("show");

    setTimeout(() => {
        el.classList.remove("show");
    }, 1500);
}