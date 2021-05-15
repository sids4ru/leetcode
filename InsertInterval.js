/**
 * https://leetcode.com/problems/insert-interval/
 * 
 * Insert Interval
 * 
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals is sorted by intervals[i][0] in ascending order.
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
   if(intervals.length === 0)
      return [newInterval];
   var result = []; 
   var carry = false;
   if(newInterval[0] < intervals[0][0] && newInterval[1] < intervals[0][0])
      result.push(newInterval);
   
   for(var i=0; i<intervals.length; i++){
      //check for overlap
      var interval = intervals[i];
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
            if(!carry)
               result.push([first,last]);
            else{
               result[result.length-1][0] = first;
               result[result.length-1][1] = last;
            }
            carry = true;
      }
      else{
         carry = false;
         if(result.length>0)
         {
            var lastInterval = result[result.length-1]
            if(lastInterval[1] < newInterval[0] && lastInterval[1] < newInterval[0]
               && interval[0]>newInterval[0] && interval[0] > newInterval[1])
            result.push(newInterval);
         }
         result.push(intervals[i]);
      }
    }
    if(newInterval[0] > intervals[intervals.length-1][1] && newInterval[1] > intervals[intervals.length-1][1])
      result.push(newInterval);

   return result;
 }
 console.log(insert(

   [[2,6],[7,9]],
   [15,18]

 ))

