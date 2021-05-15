/**
 * 
 * Non-overlapping Intervals
 * 
 * 
 * https://leetcode.com/problems/non-overlapping-intervals/
 * 
 * Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

Example 1:

Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Example 2:

Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
Example 3:

Input: [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

Note:

You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
 * 
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    if(!intervals)
        return 0;
    if(intervals.length <= 1)
        return 0
    intervals.sort(function(a,b){
        return a[0] - b[0];
    })
    var result = [];
    var newInterval = intervals[0];
    var carry = false;
    result.push(newInterval);
    for(var i=1; i<intervals.length; i++){
        var interval = intervals[i]
        if(newInterval[0] < interval[0] && newInterval[1] > interval[0] 
            && newInterval[1] < interval[1]){
            result.push[newInterval[0]];
            carry = true;
        }
        else if (newInterval[0]>interval[0] && newInterval[0] < interval[1] 
            && newInterval[1] > interval[1]){
            result.push(interval)
            newInterval = interval;
            carry = true;
        }
        else if (newInterval[0]<=interval[0] && newInterval[1] >= interval[1]) {
            result.pop();
            result.push (interval);
            newInterval = interval;
            carry = true;
        } 
        else if (newInterval[0]>=interval[0] && newInterval[1] <= interval[1]){
            continue; 
        }
        else{
            result.push(interval)
            newInterval = interval;

        }    
        
    }
    return intervals.length - result.length;
};
console.log(eraseOverlapIntervals(
    
    [[1,2],[1,3],[1,4]]

));