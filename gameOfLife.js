/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var directions = [
 [-1,-1],
 [-1,0],
 [-1,1],
 [0,-1],
 [0,1],
 [1,-1],
 [1,0],
 [1,1]
 
 
 ]
var gameOfLife = function(board) {
    var R = board.length;
    var C = board[0].length;
    var result = new Array(R);
    for(var r=0; r<R;r++){
    	var cols = new Array(C);
    	cols.fill(0);
    	result[r] = cols;
    }
    for(var r=0; r<R;r++){
    	for(var c=0; c<C;c++){
    		var count = 0;
    		for(var i = 0; i<directions.length;i++){
    			var row = r+directions[i][0];
    			var col = c+directions[i][1];

    			if(row<0||row>=R||col<0||col>=C)
    				continue;
    			count += board[row][col];
    		}
    		if(board[r][c] === 1){
    			if(count < 2)
    				result[r][c] = 0;
    			else if(count === 2 || count === 3)
    				result[r][c] = 1;
    			else if(count > 3)
    				result[r][c] = 0;
    		}
    		else{
    			if(count === 3)
    				result[r][c] = 1
    		}

    	}
    }
    
    for(var r = 0; r<R;r++){
    	for(var c=0; c<C;c++){
    		board[r][c] = result[r][c];
    	}
    }
	return board;
    
};

console.log(
gameOfLife(

[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]


)

)








