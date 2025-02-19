// function implementation
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
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
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([], []), true));
console.log(assertEqual(eqArrays([1, 2], []), false));