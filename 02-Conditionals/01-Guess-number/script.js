var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I'm thinking a number between 0 and 6. What is it?");

if (parseInt(guess) == randomNumber) {
	document.getElementById("feedback").innerHTML = "That's right!";
} else {
	document.getElementById("feedback").innerHTML = "Wrong answer! The right answer is " + randomNumber;
}