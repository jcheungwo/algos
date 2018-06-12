function toeplitzMatrix(matrix) {
  // go from top right to top left as starting points
  for (let i = matrix.length - 2; i >= 0; i--) {
    let temp = i;
    let check = matrix[0][i];
    for (let j = 0; j < matrix[0].length; j++, i++) {
      if (check !== matrix[j][i]) return false;
    }
    i = temp;
  }
  // go from top left to bottom left as starting points
  for (let i = 1; i < matrix.length - 1; i++) {
    let temp = i;
    let check = matrix[i][0];
    for (let j = 0; i < matrix.length; i++, j++) {
      if (check !== matrix[i][j]) return false;
    }
    i = temp;
  }
  return true;
}
