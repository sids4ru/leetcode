/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
    var carry = k;
    for(i=num.length-1; i>=0; i--){
        var digit = parseInt(num[i]);
        var sum = digit+carry;
        
        digit = sum%10;
        carry = Math.floor (sum/10);

        num[i] = digit;
    }
    var front = []
    while(carry>0){
        digit = carry%10;
        carry = Math.floor(carry/10);
        
        front.push(digit)
    }
    front.reverse();
    var result = [];
    for(var i=0; i<front.length;i++)
        result.push(front[i]);
    for(var i=0;i<num.length;i++)
        result.push(num[i]);
    return result;
};
console.log(addToArrayForm(
    [0]
    ,10000
))