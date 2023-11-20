function tellInfractionFine() {
	let speed = parseInt(document.getElementById("drivingSpeed").value);
	let limit = parseInt(document.getElementById("speedLimit").value);
	let excessSpeed = speed - limit;
  
	if (excessSpeed == 0) {
	  document.getElementById("answer").innerHTML = "No speeding, no fine.";
	} else if (limit >= 10 && limit <= 60) {
	  if (excessSpeed <= 15) {
		document.getElementById("answer").innerHTML = "Infraction fine is 85 euros.";
	  } else if (excessSpeed <= 20) {
		document.getElementById("answer").innerHTML = "Infraction fine is 115 euros.";
	  } else {
		document.getElementById("answer").innerHTML = "Income-based unit fine.";
	  }
	} else if (limit >= 70 && limit <= 120) {
	  if (excessSpeed <= 15) {
		document.getElementById("answer").innerHTML = "Infraction fine is 70 euros.";
	  } else if (excessSpeed <= 20) {
		document.getElementById("answer").innerHTML = "Infraction fine is 100 euros.";
	  } else {
		document.getElementById("answer").innerHTML = "Income-based unit fine.";
	  }
	} else {
	  document.getElementById("answer").innerHTML = "Invalid speed limit.";
	}
  }
  