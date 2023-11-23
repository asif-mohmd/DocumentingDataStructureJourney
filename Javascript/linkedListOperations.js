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

    insert(value, index){
        
        if(index<0 || index > this.size){
            return
        }

        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            
            let prev = this.head

            for(let i=0;i<index-1;i++){
                prev = prev.next

            }

            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return  
        }   
        if(index === 0){
            this.head = this.index.next
        }
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let prev = this.head
            let removedNode
            for(let i=0;i<index-1;i++){
                prev = prev.next
           }
             if(prev){
                removedNode = prev.next
                prev.next = removedNode.next
             }
             this.size--
             return removedNode
        }
    }

    removeValue(value){
        if(this.head.value === value ){
             this.head = this.head.next
        }
        if(this.isEmpty()){
            console.log("List is emoty")
        }else{

            let prev = this.head
           
            while(prev.next && prev.next.value != value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return removeNode
            }
            return null
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
list.insert(25,2)
list.print()
list.append(30)
list.removeValue(340)
list.print()
