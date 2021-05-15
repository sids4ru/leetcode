/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
 var matrixBlockSum = function(mat, k) {
    var R = mat.length;
    var C = mat[0].length;
    var DP = new Array(R);
    for(var i=0; i<R;i++){
        var cols = new Array(C);
        cols.fill(0);
        DP[i] = cols;
    }
    for(var r=0;r<R;r++){
        for(var c=0; c<C;c++){
            DP[r][c] = horizontal(r,c,k,mat,R,C);
        }
    }
    for(var r=0;r<R;r++){
        for(var c=0; c<C;c++){
            mat[r][c] = vertical(r,c,k,DP,R,C);
        }
    }
    return mat;
};
function horizontal(row,col,k,mat,R,C){
    var sum = 0;
    for(var c=col-k;c<=col+k;c++){
        if(c<0 || c>=C)
            continue;
        sum+=mat[row][c];
    }
    return sum;
}
function vertical(row,col,k,mat,R,C){
    var sum = 0;
    for(var r=row-k;r<=row+k;r++){
        if(r<0||r>=R)
            continue;
        sum+=mat[r][col];
    }
    return sum;
}
console.log(matrixBlockSum(

    [[1,2,3],[4,5,6],[7,8,9]],
    2
))