var lower = prompt("Enter a lower value");
var upper = prompt("Enter a upper value");

var lower = parseInt(lower);
var upper = parseInt(upper);

// generate random number
var randomNumber = Math.floor(Math.random() * upper) + lower;

// output stuff
document.getElementById("upper").innerHTML = upper;
document.getElementById("lower").innerHTML = lower;
document.getElementById("result").innerHTML = randomNumber;
