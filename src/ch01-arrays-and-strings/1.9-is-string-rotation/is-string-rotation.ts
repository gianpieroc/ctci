const isStringRotation = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) {
    return false;
  }
  const duplicatedS1 = s1 + s1;

  return duplicatedS1.includes(s2);
};

export default isStringRotation;
