// test/assertEqualTest.js
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// testing
eqArrays([1, 2, 3], [1, 2, 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2], []), false);