/**
 * @param {string} s
 * @return {number}
 */
 var countDistinct = function(s) {
	var count = 0;
    var map = {};
	for (var i=0; i<s.length; i++){
        for (var j=i+1; j<=s.length;j++){
	        var sub = s.substring(i,j);
	        if (!map[sub]){
		        count ++;
		        map[sub] = true;
            }
        }
    }
    return count;
};
console.log(countDistinct(
    "aabbaba"
    ))