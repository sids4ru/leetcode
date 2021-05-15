/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
	var R = mat.length;
	var C = mat[0].length;
	var visited = new Array(R);
	for(var i=0; i<R;i++){
		var cols = new Array(C);
		
		for(var j=0; j<C;j++){
			cols[j] = new Array(4);
			cols[j].fill(false);
		}
		visited[i] = cols;
	}
	var max = -Infinity;
    for(var r=0; r<R;r++){
    	for(var c=0; c<C;c++){
    		if(mat[r][c] === 0)
    			continue;
    		for(var dir = 0 ; dir<4; dir++){
				if(visited[r][c][dir])
					continue;
				var length = traverse(r,c,dir,mat,visited,R,C);
				if(length > max)
					max = length;
    		}
    	}
    }
    if(max === -Infinity)
    	return 0;
    return max;
};
var directions = [
	[0,1],
	[1,0],
	[1,1],
	[1,-1]
]
function traverse(row,col,dir,mat,visited,R,C){
	if(mat[row][col] === 0)
		return 0;
	visited[row][col][dir] = true;
	var r = row+directions[dir][0];
	var c = col+directions[dir][1];
	if(r<0||r>=R || c<0||c>=C)
		return 1;
	/*if(mat[r][c] === 0)
		return 0;*/
	return traverse(r,c,dir,mat,visited,R,C) + 1;
	
}
console.log(longestLine(

//[[0,1,1,0],[0,1,1,0],[0,0,0,1]]
//[[1,1,1,1],[0,1,1,0],[0,0,0,1]]

[[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]
))
























