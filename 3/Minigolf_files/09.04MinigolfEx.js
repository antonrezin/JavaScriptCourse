 let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    minigolf.sort();
    let min = minigolf[0];
    let max = minigolf.slice(-1);
    document.getElementById("answer").innerHTML = "The smallest result is " + min +  " (winner). <br> " + "The biggest result is " + max + ".";
}