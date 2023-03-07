const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timer;

startBtn.addEventListener('click', start);

function start () {
    timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000, startBtn.disabled = true, stopBtn.disabled = false); 
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


stopBtn.addEventListener('click', stop);

function stop () {
    timer = clearInterval((timer), stopBtn.disabled = true, startBtn.disabled = false);
}