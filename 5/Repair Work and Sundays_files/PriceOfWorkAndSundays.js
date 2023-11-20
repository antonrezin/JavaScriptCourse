function calculate() {
	let dateInput = document.getElementById("date").value;
    if (!isSunday(dateInput)) {
        document.getElementById("answer").innerHTML = "<p>Date " + dateInput + " (work day).<br>The price of this repair work is 48 euros per hour.</p>";
        } else {
            document.getElementById("answer").innerHTML = "<p>Date " + dateInput + "(Sunday)<br>The price of this repair work is 72 euros per hour.</p>";
        }

}

function isSunday(dateText) {
    let day = parseInt(dateText.substr(0, 2));
    let month = parseInt(dateText.substr(3, 2)) - 1;
    let year = parseInt(dateText.substr(6, 4));
    
    let asDate = new Date();
    
    asDate.setDate(day);
    asDate.setMonth(month);
    asDate.setFullYear(year);

    let dayOfWeek = asDate.getDay();
    return dayOfWeek === 0;
}
