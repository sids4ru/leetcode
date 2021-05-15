/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
 var findMaxValueOfEquation = function(points, k) {
    var map = {};
    var left = 0;
    var lymax = 0;
    var lymin = 0
    
    for(var i=1;i<points.length;i++){
        var pointb = points[i];
        var pointa = points[left];
        var xdiff;
        
        while(left<=i){
            xdiff = Math.abs(pointa[0]-pointb[0]);
            if(xdiff>k){
                left++;
                pointa = points[left];  
            }
            else
                break;
        }
        
        if(left < i){
            for(var l = left; l<i;l++){
                pointa = points[l];  
                ysum = pointa[1]+pointb[1];
                xdiff = Math.abs(pointa[0]-pointb[0]);
                if(ysum+xdiff>maxVal){
                    maxVal = ysum+xdiff;
                }
            }
        }
    }

    return maxVal;
};
console.log(findMaxValueOfEquation(
    [[-19,-12],[-13,-18],[-12,18],[-11,-8],[-8,2],[-7,12],[-5,16],[-3,9],[1,-7],[5,-4],[6,-20],[10,4],[16,4],[19,-9],[20,19]],
6

))