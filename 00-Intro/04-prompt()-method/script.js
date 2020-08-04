// Combining strings togeher, is called contatenation

var visitor = prompt("What is your visitor?");

/*
var message = "Hello " + visitor + ". Welcome to Treehouse." + " We are so glad to see you came by to visit, " + visitor + ". Please come again, when you want to learn some more.";
*/

/*
var message = "Hello " + visitor;
message = message + ". We are so glad to see you came by to visit, ";
message += visitor + ". Please come again, when you want to learn some more.";
*/

var message = "Hello " + visitor;
message += ". We are so glad to see you came by to visit, ";
message += visitor;
message += ". Please come again, when you want to learn some more.";

document.write(message);