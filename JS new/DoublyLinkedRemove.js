

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
        this.tail = null
    }

    isEmpty(){
       return this.size === 0
    }

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
            
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{

            this.tail.next = node
            this.tail = node
            
            
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("Nothing to print ")
        }else{

            let curr = this.head
            let listValue = ""
            while(curr){
                listValue += ` ${curr.value}`
                curr = curr.next
            }
            return listValue
        }
    }

    removeFromFront(){
        let value
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
             value = this.head
            this.head = this.head.next
        }
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log("list is empty")
        }
        if(this.size === 1){
            this.head = null
            this.tail = null
          
        }else{
            let prev = this.head
            while(prev.next != this.tail){
                prev = prev.next
            }
            prev.next = null

            this.tail = prev
        }
        this.size--

    }
  



}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
console.log(list.print())