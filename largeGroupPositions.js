/**
 * @param {string} s
 * @return {number[][]}
 */
 var largeGroupPositions = function(s) {
    var left = 0;
    var result = [];
    var count = 0;
    var right = 0;
    for(right = 0; right<s.length;right++){
        if(s[left] === s[right]){
            count++
        }
        else{
            if(count>=3){
                result.push([left,right-1]);
            }
            left = right;
            count = 0;
        }
    }
    if(count>=3){
        result.push([left,right-1]);
    }
    return result;
};
console.log(largeGroupPositions(
    
    "aaa"
))