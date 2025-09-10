// Включение звука на сайте
document.addEventListener('click', () => {
    const audio = document.getElementById('bg-music');
    audio.muted = false;  // включаем звук
    audio.play().catch((e) => {
        console.log("Воспроизведение не удалось:", e);
    });
}, { once: true });