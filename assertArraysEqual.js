// function implementation
// input: boolean, true or false from the function eqArrays
// output: a string, showing the message, pass if two arrays are the same, fail if not

const assertArraysEqual = function(result) {

  if (result) {
    return "✅✅✅ Assertion Passed: The two arrays are the same.";
  } else {
    return "🛑🛑🛑 Assertion Failed: The two arrays are different";
  }

};

// input: two arrays
// output: boolean, true if two arrays are the same, false if they are different
// steps:
//1.Start
//2.Define a function eqArrays to check if the two given arrays are the same
// if the length of two arrays are not the same, return false
// if the length of two arrays are the same, proceed
// if two arrays are both empty, return true
//3.iterate through the elements in arr1, compare arr1[i] with arr2[i]
// if there is a mismatch, return false
// if it's a perfect match, return true
//4.End

const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    
  }
  return true;
  
};

// testing
console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])));
console.log(assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 3])));
console.log(assertArraysEqual(eqArrays([1, 2], [1, 2, 3])));
console.log(assertArraysEqual(eqArrays([], [])));
