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

// assertion check
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// input: two objects
// output: boolean, true based on a perfect match, otherwise false
// steps:
// 1.start
// 2.iterate through the two objects
//   loop through all the keys in both objects using object.keys
//   if one key is not matching, return false
// 3.loop through all the values in both objects using object.values
//   if one value is not matching. return false
// 4.end
// function implementation
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

//test, primitives as values
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

//test, arrays as values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false