const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
function refresh(){
const currentYear = new Date().getFullYear();//current year(2024)
const newYear = new Date(`October 31 ${currentYear} 00:00:00`);//new year(jan 1 2025)

console.log(newYear);

const currentDate = new Date();
const diff = newYear - currentDate;
const d = Math.floor(diff/1000/60/60/24);//prints the date in ms.to convert divide by 1000ms,60s,60mins and 24hrs
const h =  Math.floor(diff/1000/60/60%24);// % gives the hours
const m =  Math.floor((diff/1000/60)%60);// %60 gives minutes
const s =  Math.floor((diff/1000)%60);// %60 gives seconds

days.innerHTML = d<10?"0"+d:d;
hours.innerHTML = h<10?"0"+h:h;
minutes.innerHTML = m<10?"0"+m:m;
seconds.innerHTML = s<10?"0"+s:s;

}
refresh();
setInterval(refresh,1000);