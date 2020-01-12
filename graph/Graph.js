class Graph {
  constructor() {
    this.AdjList = new Map()
  }

  // 基础操作方法
  // addVertex(vertex) {}
  addVertex(vertex) {
    if (!this.AdjList.has(vertex)) {
      this.AdjList.set(vertex, [])
    } else {
      throw 'Already Exists!!'
    }
  }

  // addEdge(vertex, node) {}
  // print() {}
}
