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

    append(value){
        const node = new Node(value)
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


    insert(value,index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index === 0){
            this.prepend()
        }else{
            const node = new Node(value)
            let prev = this.head

            for(let i=0;i<index-1;i++){
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node

        }
        this.size++

    }



     print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
     }


}

const list = new LinkedList()

list.print()
list.append(10)
list.append(20)
list.print()
list.append(30)
list.append(40)
list.print()
list.insert(25,2)
list.print()