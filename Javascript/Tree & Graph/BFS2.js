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

    bfs(startingNode){
        const visited = new Set()
        let queue = []

        visited.add(startingNode)
        queue.push(startingNode)

        while(queue.length > 0){
            let vertex = queue.shift()
            console.group(vertex)

            const neighbors = this.adjecentList.get(vertex)

            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }


    }


}

const graph = new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");


graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C","D")


graph.bfs("A");

