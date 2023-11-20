function checkAge() {
	let ika = document.getElementById("age").value;

	if (ika < 18) {
		document.getElementById("answer").innerHTML = "Adolescents are not allowed to play.";
	} else {
		document.getElementById("answer").innerHTML = "Old enough to play.";
	}		
}