/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var max = -Infinity;
	var R = grid.length;
	var C = grid[0].length;
	
	for(var r = 0; r<R;r++){
	for(var c=0; c<C;c++){
	if(grid[r][c] === 0 || grid[r][c] === 2)
		continue;
	max = Math.max(max,calcArea(r,c,R,C,grid));
}
}
if(max === -Infinity)
    max = 0;
return max;
};
var directions = [
[1,0],
[0,1],
[-1,0],
[0,-1]
]
function calcArea(row,col,R,C,grid){
	grid[row][col] = 2;
	var count = 1;
	for(var i=0; i<4; i++){
		var r = row+directions[i][0];
		var c = col+directions[i][1];
		if(r<0 || r>=R || c<0|| c>=C)
			continue;
		if(grid[r][c] === 0 || grid[r][c] === 2)
			continue;
		count += calcArea(r,c,R,C,grid);
        }       

	return count;

}
console.log(maxAreaOfIsland(
    [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
))

