const assert = require('chai').assert;
const tail = require("../tail")

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [] for an array with one element", () => {
    const input = ['Hello'];
    const result = tail(input);
    assert.deepEqual(result, []);
  });

  it("returns [] for an empty array", () => {
    const input = [];
    const result = tail(input);
    assert.deepEqual(result, []);
  });

  it("does not modify the original array", () => {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    tail(input); // Call the function, but ignore the return value
    assert.deepEqual(input, ['Hello', 'Lighthouse', 'Labs']); // Original array should remain unchanged
  });

});

