const assertArraysEqual = require("../assertArraysEqual");
const mid = require("../middle");

//Test code
console.log(mid([1, 2, 3, 4]))
assertArraysEqual(mid([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(mid([]), []);
assertArraysEqual(mid([1, 2]), []);
assertArraysEqual(mid(["1", "2", "3", "4"]), ["2", "3"]);