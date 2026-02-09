class MinHeap {
  constructor() {
    this.heap = [7,4,5,1,9,8,3,6];
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  findLeftChild(i) {
    return i * 2 + 1;
  }

  findRightChild(i) {
    return i * 2 + 2;
  }

  getMin() {
    return this.heap[0];
  }

  updateByIndex(i, value) {
    this.heap[i] = value;
    this.siftDown(i);
  }

  delete() {
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.siftDown(0);
  }

  add(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  heapSort() {
    const result = [];
    while (this.heap.length) {
      [this.heap[0], this.heap[this.heap.length - 1]] = [
        this.heap[this.heap.length - 1],
        this.heap[0],
      ];
      result.push(this.heap.pop());
      this.siftDown(0);
    }
    return result;
  }

  siftUp(i) {
    let parent = Math.floor((i - 1) / 2);
    while (i !== 0 || this.heap[parent] < this.heap[i]) {
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }

  siftDown(i) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    while (true) {
      let smallest = i;
      if (this.heap.length > left && this.heap[smallest] > this.heap[left]) {
        smallest = left;
      }
      if (this.heap.length > right && this.heap[smallest] > this.heap[right]) {
        smallest = right;
      }

      if (smallest === i) {
        break;
      }

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
      left = i * 2 + 1;
      right = i * 2 + 2;
    }
  }

  heapify(){
    for(let i = this.heap.length -1; i >= 0; i--){
      this.siftDown(i)
    }
  }
}

const minHeap = new MinHeap();
minHeap.heapify()
// minHeap.siftDown(0);
// console.log(minHeap.heap);

// minHeap.add(5);
// console.log(minHeap.heap);


const sortedArray = minHeap.heapSort();
console.log(sortedArray);

// minHeap.delete();
// console.log(minHeap.heap);