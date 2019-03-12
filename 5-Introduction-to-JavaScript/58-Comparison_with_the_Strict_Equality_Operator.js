/*
The Strict equality operator (===) is similar to the equality operator (==) but
does not perform a type conversion - must be the same value AND data type to return
true.
*/

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
