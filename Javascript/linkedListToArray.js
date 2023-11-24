

const arr = [1,2,3,4,5]

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

    append(arr){

        if(Array.isArray){

            const node = new Node(arr[0])
            this.head = node
            let curr = node
            for(let i=1;i<arr.length;i++){
              
                const node = new Node(arr[i])
                curr.next = node
                curr = node
                this.size++
                
            }

        }else{
            return null
        }

    }

    arrLinkedlist(){
        let arr = []

        let curr = this.head

        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }

        console.log(arr)
      
  
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

list.append(arr)
list.arrLinkedlist()
list.print()