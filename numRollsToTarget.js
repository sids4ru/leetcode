/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var DP;
 var numRollsToTarget = function(d, f, target) {
    DP = new Array(d+1);
    for(var i=0; i<=target;i++){
        var cols = new Array(target+1);
        cols.fill(-1);
        DP[i] = cols;
    }
    return solve(d, f, target);
};
var mod = 1000000007;
function solve(d, f, target){

    if(target < 0 || d < 0){
        return 0;
    }
    if(d === 0 && target === 0){
        return 1;
    }
    
    if(DP[d][target] != -1)
        return DP[d][target];

    var sum = 0;
    for(var i=1; i<=f;i++){
        sum = ((sum%mod + (solve(d-1,f,target-i))%mod)%mod);
    }
    
    DP[d][target] = sum;
    return sum;
}
console.log(numRollsToTarget(30,30,500));
