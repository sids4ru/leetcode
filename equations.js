/**
 * 
 * You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

 

Example 1:

Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
Example 2:

Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]
Example 3:

Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
 

Constraints:

1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lower case English letters and digits.
 */
var adjMat = [];
var eqs;
var size = 5;
var visited;
function clearADJ(size){
    adjMat = [];
    visited = [];
    for(var i=0;i<size;i++){
        var row = [];
        var visitedRow = []
        for(var j=0;j<size;j++){
            visitedRow.push(false);
            if(j===i)
                row.push(1);
            else
                row.push(0);
        }
        adjMat.push(row);
        visited.push(visitedRow);
    }
}
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
 var calcEquation = function(equations, values, queries) {
    makeAdj(equations,values);
    var result = [];
    for(var i=0;i<queries.length;i++){
        var from = eqs.get(queries[i][0]);
        var to = eqs.get(queries[i][1]);
        if(from === undefined || to === undefined){
            result.push(-1);
            continue;
        }
        result.push(dfs(from,to));
    }
    return result;
};

function makeAdj(equations,values){
    eqs = new Map;
    for(var i=0; i<equations.length; i++){
        for(var j=0;j<2;j++){
            if(!eqs.has(equations[i][j])){
                eqs.set(equations[i][j],eqs.size);
            }
        }  
    }
    size = eqs.size;
    clearADJ(size);

    for(var i=0; i<equations.length; i++){
        var p = [];
        for(var j=0;j<2;j++){
            p[j] = eqs.get(equations[i][j]);
        }  
        adjMat[p[0]][p[1]] = values[i];
        adjMat[p[1]][p[0]] = 1/values[i];
    }
}
function dfs(from,to){
    if(adjMat[from][to] > 0)
        return adjMat[from][to];
    
    var prod = 1;
    for(var i=0;i<size;i++){
        if(i===from)
            continue;
        if(adjMat[from][i] === 0)
            continue;
        if(visited[from][i])
            continue;
        prod = -1;
        if (adjMat[from][i]>0){
            visited[from][i] = true;
            //visited[i][from] = true;
            prod = dfs(i,to);
            visited[from][i] = false;
            //visited[i][from] = false;
            if(prod > 0)
            return prod*adjMat[from][i];
        }
    }
    return -1;
}
console.log(calcEquation(
    [["a","b"],["c","d"],["e","f"],["g","h"]],
    [4.5,2.3,8.9,0.44],
    [["a","c"],["d","f"],["h","e"],["b","e"],["d","h"],["g","f"],["c","g"]]
));