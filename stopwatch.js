window.onload = function() {
    var seconds = 0;
    var milliseconds = 0;


    var appendMilliseconds = document.getElementById("milliseconds")
    var appendSeconds = document.getElementById("Seconds");

    var buttonStart = document.getElementById("button-Start");
    var buttonStop = document.getElementById("button-Stop");
    var buttonReset = document.getElementById("button-Reset");

    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick= function () {
        clearInterval(Interval);
};

buttonReset.onclick = function () {
    clearInterval(Interval);

    milliseconds =  0;
    seconds = 0;

    appendMilliseconds.innerHTML = "00";
    appendSeconds.innerHTML = "00";
};

function startTimer() {
    milliseconds++;

    if(milliseconds <= 9) {
        appendMilliseconds.innerHTML = "0" + milliseconds
    } else {
        appendMilliseconds.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
        seconds++;

        appendMilliseconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

        milliseconds = 0;
        appendMilliseconds.innerHTML = "00" ;
    }  
}
};