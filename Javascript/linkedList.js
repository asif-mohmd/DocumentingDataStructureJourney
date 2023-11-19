class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.size = 0
        this.head = null
    }

    isEmpty(){
        return this.size === 0
    }
    getEmpty(){
        return this.size === 0
    }
}

const list = new LinkedList()

console.log("is empty:", list.isEmpty())
console.log("size:",list.getSize())