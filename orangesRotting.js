/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    var R=grid.length;
    var C = grid[0].length;
    if(R===1 && C===1 && grid[0][0] === 0)
        return 0;
    var visited = new Array(R);
    var times = new Array(R);
    for(var i=0;i<R;i++){
        var cols = new Array(C);
        cols.fill(false);
        visited[i] = cols;
        cols = new Array(C)
        cols.fill(Infinity)
        times[i] = cols;
    }
    for(var r=0;r<R;r++){
        for(var c=0;c<C;c++){
            if(grid[r][c] === 2){
                DFS(r,c,0,R,C,grid,visited,times);
            }
        }
    }
    var maxTime = -Infinity;
    for(var r=0;r<R;r++){
        for(var c=0;c<C;c++){
            if(grid[r][c]>0) 
                maxTime = Math.max(times[r][c],maxTime);
            
        }
    }
    if(maxTime === Infinity)
        return -1;
    if(maxTime === -Infinity)
        return 0;
    return maxTime; 
 };
 var directions = [
    [1,0],[0,1],[-1,0],[0,-1]
 ];
 function DFS(row,col,time,R,C,grid,visited,times){
    visited[row][col] = true;
    if(time<times[row][col])
        times[row][col] = time;
    else {
        visited[row][col] = false;
        return;
    }
    for(var i=0;i<4;i++){
        var r = row+directions[i][0];
        var c = col+directions[i][1];
        if(r<0||r>=R||c<0||c>=C)
            continue;
        if(grid[r][c] === 0)
            continue;
        if(grid[r][c] === 2)
            continue;
        if(visited[r][c])
            continue;
        DFS(r,c,time+1,R,C,grid,visited,times);
    }
    visited[row][col] = false;
 }

var directions = [
    [1,0],
    [0,1],
    [-1,0],
    [0,-1]
];
console.log(orangesRotting(
   /*[[2,0,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,1,0,0,1,0,1],
    [1,0,1,0,1,0,0,1,0,1],
    [1,0,1,0,1,1,0,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]]*/
    
    [[2,1,1],[1,1,1],[0,1,2]]
))