/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
    s = s.replace(  /-/g, '');
    s = s.toUpperCase();
    var len = s.length;
    var numPatches = Math.floor(len/k);
    var first = len-numPatches*k;
    var result = "";
    var i = 0;
    if(first >0){
        for(i=0;i<first;i++){
            result+=(s[i])
        }
        
            result+="-";
    }
    for(;i<s.length;i+=k){
        for(var j=0; j<k;j++){
            result+=(s[i+j]);
        }
            result+="-";
    }
    result = result.substring(0,result.length-1);
    return result
};
console.log(licenseKeyFormatting(
    "a", 
2
))