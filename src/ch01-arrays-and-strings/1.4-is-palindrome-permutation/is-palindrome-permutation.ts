export const isPalindromePermutation = (string: string): boolean => {
  if (string === "") {
    return false;
  }

  const matchesDict = {};

  for (let i = 0; i < string.length; i++) {
    if (!matchesDict[string[i]]) {
      matchesDict[string[i]] = 0;
    }
    matchesDict[string[i]] += 1;
  }

  const matchesCounts = Object.values(matchesDict);
  const evenCounts = matchesCounts.filter((n: number) => n % 2 === 0);
  const isOddDifferencesMoreThanOne =
    Math.abs(evenCounts.length - matchesCounts.length) > 1;

  return !isOddDifferencesMoreThanOne;
};
