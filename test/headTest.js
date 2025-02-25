// test/assertEqualTest.js
const assertEqual = require("../assertEqual");
const head = require("../head");

//testing function
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");
assertEqual(head(123), "Hello");