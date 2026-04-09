class Matrix {
  constructor(matrix = []) {
    if (new.target === Matrix) {
      throw new Error("Cannot instantiate abstract class Matrix directly");
    }
    this.matrix = matrix;
  }

  // add random value to matrix
  populate() {
    throw new Error("Method 'populate()' must be implemented");
  }

  // search for a value in a matrix
  search(target) {
    throw new Error("Method 'search(target)' must be implemented");
  }

  // add a new row to matrix
  addRow() {
    throw new Error("Method 'addRow()' must be implemented");
  }

  // remove column from matrix mutably and immutably
  removeColumn(index) {
    throw new Error("Method 'removeColumn(index)' must be implemented");
  }

  // sort given column
  sortColumn(index) {
    throw new Error("Method 'sortColumn(index)' must be implemented");
  }

  bubbleSort(arr) {
    const result = [...arr];
    const n = result.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }

    return result;
  }

  printMatrix() {
    if (!Array.isArray(this.matrix)) {
      throw new Error("'matrix' must be an array");
    }

    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i]);
    }
  }

  /**
   * xxxxx
   * xyyyx
   * xytyx
   * xyyyx
   * xxxxx
   */
  printSpiralFormat() {
    throw new Error("Method 'printSpiralFormat()' must be implemented");
  }
}

// module.exports = Matrix;