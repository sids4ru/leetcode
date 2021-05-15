/**
 * 
 * Alien Dictionary
 * 
 * https://leetcode.com/problems/alien-dictionary/
 * 
 * 
 * There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

 

Example 1:

Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
Example 2:

Input: words = ["z","x"]
Output: "zx"
Example 3:

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of only lowercase English letters.
 


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||JS SOLUTION FROM LEET CODE|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
*/
/**
 * @param {string[]} words
 * @return {string}
 */

  function alienOrder(words) {
    let uniqueCharCount = new Set(), indegree = {}, dependencyArray = [], indegreeQueue = [], uniqueCharString = "";
    
    //Collect all unique characters and initialize indegree object
    for(let word of words) {
        for(let char of word) {
            if(!uniqueCharCount.has(char)) {
                uniqueCharCount.add(char);
                indegree[char] = 0;
            }
        }
    }
    //Populate indegree object with incoming edges
    for(let i = 0; i < words.length - 1; i++) {
        if(words[i].startsWith(words[i + 1]) && words[i].length > words[i + 1].length) {
            return "";
        }
        let minWordLength = Math.min(words[i].length, words[i + 1].length), differenceFound = false;
        for(let j = 0; j < minWordLength && !differenceFound; j++) {
            if(words[i][j] !== words[i + 1][j]) {
                dependencyArray.push([words[i + 1][j], words[i][j]]);
                indegree[words[i + 1][j]] ++;
                differenceFound = true;
            }
        }
    }
    //Build return string with characters that have 0 incoming edges
    for(let key in indegree) {
        if(indegree[key] === 0) {
            indegreeQueue.push(key);
            uniqueCharString += key;
        }
    }
    //Conduct BFS to remove incoming edges for each character and append characters with 0 incoming edges to the return string
    while(indegreeQueue.length) {
        let currentNode = indegreeQueue.shift();
        for(let i = 0; i < dependencyArray.length; i++) {
            if(dependencyArray[i][1] === currentNode) {
                indegree[dependencyArray[i][0]] --;
                if(indegree[dependencyArray[i][0]] === 0) {
                    indegreeQueue.push(dependencyArray[i][0]);
                    uniqueCharString += dependencyArray[i][0];
                }
            }
        }
    }
    //Return the return string if the length is the same as the count of unique characters, else return empty string
    return uniqueCharString.length === uniqueCharCount.size ? uniqueCharString : "";
};


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||MY SOLUTION ||||||TOPOLOGICAL SORT ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||MY SOLUTION ||||||TOPOLOGICAL SORT ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||MY SOLUTION ||||||TOPOLOGICAL SORT ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||MY SOLUTION ||||||TOPOLOGICAL SORT ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||MY SOLUTION ||||||TOPOLOGICAL SORT ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
*/
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
console.log(alienOrder1(
    
    ["wnlb"]
    ));
