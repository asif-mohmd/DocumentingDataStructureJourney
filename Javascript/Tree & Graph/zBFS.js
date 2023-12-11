class Graph {
    constructor() {
        this.adjecent = new Map()
    }

    addVertex(vertex){
        this.adjecent.set(vertex,[])
    }

    addEdge(vertex1,vertex2){
        this.adjecent.get(vertex1).push(vertex2)
        this.adjecent.get(vertex2).push(vertex1)
    }

    bfs(startingNode){
        const visited = new Set()

        let queue = []

        queue.push(startingNode)
        visited.add(startingNode)

        while(queue.length > 0){
            let vertex = queue.shift()
            console.log(vertex)

            let neighbors = this.adjecent.get(vertex)
            
            for(let neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }
}


const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("C","D")
graph.addEdge("B","D")

graph.bfs("A")