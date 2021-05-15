/**
 * @param {number[]} light
 * @return {number}
 */
 var numTimesAllBlue = function(light) {
    var bulbs = new Array(light.length)
    bulbs.fill(false);
    var count = 0;
    for(var i=0; i<light.length;i++){
        bulbs[light[i]-1] = true;
        var j=0;
        while(bulbs[j] && j<light.length){
            j++;
        }

        var success = true;
        while(!bulbs[j] && j<light.length){
            j++;
        }
        if(j === light.length)
            count++;
    }
    return count;
};
console.log(numTimesAllBlue(
    [1,2,3,4,5,6]
))