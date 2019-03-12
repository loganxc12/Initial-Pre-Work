/*
The LESS THAN (<) operator compares two numbers and returns true if the number to
the left is less than the number to the right, otherwise false. Will convert data
types while comparing.
*/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);
