class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}


class Queue{
    constructor(){
       this.head = null
       this.tail = null
       this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    enqueue(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("nothing to dequeue")
            return null
        }
        let value = this.head.value
        if(this.size === 1){
            this.head = null
            this.tail = null
            this.size--
            console.log("deuque")
            
            
        }else{
            this.head = this.head.next
            this.size--
            return value

        }
    }

    print(){
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += ` ${curr.value}`
                curr = curr.next

            }
            console.log(listValues)
        }
    }

}


const queue =  new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()