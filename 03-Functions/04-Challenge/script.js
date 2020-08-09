var lower = prompt("Enter a lower value");
var upper = prompt("Enter a upper value");

var lower = parseInt(lower);
var upper = parseInt(upper);

function getRanomNumber(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

var randomNumber = getRanomNumber(lower, upper);

// output stuff
document.getElementById("upper").innerHTML = upper;
document.getElementById("lower").innerHTML = lower;
document.getElementById("result").innerHTML = randomNumber;

