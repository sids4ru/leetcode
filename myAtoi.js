/**
 * @param {string} s
 * @return {number}
 */


 var myAtoi = function(s) {
    var sign = +1;
    var num = 0;
    var started = false;
    for (var i=0;i<s.length;i++){
        var char = s[i];
        if(s[i] === " " && !started)
            continue;
        else if(s[i] === "-" && !started){
            sign = -1;
            started = true;
        }
        else if(s[i] === "+" && !started){
            started = true
            continue;
        }
        else if(parseInt(s[i])>=0 && parseInt(s[i])<=9){
            started = true;
            num *= 10;
            num += parseInt(s[i]); 
        }
        else break;
    }
    num = num*sign;
    if(num < -2147483648)
        num = -2147483648;
    else if(num > 2147483647)
        num = 2147483647;
    return num;
};
console.log(myAtoi(
    
"+-12"
))
