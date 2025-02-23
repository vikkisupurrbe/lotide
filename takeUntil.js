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

// input: 1. an array to work with
//        2. a callback
// output: a slice of the array with elements taken from the beginning

// steps: 
// 1. create a function that takes an array and a callback
// 2. initialize with an empty array, dataWant, to collect the expected output
// 3. loop through the array
//    if callback examines false, keep going
//    if callback examines true, break
// 4. return dataWant

// function implementation: takeUntil will keep collecting items from a provided array until the clalback provided returns a truthy value


const takeUntil = function (array, callback) {

  let dataWant = [];

  for (let value of array) {
    if (callback(value)) {
      break;
    }
    dataWant.push(value);
  }
  return dataWant;
};

// expected input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// assertion test
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])

