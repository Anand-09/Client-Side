/* If / else statements :-


This is a very important one, because we're gonna start taking decisions using code.

JavaScript as well as most other programming languages has a couple of control structures, which are features that allow us to execute only a certain part of the code or to execute parts multiple times.

And the first control structure that we'll understand is the if else statements, 

which is a conditional, which basically allows us to take decisions using code.


Steps: what we'll do is log strings to console whether he is married or not.
*/

var firstName = 'John';
var civilStatus = 'single';

// So we write if, we'll use if else statement to take decisions & inside we'll  write logical condition, something that returns Boolean true / false value, so a perfect logical condition.

// we write if & then we open parenthesis & in here we've to write a Logical condition, something that returns Boolean true or false value.

// We want an equality operator.  we want to test if the civil status is Married.
//We're testing if civil status is married. we open curly braces & open a block, if block.

if(civilStatus === 'married') {
console.log(firstName + 'is married!');
} else {
console.log(firstName + ' will hopefully marry soon :)');
} 

/* this condition will return true if the civil status is married & false if not; === is like a Logical operator which returns true or false, 

So, if if bolck is false then else block will be executed.

Lets assume/say that we've a boolean variable already . & test what happens,

we have a boolean variable isMarried,
*/

var isMarried = true;

if(isMarried === true)
if(isMarried) {
console.log(firstName + ' is married!');
} else {
console.log(firstName + ' will hopefully marry soon :)');
} 

//Using if else for coding challenge 1,
var massMark = 78; // kg
var heightMark = 1.69; // metres

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark); 
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
console.log("Marks's BMI is higher than John's.")
} else{
console.log("John's BMI is higher than Mark's.")

}
//var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

// So now you know how to take decisions with code.

// But this is really just the fundamental of conditionals & decision taking with code.

//There is alot more to learn.4
































/*

*/


/*

*/
