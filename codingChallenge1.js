var MarkMass = 80 // kg
var MarkHeight = 1.5 // metres

var JohnMass = 54 // kg
var JohnHeight = 2 // metres

var MarkBMI = MarkMass / (MarkHeight*MarkHeight);
var JohnBMI = JohnMass / (JohnHeight*JohnHeight);
console.log("This is Mark's BMI: " + MarkBMI)
console.log("This is John's BMI: " + JohnBMI)

isMarkBMIHigher = MarkBMI > JohnBMI
console.log("Is Mark's BMI higher than Johns ?? " + isMarkBMIHigher);


