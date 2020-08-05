var secondsPerMinute = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var daysPerYear = 360;

var secondsPerDay = secondsPerMinute * minsPerHour * hoursPerDay;
document.getElementById("seconds").innerHTML = secondsPerDay;
console.log(secondsPerDay);

// years I've been alive for
var yearsAlive = 18;
var lifeInSeconds = (yearsAlive * daysPerYear) * secondsPerDay;
document.getElementById("life").innerHTML = lifeInSeconds;
console.log(lifeInSeconds);
/*
	my birthday 27 november 2001
	today is 5 August 2020
	SO, let's think
*/