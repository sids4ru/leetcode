/**
 * Next Permutation
 * https://leetcode.com/problems/next-permutation/
 * 
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
Example 4:

Input: nums = [1]
Output: [1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    if(nums.length <= 1)
        return nums;
    var right = nums.length-2;
    while(right>=0){
        if(nums[right] < nums[right+1]){
            swapPos = right;
            for(var i=nums.length-1; i>right ; i--){
                if(nums[right]>=nums[i])
                    continue;
                if(nums[right]<nums[i]){
                    [nums[right],nums[i]]=[nums[i],nums[right]];
                    swapPos = right+1;
                }
                var subarr = []
                for(var t=swapPos;t<nums.length;t++){
                    subarr.push(nums[t])
                }
                nums.splice(swapPos,nums.length);
                subarr.sort(function(a,b){
                    return a-b;
                });
                for(var m = 0;m<subarr.length;m++){
                    nums.push(subarr[m]);
                }
                break;
            }
            break;
        }
        right --;
    }
    if(right < 0)
        nums.sort(function(a,b){
            return a-b;
        });
    return nums;
};
console.log(nextPermutation([2,3,1]))