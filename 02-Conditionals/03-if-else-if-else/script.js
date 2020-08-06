var correntGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I'm thinking a number between 0 and 6. What is it?");

var feedback = document.getElementById("feedback");
var guess = parseInt(guess);

if (guess === randomNumber) {

	correntGuess = true;

} else if (guess < randomNumber) {

	var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
	if (parseInt(guessMore) === randomNumber) { correntGuess = true; }

} else if (guess > randomNumber) {

	var guessMore = prompt("Try again. The number I am thinking of is less than " + guess);
	if (parseInt(guessMore) === randomNumber) { correntGuess = true; }

}

if (correntGuess) {

	feedback.innerHTML = "You guessed the number!";

} else {

	feedback.innerHTML = "Sorry! The number was " + randomNumber;

}