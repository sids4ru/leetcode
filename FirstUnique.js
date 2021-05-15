/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.map = {};
    this.unique = {};
    this.order = [];
    var order = this.order;
    var map = this.map;
    var unique = this.unique;
    for(var i=0; i<nums.length;i++){
    	if(!map[nums[i]]) map[nums[i]] = 0;
    	map[nums[i]] ++;
    	if(map[nums[i]] === 1){
    		order.push(nums[i])
    		unique[nums[i]] = order.length-1;
    	}
    	else{
    		if(unique[nums[i]]!=undefined){
    			var pos = unique[nums[i]];
    			order[pos] = undefined;
    			unique[nums[i]] = undefined;
    		}
    	}
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
	var order = this.order;
	for(var i=0; i<order.length;i++){
		if(order[i]!=undefined)
			return order[i];
	}
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    var map = this.map;
    var unique = this.unique;
    var order = this.order;
    var val = value;
    if(!map[value]) map[value] = 0;
    map[value]++;
    if(map[value] === 1){
	    order.push(val)
    	unique[val] = order.length-1;
    }
    else{
    	
       if(unique[val]!=undefined){
    		var pos = unique[val];
    		order[pos] = undefined;
    		unique[val] = undefined;
    	}
    }
    
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
 
 function run(arr,val){
 	var uni = null;
 	var result = [];
 	for(var i=0; i<arr.length;i++){
 		if(arr[i] === "FirstUnique"){
 			uni = new FirstUnique(val[i][0]);
 			result.push(null);
 		}
 		else if(arr[i] === "showFirstUnique"){
 			result.push(uni.showFirstUnique());
 		}
 		else if(arr[i] === "add"){
 			uni.add(val[i][0]);
 			result.push(null);
 			
 		}
 	}
 	return result;
 }
 console.log(run(
 
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"],
//[[[2,3,5]],[],[5],[],[2],[],[3],[]]
// ["FirstUnique","showFirstUnique","add","add","add","add","add","showFirstUnique"]
//,[[[7,7,7,7,7,7]],[],[7],[3],[3],[7],[17],[]]

//["FirstUnique","showFirstUnique","add","showFirstUnique"]
//,[[[809]],[],[809],[]]
 
 ["FirstUnique","showFirstUnique","add","showFirstUnique"]
,[[[233]],[],[11],[]]
 
 ))
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
