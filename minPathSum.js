/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var R = grid.length;
    var C = grid[0].length;
    if (R===0 && C===0)
        return 0;
    if(R===1 && C===1)
        return grid[0][0];
    var visited = new Array(R);
    var DP = new Array(R);
    for(var r=0; r<R;r++){
        var col = new Array(C);
        col.fill(false);
        visited[r] = col;
        col = new Array(C);
        col.fill(-1);
        DP[r] = col;

    }
    var min = searchMin(0,0,R,C,grid,visited,DP);
    return min;
};
var directions = [

    [1,0],
    [0,1]
];
function searchMin(row,col,R,C,grid,visited,DP){
    if(row === R-1 && col === C-1)
        return grid[row][col];
    if(DP[row][col]>=0)
        return DP[row][col];
    visited[row][col] = true;
    var min = Infinity;
    for(var i=0;i<2;i++){
        var r = row+directions[i][0];
        var c = col+directions[i][1];
        if(r<0 || r>=R || c<0 || c>=C)
            continue;
        if(visited[r][c])
            continue;
        min = Math.min(searchMin(r,c,R,C,grid,visited,DP),min);
    }
    DP[row][col] = min + grid[row][col];
    visited[row][col] = false;
    return DP[row][col];
}
console.log(minPathSum(
    [[1]]
));