/***
 * 
 * 
 * https://leetcode.com/problems/cut-off-trees-for-golf-event/
 * 
 * 675. Cut Off Trees for Golf Event
Hard

663

390

Add to List

Share
You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix:

0 means the cell cannot be walked through.
1 represents an empty cell that can be walked through.
A number greater than 1 represents a tree in a cell that can be walked through, and this number is the tree's height.
In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off.

You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).

Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.

You are guaranteed that no two trees have the same height, and there is at least one tree needs to be cut off.

 

Example 1:


Input: forest = [[1,2,3],[0,0,4],[7,6,5]]
Output: 6
Explanation: Following the path above allows you to cut off the trees from shortest to tallest in 6 steps.
Example 2:


Input: forest = [[1,2,3],[0,0,0],[7,6,5]]
Output: -1
Explanation: The trees in the bottom row cannot be accessed as the middle row is blocked.
Example 3:

Input: forest = [[2,3,4],[0,0,5],[8,7,6]]
Output: 6
Explanation: You can follow the same path as Example 1 to cut off all the trees.
Note that you can cut off the first tree at (0, 0) before making any steps.
 

Constraints:

m == forest.length
n == forest[i].length
1 <= m, n <= 50
0 <= forest[i][j] <= 109

 * 
 * 
 */
/**
 * @param {number[][]} forest
 * @return {number}
 */
 var min = Infinity;
 var minR = 0;
 var minC = 0;
var cutOffTree = function(forest) {
	min = Infinity;
	minR = 0;
	minC = 0;
    var R = forest.length;
	var C = forest[1].length;
	
	var visited = new Array(R);
	for(var r =0 ; r<R; r++){
		var cols = new Array(C);
		cols.fill(false);
		visited[r] = cols;
	}
	var path = 0
	var curR = 0,curC = 0;
    var DP;
	while (true){
        
		//searchNextMin(curR,curC,R,C,forest,visited);
        searchNextMin2(R,C,forest);
        if(min === Infinity)
            break;
        DP = clearDP(R,C);
		//path += gotomin(curR,curC,R,C,forest,visited,0,DP);
        var n = gotomin(curR,curC,R,C,forest,visited,0,DP);
        path += n;
        if(path === Infinity)
            break;
		/*if(minR === curR && minC === curC){
			if(curR != 0 || curC != 0 )
				break;
			else if(forest[0][0]===1)
				break;
		}*/
		
		forest[minR][minC] = 1;
		curR = minR;
		curC = minC;
		min = Infinity;
	}
	var check = true;
	for(var r = 0; r<R;r++){
		for(var c=0; c<C;c++){
			if(forest[r][c] > 1)
			{
				check = false;
				break;
			}
		}
	}
	if(!check)
		return -1;
	return path;
};
function clearDP(R,C){
    var DP = new Array(R);
    for(var r =0 ; r<R; r++){
		var cols = new Array(C);
		cols.fill(-1);
		DP[r] = cols;
	}
    return DP;
}
var directions = [
[1,0],
[-1,0],
[0,1],
[0,-1]
]
function searchNextMin2(R,C,forest){
    var row,col,minval = Infinity;
    for(var r=0;r<R;r++){
        for(var c=0;c<C;c++){
            if(forest[r][c]>1 && forest[r][c]<minval){
                minval = forest[r][c];
                row = r;
                col = c;
            }
        }
    }

    minC = col;
    minR = row;
    min = minval;
}
function searchNextMin(row,col,R,C,forest,visited){
	visited[row][col] = true;
	if(forest[row][col] > 1)
	{
		if(forest[row][col]<min){
			min = forest[row][col];
			minR = row;
			minC = col;
		}
	}
	for(var i=0; i<4; i++){
		var r = directions[i][0] + row;
		var c = directions[i][1] + col;
		if(r<0||r>=R||c<0||c>=C)
			continue;
		if(visited[r][c])
			continue;
		if(forest[r][c] === 0)
			continue;
		searchNextMin(r,c,R,C,forest,visited);
	}
	visited[row][col] = false;
}
function gotomin(row,col,R,C,forest,visited,path,DP){
	if(row === minR && col === minC){
		return path;
	}
    if(DP[row][col]>=0){
        return DP[row][col]+path;
    }
    visited[row][col] = true;
    
	
	var mina = Infinity;
	for(var i=0; i<4; i++){
		var r = directions[i][0] + row;
		var c = directions[i][1] + col;
		if(r<0||r>=R||c<0||c>=C)
			continue;
		if(visited[r][c])
			continue;
		if(forest[r][c] === 0)
			continue;
		mina = Math.min(mina,gotomin(r,c,R,C,forest,visited,path+1,DP))
	}
	visited[row][col] = false;
    DP[row][col] = mina-path;
	return mina;
}


console.log(cutOffTree(
    [[87831103,65854898,2779857,44204411,19079948,69410679,87618788],[21145230,46057433,91028222,21139600,71738422,94523119,68042744],[54778025,56455791,37381542,39938846,65988101,48544100,26370707],[23819845,17948839,19801915,60592386,77379668,80566086,9890856],[79375973,89519557,33435287,78827274,57470052,79006461,26468447],[39356777,268254,99534840,69855179,59998856,44225326,46783243],[16722565,20373932,59356985,98603797,25499764,31549350,7421797],[5770474,47592403,29997381,59695202,20261576,55571427,26565722]]
))