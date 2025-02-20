// Show the message for the eqArray check
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }

};

// Check if the given two arrays are the same
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

// input: a source array (srcArr), a itemsToRemove array
// output: a new array with only those elements from source that are not present in the itemsToRemove array
// steps:
// 1. Start
// 2. initilize with an empty array, newArr [] (so that we don't alter the source array)
// 3. Loop through all the elements in the srcArr
//    If an element is not included in the itemsToRemove array, meaning that we need to keep it, push to the newArr
// 4. Check if the source array is alter by using assertArraysEqual
// 5. End

const without = function(srcArr, itemsToRemoveArr) {

  let newArr = [];

  for (let i = 0; i < srcArr.length; i++) {
    if (!itemsToRemoveArr.includes(srcArr[i])) {
      newArr.push(srcArr[i]);
    }
  }

  return newArr;

};



// testing to check without() alters the source array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// testing without()
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [])); // => [1, 2, 3]
console.log(without([], [1, 2, 3])); // => []
console.log(without([], [])); //