/**
 * https://leetcode.com/problems/longest-common-subsequence/
 * 
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
 * 
 * 
 * 
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
     var dp = new Array(text1.length+1)
     for(var i=0;i<text1.length+1;i++){
        var row = new Array(text2.length+1);
        row.fill(0);
        dp[i] = row;
     }
    for(var r=1;r<text1.length+1;r++){
        for(var c=1;c<text2.length+1;c++){
            if(text1[r-1] === text2[c-1]){
                dp[r][c] = dp[r-1][c-1]+1;
            }else{
                dp[r][c] = Math.max(dp[r-1][c],dp[r][c-1]);
            }
        }
    }
    return dp[text1.length][text2.length]
};


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence2 = function(text1, text2) {
    if(text1.length === 0 || text2.length === 0)
        return 0;
    var R = text1.length;
    var C = text2.length;
    var DP = new Array(R+1)
    for(var i=0;i<=R;i++){
        var cols = new Array(C+1);
        cols.fill(0);
        DP[i] = cols;
    }
    for(var r=1; r<=R; r++){
        for(var c=1;c<=C;c++){
            var available = 0
            if(text2[c-1] === text1[r-1])
                DP[r][c] = DP[r-1][c-1] + 1;
            else
                DP[r][c] = Math.max(DP[r-1][c], DP[r][c-1]);
        }
    }
    return DP[R][C];
};

console.log(longestCommonSubsequence2(
    "bsbininm",
    "jmjkbkjkv"
    /*"abcde",
    "afjdkslfjce" */
))