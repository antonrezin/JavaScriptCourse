
function play() {
	let betValue = document.getElementById("bet").value;
	let pips = Math.round((Math.random() * 5) + 1)
	let payBack;

	if (betValue == 2 && pips == 2 || betvalue == 4 && pips == 4) {
		payBack = pips * 1.25;
	} else if (betvalue == 6 && pips == 6) {
		payback = pips * 1.50;
	} else if (betValue != pips) {
		payBack == pips;
	}

	if  (betValue != pips) {
		document.getElementById("answer").innerHTML = "Pips was " + pips + " - no pay";
	} else if (betValue == pips) {
		document.getElementById("answer").innerHTML = "Pips was " + pips.toFixed(2) + " - Paid back: ";
	}

	document.getElementById

}