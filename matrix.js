class Graph {
  constructor() {
    this.graph = [
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 1],
      [0, 1, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ];
  }

  detectCycleBfs() {
    let visited = [0];
    let queue = [0];
    while (queue) {
      let current = queue.shift();
      for (
        let niegbour = 0;
        niegbour < this.graph[current].length;
        niegbour++
      ) {1``
        let conn = this.graph[current][niegbour];
        if (conn === 1) {
          if (!visited.includes(niegbour)){
            visited.push(niegbour);
            queue.push(niegbour);
          } 
          // else if()
        }
      }
    }
  }
}
