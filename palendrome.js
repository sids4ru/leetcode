//Longest palendromic substring - expand about center

var longestPalindrome = function(s) {
    if(!s || s.length < 1) return "";
    var start = 0, end = 0;
    for(var i=0; i<s.length; i++){
        var len1 = expandAroundCenter(s,i,i);
        var len2 = expandAroundCenter(s,i,i+1);
        len = Math.max(len1,len2);
        if(len>end-start){
            start = Math.floor((i-(len-1))/2);
            end = i+Math.floor( len/2);
        }
    }
    return s.substring(start,end+1);
};
function expandAroundCenter(s, left, right){
    var L = left, R = right;
    while(L>0 && R<s.length && s[L] === s[R]){
        L--;
        R++;
    }
    return R-L-1;
}