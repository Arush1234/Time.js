const seconds = 1000 
const timer = document.getElementById( "timer")
Timer_Standard(); 

function Timer_Standard(){
setInterval(function(){
var time = new Date(); 
var time_sec = time.getSeconds(); 
var time_min = time.getMinutes(); 
var time_hour = time.getHours(); 
if(time_sec < 10){
time_sec = "0" + time_sec;   
}
if(time_min < 10){
time_min = "0" + time_min;  
}
if (time_hour > 12){time_hour = time_hour - 12;}
if (time_hour < 10){time_hour = "0" + time_hour}
else{time_hour = time.getHours()} ;  

 
timer.innerHTML = time_hour + "  :  "+time_min +"  :  "+ time_sec ;})};                         

