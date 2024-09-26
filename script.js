// Variables for Pomodoro Timer
let workTime = 25 * 60; // 25 minutes
let breakTime = 5 * 60; // 5 minutes
let isWorking = true;
let pomodoroInterval;

// Variables for Stopwatch
let stopwatchInterval;
let elapsedTime = 0;

// DOM Elements
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const hydrationButton = document.getElementById('hydrationButton');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startStopwatchButton = document.getElementById('startStopwatchButton');
const stopStopwatchButton = document.getElementById('stopStopwatchButton');
const resetStopwatchButton = document.getElementById('resetStopwatchButton');
const motivationalQuotesButton = document.getElementById('motivationalQuotesButton');
const postureCheckButton = document.getElementById('postureCheckButton');
const musicPlayer = document.getElementById('musicPlayer');
const musicToggleButton = document.getElementById('musicToggleButton');

// Pomodoro Timer Functions
function updateTimer() {
    const minutes = Math.floor(workTime / 60);
    const seconds = workTime % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (workTime <= 0) {
        isWorking = !isWorking;
        workTime = isWorking ? 25 * 60 : 5 * 60;
        alert(isWorking ? "Time to work!" : "Time for a break!");
    }
    workTime--;
}

startButton.addEventListener('click', function() {
    clearInterval(pomodoroInterval);
    pomodoroInterval = setInterval(updateTimer, 1000);
});

resetButton.addEventListener('click', function() {
    clearInterval(pomodoroInterval);
    workTime = 25 * 60;
    timerDisplay.textContent = "25:00";
});

// Task Planner Functions
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.classList.add('task-item');

        // Add a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            listItem.classList.add('fade-out');
            setTimeout(() => {
                taskList.removeChild(listItem);
            }, 300);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Hydration Reminder Function
hydrationButton.addEventListener('click', function() {
    alert("Don't forget to drink water! Stay hydrated!");
});

// Stopwatch Functions
startStopwatchButton.addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(updateStopwatch, 1000);
});

stopStopwatchButton.addEventListener('click', function() {
    clearInterval(stopwatchInterval);
});

resetStopwatchButton.addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    stopwatchDisplay.textContent = "00:00:00";
});

function updateStopwatch() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
    stopwatchDisplay.textContent = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Posture Checker Function
postureCheckButton.addEventListener('click', function() {
    alert("Check your posture! Sit up straight and relax your shoulders.");
});

// Music Player Functions
let isPlaying = false;

musicToggleButton.addEventListener('click', function() {
    if (isPlaying) {
        musicPlayer.pause();
        musicToggleButton.textContent = 'Play Music';
    } else {
        musicPlayer.play();
        musicToggleButton.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
});

// Add animations to tools (example)
document.querySelectorAll('.tool-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('animate');
    });
    box.addEventListener('mouseleave', () => {
        box.classList.remove('animate');
    });
});


// Name Input Functionality
const nameInput = document.getElementById('nameInput');
const setNameButton = document.getElementById('setNameButton');

setNameButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name) {
        document.getElementById('userName').textContent = name;
        nameInput.value = ''; // Clear input field
    } else {
        alert('Please enter a name.');
    }
});
