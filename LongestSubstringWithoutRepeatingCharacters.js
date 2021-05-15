/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Longest Substring Without Repeating Characters
 * 
 * 
 * Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length===0)
        return 0;
    if(s.length === 1)
        return 1;
    var map = {};
    var left,right,l,r,count=0;
    l = 0;
    left = s[l];
    map[left] = 1;
    for(var r=1;r<s.length;r++){
        right = s[r];
        if(map[right]===undefined)
            map[right] = 0;
        map[right]++;
        if(map[right]>1){
            while(map[right]>1){
                map[left] -=1;
                l++;
                left = s[l];
            }
        }
        count = Math.max(count,r-l+1);
    }
    return count;
};
console.log(lengthOfLongestSubstring(
    "abcabcbb"
))
