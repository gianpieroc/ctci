import { isPermutation } from "./is-permutation";

describe("Testing isPermutation function", () => {
  it("should return true if they're the same string", () => {
    const stringOne = "Hello World";
    const stringTwo = "Hello World";

    expect(isPermutation(stringOne, stringTwo)).toBe(true);
  });

  it("should return false if the strings are different", () => {
    const stringOne = "Hello World";
    const stringTwo = "Hello Gianpiero";

    expect(isPermutation(stringOne, stringTwo)).toBe(false);
  });

  it("should return true if string two is a permutation of string 1", () => {
    const stringOne = "Hello, my name is Gianpiero";
    const stringTwo = "Hello, Gianpiero is my name";

    expect(isPermutation(stringOne, stringTwo)).toBe(true);
  });

  it("should return true if string two is a permutation of string but at letter level", () => {
    const stringOne = "Hello, my name is Gianpiero";
    const stringTwo = "Hollo, mi nema ys Gianpiere";

    expect(isPermutation(stringOne, stringTwo)).toBe(true);
  });

  it("should return false if string two has a different letter", () => {
    const stringOne = "Hello, my name is Gianpiero";
    const stringTwo = "Hi, my name is Gianpiero";

    expect(isPermutation(stringOne, stringTwo)).toBe(false);
  });
});
