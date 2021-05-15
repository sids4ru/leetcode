/**
 * Implement Trie (Prefix Tree)
 * Trie (we pronounce "try") or prefix tree is a tree data structure used to retrieve a key in a strings dataset. There are various applications of this very efficient data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() initializes the trie object.
void insert(String word) inserts the string word to the trie.
boolean search(String word) returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 

Constraints:

1 <= word.length, prefix.length <= 2000
word and prefix consist of lowercase English letters.
At most 3 * 104 calls will be made to insert, search, and startsWith.
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
function trieNode (value){
    this.val=value;
    this.map = new Map;
    this.isComplete = false;
}
 var Trie = function() {
    this.root = new trieNode("")
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    function insertNode(root,word,i){
        if(i>=word.length)
            return;
        var node;
        if(root.map.has(word[i]))
            node = root.map.get(word[i]);
        else{
            node = new trieNode(word[i]);
            root.map.set(word[i],node);
        }
        if(i===word.length-1)
            node.isComplete = true;
        else
            insertNode(node,word,i+1);
    }

    insertNode(this.root,word,0);
    return null;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    function searchTrie(root,word,i){
        if(!root)
            return false;
        if(!root.map.has(word[i]))
            return false;
        var node = root.map.get(word[i]);
        if(i === word.length-1){
            if(!node.isComplete)
                return false;
            return true;
        }
        return searchTrie(node,word,i+1);
    }
    return searchTrie(this.root,word,0);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    function searchStartTrie(root,word,i){
        if(!root)
            return false;
        if(!root.map.has(word[i]))
            return false;
        var node = root.map.get(word[i]);
        if(i === word.length-1){
            return true;
        }
        return searchStartTrie(node,word,i+1);
    }
    return searchStartTrie(this.root,prefix,0);
};
Trie.prototype.searchWithDOts = function(word) {
    function searchTrie(root,word,i){
        if(!root)
            return false;
        if(i === word.length){
                if(root.isComplete)
                    return true;
                return false;
        }
        if(word[i]!="."){
            if(!root.map.has(word[i]))
                return false;
            var node = root.map.get(word[i]);
            if(i === word.length-1){
                if(!node.isComplete)
                    return false;
                return true;
            }
            return searchTrie(node,word,i+1);
        }
        else{
            
            for (let node of root.map.values()) {
            
                if(searchTrie(node,word,i+1))
                    return true;
            }
            return false;
        }
    }
    return searchTrie(this.root,word,0);
};
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
function makeTrie(commands,inputs){
    var result = [];
    var trie;
    for(var i=0; i<commands.length;i++){
        if(commands[i] === "Trie" || commands[i] === "WordDictionary"){
            trie = new Trie();
            result.push(null);
        }
        else if (commands[i] === "insert" || commands[i]==="addWord"){
            result.push(trie.insert(inputs[i][0]));
        }
        else if (commands[i] === "search"){
            result.push(trie.searchWithDOts(inputs[i][0]));
        }
        else if (commands[i] === "startsWith"){
            result.push(trie.startsWith(inputs[i][0]));
        }
        
    }
    return result;
}

console.log(
    makeTrie(

        ["WordDictionary","addWord","addWord","addWord","search","search","search","search"],
        [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
    )


)