/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	if(height.length <= 1)
		return 0;
    var left = 0;
    var right = height.length-1;
    var max = -Infinity;
	while(left<right){
    	var area = (right-left) * Math.min(height[right],height[left]);
    	if(area>max)
    		max = area;
    	if(height[right]>height[left]){
    		left++;
    	}
    	else{
    		right--;
    	}
    }
    return max;
};
console.log(maxArea(
[4,3,2,1,4]
))
