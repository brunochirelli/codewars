export default function findUniq(arr) {
  return arr.find((item) => {
    return arr.indexOf(item) === arr.lastIndexOf(item);
  });
}

findUniq([1, 1, 1, 2, 1, 1]);
