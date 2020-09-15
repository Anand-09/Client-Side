/*** 
False becomes true if we use !(NOT);

OR ||

AND &&

a || b (if any value is true it'll enter the loop),
a && b (if any value false then will not execute),

(a && b) || (c || d),
E.g a = arunHt > varunHt (false)

(a && b) || c || d,


*/

var height;
height = 0;

if (height) {
    console.log('coming into this bracket because if condition is getting satisfied as height is undefined');
} else {
    console.log('not satisfied');
}



/**/

