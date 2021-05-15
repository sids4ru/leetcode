/**
 * Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".

For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size less than 3.  Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  If S = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.

Given a list of query words, return the number of words that are stretchy. 

 

Example:
Input: 
S = "heeellooo"
words = ["hello", "hi", "helo"]
Output: 1
Explanation: 
We can extend "e" and "o" in the word "hello" to get "heeellooo".
We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.
 

Constraints:

0 <= len(S) <= 100.
0 <= len(words) <= 100.
0 <= len(words[i]) <= 100.
S and all words in words consist only of lowercase letters

Prev
2 / 4

Next
 */

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var map;
 var expressiveWords = function(s, words) {
    var trie = makeDict(words);
    var curr = trie;
    var count = 0
    var stack = [];
    stack.push(trie.get(s[0]));
    for(var i=0; i<s.length;i++){
        
        
    }
    return trie;
    
    var map = new Map;
    for(var i in words){
        map.set(words[i],true);
    }
    var str = "";
    var size = 0;
    var group = S[0];
    var temp = S[0];
    for(var i = 1; i<S.length;i++){
        if(S[i] === group){
            size++;
            
        }else{
            if(size>3){
                str+=group;
            }else{
                str+=temp;
            }
            size = 0;
            group = S[i];
            
            temp = "";
        }
        temp+=S[i];

    }
    if(size>3){
        str+=group;
    }else{
        str+=temp;
    }
    

};
function trieNode(char){
    this.char = char;
    this.next = new Map;
    this.isComplete = false;

}
function makeDict(words){
    var root = new trieNode("")
    var curr;
    for(var i=0; i< words.length; i++){
        var word = words[i]
        curr = root;
        for(var j=0; j<word.length;j++){
            if(curr.next.has(word[j])){
                curr = curr.next.get(word[j])
            }else{
                var next = new trieNode(word[j]);
                curr.next.set(word[j],next);
                curr = next;
            }
            if(j===word.length-1){
                curr.isComplete = true;
            }
        }
    }
    return root;
}

console.log(expressiveWords("",["hello", "hi", "helo"]));