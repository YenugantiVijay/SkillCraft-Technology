const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const millis = date.getUTCMilliseconds().toString().padStart(3, "0");
  return `${minutes}:${seconds}.${millis}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10); // Update every 10 milliseconds for better millisecond accuracy
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00.000";
}

startButton.addEventListener("click", function () {
  if (!timerInterval) {
    startTimer();
  }
});

pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
