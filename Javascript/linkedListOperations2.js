

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }

    getSize() {
        return this.size
    }
    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {

            let curr = this.head

            while (curr.next) {
                curr = curr.next

            }
            curr.next = node
            this.size++
        }
    }



    print() {
        if (this.isEmpty()) {
            console.log("List is empty")
        } else {
            let curr = this.head
            let listValues = ""

            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }


    insertIndex(value, index) {

        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)

            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }

            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeIndex(index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.head = this.head.next
        } else {
            let removeNode
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }


            removeNode = prev.next
            prev.next = removeNode.next

            return removeNode
        }
        this.size--
    }



    removeValue(value) {
        if (this.isEmpty()) {
            console.log("List is empty")
        }
        let removeNode

        if (this.head.value === value) {
            removeNode = this.head
            this.head = this.head.next
        } else {


            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }

            if (prev) {
                removeNode = prev.next
                prev.next = removeNode.next

            }
            this.size--
            return removeNode

        }
    }


    searchValue(value){
        if(this.isEmpty()){
            console.log("List is emptyyy")
        }else{
            let prev = this.head

            let i=0
            while(prev.next &&prev.next.value != value){
                prev = prev.next
                i++
            }

            if(prev){
                console.log(i)
                return i

            }
            else{
                console.log('no values found')
                return -1
            }     
        }
    }

    reverseList(){
    
            let prev = null
            let curr = this.head
            let rev

            while(curr){
                rev = curr.next
                curr.next = prev
                prev = curr
                curr = rev
            }

            this.head = prev
        }
    




}



const list = new LinkedList()
list.print()
list.prepend(10)
list.prepend(20)
list.append(30)
// list.insertIndex(25, 1)
list.print()
// list.removeValue(10)
// list.searchValue(10)
list.reverseList()
list.print()



