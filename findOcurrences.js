/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
	text = text.split(" ");
	var count = -1;
	var result = [];
	for(var i=0; i<text.length;i++){
		var word = text[i];
		if(word === first){
			if(count === 1){
				result.push(word);
			}
			count = 0;
			
		}
		else if(word === second){
			if(count === 0)
				count ++;
			else if(count === 1){
				result.push(word);
				count = -1
			}
			else count = -1;
		}
		else{
			if(count === 1){
				result.push(word);
				count = -1;
			}
			else count = -1;
		}
	}
	return result;
};
console.log(findOcurrences(
"ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk"
,"lnlqhmaohv"
,"ypkk"
))
