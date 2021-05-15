/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
function makeTrie(commands, inputs) {
    var result = [];
    var trie;
    for (var i = 0; i < commands.length; i++) {
        if (commands[i] === "Trie" || commands[i] === "WordDictionary") {
            trie = new Trie();
            result.push(null);
        }
        else if (commands[i] === "insert" || commands[i] === "addWord") {
            result.push(trie.insert(inputs[i][0]));
        }
        else if (commands[i] === "search") {
            result.push(trie.searchWithDOts(inputs[i][0]));
        }
        else if (commands[i] === "startsWith") {
            result.push(trie.startsWith(inputs[i][0]));
        }

    }
    return result;
}
