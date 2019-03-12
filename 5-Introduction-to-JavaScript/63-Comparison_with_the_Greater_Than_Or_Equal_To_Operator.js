/*
The GREATER THAN OR EQUAL TO (>=) operator compares two numbers and returns true if
the number to the left is greater than or equal to the number to the right, otherwise
false. Will convert data types while comparing.
*/

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
