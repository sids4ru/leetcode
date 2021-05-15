 // This is the master's API interface.
 // You should not implement it, or speculate about its implementation
function Master() {
      this.guess = function(word) {

			//var secret = "acckzz";
			var secret = "hbaczn";
			
			/*var c = 0;
			for(var j=0; j<6;j++){
				if(d.indexOf(word[j]) > -1){
					c++;
				}
			}
			return c;*/
			var count = 0;
			for(var i=0; i<6; i++){
				if(word[i] === secret[i])
					count++;
			}
			return count;
     };
 };
 
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(wordlist, master) {
  var map = {};
  for(var i=0; i<wordlist.length;i++){
  	var word = wordlist[i];
  	for(var j=0; j<word.length;j++){
  		if(!map[word[j]]) map[word[j]] = 0;
  		map[word[j]]++
  	}
  }
  var maxCount = -Infinity;
  var maxword;  
  for(var i=0; i<wordlist.length;i++){
  	var count = 0;
  	var word = wordlist[i];
  	for(var j=0;j<word.length;j++){
  		count += map[word[j]];
  		
  	}
  	if(count > maxCount){
  		maxCount = count;
  		maxword = i;
  	}
	
  }
  return startGuessing(maxword,wordlist,master,map);
};

function startGuessing(datum,wordlist,master,letterMap){
	var visited = new Array(wordlist.length);
	var count = 0;
	
	while(count < wordlist[datum].length){
		var count  = master.guess(wordlist[datum]);
		if (count === 6)
			return true;
		visited[datum] = true;
		
		var d = wordlist[datum];
		var consider = [];
		for(var i=0; i<wordlist.length;i++){
			if(visited[i])
				continue;
			var word = wordlist[i];
			var c = 0;
			for(var j=0; j<6;j++){
				if(word[j] === d[j])
					c++;
				/*if(word.indexOf(d[j]) > -1){
					c++;
				}*/
			}
			
			if(c === count){
				consider.push(word);
			}
		}
		if(consider.length === 0);
			consider = wordlist;	
		var c = 0;
		var maxc = -Infinity;
		var maxw;
		for(var i=0; i<consider.length;i++){
			if(visited[i])
				continue;
			var word = consider[i];
			for(var j=0; j<6;j++){
				c+=letterMap[word[j]];
			}
			if(c>maxc){
				maxc = c;
				maxw = i;
			}
		}
		datum = maxw;
	}
}


console.log(findSecretWord(
//"hbaczn"
["gaxckt","trlccr","jxwhkz","ycbfps","peayuf","yiejjw","ldzccp","nqsjoa","qrjasy","pcldos","acrtag","buyeia","ubmtpj","drtclz","zqderp","snywek","caoztp","ibpghw","evtkhl","bhpfla","ymqhxk","qkvipb","tvmued","rvbass","axeasm","qolsjg","roswcb","vdjgxx","bugbyv","zipjpc","tamszl","osdifo","dvxlxm","iwmyfb","wmnwhe","hslnop","nkrfwn","puvgve","rqsqpq","jwoswl","tittgf","evqsqe","aishiv","pmwovj","sorbte","hbaczn","coifed","hrctvp","vkytbw","dizcxz","arabol","uywurk","ppywdo","resfls","tmoliy","etriev","oanvlx","wcsnzy","loufkw","onnwcy","novblw","mtxgwe","rgrdbt","ckolob","kxnflb","phonmg","egcdab","cykndr","lkzobv","ifwmwp","jqmbib","mypnvf","lnrgnj","clijwa","kiioqr","syzebr","rqsmhg","sczjmz","hsdjfp","mjcgvm","ajotcx","olgnfv","mjyjxj","wzgbmg","lpcnbj","yjjlwn","blrogv","bdplzs","oxblph","twejel","rupapy","euwrrz","apiqzu","ydcroj","ldvzgq","zailgu","xgqpsr","wxdyho","alrplq","brklfk"]
,new Master()
//10
//["acckzz","ccbazz","eiowzz","abcczz"], new Master()
//["hamada","khaled"], new Master()

))



//"hamada"
//["hamada","khaled"]
//10















