/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    var distances = [];
    for(var i=0; i<points.length;i++){
        var point = points[i];
        var distance = Math.sqrt(point[0]*point[0] + point[1]*point[1]);
        distances.push([distance,point[0],point[1]])
    }
    distances.sort(function(a,b){
        return a[0] - b[0];
    })
    var result = [];
    for(var i=0;i<k;i++){
        result.push([distances[i][1],distances[i][2]]);
    }
    return result;
};
console.log(kClosest(
    [[1,3],[-2,2]],
    1
))