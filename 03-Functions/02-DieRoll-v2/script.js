function getRandomNumber(upper) {
	var randomNumber;
	return randomNumber = Math.floor(Math.random() * upper) + 1;
}

console.log(getRandomNumber(8));

function getArea(width, length, unit) {
	var area;
	return area = (width * length) + " " + unit;
}

console.log(getArea(2, 5, "sq ft"));