function processName() {
    let read = document.getElementById("name").value;
    let big = read.toUpperCase();    
    let small = read.toLowerCase();    
    let amount = read.length;
    let letter = read.charAt(0);    
    let substring = read.substring(0, 3);

    document.getElementById("upperCase").innerHTML = "With upper case letters: " + big;
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + small;
    document.getElementById("length").innerHTML = "Character count: " + amount;

	let containsMuumi = read.includes("muumi");

    if (containsMuumi == false) {
        document.getElementById("contains").innerHTML = "Doesn't contain the text muumi.";
      } else {
        document.getElementById("contains").innerHTML = "Doesn't contain the word muumi.";
      }
	
    document.getElementById("firstCharacter").innerHTML = "First character: " + letter;
    document.getElementById("manyCharacters").innerHTML = "First three characters: " + substring;

}