class Matrix {
  constructor() {
    this.matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
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

  printSpiralFormat() {
    let left = 0;
    let right = this.matrix[0].length - 1;
    let top = 0;
    let bottom = this.matrix.length - 1;
    let arr = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            arr.push(this.matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            arr.push(this.matrix[i][right]);
        }
        right--;

        for (let i = right; i >= left; i--) {
            arr.push(this.matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            arr.push(this.matrix[i][left]);
        }
        left++;
    }
    return arr;
}
}

const g = new Matrix()
console.log(g.printSpiralFormat());
