// Prompting the user for a lower and an upper value
var lower = prompt("Enter a lower value");
var upper = prompt("Enter a upper value");

// Parsing the input to integers
var lower = parseInt(lower);
var upper = parseInt(upper);

// Random number generator function
function getRanomNumber(lower, upper) {
	// Check if lower or upper variable is not a number,
	// if true, throw an error!
	if (isNaN(lower) || isNaN(upper)) {
		throw new Error("Both arguments must be numbers!");
	}

	// Directly returning the generated random number
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Storing the random number from the function
var randomNumber = getRanomNumber(lower, upper);

// It's output time
document.getElementById("upper").innerHTML = upper;
document.getElementById("lower").innerHTML = lower;
document.getElementById("result").innerHTML = randomNumber;