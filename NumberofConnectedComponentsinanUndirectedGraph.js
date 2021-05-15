/**
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 * 
 * Number of Connected Components in an Undirected Graph
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
    var AdjMat = new Array(n)
    for(var i=0; i<n;i++){
        AdjMat[i] = [];
    }
    for(var i=0; i<edges.length;i++){
        var edge = edges[i];
        AdjMat[edge[0]].push(edge[1]);
        AdjMat[edge[1]].push(edge[0]);
    }
    var sum = 0;
    var visited = new Array(n);
    visited.fill(false);
    for(var i=0; i<n;i++){
        if(visited[i])
            continue;
        sum += DFSConnected(i,AdjMat,visited);
    }
    return sum;
};
function DFSConnected(pos, AdjMat,visited){
    visited[pos] = true;
    var neighbours = AdjMat[pos];
    for(var i=0; i<neighbours.length;i++){
        if(visited[neighbours[i]])
            continue;
        DFSConnected(neighbours[i],AdjMat,visited);
    }
    return 1;
}
console.log(countComponents(
    5,
    [[0,1],[1,2],[3,4]]
))