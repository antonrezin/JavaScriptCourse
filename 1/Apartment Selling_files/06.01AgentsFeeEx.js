function calculateFee() {
	let hinta = document.getElementById("price").value;
	let palkkio;

	if (hinta <= 50000) {
		palkkio = 2400;
	} else if (hinta > 50000) {
		palkkio = hinta / 100 * 3.44;
	}

	document.getElementById("fee").innerHTML = "Real state agent's fee is " + palkkio.toFixed(2) + " euros";				
}