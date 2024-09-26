let stopwatchTimer;
let elapsedTime = 0;

function updateStopwatchDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    document.getElementById("stopwatch").textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("startStopwatchButton").addEventListener("click", function() {
    if (!stopwatchTimer) {
        stopwatchTimer = setInterval(() => {
            elapsedTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
});

document.getElementById("stopStopwatchButton").addEventListener("click", function() {
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
});

document.getElementById("resetStopwatchButton").addEventListener("click", function() {
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
    elapsedTime = 0; // Reset elapsed time
    updateStopwatchDisplay();
});

updateStopwatchDisplay(); // Initial display
