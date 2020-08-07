// run node script.js to see results

function randomNumber() {
	return Math.floor(Math.random() * 6) + 1;
}

console.log(randomNumber());

// anonymous function
var greet = function () {
	return "Hello User!";
};

console.log(greet());