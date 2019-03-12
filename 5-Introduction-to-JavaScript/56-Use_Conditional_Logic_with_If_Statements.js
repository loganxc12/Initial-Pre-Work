/*
If statements are used to make decisions/express conditional logic in code - tells
Javascript to execute code in curly braces if "boolean condition" evaluates to true.
*/

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";
}

// Change this value to test
trueOrFalse(true);
