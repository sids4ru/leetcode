/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    if(n===0)
        return 0;
    if(n===1)
        return 1;
    if(n===2)
        return 1;
    var dp = {};
    return calc(n,dp);
};
function calc(n,dp){
    if(n===0)
    return 0;
    if(n===1)
        return 1;
    if(n===2)
        return 1;
    if(dp[n])
        return dp[n];
    dp[n] = calc(n-1,dp)+calc(n-2,dp)+calc(n-3,dp); 
    return dp[n];
}
console.log(tribonacci(
    25
))