/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
	if(words.length < 1)
		return "";
	if(words.length === 1)
		return words[0];
	var indegree = {};	
    var AdjList = {};
    var prev = words[0];
     for(var l = 0; l<prev.length;l++){
			if(!indegree[prev[l]]) indegree[prev[l]] = 0;
		}
    for(var i=1; i<words.length;i++){
    	var word = words[i];
    	if(word === prev){
    		continue;
    	}

		var j=0;
		var success = false;
		while(j<prev.length && j<word.length){
		
			if(word[j] === prev[j]){
				if(!indegree[word[j]]) indegree[word[j]] = 0;
				j++;
				continue;
			}
			success = true;
			if(!AdjList[prev[j]]) AdjList[prev[j]] = {};
			
			if(!AdjList[prev[j]][word[j]]){
				AdjList[prev[j]][word[j]] = true;
				
				if(!indegree[prev[j]]) indegree[prev[j]] = 0;
				if(!indegree[word[j]]) indegree[word[j]] = 0;
				indegree[word[j]]++;
			}
			prev = word;
			j++;
		}
		if(!success && word.length<prev.length)
			return "";
		for(var l = j; l<word.length;l++){
			if(!indegree[word[l]]) indegree[word[l]] = 0;
		}
    }

	var single = false;
	for(var a in indegree){
		single = true;

	}
	if(!single)
		return words[0];

    var res = "";
	while (true){
		var success = false;
		var complete = true;
		for(var key in indegree){
			if(indegree[key] === undefined){
				continue;
			}
			complete = false;
			if(indegree[key]!=0){
				continue;
			}
			success = true;
			var char = key;
			res += char;
			var adj = AdjList[char];
			for(a in adj){
				indegree[a]--;
			}
			indegree[char] = undefined;
		}

		if(complete)
			break;
		if(!success)
			return "";
	}   
	return res; 
	
};
console.log(alienOrder
(


["vlxpwiqbsg","cpwqwqcd"]

))

