class Graph{
    constructor(){
        this.adjacencyList = new Map()
    }

    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[])
        }
    }

    addEdge(vertex1,vertex2,weight){
        this.adjacencyList.get(vertex1).push({v:vertex2,w:weight})
        this.adjacencyList.get(vertex2).push({v:vertex1,w:weight})

    }
display(){
    console.log(this.adjacencyList)
}


}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B",10)
graph.addEdge("B","C",20)

graph.display()