/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var visited; 
 var numIslands = function(grid) {
     if(!grid)
        return false;
    if(grid.length === 1 && grid[0].length === 1){
        return grid[0][0] === true;
    }
    clearvisited(grid.length,grid[0].length);
    var count = 0;
    for(var i=0; i<grid.length;i++){
        for(var j=0; j<grid[0].length;j++){
            if(visited[i][j])
                continue;
            if(grid[i][j] === "0")
                continue;
            count += DFS(grid,i,j);
        }
    }
    return count;
};

 function clearvisited(row,col){
     visited = [];
     for(var i=0;i<row;i++){
         var obj = [];
        for(var r=0;r<col;r++){
            obj.push(false);
        }
        visited.push(obj)
        }
 }
 var directions = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1],
 ];
 function DFS(grid,R,C){
    visited[R][C] = true;
    for(var i=0;i<4;i++){
        var row = R+directions[i][0];
        var col = C+directions[i][1];
        if(row<0||row>=grid.length||col<0||col>=grid[0].length)
            continue;
        if(visited[row][col])
            continue;
        if(grid [row][col] === "0")
            continue;
        DFS(grid,row,col);
    }
    return true;
 }
 console.log(numIslands(
    [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]

 ));