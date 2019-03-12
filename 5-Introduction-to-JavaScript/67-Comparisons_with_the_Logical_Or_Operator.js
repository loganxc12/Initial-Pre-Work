/*
Use the LOGICAL OR (||) operator to test multiple conditions at once - returns
true if either of the operands are true, otherwise false.
*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
