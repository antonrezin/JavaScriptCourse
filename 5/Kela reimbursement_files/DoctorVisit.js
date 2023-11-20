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
  
function calculateAmountLeft(doctorFeeBeforeReimbursement, maxKelaReimbursement) {
	let fee = parseFloat(doctorFeeBeforeReimbursement);
	let officeFee = 15.90;
	return fee - maxKelaReimbursement + officeFee;
  }
  
function calculate() {
	let visitLengthInput = document.getElementById("length").value;
	let doctorFeeInput = document.getElementById("doctorsFee").value;
	let visitLength = parseInt(visitLengthInput);
	let doctorFee = parseFloat(doctorFeeInput);
	let maxKelaReimbursement = calculateKelaReimbursement(visitLength);
	let amountLeft = calculateAmountLeft(doctorFee, maxKelaReimbursement);
	let output = "Doctor's Fee is " + doctorFee.toFixed(2) + " euros.<br>" +
	"Kela reimbursement is " + maxKelaReimbursement.toFixed(2) + " euros.<br>" +
	"Office Fee is 15.90 euros.<br>" +
	"Customer needs to pay " + amountLeft.toFixed(2) + " euros.";

	document.getElementById("answer").innerHTML = output;
  }
  