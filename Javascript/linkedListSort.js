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

    sortLinkedList(){

        let arr = []

        let curr = this.head

        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
         
        arr.sort()

        const node = new Node(arr[0])
        this.head = node
        let prev = this.head
        for(let i=1;i<arr.length;i++){
            const node = new Node(arr[i])
             prev.next = node
            prev = node
            this.size++
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

list.append(20)
list.append(50)
list.append(10)
list.append(40)
list.append(30)
list.print()
list.sortLinkedList()
list.print()