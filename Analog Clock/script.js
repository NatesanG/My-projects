const hour=document.querySelector(".hrs");
const minute=document.querySelector(".min");
const second=document.querySelector(".sec");

setInterval(runClock,1000);

function runClock(){
    const time  = new Date();
    const seconds = time.getSeconds()/60;
    const minutes = (seconds+time.getMinutes())/60;
    const hours = (minutes+time.getHours())/12;
    hour.style.setProperty('--rotation',hours*360);
    minute.style.setProperty('--rotation',minutes*360);
    second.style.setProperty('--rotation',seconds*360);
}
runClock();