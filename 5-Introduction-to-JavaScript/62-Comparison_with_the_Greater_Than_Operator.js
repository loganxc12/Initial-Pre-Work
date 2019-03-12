/*
The GREATER THAN (>) operator compares two numbers and returns true if the number
to the left is greater than the number to the right, otherwise false.  Will convert
data types while comparing.
*/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
