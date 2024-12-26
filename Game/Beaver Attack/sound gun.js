// Загрузка звуков
const gunshotSound = new Audio('sounds/gunshot.mp3');

// Функция для воспроизведения звука выстрела
function playGunshot() {
    gunshotSound.currentTime = 0; // Обнуляем время для повторного воспроизведения
    gunshotSound.play();
}
