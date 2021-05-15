/*
Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"
 

Constraints:

1 <= s.length, t.length <= 105
s and t consist of English letters.
 

Follow up: Could you find an algorithm that runs in O(n) time?
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
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    var tmap = {};
    [...t].forEach(c=>{
       tmap[c] = (tmap[c] || 0 )+ 1;
    });
    
    // sliding window
    var start = 0;
    var res = '';
    var matched = 0; // matched letter in t
    var minLen  = s.length;
    for(var i = 0; i<s.length; i++)
    {
        if(tmap[s[i]]>0)
        {
            matched++;
        }       
        tmap[s[i]]--;
        while(matched === t.length && start < s.length)
        {
            if(i-start+1 <= minLen) // use <= to get all possible results
            {
                minLen = i - start + 1;
                res = s.substring(start, i+1);
            }
            if(++tmap[s[start]] > 0)
                    matched--;
            start++;
        }
    }
    return res;
};

/**
 * ----------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * ------------------MY DP SOLUTION------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 * * --------------------------------------------------------------------
 */

console.log(minWindow("ADOBECODEBANC","ABC"));
