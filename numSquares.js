/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function(n) {
	var map = [];
	var i = 1;
		
	/*while (i<n){
		map.push(i);
		i *= i;
	}*/
	for(var i=1; i<=n; i++){
		var square = i*i;
		map.push(square);
		if(square > n)
			break;
	}
	var DP = new Array (n+1);
	DP.fill(Infinity);
	return recurse(n,map,DP);

};
function recurse(num,map,DP){
	if(num < 0)
		return Infinity;
	if(num === 0)
		return 0;
	if(DP[num] < Infinity)
		return DP[num];
	var min = Infinity;
	for(var i=map.length-1; i>=0; i--){
		if (map[i]>num)
			continue;
		min = Math.min(min,recurse(num - map[i],map,DP));
	}
	DP[num] = min+1;
	return min+1;
}

console.log(numSquares(
	55
))
