class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearch{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
    const newNode = new Node(value)

    if(this.isEmpty()){
        this.root = newNode
    }else{
        this.insertNode(this.root,newNode)
    }
    }

    insertNode(root,newNode){
        if(newNode.value<root){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(value === root.value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    levelOrder(){
        const queue = []

        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }

    }

    
    
}

const bst = new BinarySearch()

console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(7)
bst.insert(20)
bst.insert(12)

console.log(bst.isEmpty())
console.log(bst.search(bst.root,1022))
bst.levelOrder()
