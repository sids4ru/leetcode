/***
 * https://leetcode.com/problems/path-with-minimum-effort/
 * 1631. Path With Minimum Effort
 * 
 * You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

 

Example 1:



Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
Example 2:



Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
Example 3:


Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
Output: 0
Explanation: This route does not require any effort.
 

Constraints:

rows == heights.length
columns == heights[i].length
1 <= rows, columns <= 100
1 <= heights[i][j] <= 106

 * 
 */
/**
 * @param {number[][]} heights
 * @return {number}
 */
 var minimumEffortPath = function(heights) {
    var R = heights.length;
    if(R === 0)
        return 0;
    var C = heights[0].length;
    if(R===1 && C===1)
        return 0;
    var visited = [];
    var minMatrix = [];
    

    for(var i=0; i<R;i++){
        visited[i] = new Array(C).fill(false);
        minMatrix[i] = new Array(C).fill(Infinity);
    }

    
    minMatrix[0][0] = 0;
    var pqueue = new Minheap;
    pqueue.push([minMatrix[0][0],0,0]);

    while (pqueue.length()>0){
        var top = pqueue.pop();
        var row = top[1];
        var col = top[2];
        if(row === R-1 && col === C-1)
        {
            return top[0];
        }
        visited[row][col] = true;
        for(var i=0;i<4;i++){
            var r = row + directions[i][0];
            var c = col + directions[i][1];
            if(r<0 || r>=R || c<0 || c>=C ){
               continue;
            }
            if(visited[r][c])
                continue;
            var diff = Math.max(Math.abs ( heights[row][col]-heights[r][c]),top[0]);
            if(minMatrix[r][c] < diff)
                continue;
            minMatrix[r][c] = diff;
            pqueue.push([diff,r,c]);
            //pqueue.sort(function(a,b){return b[0]-a[0]});
        }
       
    }
    return minMatrix[R-1][C-1];
};

var directions = [  
    [1,0],
    [0,1],
    [-1,0],
    [0,-1]
]

function Minheap(){
    
    var heap = [];
    this.heap = heap;
    this.push = function(val){

        heap.push(val);
        if(heap.length === 1)
            return;
        var i = heap.length-1;
        var parent = Math.floor((i-1)/2);
        while(parent>=0){
            if(heap[parent][0]>heap[i][0]){
                [heap[i],heap[parent]] = [heap[parent],heap[i]];
                i = parent;
                parent = Math.floor((i-1)/2);
            }
            else break;
        }
    }
    this.pop = function(){
        if(heap.length === 1)
        {
            return heap.pop();
        }
        [heap[0],heap[heap.length-1]] = [heap[heap.length-1],heap[0]];
        var val = heap.pop();
        minHeapify(0);
        /*
        var i = 0;
        while(i<heap.length){
            var left = 2*i+1;
            var right = 2*i+2;
            var l = heap[left][0];
            var r = heap[right][0];
            var p = heap[i][0];
            if(l<r && p>l){
                [heap[i],heap[left]] = [heap[left],heap[i]];
                i = left;
            }
            else if(r<l && p>r){
                [heap[i],heap[right]] = [heap[right],heap[i]];
                i = right;
            }

            else
                break;
        }*/

        return val;
    }

    function minHeapify(pos){
        var size = heap.length;
        if(pos < (size / 2) ){
            var left = 2*pos + 1;
            var right = 2*pos +2;
            if(left<heap.length && right < heap.length){
            if(heap[pos][0] > heap[left][0] || heap[pos][0] > heap[right][0]){
                if(heap[pos][0] > heap[left][0]){
                    [heap[pos],heap[left]] = [heap[left],heap[pos]];
                    minHeapify(left)
                }
                else{
                    [heap[pos],heap[right]] = [heap[right],heap[pos]];
                    minHeapify(right);
                }
            }
            }
        }
    }
    this.length = function(){
        return heap.length;
    }
}
var minimumEffortPathTLE = function(heights) {
    var R = heights.length;
    if(R === 0)
        return 0;
    var C = heights[0].length;
    if(R===1 && C===1)
        return 0;
    var visited = [];
    var minMatrix = [];
    

    for(var i=0; i<R;i++){
        visited[i] = new Array(C).fill(false);
        minMatrix[i] = new Array(C).fill(Infinity);
    }

    
    minMatrix[0][0] = 0;
    var pqueue = []
    pqueue.push([minMatrix[0][0],0,0]);

    while (pqueue.length>0){
        var top = pqueue.pop();
        var row = top[1];
        var col = top[2];
        if(row === R-1 && col === C-1)
        {
            return top[0];
        }
        visited[row][col] = true;
        for(var i=0;i<4;i++){
            var r = row + directions[i][0];
            var c = col + directions[i][1];
            if(r<0 || r>=R || c<0 || c>=C ){
               continue;
            }
            if(visited[r][c])
                continue;
            var diff = Math.max(Math.abs ( heights[row][col]-heights[r][c]),top[0]);
            if(minMatrix[r][c] < diff)
                continue;
            minMatrix[r][c] = diff;
            pqueue.push([diff,r,c]);
            pqueue.sort(function(a,b){return b[0]-a[0]});
        }
       
    }
    return minMatrix[R-1][C-1];
};
console.log(minimumEffortPath(
    [[8,6,8,1,4,1],[10,3,1,8,9,10],[1,5,6,9,8,5],[10,4,6,7,3,3],[6,6,9,1,3,3],[3,1,10,3,4,1],[6,1,6,10,7,10]]
))