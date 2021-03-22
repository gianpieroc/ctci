import { isOneAway } from "./is-one-away";

describe("Testing isOneAway function", () => {
  it("should return false if the differences on the length of both strings are larger than 1", () => {
    const stringOne = "Hello World12";
    const stringTwo = "Hello World";

    expect(isOneAway(stringOne, stringTwo)).toBe(false);
  });

  it("should return true when both strings are the equals", () => {
    const stringOne = "Hello World";
    const stringTwo = "Hello World";

    expect(isOneAway(stringOne, stringTwo)).toBe(true);
  });

  it("should return true when the are only one differences", () => {
    const stringOne = "Hello Word";
    const stringTwo = "Hello World";

    expect(isOneAway(stringOne, stringTwo)).toBe(true);
  });

  it("should return false when the are more than one differences", () => {
    const stringOne = "Hell Word";
    const stringTwo = "Hello World";

    expect(isOneAway(stringOne, stringTwo)).toBe(false);
  });

  it("compare book examples", () => {
    expect(isOneAway("pale", "ple")).toBe(true);
    expect(isOneAway("pales", "pale")).toBe(true);
    expect(isOneAway("pale", "bale")).toBe(true);
    expect(isOneAway("pale", "bake")).toBe(false);
    expect(isOneAway("cale", "bake")).toBe(false);
    expect(isOneAway("male", "make")).toBe(true);
  });
});
