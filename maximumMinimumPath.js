/*
https://leetcode.com/problems/path-with-maximum-minimum-value/

1102. Path With Maximum Minimum Value
Medium

687

74

Add to List

Share
Given a matrix of integers A with R rows and C columns, find the maximum score of a path starting at [0,0] and ending at [R-1,C-1].

The score of a path is the minimum value in that path.  For example, the value of the path 8 →  4 →  5 →  9 is 4.

A path moves some number of times from one visited cell to any neighbouring unvisited cell in one of the 4 cardinal directions (north, east, west, south).

 

Example 1:



Input: [[5,4,5],[1,2,6],[7,4,6]]
Output: 4
Explanation: 
The path with the maximum score is highlighted in yellow. 
Example 2:



Input: [[2,2,1,2,2,2],[1,2,2,2,1,2]]
Output: 2
Example 3:



Input: [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
Output: 3
 

Note:

1 <= R, C <= 100
0 <= A[i][j] <= 10^9




*/



/**
 * @param {number[][]} A
 * @return {number}
 */
var maximumMinimumPath = function(A) {
	var R = A.length;
	var C = A[0].length;
	
	var min = Infinity;
	var max = -Infinity;
	for(var r=0; r<R;r++){
		for(var c=0; c<C;c++){
			min = Math.min(min,A[r][c]);
			max = Math.max(max,A[r][c]);
		}
	}
	if(A[0][0] === min)
		return min;

	var maxVal = -Infinity;
	var visited = clearVisited(R,C);
	
	while(min<max){
		if(max-min === 1){
			visited = clearVisited(R,C);
			if(find(max,0,0,R,C,A,visited)){
				return max
			}
			else return min;
		}
		var mid = Math.floor((min+max)/2);
		visited = clearVisited(R,C);
		if(find(mid,0,0,R,C,A,visited)){
			min = mid;
		}
		else{
			max = mid-1;
		}
	}
	
	return max;
};
var directions = [
[-1,0],
[0,-1],
[1,0],
[0,1]
]
function clearVisited(R,C){
	var visited = new Array(R);
	for(var r=0; r<R;r++){
		var cols = new Array(C);
		cols.fill(false);
		visited[r] = cols;
		}
	return visited;
}

function find(val,row,col,R,C,A,visited){
	
	if(row === R-1 && col === C-1)
		return true;
	if(A[row][col] < val)
		return false;
	visited[row][col] = true;
	for(var i=0; i<4;i++){
		var r = row+directions[i][0];
		var c = col+directions[i][1];
		if(r<0 || r>=R || c<0 || c>=C)
			continue;
		if(A[r][c] < val)
			continue;
		if(visited[r][c])
			continue;
		if(find(val,r,c,R,C,A,visited)){
			//visited[r][c] = false;
			return true;
		}
	}
	//visited[r][c] = false;
	return false;
}


console.log(

maximumMinimumPath(

//[[2,2,1,2,2,2],[1,2,2,2,1,2]]
//[[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
//[[2,5,5,4,3,0,2],[1,5,3,1,2,5,5],[3,3,3,4,3,3,4],[5,5,2,5,2,4,0],[3,1,3,3,5,4,5],[2,2,3,5,4,5,0],[1,0,3,2,4,5,4]]
//[[0,1,0,0,0,1],[0,1,1,0,0,0],[0,0,1,1,0,1],[0,1,1,1,1,0],[1,1,1,1,1,1]]
[[5,4,5],[1,2,6],[7,4,6]]
)



);
