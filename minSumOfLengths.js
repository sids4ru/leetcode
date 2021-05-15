/**
 *https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/
 *  1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
 * 
 * 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
Medium

737

39

Add to List

Share
Given an array of integers arr and an integer target.

You have to find two non-overlapping sub-arrays of arr each with a sum equal target. There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.

Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.

 

Example 1:

Input: arr = [3,2,2,4,3], target = 3
Output: 2
Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.
Example 2:

Input: arr = [7,3,4,7], target = 7
Output: 2
Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.
Example 3:

Input: arr = [4,3,2,6,2,3,4], target = 6
Output: -1
Explanation: We have only one sub-array of sum = 6.
Example 4:

Input: arr = [5,5,4,4,5], target = 3
Output: -1
Explanation: We cannot find a sub-array of sum = 3.
Example 5:

Input: arr = [3,1,1,1,5,1,2,1], target = 3
Output: 3
Explanation: Note that sub-arrays [1,2] and [2,1] cannot be an answer because they overlap.
 

Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 1000
1 <= target <= 108
 */

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var minSumOfLengths = function(arr, target) {
    var results = []
    var R = arr.length;
    var C = target;
    var DP = new Array(R);
    for(var i=0; i<R;i++){
        var cols = new Array(target+1)
        cols.fill(new Array());
        DP[i] = cols;
    }
    for(var i=0; i<arr.length;i++){
        var r = backtrack(i,target,[],arr,DP);
        results.push(r);
    }
    results.sort(function(a,b){
        return a.length - b.length;
    })
    if(results.length === 0)
        return -1;
    else if(results.length === 1)
    {
        return results[0].length;
    }
    else
        return results[0].length+results[1].length;
};
function backtrack(pos,target,result,arr,DP){
    if(target < 0 || pos === arr.length)
        return [];
    if(target === 0)
        return result;
    if(DP[pos][target].length>0){
        result = result.concat(DP[pos][target]);
        return result;
    }
    var res = [];
    for(var i=pos+1;i<arr.length;i++){
        var a1 = backtrack(pos+1,target-arr[i],[arr[i]],arr,DP );
        var a2 = backtrack(pos+1,target,[],arr,DP );
        if(a1.length!=0){
            if(res.length==0 || res.length>a1.length)
            res = a1;
        }
        if(a2.length!=0){
            if(res.length==0 || res.length>a2.length )
            res = a2;
        }
    }
    DP[pos][target] = res;
    result = result.concat(DP[pos][target]);
    return result; 
}
console.log(minSumOfLengths(
    [4,3,2,6,2,3,4],
    6

))