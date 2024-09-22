const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let hours=min=sec=ms=0,startTimer;
btnStart.addEventListener("click",() => {
    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');
    startTimer=setInterval(()=>{
    ms++;
    if(ms==100){
        sec++;
        ms=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hours++;
        min=0;
    }
    updateDisplay();
    },10)
});
btnStop.addEventListener("click",() => {
    clearInterval(startTimer);
    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');
});
btnReset.addEventListener("click",() => {
    let hours=min=sec=ms=0;
    updateDisplay();
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');
});

function updateDisplay(){
    phours=hours<10?"0"+hours:hours;
    pmin=min<10?"0"+min:min;
    psec=sec<10?"0"+sec:sec;
    pms=ms<10?"0"+ms:ms;
    document.querySelector(".hrs").innerText=phours;
    document.querySelector(".min").innerText=pmin;
    document.querySelector(".sec").innerText=psec;
    document.querySelector(".ms").innerText=pms;
}