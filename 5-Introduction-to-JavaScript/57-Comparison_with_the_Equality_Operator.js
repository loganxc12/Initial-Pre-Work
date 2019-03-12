/*
COMPARISON OPERATORS return the boolean true or false. The equality operator (==)
compares two values and returns true if they're equivalent or false if they are not.
With the equality operator JavaScript uses "Type Coercion" to convert one data type
into another in order to compare them.
*/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
