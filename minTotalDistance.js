/***
 * https://leetcode.com/problems/best-meeting-point/
 * 
 * 296. Best Meeting Point
Hard

600

49

Add to List

Share
Given an m x n binary grid grid where each 1 marks the home of one friend, return the minimal total travel distance.

The total travel distance is the sum of the distances between the houses of the friends and the meeting point.

The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

 

Example 1:


Input: grid = [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]
Output: 6
Explanation: Given three friends living at (0,0), (0,4), and (2,2).
The point (0,2) is an ideal meeting point, as the total travel distance of 2 + 2 + 2 = 6 is minimal.
So return 6.
Example 2:

Input: grid = [[1,1]]
Output: 1
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
grid[i][j] is either 0 or 1.
There will be at least two friends in the grid.
 * 
 * 
 * 
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    var R = grid.length;
    var C = grid[0].length;
    var rows = [], cols = [];
    for(r=0; r<R; r++){
        for (c=0; c<C;c++){
            if(grid[r][c] === 1){
                rows.push(r);
                cols.push(c);
            }
        }
    }
    rows.sort(function(a,b){return a-b;});
    cols.sort(function(a,b){return a-b;});
    var distance = calcDistin1D(rows) + calcDistin1D(cols);
    return distance;
};

function calcDistin1D(array)
{
    var median = array[Math.trunc(array.length/2)]
    var distance = 0;
    for(var i=0;i<array.length;i++){
        distance+=Math.abs(array[i]-median);
    }
    return distance;
}
console.log(minTotalDistance(
    [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]
))
