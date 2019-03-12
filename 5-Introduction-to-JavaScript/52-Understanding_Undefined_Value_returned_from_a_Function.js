/*
When a function doesn't have an explicit return statement, it returns undefined
by default (after processing inner code and possibly manipulating data)
*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();
