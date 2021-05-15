/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	var count = 0;
    for(var i=0; i<s.length;i++){
    	count += expand(i,i,s);
    	if(i<s.length-1 && s[i] === s[i+1]){
    		count += expand(i,i+1,s);
    	}
    }
    return count;
};
function expand(left,right,string){
	var count = 1
	while(true){
		left--;		
		right++;
		if(left < 0 || right >=string.length)
			return count;
		if(string[left] != string[right])
			return count;
		count ++;
	}
}
console.log(countSubstrings(
"aaa"
))
