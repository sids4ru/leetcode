/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion, n) {
    
    //return function(n) {
        var left = 1; 
        var right = n;
        while(left<=right){
            
            var mid = Math.floor((right+left)/2);
            
            if(isBadVersion(mid) === true){
                if(isBadVersion(mid-1) === false)
                    return mid;
                else{
                    right = mid-1
                }
            }
            else{
                left = mid+1
            }
        }
        
    //};
};
function isBadVersion(version){
    if(version <= 0)
        return false;
    return true;
}
console.log(solution(isBadVersion,
    1
    ))

