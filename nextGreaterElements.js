/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
	var n=nums.length;
	var res = new Array(n)
	for(var i=0; i<n;i++){
		var num = nums[i];
		var j = i+1;
		
		while(j!=i){
			if(j >= n){
				j = 0;
				if(j === i)
					break;
			}
			if(nums[j] > num){
				res[i] = nums[j];
				break;
			}
			j++;
		}
		if(j === i){
			res[i] = -1;
		}
	}
	return res;
};

console.log(nextGreaterElements(

[5,4,3,2,1]

))
