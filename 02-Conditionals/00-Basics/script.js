var question = "What programming language is the name of a gem?";
var answer = prompt(question);

if (answer.toUpperCase() === 'RUBY') {
	document.getElementById("answer").innerHTML = "That's right!";
} else {
	document.getElementById("answer").innerHTML = "That's wrong!";
}