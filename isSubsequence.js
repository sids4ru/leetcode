/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    var R = s.length;
    var C = t.length;
    var DP = new Array(R+1);
    for(var r = 0; r <= R; r++){
        var cols = new Array(C+1);
        cols.fill(true);
        DP[r] = cols;
    }
    for(var r = 1; r<=R; r++){
        DP[r][0] = false;
    }
    for(var r=1; r<=R; r++){
        for(var c = 1; c<=C; c++){
            if(s[r-1] === t[c-1]){
                DP[r][c] = DP[r-1][c-1];
            }
            else DP[r][c] = DP[r][c-1] && DP[r-1][c];
        }
    }
    return DP[R][C];
};
console.log(isSubsequence(
    "b", "c"
))