function calculateKelaReimbursement(visitLength) {
	let reimbursement = 0;

	if (visitLength <= 10) {
		reimbursement = 8.00;
	} else if (visitLength <= 20) {
		reimbursement = 11.00;
	} else if (visitLength <= 30) {
		reimbursement = 13.50;
	} else if (visitLength <= 45) {
		reimbursement = 16.50;
	} else if (visitLength > 45) {
		reimbursement = 21.00;
	}

	return reimbursement;
}

function calculate() {
	let length = document.getElementById("length").value;
	let fee = document.getElementById("doctorsFee").value;
	let reimbursement = calculateKelaReimbursement(length);
	
	let answerDiv = document.getElementById("answer").innerHTML = "Length of visit is " + length + " minutes.<br>Kela reimbursement is " + reimbursement.toFixed(2) + " euros."
	
}