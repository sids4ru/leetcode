/**
 * https://leetcode.com/problems/palindromic-substrings/
 * 
 * Palindromic Substrings
 * 
 * Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Note:

The input string length won't exceed 1000.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    if(s.length === 0)
        return 0;
    var count = s.length;
    for(var i=0;i<s.length;i++){
        var length = expand(i,i,s);
        if(length>0) count++;
        if(s[i] != s[i+1])
            continue;
        length = expand(i,i+1,s)
        if(length>0) count++;
    }
    return count;
};
function expand(left,right,s){
    var l = left-1;
    var r = right + 1;
    if(l<0 || r>=s.length)
        return right-left;
    if(s[l] != s[r])
        return right-left;
    return expand(l,r,s);
}
console.log(countSubstrings(
    "aaaaa"
))