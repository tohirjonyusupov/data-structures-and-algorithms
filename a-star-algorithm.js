class MinHeap {
  constructor(compare = (a, b) => a - b) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    const top = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }

    return top;
  }

  siftUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parent]) >= 0) {
        break;
      }

      [this.heap[index], this.heap[parent]] = [
        this.heap[parent],
        this.heap[index],
      ];
      index = parent;
    }
  }

  siftDown(index) {
    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if (
        left < this.heap.length &&
        this.compare(this.heap[left], this.heap[smallest]) < 0
      ) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.compare(this.heap[right], this.heap[smallest]) < 0
      ) {
        smallest = right;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

class Graph {
  constructor(graphData = {}) {
    this.graph = {};
    this.coords = {};

    for (const vertex of Object.keys(graphData)) {
      this.graph[vertex] = graphData[vertex].neighbors;
      this.coords[vertex] = graphData[vertex].coords;
    }
  }

  predict(start, end) {
    const [x1, y1] = this.coords[start];
    const [x2, y2] = this.coords[end];
    return Math.floor(Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2));
  }

  a_star(start, end) {
    const distances = {};
    const parentMap = { [start]: null };
    const visited = new Set();
    const pq = new MinHeap((a, b) => a.weight - b.weight);
    const log = [];
    let countVisited = 0;

    for (const vertex of Object.keys(this.graph)) {
      distances[vertex] = Infinity;
    }

    distances[start] = 0;
    pq.push({ weight: 0, node: start });

    while (pq.size()) {
      const current = pq.pop();
      const curr = current.node;

      countVisited += 1;
      log.push(curr);

      if (curr === end) {
        const result = [];
        let node = curr;

        while (node) {
          result.push(node);
          node = parentMap[node];
        }

        return [result.reverse(), distances[end], countVisited, log];
      }

      if (visited.has(curr)) {
        continue;
      }

      visited.add(curr);

      for (const [neighbor, cost] of this.graph[curr] || []) {
        if (visited.has(neighbor)) {
          continue;
        }

        const newWeight = distances[curr] + cost;

        if (newWeight < distances[neighbor]) {
          distances[neighbor] = newWeight;
          parentMap[neighbor] = curr;
          pq.push({
            node: neighbor,
            weight: newWeight + this.predict(neighbor, end),
          });
        }
      }
    }

    return null;
  }
}

// Example usage:
// const graph = new Graph(nighmare);
// console.log(graph.a_star(40, 99));
