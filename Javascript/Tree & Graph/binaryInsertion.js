class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
        
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.size === 0
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,value)
        }
    }

    insertNode(root,newNode){
        

    }

}