import { assembleString } from "./assembleString";

it("should assemble missing string letters", () => {
  expect(assembleString(["a*cde", "*bcde", "abc*e"])).toBe("abcde");
  expect(assembleString(["*ell*", "h*l*o"])).toBe("hello");
});

it("should assemble with uncertain", () => {
  expect(assembleString(["a*c**", "**cd*", "a*cd*"])).toBe("a#cd#");
});
