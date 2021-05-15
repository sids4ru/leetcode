/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    var grid = new Array(m);
    var copy = new Array(m);
    for(var r=0; r<m;r++)
    {
    	var cols = new Array(n);
    	cols.fill(0);
    	grid[r] = cols;
    	
    	cols = new Array(n);
    	cols.fill(0);
    	copy[r] = cols;
    	
    }
    var result = [];
	var visited = {};
    for(var i=0; i<positions.length;i++){
    	var pos = positions[i];
    	grid[pos[0]][pos[1]] = 1;
    	//copygrid(grid,copy,m,n);
    	result.push(numIslands(grid));
    }
    return result;
};
function copygrid(grid,copy,m,n){
	for(var r=0; r<m;r++){
		for(var c=0; c<n;c++){
			copy[r][c] = grid[r][c];
		}
	}
}



var numIslands = function(grid) {
    var R = grid.length;
    var C = grid[0].length;
    var count = 0;
    var visited = {};
    for(var r=0; r<R; r++){
        for(var c=0; c<C;c++){
            if(grid[r][c] === 0)
                continue;
            if(visited[""+r+" "+c])
            
            count++;
            makeIsland(r,c,R,C,grid,visited);
        }
    }
    return count;
};
var directions = [
    [1,0],
    [0,1],
    [-1,0],
    [0,-1]
]
function makeIsland(row,col,R,C,grid,visited){
	visited[""+row+ " " +col] = true;

    for(var i=0; i<4; i++){
        var r = row+directions[i][0];
        var c = col+directions[i][1];
        if(r<0 || r>=R || c<0 || c>=C)
            continue;
        if(grid[r][c] === 0)
            continue;
        if(visited[""+r+ " "+c])
        	continue;
        makeIsland(r,c,R,C,grid,visited);
    }
}

console.log(numIslands2(2,2,[[0,0],[1,1],[0,1]]));

