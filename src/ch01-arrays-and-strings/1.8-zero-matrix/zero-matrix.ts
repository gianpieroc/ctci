export const zeroMatrix = (matrix: number[][]) => {
  const firstIndex = 0;
  if (!matrix || !matrix.length) throw Error("invalid matrix");

  if (matrix.length === 1 && matrix[firstIndex].length === 1) return matrix;

  const columnCoords = new Set();

  matrix.forEach((row) => {
    if (row.includes(firstIndex)) {
      row.forEach((columnCell, index) => {
        if (columnCell === 0) columnCoords.add(index);
        row[index] = 0;
      });
    }
  });

  matrix.forEach((row) => {
    if (row[firstIndex] !== 0) {
      columnCoords.forEach((col: number) => (row[col] = 0));
    }
  });

  return matrix;
};
