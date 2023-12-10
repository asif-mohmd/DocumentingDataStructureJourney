// class NodeTree{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const newNode= new NodeTree(value)
//         if(this.isEmpty()){
//             return this.root=newNode
//         }else{
//             return this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null)
//             {
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }
//     count(root){
//         if(root===null){
//             return 0
//         }
//         return(
//             1+
//             this.count(root.left)+
//             this.count(root.right)
//             );
//     }
// }
// var bst=new NodeTree()
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// console.log(bst.count(bst.root))



class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdge{
        
    }
}