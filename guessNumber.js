/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if(n===0)
    return 0;
    var left = 1; 
    var right = n;
    while(left<right){
    	var mid = Math.floor((right+left)/2);
		var g = guess(mid);
		if(g === 0){
			return mid;
		}
		if(g>0){
			left = mid+1;
		}
		else{
			right = mid-1;
		}
    }
    return left;
};
var pick = 6;
function guess(n){
	if(n === pick)
		return 0;
	if(n<pick)
		return 1;
	if(n>pick)
		return -1;
}
console.log(guessNumber(
	10
))
