/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

    var max = "";
    for(var i=0; i<s.length;i++){
        var str1 = expand(s,i,i);
        var str2 = ""
        if(i<s.length-1)
            str2 = expand(s,i,i+1);
        if(str2.length > str1.length && str2.length > max.length){
            max = str2;
        }else if (str1.length>str2.length && str1.length>max.length){
            max = str1;
        }
    }
    return max;
};
function expand(s, left, right){
    if(s[left] != s[right])
        return "";
    while(s[left] === s[right]){
        left--;
        right++;
        if(left < 0 || right>=s.length)
            break;
    }
    right;
    left++;
    return s.substring(left,right)
}
console.log(longestPalindrome(
    "ac"
    ));