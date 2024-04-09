function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(interval);
            alert("Time is up!");
        }
    }, 1000);
}

window.onload = function () {
    var submitButton = document.getElementById('submit');
    var thirtyMinutes = 60 * 30;
    var display = document.querySelector('#time');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        startTimer(thirtyMinutes, display);
    });
};