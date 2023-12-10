class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return node.isWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");

// The trie structure would look like:
// root -> a -> p -> p -> l -> e (isWord=true)
//              |
//              -> r -> i -> c -> o -> t (isWord=true)
//      |
//      -> p -> p (isWord=true)
