/*
You can build a compound string from variables and string literals using the concatenation
(+) operator. Be sure to pay attention to spaces.
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
