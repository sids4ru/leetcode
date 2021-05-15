/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    var R = grid.length;
    var C = grid[0].length;
    count = 0;
    for(var r = 0; r<R;r++){
        var row = grid[r]
        var pos = row.findIndex(element => element<0);
        if(pos<0)
            pos = 0;
        count += C-pos;
    }
    return count;
};
console.log(countNegatives(
    [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
))