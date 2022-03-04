const { reverseArrayOfDigits } = require("./reverseArrayOfDigits");

it("should reverse the array of digits", () => {
  expect(reverseArrayOfDigits(123)).toEqual([3, 2, 1]);
});
