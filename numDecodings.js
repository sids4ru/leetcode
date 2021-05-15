/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
	var DP = {}
    return decode(s,0,DP);
};
function decode(str,pos,DP,dpkey){
	if(pos >= str.length)
		return 1;
	var key = ""+pos+" "+dpkey 
	var char = parseInt(str[pos]);
	var count = 0;
	if(char != 0){
		var k = ""+pos+" "+str[pos];
		if(DP[k])
			count += DP[k];
		else{
			var val = decode(str,pos+1,DP,str[pos]);
			DP[k] = val;
			count+=val;
		}
	}
	if(pos < str.length-1){
		var sub = str.substring(pos,pos+2);
		var k = ""+pos+" "+sub;
		var int = parseInt(sub);
		if(int <=26 && int > 9){
			if(DP[k])
				count += DP[k];
			else{
				var val = decode(str,pos+2,DP,sub);
				DP[k] = val;
				count += val;
			}
		}
	}

	return count;
}
console.log(numDecodings(
//"1201234"

"2611055971756562"
))

