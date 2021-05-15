/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    var map = new Array(n);
    
    map.fill(0);
    var stack = [];
    var consumed = 0;
    for(var i=0; i<logs.length;i++){
    	var log = logs[i];
    	log = log.split(":");
    	var id = parseInt(log[0]);
    	var time = parseInt(log[2]);
    	if(log[1] === "start"){
    		stack.push([id,time,0]);
    	}
    	else{
    		
    		var entry = stack.pop();
    		if(entry[0] != id)
    			return -1;

    		var diff = time - entry[1]  + 1;
			if(stack.length>0)
				stack[stack.length-1][2] += diff;
	  		map[id] += diff - entry[2];
    		
    	}
    }
    return map;
};
console.log(exclusiveTime(
1,
["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"]

))
