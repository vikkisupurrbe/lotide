// function implementation
// input: boolean, true or false from the function eqArrays
// output: a string, showing the message, pass if two arrays are the same, fail if not
const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
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


module.exports = assertArraysEqual;

