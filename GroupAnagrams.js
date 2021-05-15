/**
 * 
 * Group Anagrams
 * 
 * https://leetcode.com/problems/group-anagrams/
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 function sortAlphabet(str) {
    return [...str].sort().join("");
  }
 var groupAnagrams = function(strs) {
    var map = {}
    for(var i=0; i<strs.length;i++){
        str = sortAlphabet(strs[i]);    
        if(!map[str]) 
            map[str] = [strs[i]];
        else 
            map[str].push(strs[i]);
    }
    var res = [];
    for(var c in map){
        res.push(map[c]);
    }
    return res;
};
console.log(groupAnagrams(
    ["eat","tea","tan","ate","nat","bat"]
));
    