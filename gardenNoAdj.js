/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
 var gardenNoAdj = function(n, paths) {
    var adjList = {};
    for(var i=1;i<=n;i++){
        adjList[i] = [];
    }
    for(var i=0; i<paths.length;i++){
        adjList[paths[i][0]] .push(paths[i][1]);
        adjList[paths[i][1]].push(paths[i][0]);
    }
    var colors = [1,2,3,4];
    var nodes = new Array(n+1);
    nodes.fill(0);
    for(var i=1; i<n+1; i++){
        var Adj = adjList[i];
        var c = new Array(5)
        c.fill(false);
        for(a in Adj){
            c[nodes[Adj[a]]] = true;
        }
        for(var col = 1;col<=4;col++){
            if(!c[col]){
                nodes[i] = col;
                break;
            }
        }
    }
    nodes.shift();
    return nodes;
};
console.log(gardenNoAdj(
    3,[[1,2],[2,3],[3,1]]
    ))
