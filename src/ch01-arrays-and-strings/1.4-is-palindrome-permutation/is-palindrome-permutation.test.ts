import { isPalindromePermutation } from "./is-palindrome-permutation";

describe("Testing isPalindromePermutation function", () => {
  it("should return true is a palindrome", () => {
    expect(isPalindromePermutation("tacocat")).toBe(true);
    expect(isPalindromePermutation("ataocct")).toBe(true);
  });

  it("should return false when it is not a palindrome", () => {
    expect(isPalindromePermutation("Gianpiero")).toBe(false);
  });
});
