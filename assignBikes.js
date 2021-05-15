/*

https://leetcode.com/problems/campus-bikes/

https://www.youtube.com/watch?v=tG7GFge4-fQ

1057. Campus Bikes

Medium

688

122

Add to List

Share
On a campus represented as a 2D grid, there are N workers and M bikes, with N <= M. Each worker and bike is a 2D coordinate on this grid.

Our goal is to assign a bike to each worker. Among the available bikes and workers, we choose the (worker, bike) pair with the shortest Manhattan distance between each other, and assign the bike to that worker. (If there are multiple (worker, bike) pairs with the same shortest Manhattan distance, we choose the pair with the smallest worker index; if there are multiple ways to do that, we choose the pair with the smallest bike index). We repeat this process until there are no available workers.

The Manhattan distance between two points p1 and p2 is Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.

Return a vector ans of length N, where ans[i] is the index (0-indexed) of the bike that the i-th worker is assigned to.

 

Example 1:



Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
Output: [1,0]
Explanation: 
Worker 1 grabs Bike 0 as they are closest (without ties), and Worker 0 is assigned Bike 1. So the output is [1, 0].
Example 2:



Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
Output: [0,2,1]
Explanation: 
Worker 0 grabs Bike 0 at first. Worker 1 and Worker 2 share the same distance to Bike 2, thus Worker 1 is assigned to Bike 2, and Worker 2 will take Bike 1. So the output is [0,2,1].
 

Note:

0 <= workers[i][j], bikes[i][j] < 1000
All worker and bike locations are distinct.
1 <= workers.length <= bikes.length <= 1000
*/
/*
var assignBikes = function(workers, bikes) {
    // caculate all distance from workers to bikes
    // stored as key-value pair ==>  distance: [worker, bike]
    
    let distances = {}
    for (let i=0; i<workers.length; i++){
        let worker = workers[i]
        for(let j=0;j<bikes.length; j++){
            let bike = bikes[j]
            let dist = Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1])
            if(!distances[dist]){
                distances[dist] = []
            }
            distances[dist].push([i, j])
        }
    }
    
    let res = new Array(workers.length).fill(-1)
    let usedBike = {}
    
    // for distance 0 - 2000,  assign bike to worker 
    
    for(let d=0; d<2000; d++){
        let distance = distances[d]
        if(distance) {
            for (let i = 0; i<distance.length; i++){ 
                let pair = distance[i] 
                let worker = pair[0]
                let bike = pair[1]
                if(res[worker] == -1 && !usedBike[bike]){
                    res[worker] = bike
                    usedBike[bike] = true
                }
            }
        }
    }
    
    return res
};
*/
var assignBikes = function(workers, bikes) {
	
	var map = {};
	for(var w=0; w<workers.length;w++){
		var worker = workers[w];
		for(var b=0; b<bikes.length;b++){
			var bike = bikes[b];
			var distance = Math.abs(worker[0]-bike[0]) + Math.abs(worker[1]-bike[1]);
			if(!map[distance]) map[distance] = [];
			map[distance].push([w,b]);
		}
	}
	var usedBike = {};
	var res = new Array(workers.length);
	res.fill(-1);
	for(var i=0; i<2000; i++){
		if(!map[i])
			continue;
		var bucket = map[i];
		for(var b = 0; b<bucket.length;b++){
			var ele = bucket[b];
			var worker = ele[0];
			var bike = ele[1];
			if(!usedBike[bike] && res[worker]===-1)
			{
				res[worker]=bike;
				usedBike[bike] = true;
			}
		}
	}
	return res;
	

};

console.log(assignBikes(

//[[0,0],[2,1]],
//[[1,2],[3,3]]

//[[0,0],[1,1],[2,0]],
//[[1,0],[2,2],[2,1]]


[[240,446],[745,948],[345,136],[341,68],[990,165],[165,580],[133,454],[113,527]]
,[[696,140],[95,393],[935,185],[767,205],[387,767],[214,960],[804,710],[956,307]]

))
console.log(
[7,6,0,3,2,4,1,5]);
