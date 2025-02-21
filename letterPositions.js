// letters will be limited to strings
// assertion check
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }

};

// equal array check
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

// input: a string
// output: an object with letters (exclude spaces) as the keys , values will appear as an array of numbers, showing their positions (indices) in the string
// steps:
// 1. If string is empty, return undefined
// 2. Iterate through the given string
//      Start with an empty object, results {}
//      If the letter is not already there, create an empty array and push the letter's index to the array
//      If the letter is already there, and it's not " ", push the index to the array
// 4. End


const letterPositions = function (sentence) {
  
  const results = {};
  // logic to update results here

  if (sentence === "") {
    return undefined
  }
  
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];

    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [];
      }
    results[letter].push(i);
    }
  } 

  return results;

};

// test
// for example. "hello" will return {h: [0], e: [1], l: [2, 3], o: [4]}
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]); //assertion check should pass
assertArraysEqual(letterPositions("hello").l, [2, 3]); 
assertArraysEqual(letterPositions("hello").o, [4]);
