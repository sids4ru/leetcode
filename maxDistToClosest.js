/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
    var max = -Infinity;
    for(var i=0;i<seats.length;i++){
        if(seats[i] === 0){
            var close = maxclosest(seats,i);
            max = Math.max(max,close)
        }
    }
    return max;
};
function maxclosest(seats, pos){
    var left = Infinity;
    for(i=pos-1; i>=0; i--){
        if(seats[i] === 1){
            left = pos - i;
            break;
        }
    }
    var right = Infinity;
    for(var i=pos+1; i<seats.length; i++){
        if(seats[i] === 1){
            right = i-pos;
            break;
        }
    }
    return Math.min(left,right);
}
console.log(maxDistToClosest(
   [ 0,1]
))