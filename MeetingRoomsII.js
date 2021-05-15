/**
 * Meeting Rooms II
 * 
 * https://leetcode.com/problems/meeting-rooms-ii/
 * 
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1
 

Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106
 * 
 * 
 * 
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    if(!intervals)
        return 0;
    if(intervals.length === 0)
        return 0;
    if(intervals.length === 1)
        return 1;
    intervals.sort(function(a,b){
        return a[0]-b[0];
    });
    
    var count = [];
    count.push(intervals[0][1])

    var newInterval = intervals[0];
    for(var i=1;i<intervals.length;i++){
        var interval = intervals[i];
        count.sort(function(a,b){
            return b-a;
        })
        var min = count[count.length-1];
        if(interval[0]<min)
        {
            count.push(interval[1]);
        }
        else{
            count[count.length-1] = interval[1];
        }
    }
    return count.length;
};
console.log(minMeetingRooms(
    [[6,15],[13,20],[6,17]]
))