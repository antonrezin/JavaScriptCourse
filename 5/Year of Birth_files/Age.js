function tellAge() {
    let birthDate = document.getElementById("yearOfBirth").value;
    let date = new Date();
    let fullYear = date.getFullYear();
    let roughAge = fullYear - birthDate;

    if (roughAge < 0) {
        document.getElementById("answer").innerHTML = "Invalid input. Please enter a valid year of birth.";
    } else {
        document.getElementById("answer").innerHTML = "You are now " + roughAge
        + " years old.<br> (Current year is " + fullYear + " .)";
    }

}