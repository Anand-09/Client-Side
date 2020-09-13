/**************************************
*** Some more ways of taking decisions with JavaScript ***
 
** We've learned about If / Else statement in order to take decisions, but, there're more ways of doing it,

*****The Ternary Operator and Switch Statements*****

It is also called the Conditional operator, 

It is an operator that basically allows us to write "like an" If else statement all in one line.

* Taking decions with JavaScript *

// Lets use a ternary operator by writing a Ternary operator which has 3 operands
//  We start with a condition & 

 & use a Question mark ? ( this is like the if block in a if else statement) 

& basically then we write what we want to happen if this condition were true, we lock to the console console.log

& for else block, we use : colon , to write the else block

Its called Ternary because it has 3 operands/parts :- 3 parts that interact with the operator , 

1st is the condition 

2nd is if block & 

3rd is the else block.

Ternary operators are alternative ways of writing conditionals but,

but,

there is even more,

& that is the switch statements,

*/

var firstName = 'John'; 
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice'; //  Defining a Varible what John drinks ?

console.log(drink);

if (age >= 18) {
    var drink = 'beer';
}  else {
    var drink = 'juice';
console.log(drink); 
}
/* Lets take another example :
***  We can do even better & assign values to variable using Ternary operator using very simple way.

// We assign/define a variable & we use the ternary operator right here after assigning the variable.

Ternary operator is executed before the assignment operator "=" 
*/

/*
*** Switch statement

** This is like a huge "if else statement" where we have multiple else if clauses, which we can easily replace with easy to understand syntax

Lets define a job,

then we write/say switch 

& we put in brackets what we want to test/ evaluate.

We switch the job basically & then we can add a couple of case clauses,

we say case & then we can say for Eg. 'teacher',

then the colon : & the in the next line we say, what we want to happen.

If job is equal to what is assigned in the variable then the first piece of code entered will be executed.

We can add a couple of more cases even & say whatever we want to print, 

So here,

We're comparing the job to a each of the different cases.

We also have to add a break statement,


in here we've to say break, it'll keep evaluating the next other cases & keep looking to see if they're also true & we don't want that to happen so we'll use the break keyword at the end of each block we want to execute,

If none of these applies,

We can then add a "default" & define what happens in that case, 

default:
        console.log(firstName + ' does something else.');

 & then we don't need to break because its already the last case there after default. 

So, if none of the above applies then here,

it'll basically be like,

an "else if" in an "if else statement",

if 


else if
else if

else


If none of them 

switch
case4/6
break 
default
*/

var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':    
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

/** We can also have multiple case clauses for the same piece of code that we want to execute


If we want to execute a code with a job a teacher & also instructor, then we can simply add another case here,
*/ 
/* So here,
its a simple way of replacing a huge if else statement,

switch statement looks a bit cleaner,

Switch case switches a variable & compares all of these cases to that variable.

*/
age = 18;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');

}

/*
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
*/
