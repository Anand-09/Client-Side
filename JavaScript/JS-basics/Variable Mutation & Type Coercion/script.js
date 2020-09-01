/**/
/*
Variable Mutation - 

How to mutate variable & how & why JS does type coercion.

Type coercion -

JS automatically converts types from one another as its needed.

Converts a number to a string in order to be able to join other three string.

JS is easier that's why.

Declare multiple values in the same line & then assign values in different line.

Cleaner when declaring many variables.

Even the boolean here gets converted to a string.
JS also does type coercison with Boolean.

Even the undefined is coerced/converted into a string.


*/


var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
//isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);


var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married?' + isMarried);


/*
Variable Muatation :-

To change the value of a Variable.

Lets redefine the age.

var age was already defined/assigned.

alert is an alternative to console.log

Alert shows a pop up or alert window.

It doesn't finist until we hit okay 

To get data from user with a similar method, 

We can use prompt & ask a question,

We declare a new variable var lastName = prompt('What is his last Name'); 

& then ask the user to input a value into that assigned variable with prompt usage for inputting a value externally.

 
*/

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last Name');
console.log(firstName + ' ' + lastName);