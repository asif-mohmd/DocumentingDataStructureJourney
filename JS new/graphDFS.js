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

    dfs(startingNode){
        let visited = new Set()

        let explore = (vertex)=>{
            visited.add(vertex)
            console.log(vertex)

            let neighbors = this.adjacencyList.get(vertex)

            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    explore(neighbor)
                }
            }

        }

        explore(startingNode)
    }

   
}



const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

graph.dfs("A")
