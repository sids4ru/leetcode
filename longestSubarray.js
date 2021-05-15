/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function(nums, limit) {
    var left = 0;
    var min = nums[0];
    var max = nums[0];
    var maxLength = 0;
    for(var right=0; right<nums.length;right++){
        min = Math.min(nums[right], min);
        max = Math.max(nums[right], max);
        if(max-min>limit){
            while(max-min>limit){
                left++;
                min = nums[left];
                max = nums[left];
                for(var j=left; j<=right;j++){
                    min = Math.min(nums[j], min);
                    max = Math.max(nums[j], max); 
                }
            }
        }
        maxLength = Math.max(right-left+1,maxLength);
    }
    return maxLength;
};

console.log(longestSubarray(
    [1,5,6,7,8,10,6,5,6]
,4
))