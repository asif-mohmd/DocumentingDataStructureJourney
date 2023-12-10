class Graph{
    constructor(){
        this.adjecentList = new Map()
    }

    addVertex(vertex){
        this.adjecentList.set(vertex,[])

    }

    addEdge(vertex1,vertex2){
        this.adjecentList.get(vertex1).push(vertex2)
    }

    dfs(startingNode){
        const visited = new Set()

        const explore = (vertex) =>{
            console.log(vertex)
            visited.add(vertex)

            const neighbors = this.adjecentList.get(vertex)

            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    explore(neighbor)
                }
            }
        }

        explore(startingNode)
    }
}


const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("C","B")

graph.dfs("A")