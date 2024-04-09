function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Time is up!");
        }
    }, 1000);
}

window.onload = function () {
    var submitButton = document.getElementById('submit');
    var injureInput = document.getElementById('injure');
    var display = document.querySelector('#time');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        var injureValue = parseInt(injureInput.value, 10);
        var duration;
        //set the timer according to severity of the injure
        switch (injureValue) {
            case 1:
                duration = 60 * 30; // 30 minutes
                break;
            case 2:
                duration = 60 * 25; // 25 minutes
                break;
            case 3:
                duration = 60 * 20; // 20 minutes
                break;
            case 4:
                duration = 60 * 15; // 15 minutes
                break;
            case 5:
                duration = 60 * 10; // 10 minutes
                break;
            default:
                alert("Invalid injury severity. Please enter a number between 1 and 5.");
                return;
        }

        startTimer(duration, display);
    });
};