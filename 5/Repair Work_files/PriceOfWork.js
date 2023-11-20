function modifyTitle() {
    var titleInput = document.getElementById("title");
    var title = titleInput.value;
    titleInput.value = allCapsTitleTrimmed(title);
}

function allCapsTitleTrimmed(text) {
    text = text.trim();
    text = text.toUpperCase();
    return text;
}

function calculate() {
    var startTimeInput = document.getElementById("startTime").value;
    var endTimeInput = document.getElementById("endTime").value;
    var start = new Date("2000/01/01 " + startTimeInput);
    var end = new Date("2000/01/01 " + endTimeInput);
    var duration = Math.abs(end - start) / 60000;

    var dateInput = document.getElementById("date").value;
    if (!isSunday(dateInput)) {
        var price = (duration / 60) * 48;
        document.getElementById("answer").innerHTML = "Length of the work was " + duration + " minutes.<br>The hourly price is during the workdays 48.00 euros.<br>The price of this repair work is " + price.toFixed(2) + " euros.";
    } else {
        var price = (duration / 60) * 72;
        document.getElementById("answer").innerHTML = "Length of the work was " + duration + " minutes.<br>The hourly price is during the Sundays 72.00 euros.<br>The price of this repair work is " + price.toFixed(2) + " euros.";
    }
}

function isSunday(dateText) {
    var day = parseInt(dateText.substring(0, 2));
    var month = parseInt(dateText.substring(3, 5)) - 1;
    var year = parseInt(dateText.substring(6));

    var asDate = new Date();
    asDate.setDate(day);
    asDate.setMonth(month);
    asDate.setFullYear(year);

    var dayOfWeek = asDate.getDay();

    if (dayOfWeek === 0) {
        return true;
    } else {
        return false;
    }
}
