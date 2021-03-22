import isStringRotation from "./is-string-rotation";

describe("Testing isStringRotation function", () => {
  it("should return false when the 2 arguments have different length", () => {
    const stringOne = "waterbottle";
    const stringTwo = "wwwaterbottle";

    expect(isStringRotation(stringOne, stringTwo)).toBe(false)
  })

  it.each([
    ["aterbottlew"],
    ["terbottlewa"],
    ["erbottlewat"],
    ["rbottlewate"],
    ["bottlewater"],
    ["ottlewaterb"],
    ["ttlewaterbo"],
    ["tlewaterbot"],
    ["lewaterbott"],
    ["ewaterbottl"]
  ])("should return true when %s is a rotation of waterbottle", (stringToCompare:string) => {
    expect(isStringRotation("waterbottle", stringToCompare)).toBe(true)
  })
})