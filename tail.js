// function implementation
const tail = function(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    return arr.slice(1);
  }
};

const assertEqual = function(actual, expected) {
  let newArr = tail(actual);
  
  console.log(newArr);

  if (newArr.length !== expected.length) {
    return `🛑🛑🛑 Assertion Failed: Arrays have different lengths`;
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== expected[i]) {
      return `🛑🛑🛑 Assertion Failed: ${newArr} !== ${expected}`;
    }
  }

  return `✅✅✅ Assertion Passed: ${newArr} === ${expected}`;
};

// Testing function
console.log(assertEqual(([5, 6, 7]), [6, 7]));
console.log(assertEqual(([5, 5, 6, 8]), [5, 6, 7]));
console.log(assertEqual([], [6, 7]));