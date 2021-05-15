/*
https://leetcode.com/problems/all-paths-from-source-lead-to-destination/

1059. All Paths from Source Lead to Destination
Medium

251

44

Add to List

Share
Given the edges of a directed graph where edges[i] = [ai, bi] indicates there is an edge between nodes ai and bi, and two nodes source and destination of this graph, determine whether or not all paths starting from source eventually, end at destination, that is:

At least one path exists from the source node to the destination node
If a path exists from the source node to a node with no outgoing edges, then that node is equal to destination.
The number of possible paths from source to destination is a finite number.
Return true if and only if all roads from source lead to destination.

 

Example 1:


Input: n = 3, edges = [[0,1],[0,2]], source = 0, destination = 2
Output: false
Explanation: It is possible to reach and get stuck on both node 1 and node 2.
Example 2:


Input: n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3
Output: false
Explanation: We have two possibilities: to end at node 3, or to loop over node 1 and node 2 indefinitely.
Example 3:


Input: n = 4, edges = [[0,1],[0,2],[1,3],[2,3]], source = 0, destination = 3
Output: true
Example 4:


Input: n = 3, edges = [[0,1],[1,1],[1,2]], source = 0, destination = 2
Output: false
Explanation: All paths from the source node end at the destination node, but there are an infinite number of paths, such as 0-1-2, 0-1-1-2, 0-1-1-1-2, 0-1-1-1-1-2, and so on.
Example 5:


Input: n = 2, edges = [[0,1],[1,1]], source = 0, destination = 1
Output: false
Explanation: There is infinite self-loop at destination node.
 

Constraints:

1 <= n <= 104
0 <= edges.length <= 104
edges.length == 2
0 <= ai, bi <= n - 1
0 <= source <= n - 1
0 <= destination <= n - 1
The given graph may have self-loops and parallel edges.
*/




/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    var AdjList = {};
    for(var i=0; i<edges.length;i++){
    	var A = edges[i][0];
    	var B = edges[i][1];
    	if(!AdjList[A]) AdjList[A] = {};
    	AdjList[A][B] = true;
    }
    var visited = {};
    return DFS(source,destination,AdjList,visited)
};
function DFS(source,destination,AdjList,visited){
	if(source === destination){
		if(!AdjList[source])
			return true;
		else return false;
	}
	visited[source] = true;
	var success = false;
	var Adj = AdjList[source];
	for(node in Adj){
		if(parseInt(node) === source){
			success = false;
			break;
		}
		if(visited[node])
			continue;
		if(!DFS(parseInt(node),destination,AdjList,visited)){
			success = false;
			break;
		}
		else success = true;
	}
	return success;
}
console.log(leadsToDestination(
//3,[[0,1],[0,2]],0,2
//4,[[0,1],[0,3],[1,2],[2,1]],0,3
//4,[[0,1],[0,2],[1,3],[2,3]],0,3
//3,[[0,1],[1,1],[1,2]],0,2


2,
[[0,1],[1,1]],
0,
1


));
