/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {
    if(matrix.length === 0)
        return 0;

    var R = matrix.length;
    var C = matrix[0].length;
    var DP = new Array(R);
    for(var r=0;r<R;r++){
        var col = new Array(C);
        col.fill(0);
        DP[r] = col;
    }
    var maxArea = 0;
    for(var row = 0; row<R; row++){
        for(var col =0; col<C; col++){
            if(matrix[row][col] === "0")
                DP[row][col] = 0;
            else{
                if(col === 0){
                    DP[row][col] = 1;
                }
                else{
                    DP[row][col] = 1 + DP[row][col-1];
                }

                var width = DP[row][col];
                var r;
                for(r = row; r>=0;r--){
                    if(matrix[r][col] === 0)
                        break;
                    width = Math.min(width,DP[r][col]);
                    maxArea = Math.max( width*(row-r+1), maxArea);
                }
                
            }
        }
    }
    return maxArea;
};
console.log(maximalRectangle(
    [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
))