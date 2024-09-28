let score = 0;
let timeLeft = 10;
let gameActive = false;
let timerInterval;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickButton = document.getElementById('clickButton');
const startButton = document.getElementById('startButton');

clickButton.addEventListener('click', () => {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }
});

startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    timeLeft = 10;
    gameActive = true;

    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    clickButton.disabled = false;

    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(timerInterval);
    gameActive = false;
    clickButton.disabled = true;
    alert(`Game Over! Your score is ${score}`);
}
