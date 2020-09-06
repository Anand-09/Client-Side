/* Boolean Logic :-

Let's now take Conditional to the next level,

we'll log to the console if a Person is a teenager, young man or a man.

3 types of Logic :

AND - BOTH TRUE
OR - EITHER TRUE
NOT - Inverts true/false value
*/

var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { // Between 13 and 20 = age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { 
    console.log(firstName + ' is a young man.');

} else {
    console.log(firstName + ' is a man.');
}

/* In a very broad sense, Boolean Logic is a Branch of Computer science that deals with true & false values.

AND (&&) true if ALL are true
OR ()   true if ONE is true
NOT (!) inverts true/false value4


var age = 16;

age >= 20; // => false
age < 30; // => true
!(age < 30); // => false // NOT operator

age  >= 20 && age < 30; // => false
age >= 20 || age < 30; // => true






















/*

*/


/*

*/
