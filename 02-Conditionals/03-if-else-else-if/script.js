/*
 The Random Number Guessing Game
 Generates a number between 1 and 6
 and gives a player two attempts to
 guess the number.
 */

// assume the player didn't guess correctly
var correntGuess = false;

// generates random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt("I'm thinking a number between 0 and 6. What is it?");

// targetting feedback id in html
var feedback = document.getElementById("feedback");
// parsing string to number
var guess = parseInt(guess);

/* test to see if player is
1. correct
2. guessed too high
3. guessed too low
*/
if (guess === randomNumber) {

	correntGuess = true;

} else if (guess < randomNumber) {

	var guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
	if (parseInt(guessMore) === randomNumber) { correntGuess = true; }

} else if (guess > randomNumber) {

	var guessMore = prompt("Try again. The number I am thinking of is less than " + guess);
	if (parseInt(guessMore) === randomNumber) { correntGuess = true; }

}

// test if player is correct and output response
if (correntGuess) {

	feedback.innerHTML = "You guessed the number!";

} else {

	feedback.innerHTML = "Sorry! The number was " + randomNumber;

}