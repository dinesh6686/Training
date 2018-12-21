function isDiagonal(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (i !== j && matrix[i][j] !== 0)
        return false; //non diagonal elements must be zero
    }
  }
  return true;
}
console.log(isDiagonal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
console.log(isDiagonal([
  [1, 0, 0],
  [0, 2, 0],
  [0, 0, 3]
]));
