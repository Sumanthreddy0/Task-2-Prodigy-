let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let hour = 0, minute = 0, second = 0, count = 0;
let timer = false;

startButton.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
stopButton.addEventListener('click', function () {
    timer = false;
});
resetButton.addEventListener('click', function () {
    timer = false;
    hour = 0; minute = 0; second = 0; count = 0;
    updateDisplay();
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) { second++; count = 0; }
        if (second == 60) { minute++; second = 0; }
        if (minute == 60) { hour++; minute = 0; second = 0; }
        updateDisplay();
        setTimeout(stopWatch, 10);
    }
}

function updateDisplay() {
    document.getElementById('hour').innerText = formatTime(hour);
    document.getElementById('minute').innerText = formatTime(minute);
    document.getElementById('second').innerText = formatTime(second);
    document.getElementById('count').innerText = formatTime(count);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
