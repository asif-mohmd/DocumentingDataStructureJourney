class Graph{
    constructor(){
        this.adjecentList = new Map()
    }

    addVertex(vertex){
        this.adjecentList.set(vertex,[])
    }

    addEdge(vertex1,vertex2){
        this.adjecentList.get(vertex1).push(vertex2)
        this.adjecentList.get(vertex2).push(vertex1)
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

const gf = new Graph()

gf.addVertex("A")
gf.addVertex("B")
gf.addVertex("C")

gf.addEdge("A","B")
gf.addEdge("A","C")

gf.dfs("A")