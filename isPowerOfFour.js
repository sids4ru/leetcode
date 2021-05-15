/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
	if(n<=0)
		return false;
	n = Math.abs(n);
    while(n>1){
    	if(n%4 != 0)
    		return false;
    	n = Math.floor(n/4);
    }
    return true;
};
console.log(isPowerOfFour(-64))
