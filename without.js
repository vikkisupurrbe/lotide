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
//    copy all elements from srcArr to newArr by looping through each element in srcArr and push them into newArr
// 3. loop through the source array to see if there is an exact match to the itemsToRemove array
//    pop the exact same element in the newArr
//    store the result array in the new array
// 4. Check if the source array is alter by using assertArraysEqual
// 5. End

const without = function (srcArr, itemsToRemoveArr) {

  let newArr = [];

  for (let element of srcArr) {
    newArr.push(element);
  }

  for (let item of itemsToRemoveArr) {
    if (srcArr.includes(item)) {
      newArr.pop(item);
    }
  }
  console.log (newArr);
};



// testing to check without() alters the source array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// testing without()
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], []);
without([], [1, 2, 3]);
without([], []);