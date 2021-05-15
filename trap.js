/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    var left = new Array(height.length);
    left.fill(0);
    var right = new Array(height.length);
    right.fill(0);
    for(var i=1; i<height.length;i++){
        left[i] = Math.max(left[i-1],height[i-1]);
    }
    for(var i=height.length-2; i>=0; i--){
        right[i] = Math.max(right[i+1],height[i+1]);
    }
    var diff = []
    for(var i=0; i<height.length;i++){
        diff[i] = Math.min(left[i], right[i]);
    }
    var sum = 0;
    for(var i=0; i<height.length;i++){
        var fill = diff[i] - height[i];
        if(fill<0)
            fill = 0;
        sum+=fill;
    }
    return sum;
};
console.log(trap(
    [4,2,0,3,2,5]
))