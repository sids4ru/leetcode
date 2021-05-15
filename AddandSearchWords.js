/**
 * Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * 
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 

Constraints:

1 <= word.length <= 500
word in addWord consists lower-case English letters.
word in search consist of  '.' or lower-case English letters.
At most 50000 calls will be made to addWord and search.
 * 
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
 * Returns if the word with wildcards
 * @param {string} word
 * @return {boolean}
 */
 Trie.prototype.searchWithDOts = function(word) {
    function searchTrie(root,word,i){
        if(!root)
            return false;
        if(word!="."){
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
        if(commands[i] === "Trie"){
            trie = new Trie();
            result.push(null);
        }
        else if (commands[i] === "insert"){
            result.push(trie.insert(inputs[i][0]));
        }
        else if (commands[i] === "search"){
            result.push(trie.search(inputs[i][0]));
        }
        else if (commands[i] === "startsWith"){
            result.push(trie.startsWith(inputs[i][0]));
        }
    }
    return result;
}


var WordDictionary = function() {
    this.trie = new Trie;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.trie.insert(word);
    return null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.trie.searchWithDOts(word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */