/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
	var R = grid.length;
	var C = grid[0].length;
	var rows = new Array(R);
	var cols = new Array(C);
	rows.fill(-Infinity);
	cols.fill(-Infinity);
	for(var r=0; r<R; r++){
		for (var c=0; c<C;c++){
			rows[r] = Math.max(rows[r],grid[r][c]);
			cols[c] = Math.max(cols[c],grid[r][c]);
		}
	}
	var count = 0;
	for(var r=0; r<R; r++){
		for(var c=0; c<C; c++){
			var maxH = Math.min(rows[r],cols[c]);
			var diff = maxH-grid[r][c];
			count += diff;
		}
	}
	return count;
};
console.log(maxIncreaseKeepingSkyline(

[[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]


))
