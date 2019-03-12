/*
To recap:
  - The equality operator will perform a type conversion, and then evaluate the
  values (if not the same data type).
  - The strict equality operator will compare both the data type and value as-is,
  without any type conversion.
Also, you can determine the type of a variable/value with the typeof operator
*/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
