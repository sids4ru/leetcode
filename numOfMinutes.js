/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

 var numOfMinutes = function(n, headID, manager, informTime) {
    var map = {};
    for (var i=0; i<manager.length;i++){
        if(!map[manager[i]]) map[manager[i]] = [];
        map[manager[i]].push(i);
    }
    
    var count = DFS(map,headID,informTime[headID],informTime);
    return count;
};

function DFS(map, level,count,informTime){
    if(!map[level])
        return count;
    var reports = map[level];
    var maxCount = -Infinity;
    for(var i=0; i<reports.length;i++){
        
        maxCount = Math.max(maxCount,DFS(map,reports[i],count+informTime[reports[i]],informTime));
    }
    return maxCount;
}
console.log(numOfMinutes(
    //6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]
    //1,0,[-1], [0]
    //7,6,[1,2,3,4,5,6,-1],[0,6,5,4,3,2,1]
    //6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]
    8,0,[-1,5,0,6,7,0,0,0],[89,0,0,0,0,523,241,519]
))