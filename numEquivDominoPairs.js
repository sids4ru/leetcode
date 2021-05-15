/**
 * @param {number[][]} dominoes
 * @return {number}
 */

 var numEquivDominoPairs = function(dominoes) {
    var count = 0;
    for(var i=0;i<dominoes.length;i++){
        var A = dominoes[i];
        for(var j=i+1;j<dominoes.length;j++){
            B = dominoes[j];
            if((A[0] === B[0] && A[1] === B[1]) || (A[0] === B[1] && A1 === B[0]))
                count ++
        }
    }
    return count;
};