/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = 0;
    var map = {};
    var noBull = [];
    for(var i=0; i<secret.length;i++){
    	if(secret[i] === guess[i])
    		bulls++;
    	else{
    		noBull.push(guess[i]);
    		if(!map[secret[i]]) map[secret[i]] = 0;
    			map[secret[i]]++;
    	}
    }
    var cows = 0;
    for(var i=0; i<noBull.length;i++){
    	if(map[noBull[i]]){
    		map[noBull[i]]--;
    		if(map[noBull[i]] === 0)
    			map[noBull[i]] = undefined;
    		cows++;
    	}
    }
    var str = "";
    str += bulls+"A"+cows+"B";
    return str;
};
console.log(getHint(
	//"1807","7810"
	//"1123","0111"
	"1","0"
))
