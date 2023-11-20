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
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            console.log(node,"= node")
            this.head = node
            console.log(this.head, " = head")

        }else{
            node.next = this.head
            this.head = node
        }
        this.size++

    }
} 

const list = new LinkedList()

console.log("is empty:", list.isEmpty())
console.log("size:",list.getSize())
list.prepend(10)