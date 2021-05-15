/**
 * 
 * 
 * https://leetcode.com/problems/multiply-strings/
 * Multiply Strings
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.

 /**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var resArr = [];
    
    for(var i=num2.length-1; i>=0;i--){
        var mult = parseInt(num2[i]);
        var carry = 0;    
        var res = [];
        var maxlen = 0;
        for(var z = 0; z<num2.length- i-1; z++){
            res.push(0);
        }
        for(var j=num1.length-1; j>=0;j--){

            var num = parseInt(num1[j]);
            var product = mult*num + carry;
            var digit = product%10;
            carry = Math.floor(product/10);
            res.push(digit);
            if(carry && j===0)
                res.push(carry);
        }
        resArr.push(res);
        if(res.length>maxlen)
            maxlen = res.length;
    }
    var sum = 0;
    var carry = 0
    var d = 0;
    var pos = 0
    var result = [];
    while(true){
        sum = carry;
        for(var i=0;i<resArr.length;i++){
            if(!resArr[i][pos])
                continue;
            sum += resArr[i][pos];
        }
        result.push(sum%10);
        carry = Math.floor( sum/10);
        pos++;
        if(pos>=maxlen)
            break
    }
    if(carry)
        result.push(carry);
    
    result.reverse();
    return result.join('');

};
console.log(multiply("9","99"));