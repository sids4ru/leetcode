/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	var N = nums.length;
    var max_so_far = new Array(N);
    max_so_far.fill(-Infinity);
    var min_so_far = new Array(N);
    min_so_far.fill(Infinity);
    max_so_far[0] = nums[0];
    min_so_far[0] = nums[0];
    var max = nums[0];
    for(var i=1;i<N;i++){
    	max_so_far[i] = Math.max(max_so_far[i-1]*nums[i], min_so_far[i-1]*nums[i],nums[i]);
	    min_so_far[i] = Math.min(max_so_far[i-1]*nums[i], min_so_far[i-1]*nums[i],nums[i]);
	    max = Math.max(max_so_far[i],min_so_far[i],max);
    }
    return max;
};
console.log(maxProduct(
[-2]
))
