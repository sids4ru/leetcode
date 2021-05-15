/**
 * Graph Valid Tree
 * https://leetcode.com/problems/graph-valid-tree/
 * 
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

 

Example 1:


Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
Example 2:


Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
 

Constraints:

1 <= 2000 <= n
0 <= edges.length <= 5000
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no self-loops or repeated edges.
 * 
 * 
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
 var validTree = function(n, edges) {
    if(n<=1)
        return true;
    var adjList = {};
    for(var i=0;i<n;i++){
        adjList[i] = [];
    }
    for(var i=0;i<edges.length;i++){
        adjList[edges[i][0]].push(edges[i][1]);
        adjList[edges[i][1]].push(edges[i][0]);
    }
    visited = new Array(n);
    visited.fill(-1);
    visited[0] = 0
    if (!findCycleDFS(0,adjList,visited))
        return false;
    for(var i=0; i<n;i++){
        if(visited[i]===-1)
            return false
    }
    return true;
};
function findCycleDFS(current, adjList, visited){
    visited[current] = 0;
    var vertices = adjList[current];
    for(var i=0;i<vertices.length;i++){
        if(visited[vertices[i]] === 1)
            return false;
        if(visited[ vertices[i]] === 0 )
            continue;
        
        if(!findCycleDFS(vertices[i],adjList,visited))
            return false;
    }
    visited[current] = 1;
    return true;
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////BFS IMPLEMENTATION///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var validTreeBFS = function(n, edges) {
	var AdjList = {};
	for(var i=0; i<edges.length; i++){
		var edge = edges[i];
		if(!AdjList[edge[0]]) AdjList[edge[0]] = {};
		if(!AdjList[edge[1]]) AdjList[edge[1]] = {};
		AdjList[edge[1]][edge[0]] = true;
		AdjList[edge[0]][edge[1]] = true;
	}
	var visited = new Array(n);
	visited.fill(-1);
	
	var queue = [];
	queue.push(0);
	visited[0]++;
	while(queue.length>0){
		var top = queue.shift();
		visited[top]++;
		var adj = AdjList[top];
		for(var i in adj){
			var node = parseInt(i);
			if(visited[node] === 1)
				continue;
			if(visited[node] === 0){
				return false
			}
			visited[node] ++;
			queue.push(node);
		}
	}
		
	for(var i=0; i<n; i++){
		if(visited[i] === -1)
			return false;
	}
	return true;
};
console.log(validTree(
    4,
    [[2,3],[1,2],[1,3]]
))