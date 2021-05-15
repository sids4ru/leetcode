/**
 * @param {string} input
 * @return {number}
 */

var lengthLongestPath = function(input) {
    input = input.split("\n");
    var currentDIR = "";
    var map = {};
    var maxsum = 0
    for(var i=0; i<input.length;i++){
        var current = input[i];
        current = current.split("\t");
        var level = current.length;
        var name = current[level-1]
        if(name.indexOf(".") < 0){
            map[level] = name;
        }
        else{
            var sum = 0;
            for(var j=1;j<level;j++){
                sum += map[j].length;
                sum += 1;
            }
            sum+=name.length;
            maxsum = Math.max(maxsum,sum);
        }

    }
    return maxsum;
};
console.log(lengthLongestPath(
    "file1.txt\nfile2.txt\nlongfile.txt"
))
