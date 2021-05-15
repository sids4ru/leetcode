/**
 * 
 * Course Schedule
 * https://leetcode.com/problems/course-schedule/
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 105
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
 * 
 * /
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
var dp;
var map;
var visited;
 var canFinish = function(numCourses, prerequisites) {
    map = new Map();
    dp = new Map();
    makeGraph(prerequisites);
    
    for(let key of map){
        visited = new Map;
        if(!checkPossible(key[0]))
            return false;
    }
    return true;
};
function checkPossible(key){
    if(dp.has(key))
        return true;
    if(visited.has(key)){
        if(visited.get(key) === true)
            return false;
    }
    visited.set(key,true);
    var node = map.get(key);
    for(var i=0; i<node.neighbors.length;i++){
        if(!checkPossible(node.neighbors[i].val))
            return false;
        
    }
    visited.set(key,false);
    dp.set(key,true);
    return true;
    
}
function makeGraph(prerequisites){
    for(var i=0; i<prerequisites.length;i++){
        var left, right;
        if(!map.has(prerequisites[i][0])){
            left = new Node(prerequisites[i][0]);
            map.set(prerequisites[i][0],left);
        }else left = map.get(prerequisites[i][0])
        if(!map.has(prerequisites[i][1])){
            right = new Node(prerequisites[i][1]);
            map.set(prerequisites[i][1],right);
        }else right = map.get(prerequisites[i][1]);
        left.neighbors.push(right);
    }
}
console.log(canFinish(
5,
[[1,4],[2,4],[3,1],[3,2]]

));
