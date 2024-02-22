class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    display() {
        console.log(this.adjacencyList);
    }

   bfs(startingNode){
    let visited = new Set()
    let queue = []

    visited.add(startingNode)
    queue.push(startingNode)

    while(queue.length>0){
        const currentVertex = queue.shift()
        console.log(currentVertex)

        let neighbors = this.adjacencyList.get(currentVertex)
        for(const neighbor of neighbors){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }


   }

   
}



const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

graph.bfs("A")
