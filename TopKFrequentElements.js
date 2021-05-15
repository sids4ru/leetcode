/**
 * Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.legth <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 * 
 * 
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var maxHeap = [];
    var map = new Map();
    function element(value){
        this.val = value;
        this.count = 1;
    }
    function sort(){
        maxHeap.sort(function (a,b){
            return b.count-a.count;
        })
    }
    for(var i=0;i<nums.length;i++){
        var obj;
        if(map.has(nums[i])){
            var obj = map.get(nums[i]);
            obj.count++;
            
        }
        else {
            var obj = new element(nums[i]);
            map.set(nums[i],obj);
            
            maxHeap.push(obj);    
        }
        
        sort();
        if(maxHeap.length>k)
            maxHeap.pop();
    }
    var result = [];
    for(var i=0; i<k;i++){
        result.push(maxHeap[i].val);
    }
    return result;
};
console.log(topKFrequent(
    [3,0,1,0],
    1
))