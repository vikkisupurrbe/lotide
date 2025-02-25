// test/assertEqualTest.js
const assertEqual = require("../assertEqual");

//testing function
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual("apple", "apple"));
console.log(assertEqual("apple", "orange"));
console.log(assertEqual(501, 501));
console.log(assertEqual(501, 301));
