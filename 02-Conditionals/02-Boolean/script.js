var correntGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I'm thinking a number between 0 and 6. What is it?");

var feedback = document.getElementById("feedback");

if (parseInt(guess) == randomNumber) {
	correntGuess = true;
}

if (correntGuess) {
	feedback.innerHTML = "You guessed the number!";
} else {
	feedback.innerHTML = "Sorry! The number was " + randomNumber;
}