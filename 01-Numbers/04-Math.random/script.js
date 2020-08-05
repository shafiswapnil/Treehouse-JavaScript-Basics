// run node script.js on terminal to view the results.

/* REMEMBER!
 * Math.floor() goes downwards the floor. So it'll give the least value from the input.
 * Math.ceil() goes upwards the ceiling. So it'll give the top number from the input.
 */

console.log(Math.random());
console.log(Math.random() * 6);

/*
 * We need a random number between 0 to 6.
 * So we multiplied Math.random() with 6
 * By doing so it gives us numbers with decimal values. But we don't need that.
 * So, we have added Math.floor() with it. Now it's showing integers.
 * last but not least, in this stage program will return number between 0 and 5. But we need till 6
 * So we added 1 at the end!
 */
console.log(Math.floor(Math.random() * 6)) + 1;

var dieRoll = Math.floor(Math.random() * 6) + 1;
console.log("You rolled " + dieRoll);