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

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
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

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }



}

const list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())
list.append(10)
list.append(20)
console.log(list.getSize())
list.print()
list.append(30)
list.append(40)
list.print()
console.log(list.getSize())
