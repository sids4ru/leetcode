/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var maxSum = -Infinity;
    for(var i=0;i<nums.length;i++){
        sum = 0;
        for(j=i;j<nums.length;j++){
            sum+=nums[j];
            if(sum>maxSum){
                maxSum = sum;

            }
        }
    }
    return maxSum;
};
console.log(maxSubArray(
    [-2,1,-3,4,-1,2,1,-5,4]
))
