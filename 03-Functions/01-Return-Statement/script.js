function isEmailEmpty() {
	var field = document.getElementById("email");
	if (field.value === " ") {
		return true;
	} else {
		return false;
	}
}

var fieldTest = isEmailEmpty();

if (fieldTest) {
	document.getElementById("feedback").innerHTML = 'Please provide an email address.';
}