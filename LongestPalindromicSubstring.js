/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 
 * Longest Palindromic Substring
 * 
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
 * 
 */
/**
 * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * ------------------JAVA SOLUTION TRANSLATED--------------------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 */
/**
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    var len = 0;
    var srart = 0, end =0;
    for(var i=0;i<s.length;i++){
        len = Math.max(expandCenter(i,i,s), expandCenter(i,i+1,s));
        if(len > end-start){
            start = (i-Math.floor ((len-1)/2));
            end =  (i+Math.floor(len/2));
        }
    }
    return s.substring(start,end+1);
};
function expandCenter (l,r,s){
    
    while(l>=0 && r<s.length && s[l] === s[r]){
        l--;
        r++;
    }
    return r-l-1;
}

/**
 * ----------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * ------------------My SOlution --------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 */
var longestPalindrome2 = function(s) {
    if(s.length === 1)
        return s;
    var maxLength = 0;
    var maxleft = 0;
    var maxright = 0;
    for(var i=0;i<s.length;i++){
        var length = expand(i,i,s);
        var length2 = 0;
        if(s[i] === s[i+1])
            length2 = expand(i,i+1,s);
        if(length>maxLength){
            maxLength = length;
            maxleft = i-Math.trunc(length/2);
            maxright = i+Math.trunc(length/2);
        }
        if(length2>maxLength){
            maxLength = length2;
            half = Math.trunc(length2/2);
            maxleft = i-half;
            maxright = i+1+half;
        }
    }
    var result = "";
    for(var i=maxleft; i<=maxright; i++){
        result += s[i];
    }
    return result;
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
console.log(longestPalindrome2(
    "ac"
))

