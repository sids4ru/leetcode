/**
 * @param {number[][]} points
 * @param {number} angle
 * @param {number[]} location
 * @return {number}
 */

 var visiblePoints = function(points, angle, location) {
    var angles = [];
    var appendCount = 0
    for(var i=0;i<points.length;i++){
        var point = points[i];
        if(point[0] === location[0] && point[1] === location[1]){
            appendCount++;
        }
        else if(point[0] === location[0]){
            if(point[1] > point[0])
                angles.push(90);
            else
                angles.push(-90);
        }
        else
            angles.push(Math.atan((point[1]-location[1])/(point[0]-location[0]))*180/Math.PI);
        
        var a = angles[angles.length-1];
        angles.push(a+360);

    } 
    angles.sort(function(a,b){
        return a-b;
    });
    var maxrange = 0;
    var maxL = 0;
    var maxR = 0;
    var l = 0;
    for(var r=0; r < angles.length; r++){
        if(angles[i] === Infinity)
            break;
        
        while(angles[r]-angles[l]>angle){
            l++;
        }
        
        if(maxrange<r-l+1){
            maxL = l;
            maxR = r;
        }
        maxrange = Math.max(r-l+1,maxrange);
    }
    return maxrange+appendCount;
};
console.log(visiblePoints(
    [[45,26],[82,12],[33,83],[58,50],[55,92],[66,42],[25,74],[74,74],[36,87],[7,41],[89,36],[44,22],[84,9],[96,90],[75,51],[87,15],[50,75],[90,84],[56,18],[43,48],[23,27],[100,34]],
    12,
    [32,37]
))
/**
 *  [32,37]
 *  
 * 13: 39.01940047523655
14: 39.6290053044643
15: 41.378515295882664
16: 45
17: 48.012787504183336
 * 
    [32,37]
 *                      12
 *  13: (2) [96, 90]    39.01940047523655 
    14: (2) [75, 51]    39.6290053044643
    15: (2) [87, 15]    41.378515295882664
    16: (2) [50, 75]    45
    17: (2) [90, 84]    48.012787504183336
 * 
 */