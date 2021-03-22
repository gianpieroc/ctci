const onReplace = (firstString: string, stringToCompare: string): boolean => {
  let occurrences = 0;
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== stringToCompare[i]) {
      occurrences++;
    }
  }
  if (occurrences > 1) {
    return false;
  }
  return true;
};

const onEdit = (firstString: string, stringToCompare: string): boolean => {
  let index1 = 0;
  let index2 = 0;
  while (index1 < firstString.length && index2 < stringToCompare.length) {
    if (firstString[index1] !== stringToCompare[index2]) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

export const isOneAway = (
  firstString: string,
  stringToCompare: string
): boolean => {
  if (firstString.length === stringToCompare.length) {
    return onReplace(firstString, stringToCompare);
  } else if (firstString.length + 1 === stringToCompare.length) {
    return onEdit(firstString, stringToCompare);
  } else if (firstString.length + -1 === stringToCompare.length) {
    return onEdit(stringToCompare, firstString);
  }
  return false;
};
