class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0

    }

    getSize(){
        return this.size === 0
    }

}

const list = new LinkedList()
console.log("this is empty:",list.isEmpty())
console.log("this size:",list.getSize())