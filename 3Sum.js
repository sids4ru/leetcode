/**
 * https://leetcode.com/problems/3sum/
 * 
 * 3Sum
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    var n = nums.length;
    if(n<3)
        return [];
    if(n===3){
        if(nums[0]+nums[1]+nums[2] === 0)
            return [nums];
        else return [];
    }
        
    
    nums.sort(function(a,b){
        return a-b;
    });
    var result = [];
    var check = {}
    for(var i=0;i<n-2;i++){
        var first = nums[i];
        for(var j=i+1;j<n-1;j++){
            var second = nums[j];
            var sum = first + second;
            var third = binarySearch(j+1,n-1,-sum,nums,i,j);
            if(third != Infinity){
                third = nums[third];
                var res = [first,second,third];
                if(!check[res.toString()]){
                    result.push(res);
                    check[res.toString()] = 1;
                }
            }
        }
    }
    return result;
};
function binarySearch(l,r,target,nums,f,s){
    if(l>r)
        return Infinity;
    if(l!=f && l!=s && nums[l] === target)
        return l;
    if(r!=f && r!=s && nums[r] === target)
        return r;
    var m = Math.floor((l+r)/2)
    if(nums[m] === target){
        if(m!=f && m!=s)
            return m;
        else {
            if(nums[m+1] === target)
                return m+1;
            else if(nums [m-1] === target)
                return m-1;
            else return Infinity;
        }
    }
    if(nums[m] < target)
        return binarySearch(m+1,r,target,nums,f,s);
    else
        return binarySearch(l,m-1,target,nums,f,s);
}
console.log(threeSum(
    [-1,0,1,2,-1,-4]
))
