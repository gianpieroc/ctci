export const isUnique = (string: string): boolean => {
  const repetitionAlphabetMap = {};
  let result = true;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (!repetitionAlphabetMap[letter]) {
      repetitionAlphabetMap[letter] = 1;
    } else {
      result = false;
    }
  }

  return result;
};

export const isUniqueNoDataStructures = (string: string): boolean => {
  let result = true;

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        result = false;
        break;
      }
    }
  }

  return result;
};
