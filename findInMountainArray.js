
 // This is the MountainArray's API interface.
 // You should not implement it, or speculate about its implementation
 function MountainArray() {
 //    @param {number} index
 //    @return {number}
 	//var arr = [1,2,3,4,5,3,1];
 	//var arr = [0,1,2,4,2,1];
 	var arr = [3,5,3,2,0];
     this.get = function(index) {
         return arr[index]
     };

     //@return {number}
     this.length = function() {
        	return arr.length;
     };
 };


/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */

var findInMountainArray = function(target, arr) {
	var length = arr.length();
    //binarySearch(0,length-1,target,arr)
    var p = findPeek(0,length-1,arr);
    var res = SearchLeft(0,p,target,arr);
    if(res > -1)
    	return res;
    res = searchRight(p,length-1,target,arr);
    return res;
};

function findPeek(left,right,arr){
	if(left>right)
		return left;
	var mid = Math.floor((right+left)/2);
	if(right -left === 1){
		if(arr.get(right) > arr.get(left))
			return right;
		else return left;
	}
	var l = arr.get(mid-1);
	var r = arr.get(mid+1);
	var m = arr.get(mid);
	/*if(m === target)
		return mid;
	if(l===target)
		return left;
	if(r === target)
		return right;*/
	if(m > l && m>r)
		return mid;
	else if(l<m && m<r)
		return findPeek(mid+1,right,arr);
	else if(l>m && m>r)
		return findPeek(left,mid-1,arr);
}
function SearchLeft(left,right,target,arr){
	if(left>right)
		return -1;
	var mid = Math.floor((left+right)/2);
	var m = arr.get(mid);
	if(m === target)
		return mid;
	if(m<target){
		return SearchLeft(mid+1,right,target,arr)
	}
	else{
		return SearchLeft(left,mid-1,target,arr)
	}
}
function searchRight(left,right,target,arr){
	if(left>right)
		return -1;
	var mid = Math.floor((right+left)/2);
	var m = arr.get(mid);
	if(m === target)
		return mid;
	if(m<target){
		return searchRight(left,mid-1,target,arr);
	}
	else{
		return searchRight(mid+1,right,target,arr);
	}
}

console.log(findInMountainArray(
0,new MountainArray()

))
