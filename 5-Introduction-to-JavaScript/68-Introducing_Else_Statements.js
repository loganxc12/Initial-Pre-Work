/*
You can add an ELSE statement to if statements to provide an alternate block of
code to be executed
*/

function testElse(val) {
  var result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
