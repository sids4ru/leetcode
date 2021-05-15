/**
 * Longest Increasing Path in a Matrix
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 * Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

 

Example 1:


Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:


Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
Example 3:

Input: matrix = [[1]]
Output: 1
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 231 - 1
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var DP_arr = [[],[]];
function clearDP_arr(r,c){
    DP_arr = [[],[]];
    
    for(var i=0;i<r;i++){
        var arr = [];    
        for(var j=0;j<c;j++){
            //DP_arr[i][j] = -1;
            arr[j] = -1;
        }
        DP_arr[i] = arr;
        
    }
}
var directions = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1],
];

 var longestIncreasingPath = function(matrix) {    
    var rows = matrix.length;
    var cols = matrix[0].length;
    var sum = 0;
    clearDP_arr(rows,cols);
    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            sum = Math.max(sum,recurse(matrix,i,j,rows,cols));
        }
    }
    return sum;
};
function recurse(matrix,Row,Col,rs,cs){
    if(DP_arr[Row][Col] > 0){
        return DP_arr[Row][Col];
    }
    var val = matrix[Row][Col];
    var sum = 0;
    for(var i=0;i<4;i++){
        var row = Row+directions[i][0];
        var col = Col+directions[i][1];
        if(row<0||col<0||row>=rs||col>=cs){
            continue;
        }
        if(matrix[row][col]>val)
            sum = Math.max( recurse(matrix,row,col,rs,cs),sum);
    }
    DP_arr[Row][Col] = sum +1;
    return sum +1;
}
console.log(longestIncreasingPath([[1,2]]));