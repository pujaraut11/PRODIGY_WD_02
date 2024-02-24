let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

function startStopwatch() {
    if (!timer) {
        timer = setInterval(updateStopwatch, 1000);
        document.querySelector('.start').textContent = 'Pause';
    } else {
        clearInterval(timer);
        timer = null;
        document.querySelector('.start').textContent = 'Resume';
    }
}

function stopStopwatch() {
    clearInterval(timer);
    timer = null;
    document.querySelector('.start').textContent = 'Start';
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCounter = 1;
    updateDisplay();
    document.querySelector('.start').textContent = 'Start';
    clearLapList();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

function recordLap() {
    const lapList = document.getElementById('lapList');
    const lapTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCounter++;
}

function clearLapList() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
}
