class Patient {
    constructor(name, severity) {
        this.name = name;
        this.severity = severity;
    }
}

//priority queue class to store each patients turn in the line
class PriorityQueue {
    constructor() {
        this.patients = [];
        this.totalTime = 0; // Total time for all patients in the queue
    }

    enqueue(patient) {
        this.totalTime += 10 * 60; // Add 10 minutes for each patient

        if (this.isEmpty()) {
            this.patients.push(patient);
        } else {
            let added = false;
            for (let i = 0; i < this.patients.length; i++) {
                //check the priority to add patients to the queue according to their severity
                if (patient.severity > this.patients[i].severity) {
                    this.patients.splice(i, 0, patient);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.patients.push(patient);
            }
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.totalTime -= 10 * 60; // Subtract 10 minutes when a patient is removed
        }
        return this.patients.shift();
    }

    isEmpty() {
        return this.patients.length === 0;
    }

    peek() {
        return this.patients[0];
    }

    printQueue() {
        console.log(this.patients.map(patient => `${patient.name} (Severity: ${patient.severity})`));
    }

    getTimeForPatient() {
        return this.totalTime;
    }
}

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
    var nameInput = document.getElementById('name'); 
    var injureInput = document.getElementById('injure');
    var display = document.querySelector('#time');
    var queue = new PriorityQueue(); // Create a new queue

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        var name = 'Juan';
        var injureValue = parseInt(injureInput.value, 10);
        var duration;

        if (injureValue >= 1 && injureValue <= 5) {
            var patient = new Patient(name, injureValue);
            queue.enqueue(patient);
            duration = queue.getTimeForPatient();
            startTimer(duration, display);
        } else {
            alert("Invalid injury severity. Please enter a number between 1 and 5.");
        }
    });
};