/**
 * https://leetcode.com/problems/optimize-water-distribution-in-a-village/
 * 1168. Optimize Water Distribution in a Village
 * 
 * https://www.youtube.com/watch?v=_Bb9GRu4myk
Hard

404

15

Add to List

Share
There are n houses in a village. We want to supply water for all the houses by building wells and laying pipes.

For each house i, we can either build a well inside it directly with cost wells[i - 1] (note the -1 due to 0-indexing), or pipe in water from another well to it. The costs to lay pipes between houses are given by the array pipes, where each pipes[j] = [house1j, house2j, costj] represents the cost to connect house1j and house2j together using a pipe. Connections are bidirectional.

Return the minimum total cost to supply water to all houses.

 

Example 1:



Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
Output: 3
Explanation: 
The image shows the costs of connecting houses using pipes.
The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.
 

Constraints:

1 <= n <= 104
wells.length == n
0 <= wells[i] <= 105
1 <= pipes.length <= 104
pipes[j].length == 3
1 <= house1j, house2j <= n
0 <= costj <= 105
house1j != house2j
 * 
 * 
 */

/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */

/**
 * ***********************************************************************
 * YOU TUBE VIDEO IMPLEMENTATION using UNION FIND
 * * https://www.youtube.com/watch?v=_Bb9GRu4myk
 * 
 * ************************************************************************
 */



 var parent = [];
 function merge(a,b){
     parent[find(a)] = find(b);
 }
 function find(a){
     if(parent[a] != a){
         parent[a] = find(parent[a]);
     }
     return parent[a];
 }
 
 var minCostToSupplyWater = function(n, wells, pipes) {
    parent = new Array(wells.length+1);
    for(var i=1; i<=wells.length; i++){
        parent[i] = i;
    }
    var costDetector = {}
    for(var i=0; i<wells.length;i++){
        costDetector[i+1] = wells[i];
    }
    pipes.sort(function(a,b){return a[2] - b[2]});
    var totalCost = 0;

    //Pay attention this is main part of the algorithm
    var totalCost = 0;
    for(var i=0; i<pipes.length;i++){
        var pipe = pipes[i]
        var houseA = pipe[0];
        var houseB = pipe[1];
        var cost = pipe[2];

        if(find(houseA)!=find(houseB)){
            var minWell = Math.min(costDetector[find(houseA)], costDetector[find(houseB)]);
            var costOfSeperateWells = costDetector[find(houseA)] + costDetector[find(houseB)];
            if(costOfSeperateWells > minWell + cost){
                merge(houseA,houseB);
                costDetector[find(houseA)] = minWell;
                totalCost+=cost;
            }
        }
    }
    var visited = new Array(wells.length+1);
    visited.fill(false);
    for(var i=1; i<=wells.length;i++){
        if(visited[find(i)] === false){
            totalCost += costDetector[find(i)];
            visited[find(i)] = true;
        }
    }
    return totalCost;
};
console.log(minCostToSupplyWater(
    3,[1,2,2],[[1,2,1],[2,3,1]]
))

/**
 * ***********************************************************************
 *      MY IMPLEMENTATION AGAIN USING UNION FIND
 * 
 * ************************************************************************
 */
