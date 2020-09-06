/*

Operator Precedence

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

*/
var now = 2020;
var yearAnand = 1993;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearAnand >= fullAge;//true
console.log(isFullAge);

// Grouping :- Calculate the Average age of John & his friend.

var ageAnand = now - yearAnand;
var agePiyush = 23;
var average = (ageAnand + agePiyush) / 2;
console.log(average);

// Multiple assignments :- keywords- precedence & associativity.
var x,y;
x=y= (3+5) *4-6// 8*4-6 //26
console.log(x,y);

// More operators

x=x*2

console.log(x);

x*=2;
console.log(x);

x+=10;
console.log(x);

// Increment

x=x+1
console.log(x);

x+=1
console.log(x);
x++
console.log(x);

x--;
console.log(x);


