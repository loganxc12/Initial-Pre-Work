/*
When a return statement is reached, the execution of the current function stops
(and control returns to the calling location). You can strategically use return
statements to exit/abort a function early under certain conditions.
*/

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
