/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	var R = text1.length;
	var C = text2.length;
	var DP = new Array(R+1);
	for(var r=0; r<=R;r++){
		var col = new Array(C+1);
		col.fill(0);
		DP[r] = col;
	}
	for(var r=1; r<=R;r++){
		for(var c=1; c<=C; c++){
			if(text1[r-1] === text2[c-1]){
				DP[r][c] = DP[r-1][c-1] + 1;
			}
			else{
				DP[r][c] = Math.max(DP[r][c-1],DP[r-1][c]);
			}
		}
	}
	return DP[R][C]
};
console.log(longestCommonSubsequence(
"abc",
"abc"
))
