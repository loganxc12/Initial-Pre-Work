/*
SWITCH statements are similar to if statements and are useful when you have many
options to choose from. In a switch statement, case statements define possible
values and are executed from the first matched case until a break statement is
encountered. Case values are tested with strict equality (===).
*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
