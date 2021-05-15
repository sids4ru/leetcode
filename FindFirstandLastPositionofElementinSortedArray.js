/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    return search(nums,target,0,nums.length-1);
};
var search = function(nums, target,left,right){
    if(left>right){
        return [-1,-1];
    }
    var mid = Math.floor((left+right)/2);
    
    if(nums[mid] === target){
        var result = new Array(2);
        var i=mid;
        while (i>=0){
            if(nums[i] != target)
                break;
            i--;
        }
        result[0] = i+1;
        i = mid;
        while(i<nums.length){
            if(nums[i] != target)
                break;
            i++;
        }
        result[1] = i-1;
        return result;
    }
    if(nums[mid] <= target){
        return search(nums,target,mid+1,right);
    }
    else{
        return search(nums,target,left,mid-1);
    }
}
console.log(searchRange([5,7,7,8,8,10],6));