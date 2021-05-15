/**
 * @param {number} n
 * @return {number}
 */
 var bulbSwitch = function(n) {
     if(n===0)
        return 0;
    if(n === 1)
        return 1;
    var bulbs = new Array(n)
    bulbs.fill (true);
    for(var i=1;i<=n;i++){
        for(var j=i;j<n;j=j+i+1){
            bulbs[j] = !bulbs[j];
        }
    }
    var count = 0;
    for(var i=0;i<n;i++){
        if(bulbs[i])
            count ++;
    }
    return count;
};
console.log(bulbSwitch(
    "99999999"
))