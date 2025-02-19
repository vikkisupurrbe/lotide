// letters will be limited to strings
// assertion check
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
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
// 4.Deconstruct the string into individual strings containing just one letter, put them into an array called letterList, e.g: const letterList = "egg".split("");
// 5.Iterate through the array, all the letters show up in the string will start with 1, increment by 1 if they show up again
// 6.End

const countLetters = function (list) {

  if (list.length === 0){
    return undefined;
  }

  let results = {};

  for (const letter of list) {
   
      if (results[letter]) {
        results[letter] += 1
      } else {
        results[letter] = 1
      } 
    
  }
  
  return results;

};

const letterDeconstruct= function (sentence) {
  
  let letterList = sentence.split('')

  return letterList;

}

// test, check if the number of times a letter shows up matches what we expected
console.log(letterDeconstruct('egg'));
console.log(letterDeconstruct(''));
console.log(countLetters(letterDeconstruct('egg')));
console.log(assertEqual(countLetters(letterDeconstruct('egg'))['e'], 1));
console.log(assertEqual(countLetters(letterDeconstruct('')), undefined));