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

    removeValue(value) {

        if (this.head.value === value) {
            this.head = this.head.next

        } else {


            let prev = this.head

            while (prev.next && prev.next.value ) {


            
            }



        }

    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        } else {

            let curr = this.head
            let ListValues = ""
            while (curr) {
                ListValues += `${curr.value} `
                curr = curr.next
            }

            console.log(ListValues)
        }
    }

}

const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.removeValue(20)
list.print()