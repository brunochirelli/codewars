import findUniq from "./findUniq";

describe("findUniq function", () => {
  test("basic functionality", () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
    expect(findUniq([0, 0, 0.55, 0, 0])).toBe(0.55);
    expect(findUniq([3, 10, 3, 3, 3])).toBe(10);
  });
});
