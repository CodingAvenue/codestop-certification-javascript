const searchMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0) {
      return false;
    }
  
    const m = matrix.length;
    const n = matrix[0].length;
  
    let i = 0;
    let j = n - 1;
  
    while (i < m && j >= 0) {
      if (target === matrix[i][j]) {
        return true;
      } else if (target < matrix[i][j]) {
        j--;
      } else {
        i++;
      }
    }
  
    return false;
};

matrix = [ [1,   4,  7, 11, 15],
   [2,   5,  8, 12, 19],
   [3,   6,  9, 16, 22],
   [10, 13, 14, 17, 24],
   [18, 21, 23, 26, 30]
   ];

console.log(searchMatrix(matrix,150));