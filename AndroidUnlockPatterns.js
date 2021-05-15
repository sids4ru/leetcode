/**
 * https://leetcode.com/problems/android-unlock-patterns/
 * 
 * Android Unlock Patterns
Medium

462

810

Add to List

Share
Android devices have a special lock screen with a 3 x 3 grid of dots. Users can set an "unlock pattern" by connecting the dots in a specific sequence, forming a series of joined line segments where each segment's endpoints are two consecutive dots in the sequence. A sequence of k dots is a valid unlock pattern if both of the following are true:

All the dots in the sequence are distinct.
If the line segment connecting two consecutive dots in the sequence passes through any other dot, the other dot must have previously appeared in the sequence. No jumps through non-selected dots are allowed.
Here are some example valid and invalid unlock patterns:



The 1st pattern [4,1,3,6] is invalid because the line connecting dots 1 and 3 pass through dot 2, but dot 2 did not previously appear in the sequence.
The 2nd pattern [4,1,9,2] is invalid because the line connecting dots 1 and 9 pass through dot 5, but dot 5 did not previously appear in the sequence.
The 3rd pattern [2,4,1,3,6] is valid because it follows the conditions. The line connecting dots 1 and 3 meets the condition because dot 2 previously appeared in the sequence.
The 4th pattern [6,5,4,1,9,2] is valid because it follows the conditions. The line connecting dots 1 and 9 meets the condition because dot 5 previously appeared in the sequence.
Given two integers m and n, return the number of unique and valid unlock patterns of the Android grid lock screen that consist of at least m keys and at most n keys.

Two unlock patterns are considered unique if there is a dot in one sequence that is not in the other, or the order of the dots is different.

 

Example 1:

Input: m = 1, n = 1
Output: 9
Example 2:

Input: m = 1, n = 2
Output: 65
 

Constraints:

1 <= m, n <= 9

 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var visited;
var directions = [
    [	1	,	0	],
    [	0	,	1	],
    [	1	,	1	],
    [	-1	,	0	],
    [	0	,	-1	],
    [	-1	,	-1	],
    [	-1	,	1	],
    [	1	,	-1	],
    [	1	,	2	],
    [	1	,	-2	],
    [	-1	,	2	],
    [	-1	,	-2	],
    [	2	,	-1	],
    [	2	,	1	],
    [	-2	,	-1	],
    [	-2	,	1	]
    ];
    var maxPaths;
 var numberOfPatterns = function(m, n) {
    maxPaths = 0;
    visited = [];
    if(m===1 && n===1)
        return 9;
    for(var i=0; i<3;i++)
    {
        var row = new Array(3)
        row.fill(false);
        visited.push(row);
    }
    for(var row = 0; row<3; row++){
        for(var col =0; col<3; col++){
            visited[row][col] = true;
            dfs(1,row,col,m,n);
            visited[row][col] = false;
        }
    }
    return maxPaths;
};

function dfs(path,R,C,m,n){
    if(path >=m && path <= n){
        maxPaths++;
    }
    if(path == n){
        
        return;
    }
    for(var i=0; i<directions.length;i++){
        var row = R+directions[i][0];
        var col = C+directions[i][1];
        if(row<0 || row>=3 || col<0 || col>=3)
            continue;
        if(visited[row][col])
            continue;
        visited[row][col] = true;
        dfs(path+1,row,col,m,n);
        visited[row][col] = false;
    }
    return;
}
console.log(numberOfPatterns(1,3));