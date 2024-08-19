let timer;

document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
    const input = document.getElementById('timeInput');
    let time = parseInt(input.value);

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    document.getElementById('timerDisplay').textContent = time;
    clearInterval(timer);

    timer = setInterval(() => {
        time--;
        document.getElementById('timerDisplay').textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}
