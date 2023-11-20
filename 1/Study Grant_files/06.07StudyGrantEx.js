function showStudyGrant() {
	let age = document.getElementById("age").value;
	let withFolks = document.getElementById("withParents").value;

	if (withFolks == "n" && age >= 20) {
		document.getElementById("answer").innerHTML = "The study grant is 268.23 euros.";
	} else if (withFolks == "y" && age >= 20) {
		document.getElementById("answer").innerHTML = "The study grant is 87.23 - 196.27 euros.";
	} else {
		document.getElementById("answer").innerHTML = "Ask Kela.";
	}
	
}
	