//Split Array Largest Sum

/*
https://leetcode.com/submissions/detail/465776525/

Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

Write an algorithm to minimize the largest sum among these m subarrays.*/
/*Example 1:

Input: nums = [7,2,5,10,8], m = 2
Output: 18
Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
Example 2:

Input: nums = [1,2,3,4,5], m = 2
Output: 9
Example 3:

Input: nums = [1,4,4], m = 3
Output: 4
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 106
1 <= m <= min(50, nums.length)*/

function max3(nums,left,right){
    var max_sum = 0;
    var left_sum = 0;
    var right_sum = 0;
    for(var i=left; i<=right;i++){
        left_sum += nums[i];
        right_sum = maxInSubRange(nums,i+1,right);
        var dist = right_sum - left_sum;
        if(dist < 0)
            return Math.max(left_sum-nums[i],right_sum+nums[i]);
    }
}
function maxInSubRange(nums,left,right)
{
    var sum = 0
    for(var i=left;i<=right;i++){
        sum += nums[i];
    }
    var left_sum = 0;
    var right_sum = 0;
    var maxdist = sum;
    for(var i=left;i<=right;i++){
        left_sum = left_sum + nums[i];
        right_sum = sum - left_sum;
        var dist = right_sum - left_sum;
        if(dist < 0)
            return Math.max(left_sum-nums[i],right_sum+nums[i]);
            //return i;
    }
    return Math.max(left_sum,right_sum);
}
function maxposSubRange(nums,left,right)
{
    var sum = 0
    for(var i=left;i<right;i++){
        sum += nums[i];
    }
    var left_sum = 0;
    var right_sum = 0;
    var maxdist = sum;
    for(var i=left;i<right;i++){
        left_sum = left_sum + nums[i];
        right_sum = sum - left_sum;
        var dist = right_sum - left_sum;
        if(dist < 0)
            //return Math.max(left_sum-nums[i],right_sum+nums[i]);
            return i;
    }
    return Math.max(left_sum,right_sum);
}
console.log(splitArray([7,2,5,10,8],2));