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
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){

  
        if(this.isEmpty()){
            console.log("Nothing to print")
        }else{
            let curr = this.head
            let listValues = ''
    
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)

        }
    }

     



}

const list  = new LinkedList()
list.print()
console.log("list size:",list.getSize())
console.log("list is Empty:",list.isEmpty())
list.prepend(20)
list.print()

list.prepend(30)
list.prepend(40)
console.log("list size:",list.getSize())
console.log("list is Empty:",list.isEmpty())
list.print()


