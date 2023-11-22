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

    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let i=0
            let curr = this.head

            while(curr){
                if(curr.value === value){
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }

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
list.prepend(10)
list.append(20)
list.print()

list.print()
list.append(30)

list.print()
console.log(list.search(330))
