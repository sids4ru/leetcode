/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    var R = matrix.length;
    var C = matrix[0].length;
    if(R === 1 && C===1)
        return parseInt(matrix[0][0]);
    else if(R===1){
        
        for(var c=0; c<C;c++){
            if(parseInt(matrix[0][c]) > 0)
                return 1;
        }
        return 0;
    }
    else if(C===1){
        for(var r=0; r<R;r++){
            if(parseInt(matrix[r][0]) > 0)
                return 1;
        }
        return 0;
    }
    var max = 0;
    for(var r = 0; r<R; r++){
        for(var c=0; c<C; c++){
        	if(r === 0 || c === 0){
        		max = Math.max(parseInt(matrix[r][c]),max);
        	}

            else if(parseInt(matrix[r][c]) > 0){
                matrix[r][c] = Math.min(parseInt(matrix[r][c-1]),parseInt(matrix[r-1][c]),parseInt(matrix[r-1][c-1]))+1;
                max = Math.max(parseInt(matrix[r][c]),max);
            }
        }
    }
    return Math.pow(max,2)
};
console.log(maximalSquare(
[["0","1"],["1","0"]]
))
