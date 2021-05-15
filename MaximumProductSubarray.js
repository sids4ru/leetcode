/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * 
 * Maximum Product Subarray
 * 
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */
/**
 * *==================================================================================
 * * =================================================================================
 * * =================================================================================
 * * ===================== LEETCODE JAVA DP SOLN TRANSLATED TO JS !!!! ===============
 * * ==========================(self written)=========================================
 * * =================================================================================
 * * =================================================================================
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDP = function(nums) {
    var result,max_so_far, min_so_far;

    result = max_so_far = min_so_far = nums[0];
    for(var i=1;i<nums.length;i++){
        var curr = nums[i]
        var tmp = Math.max(curr,max_so_far*curr,min_so_far*curr);
        min_so_far = Math.min(curr,max_so_far*curr, min_so_far*curr);
        max_so_far = tmp;
        result = Math.max(max_so_far,min_so_far,result);

    }
    return result;
};
    /**
 * =====================================================================================
 * * ===================================================================================
 * * ===================================================================================
 * * ===================== MY SOLUTION  !!!! ===========================================
 * * ===================================================================================
 * * ===================================================================================
 * * ===================================================================================
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    if(nums.length === 0)
        return 0; 
    if(nums.length === 1)
        return nums[0];
    var left = 0;
    var product = 1; 
    var negetive = new Array(20000);
    var negCount = 0;
    var maxProd = -Infinity;
    var r = 0;
    while(true){
        for(; r<nums.length;r++){
            var right = nums[r];
            /*if(right<0 && negetive.length>0)
                negetive.pop();*/
            if ( right < 0 ){
                negetive[negCount++] = [r,maxProd];
            }
            if(right === 0){
                maxProd = Math.max(0,maxProd)
                break;
            }
            product *= right;
            maxProd = Math.max(maxProd,product);
        }
        if(negCount>0){
            negCount--;
            item = negetive[negCount];
            maxProd = Math.max(item[1],maxProd);
            r = item[0]+1;
            product = 1;
        }
        else if(r<nums.length-1){
            r++;
            product = 1;
        }
        else
            break;
    }
    return maxProd;
};

console.log(maxProduct2(
    
    [2,3,-2,4]
    //[-2,0,-1]
))
