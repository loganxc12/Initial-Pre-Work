/*
Another use of BRACKET NOATION is accessing a property which is stored as the
value of a variable - useful when iterating through an object's properties or
when the property's name is generated dynamically during execution. You do NOT
use quotes around variable names.
*/

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;
var playerNumber = 16;
var player = testObj[playerNumber];
