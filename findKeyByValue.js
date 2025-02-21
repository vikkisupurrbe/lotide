// assertion check
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) ;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
  }

};

// input: an object and a string
// output: the first key which contains the given value, if no key with the given value is found, return undefined
// steps:
// 1. start
// 2. findKeyByValue takes parameters object: showList, string: showName
//    iterate the objecct
//    if the key contains the given value, return the key
//    if no key with the given value is found, return undefined
// 3. end

// function implementation

const findKeyByValue = function (showList, showName) {

  for (let genre in showList) {

    let show = showList[genre]

    if (show === showName) {
      return genre
    };
    
  } 
    return undefined;

};

// test
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);