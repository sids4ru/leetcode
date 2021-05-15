/**
 * 
 * 
 * function playSegments(coins) {
    // Write your code here

}
 */
function playSegments(coins) {
    // Write your code here
    if(coins.length === 0)
        return 0;
    var max = -Infinity;
    var maxDiff = -Infinity;
    var p1 = 0;
    var p2 = calc(0,coins.length-1,coins);
    var maxDiff = p1-p2;
    /*if(maxDiff>0)
        return p1;*/
    var maxP1 = 0;
    for(var i=0; i<coins.length;i++){
        p1 = calc(0,i,coins);
        p2 = calc(i+1,coins.length-1,coins);
        var diff = p1-p2;
        if(maxDiff < 0 && diff >= 0){
            maxDiff = diff;
            maxP1 = p1;
        }
        if(diff>0 && diff < maxDiff ){
            maxDiff = diff;
            maxP1 = p1;
        }
            //break;
        /*if(diff > maxDiff)
        {
            maxDiff = diff;
            maxP1 = p1;
        }*/
    }
    return maxP1;
}
function calc(left,right,coins){
    var sum = 0;
    for(var i=left; i<=right;i++){
        if(coins[i] === 0)
            sum+=-1;
        else sum+=coins[i];
    }
    return sum;
}
console.log(playSegments(

    [
        100	,
        0	,
        1	,
        1	,
        0	,
        0	,
        0	,
        0	,
        0	,
        0	,
        1	,
        1	,
        1	,
        0	,
        1	,
        0	,
        0	,
        0	,
        0	,
        0	,
        1	,
        0	,
        1	,
        0	,
        0	,
        1	,
        0	,
        1	,
        0	,
        1	,
        1	,
        0	,
        1	,
        0	,
        0	,
        1	,
        1	,
        0	,
        0	,
        0	,
        0	,
        1	,
        0	,
        1	,
        1	,
        1	,
        0	,
        1	,
        1	,
        1	,
        1	,
        0	,
        1	,
        1	,
        1	,
        1	,
        0	,
        0	,
        0	,
        1	,
        0	,
        0	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	,
        1	
        

    ]
))