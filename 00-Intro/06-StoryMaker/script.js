// Story Making Program
var adjective = prompt("Please provide a adjective.");
var verb = prompt("Please provide a verb.");
var noun = prompt("Please provide a noun.");

window.alert("Ready for the story?");

var story = "There once a ";
story += adjective;
story += " programmer who wanted to use JavaScript to "
story += verb;
story += " the "
story += noun;

document.getElementById("story").innerHTML = story;