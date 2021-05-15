
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
var minSwap = function(nums1, nums2) {
	var count = 0;
    for(var i=1; i<nums1.length;i++){
    	if((nums1[i]<=nums1[i-1] && nums2[i]>nums1[i-1]) || (nums2[i] <= nums2[i-1] && nums1[i] > nums2[i-1])){
			[nums1[i],nums2[i]] = [nums2[i],nums1[i]]  
				count++;
			}
    }
    return count;

};
/*
function swap(pos,nums1,nums2,DP){
	if(pos === nums1.length){
		var success = true;
		for(var i=1; i<nums1.length; i++){
			if(nums1[i] <= nums1[i-1] || nums2[i] <= nums2[i-1]){
				success = false;
				break;
			}
		}
		if(success)
			return 0;
		else return Infinity
	}
	//if(DP[pos]!=Infinity)
	//	return DP[pos];
	var count1 = swap(pos+1,nums1,nums2,DP);
	
	
	
	[nums1[pos],nums2[pos]] = [nums2[pos],nums1[pos]];
	var count2 = swap(pos+1,nums1,nums2,DP)+1;
	[nums1[pos],nums2[pos]] = [nums2[pos],nums1[pos]];
	
	DP[pos] = Math.min(count1,count2);
	
	return DP[pos];
}
*/
function swap2(pos,nums1,nums2,DP,count,s){
	//if(pos === nums1.length)
		//return 0;
	//else{
		var success = true;
		for(var i=1; i<nums1.length; i++){
			if(nums1[i] <= nums1[i-1] || nums2[i] <= nums2[i-1]){
				success = false;
				break;
			}
		}
		if(success)
			return count;
		else if(pos === nums1.length)
			return Infinity;
		//}

	
	if(DP[pos]!=Infinity)
		return DP[pos];



	var count1=Infinity,count2=Infinity;
	
	count1 = swap2(pos+1,nums1,nums2,DP,count,0);
	
	
	if(pos >0 && nums1[pos] <= nums1[pos-1] || nums2[pos] <= nums2[pos-1]){
		[nums1[pos],nums2[pos]] = [nums2[pos],nums1[pos]];
		count2 = swap2(pos+1,nums1,nums2,DP,count+1,1);
		[nums1[pos],nums2[pos]] = [nums2[pos],nums1[pos]];
	}
	
	DP[pos] = Math.min(count1,count2);
	
	return DP[pos];
}
console.log(minSwap(
//[2,1,6,7,8,13,15,11,18,13,20,24,17,28,22,23,36,37,39,34,43,38,48,41,46,48,49,50,56,55,59,60,62,64,66,75,69,70,71,74,87,78,95,97,81,99,85,101,90,91,93,95,107,109,101,111,106,114,115,117,118,115,121,122,123,124,125,126,134,131,133,136,142,149,151,152,145,156,158,150,162,159,161,165,169,170,169,174,172,176,177,181,183,192,186,188,189,196,198,200]
//,		[0,4,10,11,12,9,10,16,12,19,15,16,25,20,33,34,27,29,32,40,35,45,40,50,51,52,53,55,52,58,58,61,62,66,71,68,78,81,83,84,75,91,79,80,98,83,100,89,102,103,105,106,96,98,110,105,113,109,110,111,112,120,116,118,126,130,131,133,129,137,138,140,137,138,140,142,154,147,149,159,152,163,164,163,166,168,171,170,175,176,177,181,186,184,193,194,195,190,195,200]


//[0,2,5,8,9,10,12,14,18,19,20,20,24,27,28,31,33,34,36,38]
//,[1,2,5,7,8,9,11,17,15,16,19,21,28,29,30,31,33,34,38,39]
//[4,10,13,14,17,19,21,24,26,27,28,29,34,37,38,42,44,46,48,51,52,53,54,57,58,59,64,65,66,67,71,73,75,76,80,81,82,83,86,88,89,90,95,97,98,99,101,105,106,108,109,110,111,112,115,119,121,122,123,124,125,126,127,128,129,130,131,133,136,138,143,145,147,149,150,153,158,160,163,164,165,167,168,169,172,173,174,176,178,179,183,184,186,188,189,192,193,194,198,200]
//,[0,1,3,5,6,7,11,13,15,16,17,21,37,39,41,42,43,45,47,50,53,55,56,57,64,66,67,68,69,70,71,72,74,75,76,77,79,80,87,88,89,95,96,97,98,100,101,105,106,107,108,112,113,115,116,118,119,122,124,125,126,127,128,131,135,136,137,138,139,140,144,145,148,150,151,154,159,160,161,162,163,167,168,170,171,174,176,178,179,180,181,185,187,189,190,191,192,198,199,200]
//[0,7,8,10,10,11,12,13,19,18],
//[4,4,5,7,11,14,15,16,17,20]
[0,4,4,5,9],
[0,1,6,8,10]
))
