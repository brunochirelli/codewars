export const findNeedle = (arr, needle = "needle") => {
  let position;

  arr.find((elem, index) => elem === needle && (position = index)); // ?

  return `found the needle at position ${position}`;
};
const bestSolution = (haystack) =>
  "found the needle at position " + haystack.indexOf("needle");
