/**
 * Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 * 
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length <= 1)
        return intervals;

     intervals.sort(function(a,b){
         return a[0]-b[0];
     })
    var result = [];
    
    result.push(intervals[0]);
    for(var i=1;i<intervals.length;i++){
        var interval = intervals[i];
        var newInterval = result[result.length-1];
        if(newInterval[0]>=interval[0] && newInterval[0]<=interval[1] 
            || newInterval[1] >= interval[0] && newInterval[1] <= interval[1]
            || newInterval[0]<=interval[0] && newInterval[1] > interval[1]
            || newInterval[0]>=interval[0] && newInterval[1] < interval[1]){
               var first = newInterval[0];
               if(interval[0]<first)
                  first = interval[0];
               var last = newInterval[1];
               if(interval[1] > last)
                  last = interval[1];
               newInterval[0] = first;
               newInterval[1] = last;
         }
         else
            result.push(interval);
        
    }
    return result;
};
console.log(merge(
    [[1,4],[4,5]]
))