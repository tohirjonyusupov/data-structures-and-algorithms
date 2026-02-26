class Graph {
  constructor() {
    this.neighbours = {
      // A: ["B", "C", "D"],
      // B: ["A"],
      // C: ["A"],
      // D: ["A", "E", "F"],
      // E: ["D", "F"],
      // F: ["E", "D", "G"],
      // G: ["F", "H", "I"],
      // H: ["G"],
      // I: ["G"],
      A: ["B"],
      B: ["C"],
      C: ["E"],
      E: ["D", "F"],
      D: ["B"],
      F: [""],
    };
  }

  hasCycle() {
    const status = new Map();
    for (let neighbour in this.neighbours) {
      status.set(neighbour, -1);
    }
    const stack = [["A", 0]];
    status.set("A", 0);

    while (stack.length > 0) {
      let [current, visitedNeighbour] = stack.at(-1);

      if (status.get(current, -1)) {
        status.set(current, 0);
      }
      let neighbours = this.neighbours[current];
      if (visitedNeighbour < neighbours.length) {
        let neighbour = neighbours[visitedNeighbour];
        stack[stack.length - 1] = [current, visitedNeighbour + 1];
        if (status.get(neighbour) === -1) {
          stack.push([neighbour, 0]);
        } else if (status.get(neighbour) === 0) {
          return `Cycle detected, ${current} - ${neighbour}`;
        }
      } else {
        status.set(current, 1);
        stack.pop();
      }
    }
    return "No cycle";
  }

  addVertex(vertex) {
    if (this.neighbours[vertex] !== null) {
      this.neighbours[vertex] = [];
    }
  }
  addEdge(ver1, ver2) {
    if (!this.neighbours[ver1].includes(ver2)) this.neighbours[ver1].push(ver2);
    if (!this.neighbours[ver2].includes(ver1)) this.neighbours[ver2].push(ver1);
  }

  DFS(vertex) {
    const stack = [vertex];
    let visited = [];
    while (stack.length > 0) {
      vertex = stack.pop();
        visited.push(vertex);
      for (const neighbor of this.neighbours[vertex]) {
        if(!visited.includes(neighbor)){
          stack.push(neighbor);
        }
      }
    }
    return visited;
  }
}

const graph = new Graph();
console.log(graph.hasCycle());
