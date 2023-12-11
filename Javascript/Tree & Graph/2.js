class TrieNode{
    constructor(){
        this.children = {}
        this.isWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode
    }

    insert(word){
        let node = this.root

        for(let char of word){
            if(!(char in node.children)){
                    node.children[char] = new TrieNode
            }
            node = node.children[char]
        }
        node.isWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
          if(!(char in node.children)){
            return false
          }
          node = node.children[char]
        }
        return node.isWord
    }
}

const tr = new Trie()

tr.insert("apple")
console.log(tr.search("apppple"))