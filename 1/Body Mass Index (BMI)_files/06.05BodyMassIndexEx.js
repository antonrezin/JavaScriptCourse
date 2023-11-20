function calculateBMI() {
  let weightKg = document.getElementById("weight").value;
  let heightCm = document.getElementById("height").value;
  let BMI = weightKg / (heightCm / 100 * heightCm / 100);

  if (BMI <= 18.4) {
    document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Weight less than normal weight)"
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Normal weight)";
  } else {
    document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Overweight)";
  }

}