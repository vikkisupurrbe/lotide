// input: an array to map;
//        a callback function
//
// output: a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// map arrow function as callback
const results1 = map(words, (word) => word[0]);
console.log(results1);

const results2 = map(words, (word) => word.length);
console.log(results2);

const results3 = map(words, (word) => word + " cat");
console.log(results3);

// assertion test
const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }

};

// equal array
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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(results3, [ 'ground cat', 'control cat', 'to cat', 'major cat', 'tom cat' ]);
// oh no not ground cat T_T