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
        const visited = new Set()

        const explore = (vertex) =>{
            visited.add(vertex)
            console.log(vertex)

            const neighbors = this.adjecent.get(vertex)
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

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

graph.dfs("A");
