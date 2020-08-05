var htmlBadges = prompt("How many HTML Badges you have?");
var cssBadges = prompt("How many CSS Badges you have?");

var totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);

alert("Wow! You have " + totalBadges + " badges!");
document.getElementById("total").innerHTML = totalBadges;
console.log(totalBadges);

// for example
document.getElementById("ieInt").innerHTML = parseInt('2.99');

console.log(parseFloat('1.34'));
console.log(parseFloat("1.8 light years away"));
console.log(parseInt("Hi 455"));