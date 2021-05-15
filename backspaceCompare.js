/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
	var sarr = [];
    for(var i=0; i<s.length;i++){
    	if(s[i] === "#"){
    		if (sarr.length>0) sarr.pop();
    		}
    	else{
    		sarr.push(s[i]);
    	}
    }
    s = sarr.join("");

    sarr = [];
    for(var i=0; i<t.length;i++){
    	if(t[i] === "#"){
    		if (sarr.length>0) sarr.pop();
    		}
    	else{
    		sarr.push(t[i]);
    	}
    }
    t = sarr.join("");

    if(s === t)
    	return true;
    else return false;
    
    
};
console.log(backspaceCompare(
"ab#c", "ad#c"
))
