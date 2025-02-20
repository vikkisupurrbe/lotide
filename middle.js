// Assertion check
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

// input: an array, baseArr
// output: an array with only the middle element(s), midArr
// steps:
// 1.start
// 2.check array length
// start midArr with an empty array
// if baseArr's length <= 2, return an empty array
// if baseArr's length > 2, and has odd number of elements, push the middle 1 element (baseArr.length - 1) / 2 to midArr
// if baseArr's length > 2, and has even number of elements, push the middle 2 elements baseArr.length / 2, baseArr.length / 2 - 1
// 3.return midArr
// 4.check if midArr match with the expected array

//Actual function
const mid = function (baseArr) {
  
  let midArr = [];

  if (baseArr.length <= 2) {
  } else {
      if (baseArr.length % 2 !== 0) {
        midArr.push(baseArr[(baseArr.length - 1) / 2]);
      } else {
          midArr.push(baseArr[baseArr.length / 2 - 1]);
          midArr.push(baseArr[baseArr.length / 2 ]);
      }
  }
  return midArr;
};

//Test code
console.log(mid([1, 2, 3, 4]))
assertArraysEqual(mid([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(mid([]), []);
assertArraysEqual(mid([1, 2]), []);
assertArraysEqual(mid(["1", "2", "3", "4"]), ["2", "3"]);