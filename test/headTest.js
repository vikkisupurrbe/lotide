// test/assertEqualTest.js
const assertEqual = require("../assertEqual");
const head = require("../head");

//testing function
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), "Hello"));
console.log(assertEqual(head(123), "Hello"));