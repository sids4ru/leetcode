/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    var max = -Infinity;
    for(var i=0; i<arr1.length;i++){
    	for(var j=0; j<arr1.length;j++){
    		var calc = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j); 
    		max = Math.max(max,calc);
    	}
    }
    return max;
};
console.log(maxAbsValExpr(
[1,2,3,4],
 [-1,4,5,6]

))
