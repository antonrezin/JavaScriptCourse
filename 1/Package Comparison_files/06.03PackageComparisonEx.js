function comparePackages() {
	let sms = document.getElementById("textMessages").value;
	let call = document.getElementById("callTime").value;

	let allInclusive = 29.90;

	let specialMonthly = 19.90
	let specialCalls = sms * 0.069;
	let specialMessages = call * 0.069;
	let specialFullPrice = specialMonthly + specialCalls + specialMessages;

	if (specialFullPrice < allInclusive) {
		document.getElementById("answer").innerHTML = "The Special package (" + specialFullPrice.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
	} else {
		document.getElementById("answer").innerHTML = "The All-inclusive package (29.90) is cheaper than the Special package (" + specialFullPrice.toFixed(2) + ")";
	}	
}