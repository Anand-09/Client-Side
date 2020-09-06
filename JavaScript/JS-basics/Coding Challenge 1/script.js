/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

*/

// Step 1. Store Mark's and John's mass and height in variables

var massMark, massJohn, htMark, htJohn;
 
massMark=  80;
massJohn = 65;
htMark = 1.78;
htJohn = 1.68;

// Step 2. Calculate both their BMIs

var markBMI = massMark/(htMark*htMark); 
var johnBMI = 65/(1.68*1.68);
console.log(markBMI, johnBMI);


// Step 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

var compareBMI = markBMI > johnBMI
console.log(compareBMI);


// Step 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

console.log("Is Mark's BMI higher than John's? "  + compareBMI); 
