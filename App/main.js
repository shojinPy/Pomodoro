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
        timerValue: 25,
    },

    restTimer: {
        type: "Rest",
        accentColor: "var(--clr-orange)",
        timerValue: 5,
    },

    breakTimer: {
        type: "Break",
        accentColor: "var(--clr-green)",
        timerValue: 30,
    },
}

// Conditional variables
let timerType = 'session';
let isRunning = false;

// Timer variables
let timerSpan = selectType.sessionTimer.timerValue;
let playTime = null;
let pauseTime = null;

function startTimer(timer) {


}

// Timer button function
playButton.onclick = () => {
    
    if(!isRunning) {
        // Visual
        playButton.style.display = 'none';
        stopButton.style.display = 'none';
        pauseButton.style.display = 'block';

        // Logic
        console.log(timerSpan);

        isRunning = true;
    }

    else {

    }
}

pauseButton.onclick = () => {
    
    if(isRunning) {

        playButton.style.display = 'block';
        stopButton.style.display = 'block';
        pauseButton.style.display = 'none';

        isRunning = false;
    }

    else {

    }
}

stopButton.onclick = () => {

}


// Select timer type function
typeSession.onclick = () => {

    if(timerType!='session') {

        console.log("Switching to session timer...");
        timerType = selectType.sessionTimer.type.toLowerCase();
        timerSpan = selectType.sessionTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.sessionTimer.type;
        documentBody.style.backgroundColor = selectType.sessionTimer.accentColor;
        typeSession.style.color = selectType.sessionTimer.accentColor;
        typeSession.style.backgroundColor = 'var(--clr-black)';

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

    if(timerType!='rest') {

        console.log("Switching to rest timer...");
        timerType = selectType.restTimer.type.toLowerCase();
        timerSpan = selectType.restTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.restTimer.type;
        documentBody.style.backgroundColor = selectType.restTimer.accentColor;
        typeRest.style.color = selectType.restTimer.accentColor;
        typeRest.style.backgroundColor = 'var(--clr-black)';

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

    if(timerType!='break') {

        console.log("Switching to break timer...");
        timerType = selectType.breakTimer.type.toLowerCase();
        timerSpan = selectType.breakTimer.timerValue;

        // Visual change
        timerTitle.textContent = selectType.breakTimer.type;
        documentBody.style.backgroundColor = selectType.breakTimer.accentColor;
        typeBreak.style.backgroundColor = 'var(--clr-black)';
        typeBreak.style.color = selectType.breakTimer.accentColor;

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