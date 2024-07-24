// Visual variables
const documentBody = document.body;

// Displayer variables
const headTitle = document.getElementById('head-title');
const timerTitle = document.getElementById('main-header');
const timerDisplay = document.getElementById('time-display');

// Timer Selection variables
const typeSession = document.getElementById('session-button');
const typeRest = document.getElementById('rest-button');
const typeBreak = document.getElementById('break-button');

// Button variables
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');

// Timer types object
const selectType = {
    sessionTimer: {
        type: "Session",
        accentColor: "var(--clr-red)",
        timerValue: 1500000,
    },

    restTimer: {
        type: "Rest",
        accentColor: "var(--clr-orange)",
        timerValue: 300000,
    },

    breakTimer: {
        type: "Break",
        accentColor: "var(--clr-green)",
        timerValue: 1800000,
    },
}

// Conditional variables
let timerType = 'session';
let isRunning = false;
let confirmExit = false;
let timerSpan = selectType.sessionTimer.timerValue; // 1 500 000 miliseconds
timerDisplay.textContent = `${timerSpan / (1000 * 60)}:00`;

// Timer variables
let startTime = Date.now() + timerSpan; // Output = 1 500 000 ms
let timeLeft = timerSpan;
let timerInterval = null;


// Functions
function playTimer() {
    timeLeft = startTime - Date.now(); // Decreased the time (Constantly running)

    if(timeLeft < 0){

        clearInterval(timerInterval);
        timerDisplay.textContent = "TIME'S UP";
        alert(`${timerSpan / (1000 * 60)} minutes is over!`);
        return;
    }

    const minutesLeft = Math.floor(timeLeft / (1000 * 60)) % 60;
    const secondsLeft = Math.round(timeLeft / 1000)% 60;

    console.log(`${minutesLeft} : ${secondsLeft}`);
    timerDisplay.textContent = `${minutesLeft}:${singleDigitHandler(secondsLeft)}`;
}

function singleDigitHandler(number) {

    if(String(number).length<=1) {
        return `0${number}`;
    }
    else{
        return number;
    }
}

// Timer button function
playButton.onclick = () => {
    
    if(!isRunning) {
        console.log("Timer is now running!");

        // Visual
        playButton.style.display = 'none';
        stopButton.style.display = 'none';
        pauseButton.style.display = 'block';

        // Logic
        startTime = Date.now() + timeLeft;
        timerInterval = setInterval(playTimer, 1000);

        isRunning = true;
    }
}

pauseButton.onclick = () => {
    
    if(isRunning) {
        console.log("Timer paused!");

        playButton.style.display = 'block';
        stopButton.style.display = 'block';
        pauseButton.style.display = 'none';

        // Logic
        clearInterval(timerInterval);
        timeLeft = startTime - Date.now();
        
        isRunning = false;
    }

    else {

    }
}

stopButton.onclick = () => {

    if(timerSpan!=timeLeft || timeLeft==undefined){
        if(confirm("Are you sure to reset the timer?")==true){
            startTime = Date.now() + timerSpan;
            timeLeft = timerSpan;
            timerInterval = null;

            console.log("Timer has been reset.");
        }
    }
}


// Select timer type function
typeSession.onclick = () => {

    if(isRunning===true) {
        alert("Can't switch mode while running!");
    }

    else if(timerType!='session') {

        console.log("Switching to session timer...");
        timerType = selectType.sessionTimer.type.toLowerCase();
        timerSpan = selectType.sessionTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.sessionTimer.type;
        documentBody.style.backgroundColor = selectType.sessionTimer.accentColor;
        typeSession.style.color = selectType.sessionTimer.accentColor;
        typeSession.style.backgroundColor = 'var(--clr-black)';

        // Re-declare variables
        timerDisplay.textContent = `${timerSpan / (1000 * 60)}:00`;
        startTime = Date.now() + timerSpan; // Output = 1 500 000 ms
        timeLeft = timerSpan;

        playButton.style.display = 'block';
        stopButton.style.display = 'block';
        pauseButton.style.display = 'none';
        isRunning = false;

        // Change other types to normal
        typeRest.style.color = 'var(--clr-black)';
        typeRest.style.backgroundColor = 'transparent';
        typeBreak.style.color = 'var(--clr-black)';
        typeBreak.style.backgroundColor = 'transparent';
    }

    else {

        console.log("You're already at session timer!");
    }
}

typeRest.onclick = () => {

    if(isRunning===true) {
        alert("Can't switch mode while running!");
    }

    else if(timerType!='rest') {

        console.log("Switching to rest timer...");
        timerType = selectType.restTimer.type.toLowerCase();
        timerSpan = selectType.restTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.restTimer.type;
        documentBody.style.backgroundColor = selectType.restTimer.accentColor;
        typeRest.style.color = selectType.restTimer.accentColor;
        typeRest.style.backgroundColor = 'var(--clr-black)';

        // Re-declare variables
        timerDisplay.textContent = `${timerSpan / (1000 * 60)}:00`;
        startTime = Date.now() + timerSpan; // Output = 1 500 000 ms
        timeLeft = timerSpan;


        playButton.style.display = 'block';
        stopButton.style.display = 'block';
        pauseButton.style.display = 'none';
        isRunning = false;

        // Change other types to normal
        typeBreak.style.color = 'var(--clr-black)';
        typeBreak.style.backgroundColor = 'transparent';
        typeSession.style.color = 'var(--clr-black';
        typeSession.style.backgroundColor = 'transparent';
    }

    else {

        console.log("You're already at rest timer!");
    }
}

typeBreak.onclick = () => {

    if(isRunning===true) {
        alert("Can't switch mode while running!");
    }

    else if(timerType!='break') {

        console.log("Switching to break timer...");
        timerType = selectType.breakTimer.type.toLowerCase();
        timerSpan = selectType.breakTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.breakTimer.type;
        documentBody.style.backgroundColor = selectType.breakTimer.accentColor;
        typeBreak.style.backgroundColor = 'var(--clr-black)';
        typeBreak.style.color = selectType.breakTimer.accentColor;

        // Re-declare variables
        timerDisplay.textContent = `${timerSpan / (1000 * 60)}:00`;
        startTime = Date.now() + timerSpan; // Output = 1 500 000 ms
        timeLeft = timerSpan;

        playButton.style.display = 'block';
        stopButton.style.display = 'block';
        pauseButton.style.display = 'none';
        isRunning = false;

        // Change other types to normal
        typeSession.style.color = 'var(--clr-black)';
        typeSession.style.backgroundColor = 'transparent';
        typeRest.style.color = 'var(--clr-black)';
        typeRest.style.backgroundColor = 'transparent';
    }

    else {

        console.log("You're already at break timer!");
    }
}