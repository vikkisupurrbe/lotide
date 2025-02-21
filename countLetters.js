// letters will be limited to strings
// assertion check
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) ;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
  }

};

// input: a sentence as a string
// output: an object, with letters as keys, and values should be the number of times a letter shows up in the given string. {string, number}
// steps:
// 1.Start
// 2.Initialize with an empty object result {}
// 3.Check the given string
//     if string is empty, return undefined
//     if string is not empty, proceed
// 4.Loop over the string, all the characters show up in the string will start with 1, increment by 1 if they show up again
// 6.End

const countLetters = function (sentence) {

  let results = {};

  if (sentence === '') {
    return undefined
  }

  for (const letter of sentence) {
   
      if (results[letter]) {
        results[letter] += 1
      } else {
        results[letter] = 1
      } 
    
  }
  
  return results;

};


// test, check if the number of times a letter shows up matches what we expected
console.log(countLetters("egg"));  // { e: 1, g: 2 }
console.log(countLetters(""));  // {} (empty object)
console.log(countLetters("Hello apple!"));
assertEqual(countLetters("egg")["e"], 1);
assertEqual(countLetters("Hello apple!")["p"], 2);