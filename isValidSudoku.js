/**
 * @param {character[][]} board
 * @return {boolean}
 */
 
 var isValidSudoku = function(board) {
    var N = 9;
    var map = new Array(10);
    map.fill(0);
    //check cols
    for(var r=0; r<N; r++){
    	map.fill(0);
    	for(var c=0; c<N;c++){
			if(board[r][c] === ".")
				continue;
			var val = parseInt(board[r][c]);
			map[val] ++;
			if(map[val]>1)
				return false;
    	}
    }
    //check rows
    for (var c=0;c<N;c++){
    	map.fill(0);
    	for(var r=0; r<N;r++){
    		if(board[r][c] === ".")
    			continue;
    		var val = parseInt(board[r][c]);
			map[val] ++;
			if(map[val]>1)
				return false;

    	}
    }
    //3*3
    for(var i=0; i<3;i++){
    	for(var j=0; j<3; j++){
    		map.fill(0);
    		for(var r = i*3; r<i*3+3;r++){
    			for(var c = j*3; c<j*3+3;c++){
    				if(board[r][c] === ".")
		    			continue;
    				var val = parseInt(board[r][c]);
					map[val] ++;
					if(map[val]>1)
						return false;
    			}
    		}
    	}
    }
    return true;
};
 
 
 
 /*
 
var isValidSudoku = function(board) {
    var N = 9;
    var map = new Array(10);
    map.fill(0);
    //check cols
    var success = false;
    for(var r=0; r<N; r++){
    	map.fill(0);
    	success = false;
    	for(var c=0; c<N;c++){
    		
			if(board[r][c] === ".")
				continue;
			success = true;
			var val = parseInt(board[r][c]);
			map[val] ++;
			if(map[val]>1)
				return false;
    	}
    	if(!success)
    		return false;
    }

    //check rows

    for (var c=0;c<N;c++){
    	map.fill(0);
    	success = false;
    	for(var r=0; r<N;r++){
    		if(board[r][c] === ".")
    			continue;
    		success = true;
    		var val = parseInt(board[r][c]);
			map[val] ++;
			if(map[val]>1)
				return false;

    	}
    	if(!success)
    		return false;
    }
    
    //3*3
    for(var i=0; i<3;i++){
    	for(var j=0; j<3; j++){
    		map.fill(0);
	    	success = false;
    		for(var r = i*3; r<i*3+3;r++){
    			for(var c = j*3; c<j*3+3;c++){
    				if(board[r][c] === ".")
		    			continue;
    				var val = parseInt(board[r][c]);
					map[val] ++;
					if(map[val]>1)
						return false;
    			}
    		}
    		if(!success)
    			return false;
    	}
    }
    return true;
};
*/

console.log(isValidSudoku(
/*
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

*/

[["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]
));

