import { isUnique, isUniqueNoDataStructures } from "./is-unique";

describe("Testing isUnique Function", () => {
  it("should return true when all characters are equal", () => {
    expect(isUnique("ajc")).toBe(true);
  });

  it("should return false when at least one character is different", () => {
    expect(isUnique("ajcdjb")).toBe(false);
  });
});

describe("Testing isUniqueNoDataStructures Function", () => {
  it("should return true when all characters are equal", () => {
    expect(isUniqueNoDataStructures("ajc")).toBe(true);
  });

  it("should return false when at least one character is different", () => {
    expect(isUniqueNoDataStructures("ajcdjb")).toBe(false);
  });
});
