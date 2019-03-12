/*
Use the LOGICAL AND (&&) operator to test multiple conditions at once - returns
true only if the operands to the left AND right of it are true, otherwise false.
*/

function testLogicalAnd(val) {
  // Only change code below this line
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
