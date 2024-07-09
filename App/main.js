// Visual variables
const backgroundColor = document.body.style 

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
const sessionTimer = {
    type: "session",
    accentColor: "var(--clr-red)",
    header: "Session",
}

// Conditional variables
let timerType = 'session';

typeSession.onclick = () => {

    if(timerType!=='session') {

        console.log("Switching to session timer...");
        timerType = sessionTimer.type;

        // Visual change
        timerTitle = sessionTimer.header;
        backgroundColor = sessionTimer.accentColor;
        typeSession.style.backgroundColor = 'var(--clr-black)';
        typeSession.style.color = sessionTimer.accentColor;
    }

    else {

        console.log("You're already at session timer.");
    }
}