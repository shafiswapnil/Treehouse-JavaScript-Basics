var first = prompt("Please type first number");
var second = prompt("Please type second number");

var num1 = parseInt(first);
var num2 = parseInt(second);

var randomNum1 = Math.floor(Math.random() * num1) + 1;
var randomNum2 = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;

var message1 = randomNum1 + " in between 0 and " + num1;
var message2 = randomNum2 + " in between " + num1 + " and " + num2;

document.getElementById("random1").innerHTML = message1;
document.getElementById("random2").innerHTML = message2;