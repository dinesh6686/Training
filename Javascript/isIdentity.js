function isIdentity(matrix) {
  var bool = true;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if ((i !== j && matrix[i][j] !== 0) || (i === j && matrix[i][j] !== 1))
        bool = false; //non diagonal elements must be zero and diagonal must be one.
    }
  }
  return bool;
}
console.log(isIdentity([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]));
console.log(isIdentity([
  [1, 0, 0],
  [0, 1, 0],
  [1, 0, 1]
]));
