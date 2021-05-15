/**
 * Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
 

Follow up:

Could you come up with the O(n2) solution?
Could you improve it to O(n log(n)) time complexity?
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var DP;
 var lengthOfLIS = function(nums) {
    DP = new Array(nums.length);
    DP.fill(-Infinity);
    var max = -Infinity;
    for(var i=0;i<nums.length;i++){
        max = Math.max(max,recurse(nums,i));
    }
    return max;
};
function recurse(nums,i){
    if(DP[i] > -Infinity)
        return DP[i];
    if(i>=nums.length)
        return 0;
    var max = 0;
    for(var next = i+1; next<nums.length;next++){
        if(nums[next]<=nums[i])
            continue;
        max = Math.max(max,recurse(nums,next));
    }
    DP[i] = max+1;
    return max+1;
}
console.log(lengthOfLIS(
    [10,9,2,5,3,7,101,18]
))