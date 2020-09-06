/* Variable - It is the container in which we can store a value

Piece of mem in computer in which John string is stored

Declaring variables
*/

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

/*
Data types :- 5

Primitive data type just means that its not for objects, unlike most things in JS, so they are just simple & primitive non-object data types.

number - floating point numbers they always have decimals e.g. 5.0
strings - sequence of characters, used just for text   
boolean - logical DT, that can only take one of the logical value, its either true or false
undefined - DT of a variable that does not have avalue yet, its automaticallty assigned to a variable that doesn't have a value yet, value that we've not assigned of defined, means non existent.
null - also means non existent, but slighly specfic

JS has a feature called dynamic typing, we do not have to manually define a DT.

It saves coding time, but difficult to find bugs.

Its best practice to give meaningful names to variables,

Camel case notation is used to separate two words with capital letter.

In JS, it is a Convention to use the camel case notation.

start with small letter in the beginning & capital letter with the second word.


Declare a variable & not assign a value to it,

It prints undefined to the console.

We the later go ahead & assign something to it.
*/

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

/*  Variable naming rules

Naming rules in declaring a variable :-


Variables cannot start with numbers or symbols except for the $ & _

Same for using symbol in the middle of a variable name. Use camel case notation.

We cannot use reserved JS keywords as Variable names, eg. function, delete

Use own made up names.
*/


/*
var __3years = 3;

var johnmark = 'John and Mark';

var function = 23;
var delete = 23;
var if = 23;*/