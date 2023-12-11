class Graph{
    constructor(){
        this.adjecent = new Map()
    }

    addVertex(vertex){
        this.adjecent.set(vertex,[])
    }

    addEdge(vertex1,vertex2){
        this.adjecent.get(vertex1).push(vertex2)
        this.adjecent.get(vertex2).push(vertex1)
    }

    dfs(startingNode){
        const visisted = new Set()

        const explore = (vertex) =>{

            console.log(vertex)
            const neighbors = this.adjecent.get(vertex)

            for(const neighbor of neighbors){
                if(!visisted.has(neighbor)){
                    visisted.add(neighbor)
                    explore(neighbor)
                }
            }

        }

        explore(vertex)
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

graph.dfs("A")
