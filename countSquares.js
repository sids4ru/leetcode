/**
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 * 
 * Explaination 
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/643429/Python-DP-Solution-%2B-Thinking-Process-Diagrams-(O(mn)-runtime-O(1)-space
 * 
 * 1277. Count Square Submatrices with All Ones
Medium

1807

34

Add to List

Share
Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
Example 2:

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.
 

Constraints:

1 <= arr.length <= 300
1 <= arr[0].length <= 300
0 <= arr[i][j] <= 1
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var countSquares = function(matrix) {
    var R = matrix.length;
    if(R===0)
        return 0;
    var C = matrix[0].length;
    var result = 0;
    for(var r = 0; r<R;r++){
        for(var c = 0; c<C;c++){
            if(matrix[r][c] === 0)
                continue;
            if(r===0 || c===0)
                result+=1;
            else{
                var min = Math.min(matrix[r][c-1],matrix[r-1][c-1],matrix[r-1][c])+matrix[r][c];
                matrix[r][c] = min;
                result+=min;
            }
        }
    }
    return result;

};


console.log(countSquares(

    [
        [1,0,1],
        [1,1,0],
        [1,1,0]
      ]
));