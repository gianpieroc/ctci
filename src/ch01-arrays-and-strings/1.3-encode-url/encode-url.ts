const isSpace = (char: string): boolean => /\s/.test(char);

export const encodeURL = (string: string): string => {
  const encodedSpace = "%20";
  if (string === " ") {
    return encodedSpace;
  }

  return string
    .trim()
    .split("")
    .map((char) => (isSpace(char) ? encodedSpace : char))
    .join("");
};
