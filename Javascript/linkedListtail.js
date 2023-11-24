class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
           let ListValues = ""
            while(curr){
                ListValues += `${curr.value} `
                curr = curr.next
            }
            console.log(ListValues)
        }
    }


    prepend(value){
        const node = new Node(value)
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
            return null
        }
        let value = this.tail.value
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
        return value
    
    }


}

const list = new LinkedList()
console.log("List is empty:", list.isEmpty())
console.log("List size:", list.getSize())
list.print()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.prepend(5)
list.print()
console.log("List size:", list.getSize())
list.removeFromFront()
list.print()
console.log("List size:", list.getSize())
list.removeFromEnd()
list.print()
console.log("List size:", list.getSize())