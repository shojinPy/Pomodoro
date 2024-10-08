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
        headTitle: "Pomodoro | Start session",
        accentColor: "var(--clr-red)",
        timerValue: 1500000,
    },

    restTimer: {
        type: "Rest",
        headTitle: "Pomodoro | Short rest",
        accentColor: "var(--clr-orange)",
        timerValue: 300000,
    },

    breakTimer: {
        type: "Break",
        headTitle: "Pomodoro | Long break",
        accentColor: "var(--clr-green)",
        timerValue: 1800000,
    },
}

// Conditional variables
let timerType = 'session';
let isRunning = false;
let confirmExit = false;
let timerSpan = selectType.sessionTimer.timerValue;

// Assign value to displayer variables
timerDisplay.textContent = `${timerSpan / (1000 * 60)}:00`;
headTitle.textContent = selectHeadTitle();

// Timer variables
let startTime = Date.now() + timerSpan;
let timeLeft = timerSpan;
let timerInterval = null;


// Functions
function playTimer() {
    timeLeft = startTime - Date.now();

    // Check if timer is finished
    if(timeLeft < 0){

        clearInterval(timerInterval);
        timerDisplay.textContent = "TIME'S UP";
        headTitle.textContent = "Pomodoro | Time's up!"
        alert(`${timerSpan / (1000 * 60)} minutes is over!`);
        return;
    }

    // Convert miliseconds to minutes and seconds
    const minutesLeft = Math.floor(timeLeft / (1000 * 60)) % 60;
    const secondsLeft = Math.round(timeLeft / 1000)% 60;

    // Display output
    console.log(`${minutesLeft} : ${secondsLeft}`);
    timerDisplay.textContent = `${minutesLeft}:${singleDigitHandler(secondsLeft)}`;
}

// Add zero at the beginning of a single digit number
function singleDigitHandler(number) {

    if(String(number).length<=1) {
        return `0${number}`;
    }
    else{
        return number;
    }
}

// Select appropriate website's head title
function selectHeadTitle() {
    if(timerType=='session'){
        return selectType.sessionTimer.headTitle;
    }
    else if(timerType=='rest'){
        return selectType.restTimer.headTitle;
    }
    else if(timerType=='break'){
        return selectType.breakTimer.headTitle;
    }
}

// Timer button function
playButton.onclick = () => {
    
    if(!isRunning) {
        console.log("Timer is now running!");
        headTitle.textContent = "Pomodoro | Time is ticking";

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
        headTitle.textContent = "Pomodoro | Timer paused";

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
            headTitle.textContent = selectHeadTitle();
            timerDisplay.textContent = `${timerSpan / (1000 * 60)}:00`;

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
        headTitle.textContent = selectType.sessionTimer.headTitle;
        timerType = selectType.sessionTimer.type.toLowerCase();
        timerSpan = selectType.sessionTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.sessionTimer.type;
        documentBody.style.backgroundColor = selectType.sessionTimer.accentColor;
        typeSession.style.color = selectType.sessionTimer.accentColor;
        typeSession.style.backgroundColor = 'var(--clr-black)';

        // Re-assign values to the variables
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
        headTitle.textContent = selectType.restTimer.headTitle;
        timerType = selectType.restTimer.type.toLowerCase();
        timerSpan = selectType.restTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.restTimer.type;
        documentBody.style.backgroundColor = selectType.restTimer.accentColor;
        typeRest.style.color = selectType.restTimer.accentColor;
        typeRest.style.backgroundColor = 'var(--clr-black)';

        // Re-assign values to the variables
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
        typeSession.style.color = 'var(--clr-black)';
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
        headTitle.textContent = selectType.breakTimer.headTitle;
        timerType = selectType.breakTimer.type.toLowerCase();
        timerSpan = selectType.breakTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.breakTimer.type;
        documentBody.style.backgroundColor = selectType.breakTimer.accentColor;
        typeBreak.style.backgroundColor = 'var(--clr-black)';
        typeBreak.style.color = selectType.breakTimer.accentColor;

        // Re-assign values to the variables
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
