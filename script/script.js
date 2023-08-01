/**
*
* script.js 
* @author - Mazeen
* @date - 1/8/2023 
**/
function CountDown() {
var date = Date();
var currentDate = new Date().getTime();

var newYear = new Date('January 1, 2024 00:00:00').getTime();

var targetTime = newYear - currentDate;

var targetDay = Math.trunc(targetTime / 86400000);
var remainingTimeAfterDays = targetTime % 86400000;

var targetHour = Math.trunc(remainingTimeAfterDays / 3600000);
var remainingTimeAfterHours = remainingTimeAfterDays % 3600000;

var targetMinute = Math.trunc(remainingTimeAfterHours / 60000);
var remainingTimeAfterMinutes = remainingTimeAfterHours % 60000;

var targetSecond = Math.trunc(remainingTimeAfterMinutes / 1000);

document.getElementById("count-days").innerHTML = targetDay;
document.getElementById("count-hours").innerHTML = targetHour;
document.getElementById("count-minutes").innerHTML = targetMinute;
document.getElementById("count-seconds").innerHTML = targetSecond;
};

setInterval(CountDown, 1000);

