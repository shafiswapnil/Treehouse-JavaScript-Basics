// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if (answer1.toUpperCase() === 'RUBY') {
	correct++;
}

var answer2 = prompt("Name a programming language that's a snake");
if (answer2.toUpperCase() === 'PYTHON') {
	correct++;
}

var answer3 = prompt("What language do you use to style web pages?");
if (answer3.toUpperCase() === 'CSS') {
	correct++;
}

var answer4 = prompt("What language do you use to build the structure of web pages?");
if (answer4.toUpperCase() === 'HTML') {
	correct++;
}

var answer5 = prompt("What language do you use to add interactivity to a web page?");
if (answer5.toUpperCase() === 'JAVASCRIPT') {
	correct++;
}


// output results
var result = "You got " + correct + " out of 5 questions correct.";
document.getElementById("result").innerHTML = result;


// output rank
var rank;
if (correct === 5) {
	rank = "gold crown";
} else if (correct >= 3) {
	rank = "silver crown";
} else if (correct >= 1) {
	rank = "bronze crown";
} else {
	rank = "no crown";
}

document.getElementById("rank").innerHTML = "You have earned " + rank + "!";