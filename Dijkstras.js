class graph {
  constructor() {
    this.graph = {
      A: [("B", 6), ("D", 9), ("A", 10)],
      B: [("D", 5), ("F", 13), ("E", 16)],
      C: [("D", 6), ("H", 5), ("G", 21)],
      D: [("F", 8), ("H", 7)],
      E: [("G", 10)],
      F: [("E", 4), ("G", 12), ("A", 10)],
      G: [],
      H: [("F", 2), ("G", 14)]
    }
  }

  shortest_path(){
    let distances = {Infinity};
    distances["A"] = 0;
    let priaority_queue = [("A", 0)];
  }
}