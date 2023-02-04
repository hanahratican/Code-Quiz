const startingMinutes = 1;
let time = startingMinutes * 60;
const startBtn = document.getElementById('start-button');
const timerEl = document.getElementById('countdown');


//startBtn.addEventListener('click');
//setInterval(updateTime, 1000);

startBtn.addEventListener('click', updateTime);
setInterval(updateTime, 1000);

function updateTime() { 
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if(seconds < 10) {
        seconds = '0' + seconds;
        };
        timerEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    };