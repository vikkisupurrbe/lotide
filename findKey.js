// assertion check
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) ;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`) ;
  }

};

// input: an object and a callback
// output: the first key for which the callback returns a truthy value, otherwise if unfound, return undefined
// steps:
// 1. create a function called findKey that takes an object and a callback
// 2. loop through the object
//    if the callback returns true, return the key
//    if false, keep going

const findKey = function (names, callback) {

  let nameWant = "";

  for (let name in names) {
    if (callback(names[name])) {
      return name;
    }
  }
  return undefined;
};

//testing function
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
},
(x) => x.stars === 2), 
"noma");