/*
The LESS THAN OR EQUAL TO (<=) operator compares two numbers and returns true if
the number to the left is less than or equal to the number to the right, otherwise
false. Will convert data types while comparing.
*/

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
