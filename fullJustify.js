/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var left = 0;
    var result = [];
    var width = 0;
    for(var right = 0; right <words.length;right++){
		width += words[right].length;
		if(right!=left)
			width++;
		if(width>maxWidth){
			var fill = 0;
			var res = ""
			for(var i=left; i<right;i++){
				fill+=words[i].length;
			}
			var diff = maxWidth - fill;
			var div = right-left-1;
			if(div === 0)
				div = 1;
			var spacesBetween = Math.floor(diff/div);
			var remainder = diff%div;
			res+=words[left];
			res = insertSpaces(res,spacesBetween);
			if(remainder>0)
				res = insertSpaces(res,1);
			remainder--;
			for(var i=left+1; i<right;i++){
				res+=words[i];
				if(i!=right-1){
					res = insertSpaces(res,spacesBetween);
					if(remainder>0)
					res = insertSpaces(res,1);
					remainder--;
				}
			}
			result.push(res);
			left = right;
			width = words[right].length;
		}
    }
    var res = "";
    for(var i=left; i<words.length; i++){
    	res += words[i];
    	if(i<words.length-1)
    		res += " ";
    }
    if(res.length > 0){
    	var diff = maxWidth - res.length;
    	res = insertSpaces(res,diff);
    	result.push(res);
    }
    
    return result;
};
function insertSpaces(str,spaces){
	for(var i=0; i<spaces; i++)
		str+= " ";	
	return str;
}

console.log(fullJustify(
["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],
20

))
console.log(["Science  is  what we","understand      well","enough to explain to","a  computer.  Art is","everything  else  we","do                  "])




