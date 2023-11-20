function processName() {
    let read = document.getElementById("name").value;

    let bigLetters = read.toUpperCase();
    let smallLetters = read.toLowerCase();
    let amount = read.length;

    let upper = document.getElementById("upperCase").innerHTML = "With upper case letters: " + bigLetters;
    let lower = document.getElementById("lowerCase").innerHTML = "With lower case letters: " + smallLetters;
    let count = document.getElementById("length").innerHTML = "Character count: " + amount;
    
}