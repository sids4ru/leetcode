/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    var R = grid.length;
    var C = grid[0].length;
    var count = 0;
    for(var r=0; r<R; r++){
        for(var c=0; c<C;c++){
            if(grid[r][c] === "0" || grid[r][c] === "2")
                continue;
            count++;
            makeIsland(r,c,R,C,grid);
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
function makeIsland(row,col,R,C,grid){
    grid[row][col] = "2"
    for(var i=0; i<4; i++){
        var r = row+directions[i][0];
        var c = col+directions[i][1];
        if(r<0 || r>=R || c<0 || c>=C)
            continue;
        if(grid[r][c] === "2" || grid[r][c] === "0")
            continue;
        makeIsland(r,c,R,C,grid);
    }
}
console.log(numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ]
))