






class Node{
    constructor(value){
        this.value = this.value
        this.left = null
        this.right = null
    }
}


class BinarySearch{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
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
        if(newNode.value<root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right == null){
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
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)

            }
        }
    }
}

let unSortArr = [4,-1,34,9,-9,103]


const bst = new BinarySearch()

for(let i=0;i<unSortArr.length;i++){
    bst.insert(unSortArr[i])
}


console.log(bst.search(bst.root,-1))