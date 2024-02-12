class Node{
    constructor(value){
   this.value = value
   this.next = null
    }

}

class LinkedList{
    constructor(){
        this.items = []
        this.head = null
        this.size = null
        
    }


    isEmpty(){
        return this.size === 0
    }

    add(value){
        this.items.push(value)
    }


    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
             this.add(node)
        }else{
             
        }
    }

}

const list = new LinkedList()

