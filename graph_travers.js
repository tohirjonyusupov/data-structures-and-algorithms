class Graph {
  constructor() {
    this.neighbours = {
      A: ["B", "C", "D"],
      B: ["A"],
      C: ["A"],
      D: ["A", "E", "F"],
      E: ["D", "F"],
      F: ["E", "D", "G"],
      G: ["F", "H", "I"],
      H: ["G"],
      I: ["G"],
    };
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
console.log(graph.DFS('A'));
