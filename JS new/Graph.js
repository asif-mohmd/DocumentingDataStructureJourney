class Graph{
    constructor(){
        this.adjacencyList = new Map()
    }

    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[])
        }
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList.get(vertex1).push(vertex2)
        this.adjacencyList.get(vertex2).push(vertex1)

    }
display(){
    console.log(this.adjacencyList)
}


}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()