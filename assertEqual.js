// function implementation
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


//testing function
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("apple", "apple");
assertEqual("apple", "orange");
assertEqual(501, 501);
assertEqual(501, 301);