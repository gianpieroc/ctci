import { compressString } from "./compress-string";

describe("Testing compressString", () => {
  it("should compress string", () => {
    const inputValue = "aabcccccaaa";
    const outputValue = "a2b1c5a3";

    expect(compressString(inputValue)).toBe(outputValue);
  });

  it("should return the same input value if the compressed string is larger than the input", () => {
    const inputValue = "abca";

    expect(compressString(inputValue)).toBe(inputValue);
  });
});
