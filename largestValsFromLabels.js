/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
	var N = values.length;
	var arr = new Array(N);
	var map = {};
	for(var i=0; i<N;i++){
		arr[i] = [values[i],labels[i]];
		if(!map[labels[i]]) map[labels[i]] = 0;
	}
	arr.sort(function(a,b){return a[0]-b[0]});
	var sum = 0;
	var count = 0;
	while(arr.length > 0){
		var entry = arr.pop();
		if(count < num_wanted && map[entry[1]]<use_limit){
			sum+= entry[0];
			map[entry[1]]++;
			count++;
		}
	}
	return sum;
};
console.log(largestValsFromLabels(
//[5,4,3,2,1],[1,1,2,2,3],3,1
[9,8,8,7,6],[0,0,0,1,1],3,2
));
