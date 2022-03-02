export default function duplicateEncoder(word) {
  return word
    .toLowerCase()
    .split("")
    .reduce((prev, curr, _, arr) => {
      const code = arr.filter((char) => char === curr).length > 1 ? ")" : "(";

      return prev.concat(code);
    }, "");
}

duplicateEncoder("Success");

const bestSolution = (word) => {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      w.indexOf(a);
      w.lastIndexOf(a);

      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
};

bestSolution("success");
