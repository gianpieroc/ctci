const sortString = (string: string): string => string.split("").sort().join("");

export const isPermutation = (
  string: string,
  stringToCompare: string
): boolean => {
  if (string.length !== stringToCompare.length) {
    return false;
  }

  if (string === stringToCompare) {
    return true;
  }

  const sortedString = sortString(string).toLowerCase();
  const sortedStringToCompare = sortString(stringToCompare).toLowerCase();

  return sortedString === sortedStringToCompare;
};
