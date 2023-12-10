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

    getSuggestions(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!(char in node.children)) {
                return [];
            }
            node = node.children[char];
        }
        
        let suggestions = [];
        this._dfs(node, prefix, suggestions);
        return suggestions;
    }

    _dfs(node, prefix, suggestions) {
        if (node.isWord) {
            suggestions.push(prefix);
        }

        for (let char in node.children) {
            this._dfs(node.children[char], prefix + char, suggestions);
        }
    }
}