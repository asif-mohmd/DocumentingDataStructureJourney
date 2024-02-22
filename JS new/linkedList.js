

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

    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
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
        }else{
            
            let curr = this.head

            while(curr.next){
                 curr = curr.next
            }
            curr.next = node
            
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



}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
console.log(list.print())