export const assembleString = (arr) => {
  const result = [];

  arr.map((str) => {
    str
      .split("")
      .map((char, i) => (result[i] = char === "*" ? result[i] || "#" : char));
  });

  return result.join("");
};
