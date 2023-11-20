function calculateSalary(hours, hourlySalary) {
	let brutto = hours * hourlySalary;
	return brutto;
}

function showGrossSalary() {
	let hours = document.getElementById("hours").value;
	let hourlySalary = document.getElementById("hourlySalary").value;
	let grossSalary = calculateSalary(hours, hourlySalary);
	document.getElementById("answer").innerHTML = "Gross salary is " + grossSalary.toFixed(2) + " euros.";
}

function calculateAndShowSalary() {
	showGrossSalary();
}