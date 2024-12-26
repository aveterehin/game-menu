// Получаем элемент canvas и его контекст
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Создаём объект изображения для бобра
const beaverImage = new Image();
beaverImage.src = 'beaver.png'; // Путь к изображению бобра

// Позиция бобра
let beaverX = canvas.width / 2 - 32; // Центр по X
let beaverY = canvas.height / 2 - 32; // Центр по Y

// Функция для отрисовки бобра
function drawBeaver() {
    ctx.drawImage(beaverImage, beaverX, beaverY, 64, 64);
}

// Функция для воспроизведения звука выстрела
function playGunshot() {
    gunshotSound.currentTime = 0; // Обнуляем время для повторного воспроизведения
    gunshotSound.play();
}

// Функция обновления игры
function updateGame() {
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Отрисовываем бобра
    drawBeaver();

    // Здесь можно добавить логику игры

    // Повторный вызов updateGame
    requestAnimationFrame(updateGame);
}

// Запускаем игру после загрузки изображения
beaverImage.onload = function() {
    updateGame();
};
