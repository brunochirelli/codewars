import { randomNumber } from "./randomNumber";

it("Should return a random number from 1 to n length of an array", () => {
  const arr = ["a", "b", "c", "d"];
  expect(randomNumber(arr)).toBeOneOf(arr);
});
