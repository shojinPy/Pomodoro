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
const sessionTimer = {
    type: "Session",
    accentColor: "var(--clr-red)",
}

const restTimer = {
    type: "Rest",
    accentColor: "var(--clr-orange)",
}

const breakTimer = {
    type: "Break",
    accentColor: "var(--clr-green)",
}

// Conditional variables
let timerType = 'session';

// Select timer type function
typeSession.onclick = () => {

    if(timerType!='session') {

        console.log("Switching to session timer...");
        timerType = sessionTimer.type.toLowerCase();

        // Visual change
        timerTitle.textContent = sessionTimer.type;
        documentBody.style.backgroundColor = sessionTimer.accentColor;
        typeSession.style.color = sessionTimer.accentColor;
        typeSession.style.backgroundColor = 'var(--clr-black)';

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
        timerType = restTimer.type.toLowerCase();

        // Visual change
        timerTitle.textContent = restTimer.type;
        documentBody.style.backgroundColor = restTimer.accentColor;
        typeRest.style.color = restTimer.accentColor;
        typeRest.style.backgroundColor = 'var(--clr-black)';

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
        timerType = breakTimer.type.toLowerCase();

        // Visual change
        timerTitle.textContent = breakTimer.type;
        documentBody.style.backgroundColor = breakTimer.accentColor;
        typeBreak.style.backgroundColor = 'var(--clr-black)';
        typeBreak.style.color = breakTimer.accentColor;

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