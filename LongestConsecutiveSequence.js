/**
 * Longest Consecutive Sequence
 * 
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * 
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 104
-109 <= nums[i] <= 109
 

Follow up: Could you implement the O(n) solution?
 /**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0)
        return 0;
    nums = nums.sort(function(a,b){
        
        return a-b;
    });
    var count = 1, maxcount = 0;
    for(var i=0;i<nums.length-1;i++){
        if(nums[i] +1 === nums[i+1])
            count ++;
        else if(nums[i] === nums[i+1])
            continue;
        else{
            maxcount = Math.max(count,maxcount);
            count = 1;
        }
    }
    /*if(nums[nums.length-1] - 1 === nums[nums.length-2])
        count++;*/
    maxcount = Math.max(count,maxcount);
    return maxcount;
    /*var map = new Map;
    for(var i=0; i< nums.length; i++){
        val = nums[i]-1;
        if(i-1>=0)
            val = nums[i-1]
        map.set(nums[i],val);
    }
    var count = 0;
    var maxcount = 0;
    map.forEach(function(value,key){
        if(value - key === 1)
            count++;
        else{
            Math.max(count,maxcount);
            count = 0;
        }
    })
    */
    /*
    var map = new Array(nums.length);
    map.fill(false);
    for(var i in nums){
        map[nums[i]] = true;
    }
    var maxcount = 0, count = 1;
    var prev = map[0];
    for(var i=1; i<map.length; i++){
        if(map[i])
            count++;
        else{
            maxcount = Math.max(count,maxcount);
        }
    }*/
    return maxcount;
};
console.log(longestConsecutive(
    [1,2,0,1]

));