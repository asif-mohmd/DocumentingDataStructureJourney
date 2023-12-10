class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    if (!(child instanceof TreeNode)) {
      child = new TreeNode(child);
    }
    this.children.push(child);
  }
}

const root = new TreeNode('A')
const childB = new TreeNode('B')
const childC = new TreeNode('C')
const grandchildD = new TreeNode('D')
const grandchildE = new TreeNode('E')

root.addChild(childB);
root.addChild(childC);
childB.addChild(grandchildD);
childC.addChild(grandchildE);

console.log(root);


// class NodeTree{
//     constructor(value){
//         this.value=value
//         this.children=[]
//     }
//     addChild(child){
//         if(!(child instanceof NodeTree)){
//             child=new NodeTree(child)
//         }
//         this.children.push(child)
//     }
// }

// const root=new NodeTree("A")
// const childB=new NodeTree("B")
// const childC=new NodeTree("C")
// const grandchildD=new NodeTree("D")
// const grandchildE=new NodeTree("E")


// root.addChild(childB)
// root.addChild(childC)
// console.log(root.children)
