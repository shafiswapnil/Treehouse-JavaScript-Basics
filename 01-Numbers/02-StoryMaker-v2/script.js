var questions = 3;
var questionsLeft = " [" + questions + " questions left]";

var adjective = prompt("Type an adjective" + questionsLeft);
questions -= 1;

var questionsLeft = " [" + questions + " questions left]";
var verb = prompt("Type a verb" + questionsLeft);
questions -= 1;

var questionsLeft = " [" + questions + " questions left]";
var noun = prompt("Type a noun" + questionsLeft);
questions -= 1;

window.alert("Ready for the story?");

var story;
story = "There once a ";
story += adjective;
story += " programmer who wanted to use JavaScript to "
story += verb;
story += " the "
story += noun;

document.getElementById("story").innerHTML = story;
console.log(story);
console.log(questions);