

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

    removeNode(index){
        console.log("kk")
        if(index<0 || index>this.size){
            return 
        }
        if(index==0){
            this.head = this.head.next
            this.size--
        }else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            let prev = curr.next
            curr.next = prev.next
            this.size--
            
        }

    }

    search(value){
        if(this.isEmpty()){
            console.log("No values")
        }else{
            let curr = this.head
            for(let i=0;i<this.size;i++){
                if(curr.value=== value){
                    return i
                }else{
                    curr = curr.next
                }
            }
        }
    }



}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
console.log(list.search(40))

console.log(list.print())


