export const compressString = (str: string): string => {
  let compressedString = "";
  let occurrences = 0;
  for (let i = 0; i < str.length; i++) {
    occurrences++;

    if (i + 1 >= str.length || str[i + 1] !== str[i]) {
      compressedString += str[i] + occurrences;
      occurrences = 0;
    }
  }

  if (compressedString.length < str.length) {
    return compressedString;
  }
  return str;
};
