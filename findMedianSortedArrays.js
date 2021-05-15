/**
 * @param {number[]} num1
 * @param {number[]} num2
 * @return {number}
 */
var findMedianSortedArrays = function(num1, num2) {
    if(num1.length < num2.length)
    	[num1,num2] = [num2,num1];
    const M = num1.length;
    const N = num2.length;
    var total = M+N;
    var half = Math.floor((M+N)/2)-1;
    
    var left = 0;
    var right = M-1;
    while(left < right){
		if(num1[right] < num2[0]){
			num2[half-right];
		}
		else if(num1[left] > num2[0]){
			num2[half];
		}
		else{
			
			var mid = Math.floor((right +left)/2);
			var other = half-mid;
			if(num1[mid] > num2[other])
				left = mid+1;
			else if(num1[mid] < num2[other])
				right = mid-1;
			if(num2[other-1] <= num1[mid] && num2[other]>=num1[mid+1])
			{
				var left = num1[mid];
				var right;
				if(total %2 != 0)
					return left;
				else{
					right = Math.max(num1[mid+1],num2[ther]);
					return (left+right)/2;
				}
			}
			
		}
    	
    }
    return left;
};

console.log(findMedianSortedArrays(
[1,3],
[2]

));

