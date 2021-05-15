/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(trans) {
    var map = {};
    for(var i=0; i<trans.length;i++){
    	var entry = trans[i];
    	var A = entry[0];
    	var B = entry[1];
    	var cost = entry[2];
    	if(!map[A]) map[A] = 0;
    	if(!map[B]) map[B] = 0;
    	map[A] -= cost;
    	map[B] += cost;
    }
	
	var positive = [];
	var negetive = [];
	for(var keys in map){
		if(map[keys] === 0)
			continue;
		else if (map[keys]>0)
			positive.push(map[keys]);
		else 
			negetive.push(map[keys]);
	}

	return distribute(0,0,positive,negetive);
};

function distribute(k,pos,positive,negetive){
	if(pos === positive.length){
		if(k === 0)
			return 0;
		var count = 0;
		for(var i=0; i<negetive.length; i++){
			if(negetive[i] < 0){
				k+=negetive[i];
				count++
			}
		}
		if(k === 0)
			return count;
		else return Infinity;
	}
	var min = Infinity;
	for(var i=0; i<negetive.length;i++){
		if(negetive[i] === 0)
			continue;
		var val = negetive[i];
		var diff = positive[pos] + val + k;
		var lk;
		if(diff<0){
			negetive[i] = diff;
			lk = 0;
		}
		else {
			negetive[i] = 0;
			lk = diff;
		}
		min = Math.min(min,distribute(lk,pos+1,positive,negetive));	
		negetive[i] = val;
	}
	return min+1;
}

console.log(minTransfers(
//[[0,1,10],[1,0,1],[1,2,5],[2,0,5]]
//[[10,11,6],[12,13,7],[14,15,2],[14,16,2],[14,17,2],[14,18,2]]
//[[0,1,10],[2,0,5]]

//[[0,1,2],[1,2,1],[1,3,1]]
[[0,1,5],[2,3,1],[2,0,1],[4,0,2]]
))

