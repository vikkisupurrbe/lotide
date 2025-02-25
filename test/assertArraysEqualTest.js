const assertArraysEqual = require("../assertArraysEqual");

// testing
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 4], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([], []);