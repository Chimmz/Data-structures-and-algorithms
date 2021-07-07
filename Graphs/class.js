function Vertex(value) {
   this.data = value;
   this.connectedTo = null;
}

class Graph {
   constructor() {
      this.numberOfNodes = 0;
      this.adjacentList = {};
   }
   addVertex(node) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
   }

   addEdge(node1, node2) {
      if (!this.adjacentList[node1]) this.addVertex(node1);
      if (!this.adjacentList[node2]) this.addVertex(node2);
      // if (!this.adjacentList[node1] || !this.adjacentList[node2]) return;
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
   }

   showConnections() {
      const keyValuePairs = Object.entries(this.adjacentList);
      for (let [key, value] of keyValuePairs) {
         console.log(key, value);
      }
   }
}

const graph = new Graph();
graph.addVertex(3);
graph.addEdge(3, 4);

graph.showConnections();
console.log(graph);
