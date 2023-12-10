class Graph{
    constructor(){
        this.adjecentList = new Map()
    }

    addVertex(vertex){
        this.adjecentList.set(vertex,[])

    }
}