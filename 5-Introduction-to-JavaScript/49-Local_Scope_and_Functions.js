/*
Variables declared WITHIN a function, as well as the function parameters have Local
scope. That means, they are only visible within that function.
*/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "I am local";
  console.log(myVar);
}
myLocalScope();
