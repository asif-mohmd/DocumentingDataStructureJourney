// class nodeTree{
//     constructor(){
//         this.children={}
//         this.isWordEnd=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root=new nodeTree()
//     }
//     insert(word){
//         let current=this.root
//         for(let i=0;i<word.length;i++){
//             let charInset=word[i]
//             if(!(charInset in current.children)){
//                 current.children[charInset]=new nodeTree()
//             }
//             current=current.children[charInset]
//         }
//         current.isWordEnd=true
//     }
//     contain(word){
//         let current=this.root
//         for(let i=0;i<word.length;i++){
//             let charfind=word[i]
//             if(!(charfind in current.children)){
//                 return false
//             }
//             current=current.children[charfind]
//         }
//         return current.isWordEnd
//     }
//     startPrefix(prefix){
//         let current=this.root
//         for(let i=0;i<prefix.length;i++){
//             let charfind=prefix[i]
//             if(!(charfind in current.children)){
//                 return false
//             }
//             current=current.children[charfind]
//         }
//         return true

//     }
// }
// const trie=new Trie()
// trie.insert("apple")
// trie.insert("mango")
// trie.insert("man")
// trie.insert("appp")
// console.log(trie.contain("apple"))
// console.log(trie.contain("mango"))
// console.log(trie.startPrefix("man"))
// console.log(trie.startPrefix("ap"))
// console.log(trie.startPrefix("hello"))


// class nodeTree{
//     constructor(){
//         this.children={}
//         this.isWOrdEnd=false
//     }

// }
// class Trie{
//     constructor(){
//         this.root=new nodeTree()
//     }
//     insert(word){
//         let current=this.root
//         for(let i=0;i<word.length;i++){
//             let chatToInsert=word[i]
//             if(!(chatToInsert in current.children)){
//                 current.children[chatToInsert]=new nodeTree()

//             }
//             current=current.children[chatToInsert]
//         }
//         current.isWOrdEnd=true
//     }
//     contain(word){
//         let current=this.root
//         for(let i=0;i<word.length;i++){
//             let charfind=word[i]
//             if(!(charfind in current.children)){
//                 return false
//             }
//             current=current.children[charfind]
//         }
//        return current.isWOrdEnd
//     }
//     startPrefix(prefix){
//         let current=this.root
//         for(let i=0;i<prefix.length;i++){
//             let charfind=prefix[i]
//             if(!(charfind in current.children))
//             {
//                 return false
//             }
//             current=current.children[charfind]
//         }
//         return true
//     }

// }
// const trie=new Trie()
// trie.insert("devika")
// trie.insert("nakulan")
// trie.insert("suma")
// trie.insert("abhishek")
// trie.insert("abh")
// console.log(trie.contain("devika"))
// console.log(trie.startPrefix("hello"))
// console.log(trie.startPrefix("abhi"))



class nodeTrie{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new nodeTrie()
    }
    insert(word){
        let current=this.root
        for(let i=0;i<word.length;i++){
            let charToInsert=word[i]
            if(!(charToInsert in current.children)){
                current.children[charToInsert]=new nodeTrie()
            }
            current=current.children[charToInsert]
        }
        current.isWordEnd=true
    }
    contain(word){
        let current=this.root
        for(let i=0;i<word.length;i++){
            let charToFind=word[i]
            if(!(charToFind in current.children)){
                return false
            }
            current=current.children[charToFind]
        }
        return current.isWordEnd
    }
    startPrefix(prefix){
        let current=this.root
        for(let i=0;i<prefix.length;i++){
            let charToFind=prefix[i]
            if(!(charToFind in current.children)){
                return false
            }
            current=current.children[charToFind]
        }
        return true
    }
}
const trie=new Trie()
trie.insert("apple")
trie.insert("orange")
trie.insert("app")
console.log(trie.contain("app"))
console.log(trie.startPrefix("hello"))