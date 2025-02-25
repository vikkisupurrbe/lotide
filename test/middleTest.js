const assert = require('chai').assert;
const mid = require("../middle");

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const result = mid(input);
    assert.deepEqual(result, [2, 3]);
  });

  it("returns [] for an empty array", () => {
    const input = [];
    const result = mid(input);
    assert.deepEqual(result, []);
  });

  it("returns [] for an array with two elements", () => {
    const input = [1, 2];
    const result = mid(input);
    assert.deepEqual(result, []);
  });

  it("returns ['2', '3'] for ['1', '2', '3', '4']", () => {
    const input = ["1", "2", "3", "4"];
    const result = mid(input);
    assert.deepEqual(result, ["2", "3"]);
  });
});
