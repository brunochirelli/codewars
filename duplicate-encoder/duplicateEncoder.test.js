import duplicateEncoder from "./duplicateEncoder";

describe("duplicateEncoder function", () => {
  test("fixed tests", () => {
    expect(duplicateEncoder("din")).toBe("(((");
    expect(duplicateEncoder("recede")).toBe("()()()");
    expect(duplicateEncoder("Success")).toBe(")())())");
    expect(duplicateEncoder("(( @")).toBe("))((");
  });
});
