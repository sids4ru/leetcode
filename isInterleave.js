/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
	var p1 = 0, p2=0,p3=0;
	var n1 = s1.length,n2=s2.length,n3=s3.length;
	if(n1+n2 != n3)
		return false;
	
    return checkInterleave(p1,p2,p3,s1,s2,s3);
};
function checkInterleave(p1,p2,p3,s1,s2,s3){
	while(p1<s1.length && p2<s2.length && p3<s3.length){
		if(s1[p1] === s2[p2] && s1[p1] === s3[p3]){
			if (checkInterleave(p1+1,p2,p3+1,s1,s2,s3))
				return true; 
			else if ( checkInterleave(p1,p2+1,p3+1,s1,s2,s3))
				return true;
			else return false;
		}
		else if(s1[p1] === s3[p3]){
			p1++;p3++;
		}
		else if (s2[p2] === s3[p3]){
			p2++;p3++;
		}
		else {
			return false;
		}
	}
	while(p1<s1.length && p3<s3.length){
		if(s1[p1] === s3[p3]){
			p1++;p3++
		}
		else return false;
	}
	while(p2<s2.length && p3<s3.length){
		if(s2[p2] === s3[p3]){
			p2++;p3++;
		}
		else return false;
	}
	if(p3<s3.length)
		return false;
	return true;
}

console.log(isInterleave(

"aa",
"ab",
"aaba"
))



