import { findNeedle } from "./findNeedle";

it("Should find the needle inside array", () => {
  expect(findNeedle(["a", "needle", "b", "c"])).toBe(
    "found the needle at position 1"
  );
});
