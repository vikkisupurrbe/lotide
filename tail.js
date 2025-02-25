// assertion
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) ;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
  }

};

// function implementation
const tail = function(arr) {

  if (arr.length <= 1) {
    return arr;
  } 

  let tailArr = arr.slice(1);

  return tailArr;

};


// Testing function
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
