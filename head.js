// function implementation
const head = function (arr) {
  if (!Array.isArray(arr)) {
    console.log("Not an array");
    return undefined;
  } else {
    return arr[0];
  }
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

};


//testing function
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), "Hello"));
console.log(assertEqual(head(123), "Hello"));