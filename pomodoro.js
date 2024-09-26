let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("startButton").addEventListener("click", function() {
    if (!timer) {
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                alert("Time's up!");
                timeLeft = 25 * 60; // Reset timer
                updateTimerDisplay();
            }
        }, 1000);
    }
});

document.getElementById("stopButton").addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
});

document.getElementById("resetButton").addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60; // Reset timer
    updateTimerDisplay();
});

updateTimerDisplay(); // Initial display
