// assertion check
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // use the util library's inspect function, to display the full object being compared
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

// equal object check
const eqObjects = function(object1, object2) {

  const keysOfObj1 = Object.keys(object1);
  const keysOfObj2 = Object.keys(object2);

  // check if both objects have the same number of keys
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }

  // check if equal array check is needed
  // check if each key in object1 exists in object2 and has the same value
  for (let key of keysOfObj1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
  
};


//test
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); 
// Should print "✅✅✅ Assertion Passed"
assertObjectsEqual({}, { b: 2, a: '1' }); 
// Should print "🛑🛑🛑 Assertion Failed"
assertObjectsEqual({ a: ['1'], b: 2 }, { b: 2, a: '1' }); 
// Should print "🛑🛑🛑 Assertion Failed"
