// require assertEqual
const assertEqual = require("./assertEqual");

// function implementation
const head = function(arr) {
  if (!Array.isArray(arr)) {
    console.log("Not an array");
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;