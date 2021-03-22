import { encodeURL } from "./encode-url";

describe("Testing encodeURL function", () => {
  it("should encode space", () => {
    const string = " ";
    const encodedURL = encodeURL(string);
    const expected = "%20";

    expect(encodedURL).toBe(expected);
  });

  it("should encode all spaces", () => {
    const string = "Hello My name is Gianpiero";
    const encodedURL = encodeURL(string);
    const expected = "Hello%20My%20name%20is%20Gianpiero";

    expect(encodedURL).toBe(expected);
  });

  it("should trim spaces", () => {
    const string = " Hello My name is Gianpiero   ";
    const encodedURL = encodeURL(string);
    const expected = "Hello%20My%20name%20is%20Gianpiero";

    expect(encodedURL).toBe(expected);
  });
});
