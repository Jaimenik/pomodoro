const timerDisplay = document.querySelector('.timer');
const pauseBtn = document.querySelector('.pause');

let seconds = 0;
let intervalId = null;
let isRunning = false;  // para saber si está corriendo o no
let isPaused = false;

function formatTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = secs % 60;
  return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    timerDisplay.textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

// Inicializamos el timer parado
timerDisplay.textContent = formatTime(seconds);
pauseBtn.textContent = 'START';

pauseBtn.addEventListener('click', () => {
  if (!isRunning) {
    // Empezar a contar
    startTimer();
    isRunning = true;
    isPaused = false;
    pauseBtn.textContent = 'PAUSE';
  } else if (!isPaused) {
    // Pausar
    stopTimer();
    isPaused = true;
    pauseBtn.textContent = 'PLAY';
  } else {
    // Reanudar
    startTimer();
    isPaused = false;
    pauseBtn.textContent = 'PAUSE';
  }
});


